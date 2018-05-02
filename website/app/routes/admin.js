import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(transition) {
    let that = this;
    return this.get('session').fetch().catch(function() {
      let appController = that.controllerFor('application');
      appController.set('previousTransition', transition);
      that.transitionTo('login');
    });
  },
});