import Ember from 'ember';

export default Ember.Service.extend({
    add(a, b) {
        return a + b;
    },
    mul(a, b) {
        return a - b;
    }
});