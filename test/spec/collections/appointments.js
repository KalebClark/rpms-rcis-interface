(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/appointments'
		],
		function( Appointments ) {

			describe('Appointments Collection', function () {

				it('should be an instance of Appointments Collection', function () {
					var appointments = new Appointments();
					expect( appointments ).to.be.an.instanceof( Appointments );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );