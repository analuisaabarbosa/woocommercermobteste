const {join} = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.e2e.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "11.0",
        "deviceName": "nightwatch-android-11",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/wcandroid-14.0.apk'),
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
    }],
    services: [
        ['appium', {
            args: {
                address: 'localhost',
                port: 4723
            },
            logPath:'./',
        }]
    ],
}