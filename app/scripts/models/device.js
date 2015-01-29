/*global ModdrWebapp, Backbone*/

ModdrWebapp.Models = ModdrWebapp.Models || {};

(function () {
    'use strict';

    ModdrWebapp.Models.Device = Backbone.Model.extend({

        id: 'id',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        },

        installAPK: function() {
            debugger;
            this.set('status', 'installing');

            window.setTimeout(function() {
                this.unset('status');
            }.bind(this), 1000);
        }
    });

})();
