import Ember from 'ember';

export default Ember.Controller.extend({
    name: "Robyn",
    age: 25,
    isShow: true,
    actions: {
        change() {
            this.toggleProperty('isShow');
        }
    }
});