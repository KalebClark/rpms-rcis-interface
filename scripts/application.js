define([
	'backbone',
	'communicator',
    'views/collection/referrals-view'
],

function( Backbone, Communicator, ReferralsView) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
        'referralsView': '#referrals-view'     
    });

	/* Add initializers here */
	App.addInitializer( function () {
        App.referralsView.show( new ReferralsView() );
		Communicator.mediator.trigger("APP:START");
	});
	return App;
});
