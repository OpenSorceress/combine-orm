/**
 * Query.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var Waterline = require('waterline');

var Query = Waterline.Collection.extend({
	identity:"query",
	schema:true,
	attributes: { // from combine-api contracts

		_target:{
			model: 'target'
		},

		_request: {
			model: 'request'
		}

	}
});

module.exports = Query;