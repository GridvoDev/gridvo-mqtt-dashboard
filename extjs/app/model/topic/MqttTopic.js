Ext.define('MqttDashboard.model.topic.MqttTopic', {
    extend: 'Ext.data.TreeModel',
    idProperty: 'text',
    fields: [
        {
            name: 'text',
            type: 'string',
            convert: null
        }
    ]
});
