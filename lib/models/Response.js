/**
 * Response.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var Waterline = require('waterline');

var Response = Waterline.Collection.extend({
	identity:"response",
	schema:true,
	attributes: {

		data:{
			type:"array",
			required:true
		}

	}
});

module.exports = Response;