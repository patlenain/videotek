Ext.define("Videotek.store.Supports", {
	extend: "Ext.data.Store",
	model: "Videotek.model.Support",
	proxy: {
		type: 'rest',
		url: 'api/supports',
		format: 'json',
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