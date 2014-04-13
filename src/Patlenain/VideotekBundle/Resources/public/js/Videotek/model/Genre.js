Ext.define("Videotek.model.Genre", {
	extend: "Ext.data.Model",
	fields: [{
		name: "id", type: "long"
	}, {
		name: "code", type: "string"
	}, {
		name: "libelle", type: "string"
	}],
	validations: [{
		type: 'presence', field: 'code'
	}, {
		type: 'presence', field: 'libelle'
	}, {
		type: 'length', field: 'code', min: 3, max: 15
	}, {
		type: 'length', field: 'libelle', min: 3, max: 255
	}]
});