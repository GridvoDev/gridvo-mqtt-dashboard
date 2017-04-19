Ext.define('MqttDashboard.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',
    storeId: 'NavigationTree',
    fields: [{
        name: 'text'
    }],
    root: {
        expanded: true,
        children: [
            {
                text: 'Dashboard',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'mqtt-dashboard',
                routeId: 'mqtt-dashboard',
                leaf: true
            },
            {
                text: '会话管理',
                iconCls: 'x-fa fa-user',
                viewType: 'mqtt-session',
                leaf: true
            },
            {
                text: '主题管理',
                iconCls: 'x-fa fa-search',
                viewType: 'mqtt-topic',
                leaf: true
            }
        ]
    }
});
