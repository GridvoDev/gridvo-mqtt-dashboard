Ext.define('MqttDashboard.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onRouteChange'
            }
        }
    },
    routes: {
        ':node': 'onRouteChange'
    },
    lastView: null,
    setCurrentView: function (hashTag) {
        hashTag = (hashTag || '').toLowerCase();
        var me = this,
            refs = me.getReferences(),
            mainCard = refs.mainCardPanel,
            mainLayout = mainCard.getLayout(),
            navigationList = refs.navigationTreeList,
            store = navigationList.getStore(),
            node = store.findNode('routeId', hashTag) ||
                store.findNode('viewType', hashTag),
            view = (node && node.get('viewType')) || 'page404',
            lastView = me.lastView,
            existingItem = mainCard.child('component[routeId=' + hashTag + ']'),
            newView;
        if (lastView && lastView.isWindow) {
            lastView.destroy();
        }
        lastView = mainLayout.getActiveItem();
        if (!existingItem) {
            newView = Ext.create({
                xtype: view,
                routeId: hashTag,
                hideMode: 'offsets'
            });
        }
        if (!newView || !newView.isWindow) {
            if (existingItem) {
                if (existingItem !== lastView) {
                    mainLayout.setActiveItem(existingItem);
                }
                newView = existingItem;
            }
            else {
                Ext.suspendLayouts();
                mainLayout.setActiveItem(mainCard.add(newView));
                Ext.resumeLayouts(true);
            }
        }
        navigationList.setSelection(node);
        if (newView.isFocusable(true)) {
            newView.focus();
        }
        me.lastView = newView;
    },
    onNavigationTreeSelectionChange: function (tree, node) {
        var to = node && (node.get('routeId') || node.get('viewType'));
        if (to) {
            this.redirectTo(to);
        }
    },
    onToggleNavigationSize: function () {
        var me = this,
            refs = me.getReferences(),
            navigationList = refs.navigationTreeList,
            wrapContainer = refs.mainContainerWrap,
            collapsing = !navigationList.getMicro(),
            new_width = collapsing ? 64 : 250;
        if (Ext.isIE9m || !Ext.os.is.Desktop) {
            Ext.suspendLayouts();
            refs.senchaLogo.setWidth(new_width);
            navigationList.setWidth(new_width);
            navigationList.setMicro(collapsing);
            Ext.resumeLayouts();
            wrapContainer.layout.animatePolicy = wrapContainer.layout.animate = null;
            wrapContainer.updateLayout();
        }
        else {
            if (!collapsing) {
                navigationList.setMicro(false);
            }
            refs.senchaLogo.animate({dynamic: true, to: {width: new_width}});
            navigationList.width = new_width;
            wrapContainer.updateLayout({isRoot: true});
            navigationList.el.addCls('nav-tree-animating');
            if (collapsing) {
                navigationList.on({
                    afterlayoutanimation: function () {
                        navigationList.setMicro(true);
                        navigationList.el.removeCls('nav-tree-animating');
                    },
                    single: true
                });
            }
        }
    },
    onMainViewRender: function () {
        if (!window.location.hash) {
            this.redirectTo("mqtt-dashboard");
        }
    },
    onRouteChange: function (id) {
        this.setCurrentView(id);
    }
    // onSwitchToModern: function () {
    //     Ext.Msg.confirm('Switch to Modern', 'Are you sure you want to switch toolkits?',
    //                     this.onSwitchToModernConfirmed, this);
    // },
    // onSwitchToModernConfirmed: function (choice) {
    //     if (choice === 'yes') {
    //         var s = location.search;
    //
    //         // Strip "?classic" or "&classic" with optionally more "&foo" tokens
    //         // following and ensure we don't start with "?".
    //         s = s.replace(/(^\?|&)classic($|&)/, '').replace(/^\?/, '');
    //
    //         // Add "?modern&" before the remaining tokens and strip & if there are
    //         // none.
    //         location.search = ('?modern&' + s).replace(/&$/, '');
    //     }
    // },
});
