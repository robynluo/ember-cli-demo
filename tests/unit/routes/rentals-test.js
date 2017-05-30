import { moduleFor, test } from 'ember-qunit';

moduleFor('route:rentals', 'Unit | Route | rentals', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
});

test('it exists', function(assert) {
    visit('/');
    andThen(function() {
        assert.equal(currentURL(), '/rentals', 'should redirect automatically');
    });

    let route = this.subject();
    assert.ok(route);
});