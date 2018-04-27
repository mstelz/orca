import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(transition) {
    return this.get('session').fetch().catch(function() {
      console.log('error');
    });
  },
  actions: {  
    signIn: function(provider) {
      console.log($('#email').val())
      this.get('session').open('firebase', {
        provider: provider,
        email: $('#email').val(),
        password: $('#password').val(),
      }).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get('session').close();
    },
  }
});
