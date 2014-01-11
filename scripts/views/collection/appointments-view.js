define([
	'backbone',
    'collections/appointments',
	'views/item/appointment-view'
],
function( Backbone, Appointments, AppointmentView  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({
		initialize: function() {
            this.collection = new Appointments({"ien": this.options.ien});
			console.log("initialize a AppointmentsView CollectionView");
            this.collection.fetch({data: {"ien": this.options.ien}});
		},
		
    	itemView: AppointmentView,
    	

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
