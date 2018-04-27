import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(transition) {
    let that = this;
    return this.get('session').fetch().catch(function() {
      that.transitionTo('login');
    });
  },
});