Ext.define('MqttDashboard.store.dashboard.MqttBrokerOnline', {
    extend: 'Ext.data.Store',
    alias: 'store.mqtt-broker-online',
    storeId: 'MqttBrokerOnline',
    fields: ['broker', 'connections']
});
