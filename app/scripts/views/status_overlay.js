/*global ModdrWebapp, Backbone, JST*/

ModdrWebapp.Views = ModdrWebapp.Views || {};

(function () {
    'use strict';

    ModdrWebapp.Views.StatusOverlay = Backbone.View.extend({

        template: JST['app/scripts/templates/status_overlay.ejs'],

        className: 'statusOverlay',

        events: {},

        initialize: function (options) {
            this.type = options.type;
        },

        render: function () {
            this.$el.html(this.template({
                type: this.type
            }));
            return this;
        }

    });

})();
