Ext.define('MqttDashboard.model.topic.MqttPacket', {
    extend: 'MqttDashboard.model.Base',
    fields: [
        {
            name: 'payload',
            type: 'string'
        },
        {
            name: 'qos',
            type: 'int'
        },
        {
            name: 'retain',
            type: 'int'
        },
        {
            name: 'timestamp',
            type: 'date'
        }
    ]
});
