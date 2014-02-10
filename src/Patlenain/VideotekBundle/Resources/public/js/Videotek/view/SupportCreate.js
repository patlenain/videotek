Ext.define("Videotek.view.SupportCreate", {
	extend: "Ext.window.Window",
	alias: "widget.supportCreate",

	title: "Créer un support",
	autoShow: true,
	layout: 'fit',

	items: [{
		xtype: 'form',
		items: [{
			xtype: 'textfield',
			name: 'code',
			fieldLabel: 'Code'
		}, {
			xtype: 'textfield',
			name: 'libelle',
			fieldLabel: 'Libellé'
		}]
	}],

	buttons: [{
		text: 'Enregistrer',
		action: 'save'
	}, {
		text: 'Annuler',
		handler: function(button) {
			var window = button.up('window');
			window.close();
		}
	}]
});