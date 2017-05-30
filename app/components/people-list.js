import Ember from 'ember';

const {
    get,
    set,
    inject
} = Ember;

export default Ember.Component.extend({
    fName: null,
    lName: null,

    fullName: Ember.computed('fName', 'lName', function() {
        return get(this, 'fName') + ", " + get(this, 'lName');
    }),

    watchFullName: Ember.observer('fName', 'lName', function() {
        // console.log(get(this, 'fullName'));
        // console.log(get(this, 'fName'));
        console.log('这个执行了几次呢');
        Ember.run.once(this, 'processFullName');
    }),

    aliasFullName: Ember.computed.alias('fullName'),
    // aliasFullName: Ember.computed.oneWay('fullName'),

    processFullName: function() {
        console.log(get(this, 'fullName'), "*********");
    },

    test: inject.service(),

    init() {
        this._super(...arguments);
        // console.log("aaa");

        const test = get(this, 'test');
        //console.log(test.add(1, 2));

        // console.log(get(this, 'fullName'));

    },

    actions: {
        print(item) {
            //console.log(item);

            set(this, 'fName', '罗');
            set(this, 'lName', '斌斌');

            set(this, 'aliasFullName', 'robyn');

            // console.log(get(this, 'fullName'));
        },
        print1(item, event) {
            //console.log(item, event);
            set(this, 'fName', '斌斌');
            set(this, 'lName', '罗');

            set(this, 'aliasFullName', 'randy');

            // console.log(get(this, 'fullName'));
        }
    }
});