<?php $view->script('comments', 'blog:app/bundle/comments.js', 'vue') ?>

<div id="comments" v-cloak>

    <div class="uk-margin-large-top" v-show="config.enabled || comments.length">

        <template v-if="comments.length">

            <h2 class="uk-h4">{{ 'Comments (%count%)' | trans {count:count} }}</h2>

            <ul class="uk-comment-list">
                <comment v-for="comment in tree[0]" :comment="comment"></comment>
            </ul>

        </template>

        <div class="uk-alert" v-for="message in messages">{{ message }}</div>

        <div v-el:reply v-if="config.enabled"></div>

        <p v-else>{{ 'Comments are closed.' | trans }}</p>

    </div>

</div>

<script id="comments-item" type="text/template">

    <li :id="'comment-'+comment.id">

        <article class="uk-comment" :class="{'uk-comment-primary': comment.special}">

            <header class="uk-comment-header">

                <img class="uk-comment-avatar" width="40" height="40" :alt="comment.author" v-gravatar="comment.email">

                <h3 class="uk-comment-title">{{ comment.author }}</h3>

                <p class="uk-comment-meta" v-if="comment.status">
                    <time :datetime="comment.created">{{ comment.created | relativeDate }}</time>
                    | <a class="uk-link-muted" :href="permalink">#</a>
                </p>

                <p class="uk-comment-meta" v-else>{{ 'The comment is awaiting approval.' }}</p>

            </header>

            <div class="uk-comment-body">

                <p>{{{ comment.content }}}</p>

                <p v-if="showReplyButton"><a href="#" @click.prevent="replyTo">{{ 'Reply' | trans }}</a></p>

            </div>

            <div class="uk-alert" v-for="message in comment.messages">{{ message }}</div>

            <div v-el:reply v-if="config.enabled"></div>

        </article>

        <ul v-if="tree[comment.id] && depth < config.max_depth">
            <comment v-for="comment in tree[comment.id]" :comment="comment"></comment>
        </ul>

    </li>

    <comment v-for="comment in remainder" :comment="comment"></comment>

</script>

<script id="comments-reply" type="text/template">

    <div class="uk-margin-large-top js-comment-reply">

        <h2 class="uk-h4">{{ 'Leave a comment' | trans }}</h2>

        <div class="uk-alert uk-alert-danger" v-show="error">{{ error }}</div>

        <form class="uk-form uk-form-stacked" v-if="user.canComment" v-validator="form" @submit.prevent="save | valid">

            <p v-if="user.isAuthenticated">{{ 'Logged in as %name%' | trans {name:user.name} }}</p>

            <template v-else>

                <div class="uk-form-row">
                    <label for="form-name" class="uk-form-label">{{ 'Name' | trans }}</label>
                    <div class="uk-form-controls">
                        <input id="form-name" class="uk-form-width-large" type="text" name="author" v-model="author" v-validate:required>

                        <p class="uk-form-help-block uk-text-danger" v-show="form.author.invalid">{{ 'Name cannot be blank.' | trans }}</p>
                    </div>
                </div>

                <div class="uk-form-row">
                    <label for="form-email" class="uk-form-label">{{ 'Email' | trans }}</label>
                    <div class="uk-form-controls">
                        <input id="form-email" class="uk-form-width-large" type="email" name="email" v-model="email" v-validate:email>

                        <p class="uk-form-help-block uk-text-danger" v-show="form.email.invalid">{{ 'Email invalid.' | trans }}</p>
                    </div>
                </div>

            </template>

            <div class="uk-form-row">
                <label for="form-comment" class="uk-form-label">{{ 'Comment' | trans }}</label>
                <div class="uk-form-controls">
                    <textarea id="form-comment" class="uk-form-width-large" name="content" rows="10" v-model="content" v-validate:required></textarea>

                    <p class="uk-form-help-block uk-text-danger" v-show="form.content.invalid">{{ 'Comment cannot be blank.' | trans }}</p>
                </div>
            </div>

            <p>
                <button class="uk-button uk-button-primary" type="submit" accesskey="s">{{ 'Submit' | trans }}</button>
                <button class="uk-button" accesskey="c" v-if="parent" @click.prevent="cancel">{{ 'Cancel' | trans }}</button>
            </p>

        </form>

        <template v-else>
            <p v-show="user.isAuthenticated">{{ 'You are not allowed to post comments.' | trans }}</p>
            <p v-else><a :href="login">{{ 'Please login to leave a comment.' | trans }}<a></p>
        </template>

    </div>

</script>
