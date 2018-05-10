import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model() {
    return  Ember.$.getJSON('http://www.mikesfishtank.com/api/tanks.php');
  },
  
  actions: {
    willTransition() {
      this.controllerFor('application').set('enableTankSelector', false);
    }, 
    refreshCurrentRoute(){
      this.refresh();
    },
  }
});
