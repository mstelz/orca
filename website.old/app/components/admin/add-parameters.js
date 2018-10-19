import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  model: undefined,
  actions: {
    submit() {
      let formData = new FormData(Ember.$('form')[0]);

      Ember.$.ajax({
        url: "http://mikesfishtank.com/api/parameters.php",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
      }).then(function(resp){
        console.log(resp);
        // handle your server response here
      }).catch(function(error){
        console.log(error);
        // handle errors here
      });      
    }
  }
});
