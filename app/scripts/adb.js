/*global ModdrWebapp, Backbone, JST*/

(function() {
    'use strict';

    var ADBPath = '/Users/dany/Library/Android/sdk/platform-tools/adb';

    var process = require('child_process');

    ModdrWebapp.ADB = {
        // This method returns a list of devices connected to the computer. It doesn't know anything more about the devices than whether they are offline, connected, or something else. See http://developer.android.com/tools/help/adb.html#devicestatus.
        getConnectedDevices: function(callback) {
            var adb = process.exec(ADBPath + ' devices', function (error, stdout, stderr) {
                if (error) {
                    console.log(error.stack);
                    console.log('Error code: '+error.code);
                    console.log('Signal received: '+error.signal);
                    return;
                }

                // Figure out if at least one device is connected.
                var lines = stdout.split('\n'),
                    numDevices = lines.length - 3;
                if (numDevices === 0) {
                    return callback([]);
                }

                // Store the devices in our collection.
                var devices = [],
                    device,
                    id,
                    i;
                for(i = 1; i < lines.length - 2; i++) {
                    device = lines[i].split('\t');
                    devices.push({
                        id: device[0]
                    });
                }
                // console.log('devices', devices);

                return callback(devices);
            });
        }
    };
})();
