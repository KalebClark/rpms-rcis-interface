define([
	'backbone',
    'views/collection/appointments-view',
	'hbs!tmpl/item/referral-view_tmpl'
],
function( Backbone, AppointmentsView, ReferralViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a ReferralView ItemView");
		},
		
    	template: ReferralViewTmpl,
        tagName: 'tr',
        className: 'refItem',

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {
            'click': 'selectItem'
        },
        selectItem: function(e) {
            var appts = new AppointmentsView({"ien": this.model.get('PATIENT_IEN')});
        },

		/* on render callback */
		onRender: function() {}
	});

});
