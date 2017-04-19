Ext.define('MqttDashboard.view.dashboard.BrokerPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'broker-panel',
    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom',
        'Ext.ProgressBar',
        'Ext.chart.series.Bar',
        'Ext.chart.interactions.ItemEdit'
    ],
    cls: 'dashboard-main-chart shadow',
    width: '100%',
    height: 550,
    bodyPadding: 15,
    title: 'MQTT Broker',
    layout: {
        type: 'fit'
    },
    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 500,
        insetPadding: 40,
        flipXY: true,
        animation: {
            easing: 'easeOut',
            duration: 500
        },
        bind: {
            store: '{mqttBrokerOnline}'
        },
        axes: [{
            type: 'numeric',
            position: 'bottom',
            fields: 'connections',
            grid: true,
            maximum: 100,
            majorTickSteps: 10,
            title: 'MQTT Client连接数',
            renderer: 'onAxisLabelRender'
        }, {
            type: 'category',
            position: 'left',
            fields: 'broker',
            grid: true
        }],
        series: [{
            type: 'bar',
            xField: 'broker',
            yField: 'connections',
            style: {
                opacity: 0.80,
                minGapWidth: 10
            },
            highlightCfg: {
                strokeStyle: 'black',
                radius: 10
            },
            label: {
                field: 'connections',
                display: 'insideEnd',
                renderer: 'onSeriesLabelRender'
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }],
        sprites: [{
            type: 'text',
            text: 'MQTT Broker连接统计',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40,
            y: 20
        }]
    }]
});
