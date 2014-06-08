Ext.define("Videotek.view.MenuBar", {
	extend: "Ext.toolbar.Toolbar",
	alias: "widget.menuBar",
	items: [{
		itemId: 'filmsList',
		text: "Liste des films",
		tooltip: "Liste des films"
	}, {
		itemId: 'randomFilm',
		text: "Au hasard",
		tooltip: "Un film au hasard"
	}, {
		itemId: 'lastFilms',
		text: "Derniers films",
		tooltip: "Derniers films enregistrés"
	},
	'-',
	{
		itemId: 'supportsList',
		text: "Supports",
		tooltip: "Gestion des supports"
	}, {
		itemId: 'typesList',
		text: "Types",
		tooltip: "Gestion des types"
	}, {
		itemId: 'genresList',
		text: "Genres",
		tooltip: "Gestion des genres"
	}]
});