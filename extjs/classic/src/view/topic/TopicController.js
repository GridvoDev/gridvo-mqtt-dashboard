Ext.define('MqttDashboard.view.topic.TopicController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.topic',
    init: function () {
        var mqttTopicTreeStore = Ext.data.StoreManager.lookup('MqttTopicTree');
        Ext.Ajax.request({
            // url: 'http://www.gridvo.com:9191/mqtt/topic-tree',
            url: 'http://117.27.142.62:9191/mqtt/topic-tree',
            success: function (response, opts) {
                var topicRoot = {
                    expanded: true
                };
                topicRoot.children = Ext.decode(response.responseText).result.children;
                mqttTopicTreeStore.setRoot(topicRoot);
            },
            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    },
    onMqttTopicTreeSelectionChange: function (view, record, eOpts) {
        var topic = record.getPath("text");
        topic = topic.replace(/^\/Root\//, '');
        var mqttPacketStore = Ext.data.StoreManager.lookup('MqttPacket');
        mqttPacketStore.load({
            params: {
                topic: topic
            },
            callback: function (records, operation, success) {
            },
            scope: this
        });
    },
    onGridCellItemClick: function (view, td, cellIndex, record) {
    }
});
