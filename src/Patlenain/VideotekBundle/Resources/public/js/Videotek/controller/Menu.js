Ext.define('Videotek.controller.Menu', {
	extend: 'Ext.app.Controller',
	views: [ 'MenuBar' ],

	refs: [{
		ref: 'mainPanel',
		selector: '#main'
	}, {
		ref: 'supportsList',
		selector: 'supportsList'
	}, {
		ref: 'typesList',
		selector: 'typesList'
	}, {
		ref: 'genresList',
		selector: 'genresList'
	}],

	init: function() {
		this.control({
			'menuBar button[itemId=filmsList]': {
				click: this.listAllFilms
			},
			'menuBar button[itemId=randomFilm]': {
				click: this.getRandomFilm
			},
			'menuBar button[itemId=lastFilms]': {
				click: this.listLastFilms
			},
			'menuBar button[itemId=supportsList]': {
				click: this.listSupports
			},
			'menuBar button[itemId=typesList]': {
				click: this.listTypes
			},
			'menuBar button[itemId=genresList]': {
				click: this.listGenres
			},
			'menuBar button': {
				click: this.logClick
			}
		});
	},

	logClick: function(button) {
		if (console) {
			console.log(button.itemId);
		}
	},

	listAllFilms: function(button) {
		
	},

	getRandomFilm: function(button) {
		
	},

	listLastFilms: function(button) {
		
	},

	listSupports: function(button) {
		this.getMainPanel().getLayout().setActiveItem(this.getSupportsList());
	},

	listTypes: function(button) {
		this.getMainPanel().getLayout().setActiveItem(this.getTypesList());
	},

	listGenres: function(button) {
		this.getMainPanel().getLayout().setActiveItem(this.getGenresList());
	}
});