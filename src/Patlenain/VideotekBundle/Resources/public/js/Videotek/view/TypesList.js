Ext.define("Videotek.view.TypesList", {
	extend: "Ext.grid.Panel",
	alias: "widget.typesList",
	store: "Types",
	columns: [{
		text: "Code",
		dataIndex: "code"
	}, {
		text: "Libellé",
		dataIndex: "libelle",
		flex: 1
	}],
	selType: "rowmodel",
	selMode: "SINGLE",
	buttons: [{
		text: "Nouveau type",
		action: "create"
	}, {
		text: "Supprimer type",
		action: "delete"
	}]
});