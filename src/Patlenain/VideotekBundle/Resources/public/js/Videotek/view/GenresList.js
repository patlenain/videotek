Ext.define("Videotek.view.GenresList", {
	extend: "Ext.grid.Panel",
	alias: "widget.genresList",
	store: "Genres",
	title: "Liste des genres",
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
		text: "Nouveau genre",
		action: "create"
	}, {
		text: "Supprimer genre",
		action: "delete"
	}]
});