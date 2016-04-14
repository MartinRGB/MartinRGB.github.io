module.exports = {

    el: '#comments',

    data: function () {
        return _.extend({
            post: {},
            tree: {},
            comments: [],
            messages: [],
            count: 0,
            replyForm: false
        }, window.$comments);
    },

    created: function () {
        this.load();
    },

    methods: {

        load: function () {

            return this.$http.get('api/blog/comment{/id}', {post: this.config.post}).then(function (res) {
                var data = res.data;

                this.$set('comments', data.comments);
                this.$set('tree', _.groupBy(data.comments, 'parent_id'));
                this.$set('post', data.posts[0]);
                this.$set('count', data.count);

                this.reply();
            });
        },

        reply: function (parent) {

            parent = parent || this;

            if (this.replyForm) {
                this.replyForm.$destroy(true);
            }

            this.replyForm = new this.$options.components['reply']({
                data: {config: this.config, parent: parent.comment && parent.comment.id || 0},
                parent: parent
            }).$mount().$appendTo(parent.$els.reply);

        }

    },

    components: {

        comment: {

            name: 'Comment',
            props: ['comment'],
            template: '#comments-item',

            data: function () {
                return {
                    config: this.$root.config,
                    tree: this.$root.tree
                };
            },

            computed: {

                depth: function () {

                    var depth = 1, parent = this.$parent;

                    while (parent) {
                        if (parent.$options.name === 'Comment') {
                            depth++;
                        }
                        parent = parent.$parent;
                    }

                    return depth;
                },

                showReplyButton: function () {
                    return this.config.enabled && !this.isLeaf && this.$root.replyForm.$parent !== this;
                },

                remainder: function () {
                    return this.isLeaf && this.tree[this.comment.id] || [];
                },

                isLeaf: function () {
                    return this.depth >= this.config.max_depth;
                },

                permalink: function () {
                    return '#comment-' + this.comment.id;
                }

            },

            methods: {

                replyTo: function () {
                    this.$root.reply(this);
                }

            }

        },

        reply: {

            template: '#comments-reply',

            data: function () {
                return {
                    author: '',
                    email: '',
                    content: '',
                    error: false,
                    form: false
                };
            },

            computed: {

                user: function () {
                    return this.config.user;
                },

                login: function () {
                    return this.$url('user/login', {redirect: window.location.href});
                }

            },

            methods: {

                save: function () {

                    var comment = {
                        parent_id: this.parent,
                        post_id: this.config.post,
                        content: this.content
                    };

                    if (!this.user.isAuthenticated) {
                        comment.author = this.author;
                        comment.email = this.email;
                    }

                    this.$set('error', false);

                    this.$resource('api/blog/comment{/id}').save({id: 0}, {comment: comment}).then(function (res) {

                        var data = res.data;

                        if (!this.user.skipApproval) {

                            this.$root.messages.push(this.$trans('Thank you! Your comment needs approval before showing up.'));

                        } else {

                            this.$root.load().then(function () {
                                window.location.hash = 'comment-' + data.comment.id;
                            });
                        }

                        this.cancel()

                    }, function () {

                        // TODO better error messages
                        this.$set('error', this.$trans('Unable to comment. Please try again later.'));
                    });
                },

                cancel: function () {
                    this.$root.reply();
                }

            }

        }

    }

};

Vue.ready(module.exports);
