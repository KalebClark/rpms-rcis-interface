(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/ref-thead'
		],
		function( RefThead ) {

			describe('RefThead Itemview', function () {

				it('should be an instance of RefThead Itemview', function () {
					var ref-thead = new RefThead();
					expect( ref-thead ).to.be.an.instanceof( RefThead );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );