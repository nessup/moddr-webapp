/*global ModdrWebapp, Backbone, JST*/

(function() {
    'use strict';

    // This singleton's purpose is to maintain a list of all connected devices. It does this by polling ADB on an intervallic basis.
    ModdrWebapp.DeviceManager = _.extend(Backbone.Events, {
        init: function() {
            // This is a list of all connected devices and their associated status information.
            this.devices = new ModdrWebapp.Collections.Device();

            window.setInterval(function() {
                ModdrWebapp.ADB.getConnectedDevices(function(devices) {
                    // Set which devices are currently connected.
                    this.devices.set(devices);
                }.bind(this));
            }.bind(this), ModdrWebapp.Constants.ADBDeviceRefreshInterval);
        }
    });
})();
