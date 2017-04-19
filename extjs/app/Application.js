Ext.define('MqttDashboard.Application', {
    extend: 'Ext.app.Application',
    name: 'MqttDashboard',
    stores: [
        "NavigationTree"
    ],
    defaultToken: 'mqtt-dashboard',
    launch: function () {
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
