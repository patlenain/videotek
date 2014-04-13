Ext.define('Videotek.controller.Support', {
	extend: 'Ext.app.Controller',
	views: [ 'SupportsList', 'SupportCreate', 'SupportEdit' ],
	models: [ 'Support' ],
	stores: [ 'Supports' ],

	refs: [{
		ref: 'supportsList',
		selector: 'supportsList'
	}],

	init: function() {
		this.control({
			'supportsList': {
				itemdblclick: this.editSupport
			},
			'supportsList button[action=create]': {
				click: this.createSupport
			},
			'supportsList button[action=delete]': {
				click: this.deleteSupport
			},
			'supportCreate button[action=save]': {
				click: this.newSupport
			},
			'supportEdit button[action=save]': {
				click: this.updateSupport
			}
		});
	},

	createSupport: function(button) {
		var create = Ext.create('Videotek.view.SupportCreate');
		create.show();
	},

	newSupport: function(button) {
		var me = this;
		var win = button.up('window');
		var form = win.down('form');
		if (form.isValid()) {
			form.submit({
				url: 'api/support/create',
				success: function(form, action) {
					Ext.Msg.show({
						title: "Ajout d'un support",
						msg: "Support ajouté",
						buttons: Ext.Msg.OK,
						icon: Ext.Msg.INFO
					});
					win.close();
					me.getSupportsStore().reload();
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
						title: "Ajout d'un support",
						msg: "Erreur",
						buttons: Ext.Msg.OK,
						icon: Ext.Msg.ERROR
					});
				}
			});
		}
	},

	editSupport: function(grid, record) {
		var edit = Ext.create('Videotek.view.SupportEdit');
		edit.show();
		edit.down('form').loadRecord(record);
	},

	updateSupport: function(button) {
		var me = this;
		var win = button.up('window');
		var form = win.down('form');
		if (form.isValid()) {
			form.submit({
				url: 'api/support/update/' + form.getRecord().get('id'),
				success: function(form, action) {
					Ext.Msg.show({
						title: "Mettre à jour un support",
						msg: "Support mis à jour",
						buttons: Ext.Msg.OK,
						icon: Ext.Msg.INFO
					});
					win.close();
					me.getSupportsStore().reload();
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
						title: "Mettre à jour un support",
						msg: "Erreur",
						buttons: Ext.Msg.OK,
						icon: Ext.Msg.ERROR
					});
				}
			});
		}
	},

	deleteSupport: function(button) {
		var selection = this.getSupportsList().
				getSelectionModel().getSelection();
		if (selection[0]) {
			var message = Ext.String.format("Voulez-vous supprimer le support {0} ?",
					selection[0].get('libelle'));
			Ext.Msg.confirm("Suppression", message, function(bouton) {
				if (bouton == 'yes') {
					this.getSupportsStore().remove(selection[0]);
					this.getSupportsStore().sync();
				}
			}, this);
		}
	}
});