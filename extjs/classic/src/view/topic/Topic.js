Ext.define('MqttDashboard.view.topic.Topic', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.layout.container.Border'
    ],
    xtype: 'mqtt-topic',
    height: 800,
    controller: 'topic',
    viewModel: {
        type: 'topic'
    },
    itemId: 'topicContainer',
    layout: {
        type: 'border'
    },
    items: [
        {
            region: 'west',
            width: 250,
            split: true,
            border: false,
            xtype: 'mqtt-topic-tree-list'
        },
        {
            region: 'center',
            xtype: 'mqtt-packet-grid',
            reference: 'mqttPacketGrid'
        }
    ]
});
