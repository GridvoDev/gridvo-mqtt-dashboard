Ext.define('MqttDashboard.view.topic.MqttTopicTreeList', {
    extend: 'Ext.panel.Panel',
    xtype: 'mqtt-topic-tree-list',
    layout: {
        type: 'fit'
    },
    title: 'MQTT主题树',
    items: [
        {
            xtype: 'treelist',
            reference: 'mqttTopicTreeList',
            scrollable: 'y',
            bind: {
                store: '{mqttTopicTree}'
            },
            listeners: {
                selectionchange: 'onMqttTopicTreeSelectionChange'
            }
        }
    ]
});
