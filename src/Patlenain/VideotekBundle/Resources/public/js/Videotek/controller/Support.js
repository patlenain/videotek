Ext.define("Videotek.controller.Support", {
	extend: "Ext.app.Controller",
	views: [ "SupportsList", "SupportCreate", "SupportEdit" ],
	models: [ "Support" ],
	stores: [ "Supports" ],

/*	refs: [{
		ref: 'supportslist',
		selector: 'panel'
	}],*/

	init: function() {
		this.control({
			'supportsList': {
				itemdblclick: this.editSupport
			},
			'supportsList button[action=create]': {
				click: this.createSupport
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
		var win = button.up('window');
		var form = win.down('form');
//		var record = form.getRecord();
		var values = form.getValues();

		var record = Ext.create('Videotek.model.Support');
		record.set(values);
		win.close();
		this.getSupportsStore().add(record);
		this.getSupportsStore().sync();
	},

	editSupport: function(grid, record) {
		var edit = Ext.create('Videotek.view.SupportEdit');
		edit.show();
		edit.down('form').loadRecord(record);
	},

	updateSupport: function(button) {
		var win = button.up('window');
		var form = win.down('form');
		var record = form.getRecord();
		var values = form.getValues();

		record.set(values);
		win.close();
		this.getSupportsStore().sync();
	}
});