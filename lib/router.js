Router.route('/', {
  name: 'index',
  onAfterAction: function() {
    var current = Router.current();
    GAnalytics.pageview(current.url);
  }
});