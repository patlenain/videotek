Ext.define("Videotek.store.Supports", {
	extend: "Ext.data.Store",
	model: "Videotek.model.Support",
	proxy: {
		type: 'ajax',
		format: 'json',
		url: 'api/support/list',
		reader: {
			type: 'json',
			root: 'data'
		}
	},
	sorters: [{
		property: 'libelle',
		property: 'code'
	}],
	autoLoad: true
});