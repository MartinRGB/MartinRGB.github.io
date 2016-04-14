module.exports = {

    name: 'comment',

    el: '#comments',

    data: function () {
        return _.merge({
            posts: [],
            config: {
                filter: this.$session.get('comments.filter', {})
            },
            comments: false,
            pages: 0,
            count: '',
            selected: [],
            user: window.$pagekit.user,
            replyComment: {},
            editComment: {}
        }, window.$data);
    },

    ready: function () {

        this.Comments = this.$resource('api/blog/comment{/id}');
        this.load();

        UIkit.init(this.$el);
    },

    watch: {

        'config.page': function (page, old) {
            if (page == old) {
                return;
            }

            this.load();
        },

        'config.filter': {
            handler: function (filter) {
                this.load();
                this.$session.set('comments.filter', filter);
            },
            deep: true
        }

    },

    computed: {

        statusOptions: function () {

            var options = _.map(this.$data.statuses, function (status, id) {
                return {text: status, value: id};
            });

            return [{label: this.$trans('Filter by'), options: options}];
        }

    },

    methods: {

        active: function (comment) {
            return this.selected.indexOf(comment.id) != -1;
        },

        submit: function () {
            this.save(this.editComment.id ? this.editComment : this.replyComment);
        },

        save: function (comment) {
            return this.Comments.save({id: comment.id}, {comment: comment}).then(function () {
                this.load();
                this.$notify('Comment saved.');
            }, function (res) {
                this.$notify(res.data, 'danger');
            });
        },

        status: function (status) {

            var comments = this.getSelected();

            comments.forEach(function (comment) {
                comment.status = status;
            });

            this.Comments.save({id: 'bulk'}, {comments: comments}).then(function () {
                this.load();
                this.$notify('Comments saved.');
            });
        },

        remove: function () {
            this.Comments.delete({id: 'bulk'}, {ids: this.selected}).then(function () {
                this.load();
                this.$notify('Comments deleted.');
            });
        },

        load: function (page) {

            page = page !== undefined ? page : this.$get('config.page');

            this.cancel();

            this.Comments.query({filter: this.config.filter, post: this.config.post && this.config.post.id || 0, page: page, limit: this.config.limit}).then(function (res) {

                var data = res.data;

                this.$set('posts', data.posts);
                this.$set('comments', data.comments);
                this.$set('pages', data.pages);
                this.$set('count', data.count);
                this.$set('config.page', page);
                this.$set('selected', []);
            });
        },

        getSelected: function () {
            var vm = this;
            return this.comments.filter(function (comment) {
                return vm.selected.indexOf(comment.id) !== -1;
            });
        },

        getStatusText: function (comment) {
            return this.statuses[comment.status];
        },

        cancel: function () {
            this.$set('replyComment', {});
            this.$set('editComment', {});
        },

        reply: function (comment) {
            this.cancel();
            this.$set('replyComment', {parent_id: comment.id, post_id: comment.post_id, author: this.user.name, email: this.user.email});
        },

        edit: function (comment) {
            this.cancel();
            this.$set('editComment', _.merge({}, comment));
        },

        toggleStatus: function (comment) {
            comment.status = comment.status === 1 ? 0 : 1;
            this.save(comment);
        }

    },

    partials: {
        'default-row': '#default-row',
        'edit-row': '#edit-row'
    }

};

Vue.ready(module.exports);
