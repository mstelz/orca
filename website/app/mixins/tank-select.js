import Mixin from '@ember/object/mixin';
import Ember from 'ember';

export default Mixin.create({
  tankService: Ember.inject.service('current-tank'),

  afterModel() {
    this.controllerFor('application').set('enableTankSelector', true)
  },
});
