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
			fieldLabel: 'Code',
			allowBlank: false,
			minLength: 3,
			maxLength: 15
		}, {
			xtype: 'textfield',
			name: 'libelle',
			fieldLabel: 'Libellé',
			allowBlank: false,
			minLength: 3,
			maxLength: 255
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