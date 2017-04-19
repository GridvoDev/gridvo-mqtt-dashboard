Ext.define('MqttDashboard.store.topic.MqttTopicTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.mqtt-topic-tree',
    storeId: 'MqttTopicTree',
    root: {
        expanded: true
    }
});
