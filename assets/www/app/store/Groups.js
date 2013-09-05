Ext.define('Oreilly.store.Groups', {
	extend: 'Ext.data.Store',
	requires: 'Ext.DateExtras',
    config: {
        model: 'Oreilly.model.Group',

        grouper: {
//        	groupFn: function(record) {
//        		return record.get('last_name').substr(0,1);
//        	},
//        	sortProperty: 'last_name'
        }
    }
});
