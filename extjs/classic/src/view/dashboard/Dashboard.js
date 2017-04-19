Ext.define('MqttDashboard.view.dashboard.Dashboard', {
    extend: 'Ext.container.Container',
    xtype: 'mqtt-dashboard',
    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],
    controller: 'dashboard',
    viewModel: {
        type: 'dashboard'
    },
    layout: 'responsivecolumn',
    listeners: {
        hide: 'onHideView'
    },
    items: [
        {
            xtype: 'broker-panel'
        }
    ]
});
