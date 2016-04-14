<template>

    <div class="uk-form-row">
        <label for="form-link-blog" class="uk-form-label">{{ 'View' | trans }}</label>
        <div class="uk-form-controls">
            <select id="form-link-blog" class="uk-width-1-1" v-model="link">
                <option value="@blog">{{ 'Posts View' | trans }}</option>
                <optgroup :label="'Posts' | trans">
                    <option v-for="p in posts" :value="p | link">{{ p.title }}</option>
                </optgroup>
            </select>
        </div>
    </div>

</template>

<script>

    module.exports = {

        link: {
            label: 'Blog'
        },

        props: ['link'],

        data: function () {
            return {
                posts: []
            }
        },

        created: function () {
            // TODO: Implement pagination or search
            this.$http.get('api/blog/post', {filter: {limit: 1000}}).then(function (res) {
                this.$set('posts', res.data.posts);
            });
        },

        ready: function() {
            this.link = '@blog';
        },

        filters: {

            link: function (post) {
                return '@blog/id?id='+post.id;
            }

        }

    };

    window.Links.components['link-blog'] = module.exports;

</script>
