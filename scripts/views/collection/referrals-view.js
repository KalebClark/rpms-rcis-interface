define([
	'backbone',
    'collections/referrals',
	'views/item/referral-view',
    'hbs!tmpl/item/referral-thead_tmpl'
],
function( Backbone, Referrals, ReferralView, ReferralTHead) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({
        collection: new Referrals(),
        tagName: 'table',
		initialize: function() {
			console.log("initialize a ReferralsView CollectionView");
            console.log('foo', this.collection);
            this.collection.on('fetch', function() {
                console.log('FETCHED');
            });
            this.collection.fetch();
		},
		
    	itemView: ReferralView,
    	

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {
            this.$el.prepend(ReferralTHead);
            
        }
	});

});
