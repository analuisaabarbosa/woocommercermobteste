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
        "appium:platformName": "Android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "nightwatch-android-11",
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(), './app/wcandroid-14.0.apk'),
        "appium:appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
    }],
    services: [
        ['appium', {
            args: {
                address: 'localhost',
                port: 4725
            }
        }]
    ]
}