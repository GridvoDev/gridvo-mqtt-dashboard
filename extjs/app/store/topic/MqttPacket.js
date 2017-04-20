Ext.define('MqttDashboard.store.topic.MqttPacket', {
    extend: 'Ext.data.Store',
    alias: 'store.mqtt-packet',
    model: 'MqttDashboard.model.topic.MqttPacket',
    storeId: 'MqttPacket',
    pageSize: 0,
    proxy: {
        type: 'rest-api',
        reader: {
            type: 'json',
            rootProperty: 'result.packets'
        },
        // url: 'http://www.gridvo.com:9191/mqtt/packets'
        url: 'http://117.27.142.62:9191/mqtt/packets'
    }
});
