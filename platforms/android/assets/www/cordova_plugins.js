cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cc.fovea.cordova.purchase/www/store-android.js",
        "id": "cc.fovea.cordova.purchase.InAppBillingPlugin",
        "clobbers": [
            "store"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.console": "0.2.13",
    "cc.fovea.cordova.purchase": "3.10.1"
}
// BOTTOM OF METADATA
});