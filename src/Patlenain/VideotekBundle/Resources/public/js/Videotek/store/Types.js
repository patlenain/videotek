Ext.define("Videotek.store.Types", {
	extend: "Ext.data.Store",
	model: "Videotek.model.Type",
	proxy: {
		type: 'ajax',
		format: 'json',
		url: 'api/type/list',
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