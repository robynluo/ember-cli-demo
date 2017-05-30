import Ember from 'ember';
import RememberObjMixin from 'my-ember-project/mixins/remember-obj';
import { module, test } from 'qunit';

module('Unit | Mixin | remember obj');

// Replace this with your real tests.
test('it works', function(assert) {
  let RememberObjObject = Ember.Object.extend(RememberObjMixin);
  let subject = RememberObjObject.create();
  assert.ok(subject);
});
