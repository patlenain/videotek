Ext.define('Videotek.controller.Type', {
	extend: 'Ext.app.Controller',
	views: [ 'TypesList', 'TypeCreate', 'TypeEdit' ],
	models: [ 'Type' ],
	stores: [ 'Types' ],

	refs: [{
		ref: 'typesList',
		selector: 'typesList'
	}],

	init: function() {
		this.control({
			'typesList': {
				itemdblclick: this.editType
			},
			'typesList button[action=create]': {
				click: this.createType
			},
			'typesList button[action=delete]': {
				click: this.deleteType
			},
			'typeCreate button[action=save]': {
				click: this.newType
			},
			'typeEdit button[action=save]': {
				click: this.updateType
			}
		});
	},

	createType: function(button) {
		var create = Ext.create('Videotek.view.TypeCreate');
		create.show();
	},

	newType: function(button) {
		var me = this;
		var win = button.up('window');
		var form = win.down('form');
		if (form.isValid()) {
			form.submit({
				url: 'api/type/create',
				success: function(form, action) {
					Ext.Msg.show({
						title: "Ajout d'un type",
						msg: "Type ajouté",
						buttons: Ext.Msg.OK,
						icon: Ext.Msg.INFO
					});
					win.close();
					me.getTypesStore().reload();
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
						title: "Ajout d'un type",
						msg: "Erreur",
						buttons: Ext.Msg.OK,
						icon: Ext.Msg.ERROR
					});
				}
			});
		}
	},

	editType: function(grid, record) {
		var edit = Ext.create('Videotek.view.TypeEdit');
		edit.show();
		edit.down('form').loadRecord(record);
	},

	updateType: function(button) {
		var me = this;
		var win = button.up('window');
		var form = win.down('form');
		if (form.isValid()) {
			form.submit({
				url: 'api/type/update/' + form.getRecord().get('id'),
				success: function(form, action) {
					Ext.Msg.show({
						title: "Mettre à jour un type",
						msg: "Type mis à jour",
						buttons: Ext.Msg.OK,
						icon: Ext.Msg.INFO
					});
					win.close();
					me.getTypesStore().reload();
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
						title: "Mettre à jour un type",
						msg: "Erreur",
						buttons: Ext.Msg.OK,
						icon: Ext.Msg.ERROR
					});
				}
			});
		}
	},

	deleteType: function(button) {
		var selection = this.getTypesList().
				getSelectionModel().getSelection();
		if (selection[0]) {
			var message = Ext.String.format("Voulez-vous supprimer le type {0} ?",
					selection[0].get('libelle'));
			Ext.Msg.confirm("Suppression", message, function(bouton) {
				if (bouton == 'yes') {
					this.getTypesStore().remove(selection[0]);
					this.getTypesStore().sync();
				}
			}, this);
		}
	}
});