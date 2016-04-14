module.exports = {

    el: '#settings',

    data: function () {
        return window.$data;
    },

    methods: {

        save: function () {
            this.$http.post('admin/system/settings/config', { name: 'blog', config: this.config }).then(function () {
                        this.$notify('Settings saved.');
                    }, function (res) {
                        this.$notify(res.data, 'danger');
                    }
                );
        }

    }

};

Vue.ready(module.exports);
