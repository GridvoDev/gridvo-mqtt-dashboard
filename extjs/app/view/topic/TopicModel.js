Ext.define('MqttDashboard.view.topic.TopicModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.topic',
    formulas: {
        selectionTopicText: function (get) {
            var selection = get('mqttTopicTreeList.selection');
            var path;
            if (selection) {
                path = selection.getPath('text');
                path = path.replace(/^\/Root\//, '');
                return 'MQTT主题: ' + path;
            } else {
                return '请选择MQTT主题';
            }
        }
    },
    stores: {
        mqttPacket: {
            type: 'mqtt-packet'
        },
        mqttTopicTree: {
            type: 'mqtt-topic-tree'
        }
    }
});
