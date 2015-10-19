FlowRouter.route('/', {
    action: function() {
        Session.set('pageId');
    }
});
FlowRouter.route('/page/:pageId', {
    name: 'main',
    action: function(params) {
        Session.set('pageId', params.pageId);
    }
});

