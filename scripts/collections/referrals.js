define([
	'backbone',
	'models/referral'
],
function( Backbone, Referral ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		model: Referral,
        url: 'data/export.php',
		initialize: function() {
			console.log("initialize a Referrals collection");
		},
	});
});
