Ext.define('Videotek.controller.Genre', {
	extend: 'Ext.app.Controller',
	views: [ 'GenresList', 'GenreCreate', 'GenreEdit' ],
	models: [ 'Genre' ],
	stores: [ 'Genres' ],

	refs: [{
		ref: 'genresList',
		selector: 'genresList'
	}],

	init: function() {
		this.control({
			'genresList': {
				itemdblclick: this.editGenre
			},
			'genresList button[action=create]': {
				click: this.createGenre
			},
			'genresList button[action=delete]': {
				click: this.deleteGenre
			},
			'genreCreate button[action=save]': {
				click: this.newGenre
			},
			'genreEdit button[action=save]': {
				click: this.updateGenre
			}
		});
	},

	createGenre: function(button) {
		var create = Ext.create('Videotek.view.GenreCreate');
		create.show();
	},

	newGenre: function(button) {
		var me = this;
		var win = button.up('window');
		var form = win.down('form');
		if (form.isValid()) {
			form.submit({
				url: 'api/genre/create',
				success: function(form, action) {
					Ext.Msg.show({
						title: "Ajout d'un genre",
						msg: "Genre ajouté",
						buttons: Ext.Msg.OK,
						icon: Ext.Msg.INFO
					});
					win.close();
					me.getGenresStore().reload();
				},
				failure: function(form, action) {
					if (action.result.form) {
						if (action.result.form.children.code.errors) {
							form.findField('code').markInvalid(action.result.form.children.code.errors);
						}
						if (action.result.form.children.libelle.errors) {
							form.findField('libelle').markInvalid(action.result.form.children.libelle.errors);
						}
					}
					Ext.Msg.show({
						title: "Ajout d'un genre",
						msg: "Erreur",
						buttons: Ext.Msg.OK,
						icon: Ext.Msg.ERROR
					});
				}
			});
		}
	},

	editGenre: function(grid, record) {
		var edit = Ext.create('Videotek.view.GenreEdit');
		edit.show();
		edit.down('form').loadRecord(record);
	},

	updateGenre: function(button) {
		var me = this;
		var win = button.up('window');
		var form = win.down('form');
		if (form.isValid()) {
			form.submit({
				url: 'api/genre/update/' + form.getRecord().get('id'),
				success: function(form, action) {
					Ext.Msg.show({
						title: "Mettre à jour un genre",
						msg: "Genre mis à jour",
						buttons: Ext.Msg.OK,
						icon: Ext.Msg.INFO
					});
					win.close();
					me.getGenresStore().reload();
				},
				failure: function(form, action) {
					if (action.result.form) {
						if (action.result.form.children.code.errors) {
							form.findField('code').markInvalid(action.result.form.children.code.errors);
						}
						if (action.result.form.children.libelle.errors) {
							form.findField('libelle').markInvalid(action.result.form.children.libelle.errors);
						}
					}
					Ext.Msg.show({
						title: "Mettre à jour un genre",
						msg: "Erreur",
						buttons: Ext.Msg.OK,
						icon: Ext.Msg.ERROR
					});
				}
			});
		}
	},

	deleteGenre: function(button) {
		var selection = this.getGenresList().
				getSelectionModel().getSelection();
		if (selection[0]) {
			var message = Ext.String.format("Voulez-vous supprimer le genre {0} ?",
					selection[0].get('libelle'));
			Ext.Msg.confirm("Suppression", message, function(bouton) {
				if (bouton == 'yes') {
					this.getGenresStore().remove(selection[0]);
					this.getGenresStore().sync();
				}
			}, this);
		}
	}
});