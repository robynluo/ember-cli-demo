import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {

        if (payload.data && payload.data.length > 0) {
            payload.data.map((item, index) => {
                if (item.attributes['propertyType']) {
                    const value = item.attributes['propertyType'];

                    delete item.attributes['propertyType'];
                    item.attributes['property-type'] = value;
                }
            });
        }

        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});