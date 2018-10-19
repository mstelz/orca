import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  beforeModel(transition) {
    return this.get('session').fetch().catch(function() {
      console.log('error');
    });
  },
  actions: {  
    signIn: function(provider) {
      var route = this;
      this.get('session').open('firebase', {
        provider: provider,
        email: Ember.$('#email').val(),
        password: Ember.$('#password').val(),
      }).then(function(data) {
        route.transitionTo('admin.parameters')
        // let appController = that.controllerFor('application');
        // let previousTransition = appController.get('previousTransition'); 
        // if (previousTransition) {
        //   console.log(previousTransition);
        //   appController.set('previousTransition', null);
        //   that.transitionTo(previousTransition.targetName);
        // }
        // console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get('session').close();
    },
  }
});
