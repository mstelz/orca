import Component from '@ember/component';
import Ember from 'ember';
import tankSelect from '../mixins/tank-select';

export default Component.extend(tankSelect, {
  currentTankName: Ember.computed('tankService.currentTank', function(){
      return this.get('tanks').objectAt(this.get('tankService').get('currentTank')).name;
  }),
  tanks: undefined,
  actions: {
    switch(direction) {
      let currentTank = this.get('tankService').get('currentTank');
      currentTank += direction;

      if(currentTank >= this.get('tanks').length){
        currentTank = 0;
      } else if(currentTank < 0) {
        currentTank = this.get('tanks').length-1;
      }
      this.get('tankService').set('currentTank', currentTank);
      let refresh = this.get('refresh');
      debugger;

    //   Ember.$('.box1, .box2, .box3').on('click', function(e) {
    //     var isArrowRight = Ember.$(e.target).is('.right');
    //     var isLeftArrow  = Ember.$(e.target).is('.left');
    //     if (!(isArrowRight || isLeftArrow)) {
    //         return; // do nothing if you don't click the left/right arrow...
    //     }
    //     var nextEle = (isArrowRight) ? Ember.$(this).next('[class^=box]') : Ember.$(this).prev('[class^=box]');
    //     if (nextEle.length == 0) {
    //         nextEle = (isArrowRight) ? Ember.$('.box1') : Ember.$('.box3');
    //     }
    //     Ember.$('.box1:visible, .box2:visible, .box3:visible').fadeOut('fast', function(){
    //         nextEle.fadeIn('slow');
    //     });
    // });
    }
  }
});
