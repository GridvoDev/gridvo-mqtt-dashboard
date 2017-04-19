Ext.define('MqttDashboard.proxy.RestAPI', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.rest-api',
    reader: {
        type: 'json',
        rootProperty: 'result'
    }
});