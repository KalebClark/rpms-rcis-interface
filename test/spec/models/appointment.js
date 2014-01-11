(function() {
	'use strict';

	var root = this;

	root.define([
		'models/appointment'
		],
		function( Appointment ) {

			describe('Appointment Model', function () {

				it('should be an instance of Appointment Model', function () {
					var appointment = new Appointment();
					expect( appointment ).to.be.an.instanceof( Appointment );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );