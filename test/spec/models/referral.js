(function() {
	'use strict';

	var root = this;

	root.define([
		'models/referral'
		],
		function( Referral ) {

			describe('Referral Model', function () {

				it('should be an instance of Referral Model', function () {
					var referral = new Referral();
					expect( referral ).to.be.an.instanceof( Referral );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );