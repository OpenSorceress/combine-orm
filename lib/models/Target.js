/**
 * Target.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var Waterline = require('waterline');

var Target = Waterline.Collection.extend({
	identity:"target",
	schema:true,
	attributes:{
		name:  {
			type:"string",
				required: function() {
				return (this.query.id) ? true : false;
			}
		},

		"context": {

		},

		type:{
			type:"string",
				required:function() {
				return (!this.attributes.name);
			}
		},

		tokens: {
			collection:"relate",
				via:"_relation"
		},

		includeAll: {
			type:"boolean",
				required:false
		},

		request: {
			model: 'request'
		},

		query: {
			model: 'query'
		}
	}
});

module.exports = Target;