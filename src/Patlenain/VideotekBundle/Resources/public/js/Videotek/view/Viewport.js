Ext.define("Videotek.view.Viewport", {
	extend: "Ext.container.Viewport",
	layout: "fit",
	items: [{
		xtype: "panel",
		layout: "border",
		items: [{
			xtype: "typesList",
			region: "center"
		}]
	}]
});