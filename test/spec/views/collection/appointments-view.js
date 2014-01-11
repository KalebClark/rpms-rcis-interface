(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/appointments-view'
		],
		function( AppointmentsView ) {

			describe('AppointmentsView Collectionview', function () {

				it('should be an instance of AppointmentsView Collectionview', function () {
					var appointments-view = new AppointmentsView();
					expect( appointments-view ).to.be.an.instanceof( AppointmentsView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );