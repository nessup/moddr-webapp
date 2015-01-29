/*global ModdrWebapp, Backbone, JST*/

ModdrWebapp.Views = ModdrWebapp.Views || {};

(function () {
    'use strict';

    ModdrWebapp.Views.Toolbar = Backbone.View.extend({

        template: JST['app/scripts/templates/toolbar.ejs'],

        el: '.toolbarContainer',

        events: {},

        initialize: function () {

        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
