Ext.define("Videotek.view.SupportsList", {
	extend: "Ext.grid.Panel",
	alias: "widget.supportsList",
	store: "Supports",
	columns: [{
		text: "Code",
		dataIndex: "code"
	}, {
		text: "Libellé",
		dataIndex: "libelle"
	}],
	buttons: [{
		text: 'Nouveau support',
		action: 'create'
	}]
});