(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/referrals-view'
		],
		function( ReferralsView ) {

			describe('ReferralsView Collectionview', function () {

				it('should be an instance of ReferralsView Collectionview', function () {
					var referrals-view = new ReferralsView();
					expect( referrals-view ).to.be.an.instanceof( ReferralsView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );