<?php $view->style('comment-index', 'blog:assets/css/blog.admin.css') ?>
<?php $view->script('comment-index', 'blog:app/bundle/comment-index.js', 'vue') ?>

<div id="comments" class="uk-form" data-uk-observe v-cloak>

    <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
        <div class="uk-flex uk-flex-middle uk-flex-wrap" data-uk-margin>

            <h2 class="uk-margin-remove" v-if="!selected.length">{{ '{0} %count% Comments|{1} %count% Comment|]1,Inf[ %count% Comments' | transChoice count {count:count} }}</h2>

            <template v-else>
                <h2 class="uk-margin-remove">{{ '{1} %count% Comment selected|]1,Inf[ %count% Comments selected' | transChoice selected.length {count:selected.length} }}</h2>

                <div class="uk-margin-left">
                    <ul class="uk-subnav pk-subnav-icon">
                        <li><a class="pk-icon-check pk-icon-hover" :title="'Approve' | trans" data-uk-tooltip="{delay: 500}" @click="status(1)"></a></li>
                        <li><a class="pk-icon-block pk-icon-hover" :title="'Unapprove' | trans" data-uk-tooltip="{delay: 500}" @click="status(0)"></a></li>
                        <li><a class="pk-icon-spam pk-icon-hover" :title="'Mark as spam' | trans" data-uk-tooltip="{delay: 500}" @click="status(2)"></a></li>
                        <li><a class="pk-icon-delete pk-icon-hover" :title="'Delete' | trans" data-uk-tooltip="{delay: 500}" @click.prevent="remove"></a></li>
                    </ul>
                </div>
            </template>

            <div class="pk-search">
                <div class="uk-search">
                    <input class="uk-search-field" type="text" v-model="config.filter.search" debounce="300">
                </div>
            </div>

        </div>
    </div>

    <div class="uk-overflow-container">

        <table class="uk-table uk-table-hover pk-table-large">
            <thead>
                <tr>
                    <th class="pk-table-width-minimum"><input type="checkbox" v-check-all:selected.literal="input[name=id]" number></th>
                    <th class="pk-table-min-width-300" colspan="2">{{ 'Comment' | trans }}</th>
                    <th class="pk-table-width-100 uk-text-center">
                        <input-filter :title="$trans('Status')" :value.sync="config.filter.status" :options="statusOptions"></input-filter>
                    </th>
                    <th class="pk-table-width-200" :class="{'pk-filter': config.post, 'uk-active': config.post}">
                        <span v-if="!config.post">{{ 'Post' | trans }}</span>
                        <span v-else>{{ config.post.title }}</span>
                    </th>
                </tr>
            </thead>
            <tbody >

            <template v-for="comment in comments | orderBy 'created' -1">
                <partial name="default-row" v-if="editComment.id !== comment.id"></partial>
                <partial name="edit-row" v-else></partial>
            </template>

            </tbody>
        </table>
    </div>

    <h3 class="uk-h1 uk-text-muted uk-text-center" v-show="comments && !comments.length">{{ 'No comments found.' | trans }}</h3>

    <v-pagination :page.sync="config.page" :pages="pages" v-show="pages > 1 || page > 0"></v-pagination>

</div>

<script id="default-row" type="text/template">

    <tr class="check-item" :class="{'uk-active': active(comment)}" v-for="post in posts | filterBy comment.post_id in 'id'">

        <td class="pk-blog-comments-padding"><input type="checkbox" name="id" :value="comment.id"></td>
        <td class="pk-table-width-minimum">
            <img class="uk-img-preserve uk-border-circle" width="40" height="40" :alt="comment.author" v-gravatar="comment.email">
        </td>
        <td class="uk-visible-hover">

            <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
                <div>
                    <a :href="$url.route('admin/user/edit', { id: comment.user_id })" v-if="comment.user_id!=0">{{ comment.author }}</a>
                    <span v-else>{{ comment.author }}</span>
                    <br><a class="uk-link-muted" :href="'mailto:'+comment.email">{{ comment.email }}</a>
                </div>
                <div class="uk-flex uk-flex-middle">
                    <ul class="uk-subnav pk-subnav-icon uk-invisible uk-margin-right">
                        <li><a class="pk-icon-edit pk-icon-hover" :title="'Edit' | trans" data-uk-tooltip="{delay: 500}" @click.prevent="edit(comment)"></a></li>
                        <li><a class="pk-icon-reply pk-icon-hover" :title="'Reply' | trans" data-uk-tooltip="{delay: 500}" @click.prevent="reply(comment)"></a></li>
                    </ul>

                    <a class="uk-link-muted" v-if="post.accessible" :href="$url.route(post.url.substr(1))+'#comment-'+comment.id">{{ comment.created | relativeDate }}</a>
                    <span v-else>{{ comment.created | relativeDate }}</span>
                </div>
            </div>

            <div>{{{ comment.content }}}</div>

            <div class="uk-margin-top" v-if="replyComment.parent_id === comment.id">
                <form class="uk-form" v-validator="replyform" @submit.prevent="submit | valid">

                    <div class="uk-form-row">
                        <textarea class="uk-width-1-1" name="content" rows="10" v-model="replyComment.content" v-validate:required></textarea>

                        <p class="uk-form-help-block uk-text-danger" v-show="replyform.content.invalid">{{ 'Content cannot be blank.' | trans }}</p>
                    </div>

                    <p>
                        <button class="uk-button uk-button-primary" type="submit">{{ 'Reply' | trans }}</button>
                        <button class="uk-button" @click.prevent="cancel">{{ 'Cancel' | trans }}</button>
                    </p>

                </form>
            </div>

        </td>
        <td class="pk-blog-comments-padding uk-text-center">
            <a href="#" :title="getStatusText(comment)" :class="{'pk-icon-circle-success': comment.status == 1, 'pk-icon-circle-warning': comment.status == 0, 'pk-icon-circle-danger':  comment.status == 2}" @click="toggleStatus(comment)">
            </a>
        </td>
        <td class="pk-blog-comments-padding">
            <a :href="$url.route('admin/blog/post/edit', { id: post.id })">{{ post.title }}</a>

            <p>
                <a class="uk-text-nowrap" :class="{'pk-link-icon': !post.comments_pending}" :href="$url.route('admin/blog/comment', { post: post.id })" :title="'{0} No pending|{1} One pending|]1,Inf[ %comments_pending% pending' | transChoice post.comments_pending post"><i class="pk-icon-comment" :class="{'pk-icon-primary': post.comments_pending}"></i> {{ post.comment_count }}</a>
            </p>
        </td>

    </tr>

</script>

<script id="edit-row" type="text/template">

    <tr>

        <td></td>
        <td class="pk-table-width-minimum">
            <img class="uk-img-preserve uk-border-circle" width="40" height="40" :alt="editComment.author" v-gravatar="editComment.email">
        </td>
        <td colspan="3">
            <form class="uk-form uk-form-stacked" v-validator="editform" @submit.prevent="submit | valid">

                <div class="uk-grid uk-grid-medium uk-grid-width-medium-1-3" data-uk-margin="{cls:'uk-margin-top'}">
                    <div>
                        <label for="form-author" class="uk-form-label">{{ 'Name' | trans }}</label>
                        <input id="form-author" class="uk-width-1-1" name="author" type="text" v-model="editComment.author" v-validate:required>

                        <p class="uk-form-help-block uk-text-danger" v-show="editform.author.invalid">{{ 'Author cannot be blank.' | trans }}</p>
                    </div>
                    <div>
                        <label for="form-email" class="uk-form-label">{{ 'E-mail' | trans }}</label>
                        <input id="form-email" class="uk-width-1-1" name="email" type="text" v-model="editComment.email" v-validate:email lazy>

                        <p class="uk-form-help-block uk-text-danger" v-show="editform.email.invalid">{{ 'Field must be a valid email address.' | trans }}</p>
                    </div>
                    <div>
                        <label for="form-status" class="uk-form-label">{{ 'Status' | trans }}</label>
                        <select id="form-status" class="uk-width-1-1" v-model="editComment.status">
                            <option v-for="status in statuses" :value="$key">{{ status }}</option>
                        </select>
                    </div>
                </div>

                <div class="uk-grid uk-grid-medium uk-grid-width-1-1">
                    <div>
                        <textarea class="uk-width-1-1" name="content" rows="10" v-model="editComment.content" v-validate:required></textarea>

                        <p class="uk-form-help-block uk-text-danger" v-show="editform.content.invalid">{{ 'Content cannot be blank.' | trans }}</p>
                    </div>
                </div>

                <p>
                    <button class="uk-button uk-button-primary" type="submit">{{ 'Save' | trans }}</button>
                    <button class="uk-button" @click.prevent="cancel">{{ 'Cancel' | trans }}</button>
                </p>

            </form>
        </td>

    </tr>

</script>
