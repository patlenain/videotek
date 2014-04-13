Ext.Ajax.on('requestexception', function(connection, response, options) {
	if (console) {
		console.log(response);
	}
});