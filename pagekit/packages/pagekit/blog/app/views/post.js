Vue.ready(function () {
    jQuery('time').each(function() {
        new Vue({}).$mount(this);
    });
});
