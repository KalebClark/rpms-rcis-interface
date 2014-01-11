(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/referral-view'
		],
		function( ReferralView ) {

			describe('ReferralView Itemview', function () {

				it('should be an instance of ReferralView Itemview', function () {
					var referral-view = new ReferralView();
					expect( referral-view ).to.be.an.instanceof( ReferralView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );