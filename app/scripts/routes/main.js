/*global ModdrWebapp, Backbone*/

ModdrWebapp.Routers = ModdrWebapp.Routers || {};

(function () {
    'use strict';

    ModdrWebapp.Routers.Main = Backbone.Router.extend({
        routes: {
            'myMods': 'myMods',
            'store(/:id)': 'store',
            'status/:type': 'status'
        },

        myMods: function() {

        },

        store: function(modId) {
            var list = ModdrWebapp.Constants.TestData.store;
            if (modId) {
                list = ModdrWebapp.Constants.TestData.products[Number(modId)];
            }

            ModdrWebapp.appContainerView.setView(new ModdrWebapp.Views.List({
                list: list
            }));
        },

        status: function(type) {
            ModdrWebapp.appContainerView.setView(new ModdrWebapp.Views.StatusOverlay({
                type: type
            }));
        }
    });

})();
