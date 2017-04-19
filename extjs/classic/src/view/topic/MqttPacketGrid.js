Ext.define('MqttDashboard.view.topic.MqttPacketGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mqtt-packet-grid',
    bind: {
        store: '{mqttPacket}',
        title: '{selectionTopicText}'
    },
    listeners: {
        cellclick: 'onGridCellItemClick'
    },
    columns: [
        {
            dataIndex: 'payload',
            text: 'Payload',
            flex: 1
        },
        {
            dataIndex: 'qos',
            text: 'QOS',
            width: 50
        },
        {
            dataIndex: 'retain',
            text: 'Retain',
            width: 60
        },
        {
            xtype: 'datecolumn',
            dataIndex: 'timestamp',
            width: 180,
            text: '发布时间',
            format: 'Y-m-d H:i:s'
        }
    ]
});
