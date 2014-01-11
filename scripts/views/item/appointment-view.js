define([
	'backbone',
	'hbs!tmpl/item/appointment-view_tmpl'
],
function( Backbone, AppointmentViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a AppointmentView ItemView");
		},
		
    	template: AppointmentViewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
