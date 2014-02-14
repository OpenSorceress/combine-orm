var express = require('express'),
	_ = require('lodash'),
	app = express(),
	Waterline = require('waterline'),
	fs = require('fs');



// Instantiate a new instance of the ORM
var orm = new Waterline(),

//////////////////////////////////////////////////////////////////
// WATERLINE CONFIG
//////////////////////////////////////////////////////////////////

// Require any waterline compatible adapters here
	diskAdapter = require('sails-disk'),

	config = {

	// Setup Adapters
	// Creates named adapters that have have been required
	adapters: {
		'default': diskAdapter,
		disk: diskAdapter
	},

	// Build Connections Config
	// Setup connections using the named adapter configs
	connections: require('./config/connections'),

	collections: function() {
		var models = _loadModels();
		for (var x in models) {
			orm.loadCollection(models[x]);
		}
		console.log(orm);
	}()

};


function _loadModels() {
	var models = {};
	fs.readdir('./lib/models', function(err, files) {
		models.collections = {};
 		console.log(files);
		for (var x in files) {
			var name = files[x].toString().replace(/\.js/, '').toLowerCase();
			console.log(name);
			models.collections[ name ] = require('./models/'+files[x]);
		}
		console.log(models.collections);
		return models.collections;
	});
	console.log("collections: ");
 	return models.collections;
}

orm.initialize(config, function(err, models) {
	if(err) throw err;

	console.log(models);

	app.models = models.collections;
	app.connections = models.connections;

	// Start Server
	app.listen(3000);
});