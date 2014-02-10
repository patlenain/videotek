Ext.define("Videotek.view.SupportEdit", {
	extend: "Ext.window.Window",
	alias: "widget.supportEdit",

	title: "Editer un support",
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