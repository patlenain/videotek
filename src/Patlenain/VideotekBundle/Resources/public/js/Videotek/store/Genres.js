Ext.define("Videotek.store.Genres", {
	extend: "Ext.data.Store",
	model: "Videotek.model.Genre",
	proxy: {
		type: 'ajax',
		format: 'json',
		url: 'api/genre/list',
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