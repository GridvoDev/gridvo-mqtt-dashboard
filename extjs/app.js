Ext.application({
    name: 'MqttDashboard',
    extend: 'MqttDashboard.Application',
    requires: [
        'MqttDashboard.*'
    ],
    mainView: 'MqttDashboard.view.main.Main'
});
