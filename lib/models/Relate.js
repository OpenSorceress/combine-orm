/**
 * Relate.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var Waterline = require('waterline');

var Relate = Waterline.Collection.extend({
	identity:"relate",
	schema:true,
	attributes: {

		_relation: {
			model:"target"
		}

	}
});

module.exports = Relate;