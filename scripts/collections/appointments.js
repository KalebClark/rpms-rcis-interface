define([
	'backbone',
	'models/appointment'
],
function( Backbone, Appointment ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		model: Appointment,
        url: 'data/appointments.php',
		initialize: function(options) {
			console.log("initialize a Appointments collection");
//            var ien = options.ien;
//            this.fetch({data: {'ien': ien}});
		},

		
	});
});
