import EmberObject from '@ember/object';
import TankSelectMixin from 'opex/mixins/tank-select';
import { module, test } from 'qunit';

module('Unit | Mixin | tank select');

// Replace this with your real tests.
test('it works', function(assert) {
  let TankSelectObject = EmberObject.extend(TankSelectMixin);
  let subject = TankSelectObject.create();
  assert.ok(subject);
});
