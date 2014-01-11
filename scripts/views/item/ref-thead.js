define([
	'backbone',
	'hbs!tmpl/item/ref-thead_tmpl'
],
function( Backbone, RefTheadTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a RefThead ItemView");
		},
		
    	template: RefTheadTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
