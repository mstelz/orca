import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('statistics');
  this.route('video');
  this.route('admin', function() {
    this.route('notifications');
    this.route('parameters');
    this.route('power');
  });
  this.route('parameters');
  this.route('stock');
  this.route('login');
});

export default Router;
