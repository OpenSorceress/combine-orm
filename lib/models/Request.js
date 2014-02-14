/**
 * Request.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var Waterline = require('waterline');

var Request = Waterline.Collection.extend({

	identity:"request",
	schema:true,
	attributes: {

		targets: {
			collection:"target",
			via:"request"
		},
		queries:{
			collection:"query",
			via:"_request"
		},
		_relation:{
			"type":"string",
			"required":false
		},
		_formula:{
			"type": "string",
			"required": true
		}

	}

});

module.exports = Request;
