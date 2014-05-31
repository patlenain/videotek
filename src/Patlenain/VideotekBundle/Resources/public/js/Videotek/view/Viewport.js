Ext.define("Videotek.view.Viewport", {
	extend: "Ext.container.Viewport",
	layout: "border",
	items: [{
		xtype: "menuBar",
		region: "north"
	}, {
		xtype: "panel",
		region: "center",
		items: [{
			xtype: "supportsList",
			hidden: true
		}, {
			xtype: "typesList",
			hidden: true
		}, {
			xtype: "genresList",
			hidden: true
		}]
	}]
});