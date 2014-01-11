(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/referrals'
		],
		function( Referrals ) {

			describe('Referrals Collection', function () {

				it('should be an instance of Referrals Collection', function () {
					var referrals = new Referrals();
					expect( referrals ).to.be.an.instanceof( Referrals );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );