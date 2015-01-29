/*global ModdrWebapp, Backbone, JST*/

ModdrWebapp.Views = ModdrWebapp.Views || {};

(function () {
    'use strict';

    ModdrWebapp.Views.AppContainer = Backbone.View.extend({

        template: JST['app/scripts/templates/app_container.ejs'],

        el: '.appContainer',

        className: 'appContainer',

        events: {
            'click .rightAccessory': 'rightAccessoryClicked',
            'click .myMods:not(.disabled)': 'myModsClicked',
            'click .store:not(.disabled)': 'storeClicked'
        },

        initialize: function () {
            this.listenTo(ModdrWebapp.router, 'route', this.routeChanged);
            this.listenTo(ModdrWebapp.DeviceManager.devices, 'add remove change', this.updateStatusOverlay);
        },

        render: function () {
            this.$el.html(this.template());

            this.updateStatusOverlay();

            return this;
        },

        setView: function(view) {
            var nextView = function () {
                if (this.currentView) {
                    this.currentView.remove();
                }

                this.currentView = view;
                this.currentView.render();

                this.$('.currentView')
                .html(this.currentView.el)
                .fadeIn();
            }.bind(this);

            if (this.currentView) {
                this.currentView.$el.fadeOut(nextView);
            }
            else {
                nextView();
            }
        },

        // This method determines whether to show the status page or the initial page depending on how the device status has changed.
        updateStatusOverlay: function() {
            // We don't yet handle the case of more than one device connected, so log it to the console.
            var numDevices = ModdrWebapp.DeviceManager.devices.length;
            if (numDevices > 1) {
                return console.error('more than 1 device connected');
            }
            // If there is a device connected, take them to the default view.
            else if(numDevices === 1) {
                var device = ModdrWebapp.DeviceManager.devices.at(0);
                if (device.get('status') === 'installing') {
                    // The user is installing something right now. Block the UI until installation is done.
                    window.location.hash = 'status/noDevicesConnected';
                }
                else {
                    // One device is free and not doing anything. Allow the user to add mods.
                    debugger;
                    window.location.hash = 'store';
                }
            }
            else {
                // Inform the user they need to connect a device.
                window.location.hash = 'status/noDevicesConnected';
            }
        },

        myModsClicked: function() {
            ModdrWebapp.router.navigate('myMods', {trigger: true});
        },

        storeClicked: function() {
            ModdrWebapp.router.navigate('store', {trigger: true});
        },

        routeChanged: function() {
            $('.segmentedControl li').removeClass('active disabled');
            if (window.location.hash.indexOf('status') !== -1) {
                this.$('.segmentedControl li').addClass('disabled');
            }
            else {
                var activeTab = window.location.hash.split('/')[0];
                this.$('li.' + activeTab).addClass('active');
            }
        },

        rightAccessoryClicked: function(e) {
            if (this.active === 'store') {
                this.setView(new ModdrWebapp.Views.List({
                    list: this.products[$(e.currentTarget).data('index')]
                }));
            }

            // Start installing a new APK.
            ModdrWebapp.DeviceManager.devices
            .at(0)
            .installAPK();
        }
    });

})();
