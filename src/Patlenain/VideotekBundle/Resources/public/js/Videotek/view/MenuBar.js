Ext.define("Videotek.view.MenuBar", {
	extend: "Ext.toolbar.Toolbar",
	alias: "widget.menuBar",
	items: [{
		itemId: 'filmsList',
		text: "Liste des films",
		tooltip: "Liste des films",
		toggleGroup: 'menu'
	}, {
		itemId: 'randomFilm',
		text: "Au hasard",
		tooltip: "Un film au hasard",
		toggleGroup: 'menu'
	}, {
		itemId: 'lastFilms',
		text: "Derniers films",
		tooltip: "Derniers films enregistrés",
		toggleGroup: 'menu'
	},
	'-',
	{
		itemId: 'supportsList',
		text: "Supports",
		tooltip: "Gestion des supports",
		toggleGroup: 'menu'
	}, {
		itemId: 'typesList',
		text: "Types",
		tooltip: "Gestion des types",
		toggleGroup: 'menu'
	}, {
		itemId: 'genresList',
		text: "Genres",
		tooltip: "Gestion des genres",
		toggleGroup: 'menu'
	}]
});