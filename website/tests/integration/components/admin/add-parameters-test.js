import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin/add-parameters', 'Integration | Component | admin/add parameters', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin/add-parameters}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin/add-parameters}}
      template block text
    {{/admin/add-parameters}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
