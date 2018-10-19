import Controller from '@ember/controller';

export default Controller.extend({
    previousTransistion: null,
    isInAdmin: function() {
        var currentPath = this.get('currentPath');
        // if the first hierarchy is admin, so is a admin route
        return currentPath.split('.')[0] === 'admin';        
    }.property('currentPath')
});
