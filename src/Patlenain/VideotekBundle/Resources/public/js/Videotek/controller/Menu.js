Ext.define('Videotek.controller.Menu', {
	extend: 'Ext.app.Controller',
	views: [ 'MenuBar', 'SupportsList' ],

	refs: [{
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
				toggle: this.listSupports
			},
			'menuBar button[itemId=typesList]': {
				toggle: this.listTypes
			},
			'menuBar button[itemId=genresList]': {
				toggle: this.listGenres
			},
			'menuBar button': {
				toggle: this.logToggle
			}
		});
	},

	logToggle: function(button, pressed) {
		if (console) {
			console.log("Pressed : " + pressed + " - " + button.itemId);
		}
	},

	listAllFilms: function(button) {
		
	},

	getRandomFilm: function(button) {
		
	},

	listLastFilms: function(button) {
		
	},

	listSupports: function(button, pressed) {
		if (pressed) {
			this.getSupportsList().show();
		}
		else {
			this.getSupportsList().hide();
		}
	},

	listTypes: function(button, pressed) {
		if (pressed) {
			this.getTypesList().show();
		}
		else {
			this.getTypesList().hide();
		}
	},

	listGenres: function(button, pressed) {
		if (pressed) {
			this.getGenresList().show();
		}
		else {
			this.getGenresList().hide();
		}
	}
});