/*global ModdrWebapp, Backbone*/

ModdrWebapp.Collections = ModdrWebapp.Collections || {};

(function () {
    'use strict';

    ModdrWebapp.Collections.Device = Backbone.Collection.extend({

        model: ModdrWebapp.Models.Device

    });

})();
