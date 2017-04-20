Ext.define('MqttDashboard.view.dashboard.DashboardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard',
    init: function () {
        // var client = mqtt.connect("wss://www.gridvo.com");
        var client = mqtt.connect("mqtt://117.27.142.62:61643");
        client.on('connect', function () {
            client.subscribe('$SYS/+/clients/connected');
        })
        client.on('message', function (topic, message) {
            var broker = topic.split("/")[1];
            var connections = parseInt(message.toString());
            var mqttBrokerOnlineStore = Ext.data.StoreManager.lookup('MqttBrokerOnline');
            var data = mqttBrokerOnlineStore.getData();
            var exist = false;
            data.each(function (d) {
                if (d.get("broker") == broker) {
                    d.set("connections", connections);
                    exist = true;
                }
            });
            if (!exist) {
                mqttBrokerOnlineStore.add({
                    broker: broker,
                    connections: connections
                });
            }
        })
    },
    destroy: function () {
    },
    onHideView: function () {
    },
    onAxisLabelRender: function (axis, label, layoutContext) {
        return Ext.util.Format.number(layoutContext.renderer(label), '0,000');
    },
    onSeriesLabelRender: function (v) {
        return Ext.util.Format.number(v, '0,000');
    },
    onSeriesTooltipRender: function (tooltip, record, item) {
        var formatString = '0,000 (MQTT Client)';
        tooltip.setHtml(record.get('broker') + ': ' +
            Ext.util.Format.number(record.get('connections'), formatString));
    }
});
