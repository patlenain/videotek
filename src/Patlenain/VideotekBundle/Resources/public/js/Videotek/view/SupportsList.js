Ext.define("Videotek.view.SupportsList", {
	extend: "Ext.grid.Panel",
	alias: "widget.supportsList",
	store: "Supports",
	title: "Liste des supports",
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
		text: "Nouveau support",
		action: "create"
	}, {
		text: "Supprimer support",
		action: "delete"
	}]
});