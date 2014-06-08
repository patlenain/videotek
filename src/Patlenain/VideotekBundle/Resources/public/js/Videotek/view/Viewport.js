Ext.define("Videotek.view.Viewport", {
	extend: "Ext.container.Viewport",
	layout: "border",
	items: [{
		xtype: "menuBar",
		region: "north"
	}, {
		id: "main",
		xtype: "panel",
		region: "center",
		layout: "card",
		items: [{
			xtype: "supportsList"
		}, {
			xtype: "typesList"
		}, {
			xtype: "genresList"
		}]
	}]
});