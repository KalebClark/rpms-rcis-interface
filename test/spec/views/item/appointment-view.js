(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/appointment-view'
		],
		function( AppointmentView ) {

			describe('AppointmentView Itemview', function () {

				it('should be an instance of AppointmentView Itemview', function () {
					var appointment-view = new AppointmentView();
					expect( appointment-view ).to.be.an.instanceof( AppointmentView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );