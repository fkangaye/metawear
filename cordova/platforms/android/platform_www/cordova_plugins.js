cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ble-central/www/ble.js",
        "id": "cordova-plugin-ble-central.ble",
        "clobbers": [
            "ble"
        ]
    },
    {
        "file": "plugins/com.lisaseacat.metawear/www/metawear.js",
        "id": "com.lisaseacat.metawear.metawear",
        "clobbers": [
            "metawear"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});