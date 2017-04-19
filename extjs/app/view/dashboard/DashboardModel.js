Ext.define('MqttDashboard.view.dashboard.DashboardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard',
    stores: {
        mqttBrokerOnline: {
            type: 'mqtt-broker-online'
        }
    }
});
