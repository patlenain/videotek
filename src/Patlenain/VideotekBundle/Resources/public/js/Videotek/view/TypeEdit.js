Ext.define("Videotek.view.TypeEdit", {
	extend: "Ext.window.Window",
	alias: "widget.typeEdit",

	title: "Mettre à jour un type",
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
		action: 'save',
		formBind: true
	}, {
		text: 'Annuler',
		handler: function(button) {
			var window = button.up('window');
			window.close();
		}
	}]
});