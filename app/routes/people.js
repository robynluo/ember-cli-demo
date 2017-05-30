import Ember from 'ember';

const {
    get,
    inject
} = Ember;

export default Ember.Route.extend({
    test: inject.service(),

    beforeModel(...args) {
        this._super(...args);

        const test = get(this, 'test');
        console.log("people.beforeModel");
        console.log(test.add(11111, 22222));
    },
    model() {

        return ["aaa", "bbb", "ccc"];
    }
});