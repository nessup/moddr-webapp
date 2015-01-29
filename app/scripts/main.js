/*global ModdrWebapp, $*/

window.ModdrWebapp = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';

        // Initialize the device manager.
        ModdrWebapp.DeviceManager.init();

        // Create a router to handle basic navigation.
        this.router = new ModdrWebapp.Routers.Main();

        // Create the toolbar.
        this.toolbarView = new ModdrWebapp.Views.Toolbar();
        this.toolbarView.render();

        // Create the main layout containing the application.
        this.appContainerView = new ModdrWebapp.Views.AppContainer();
        this.appContainerView.render();

        // Start the initial route.
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    ModdrWebapp.init();
});
