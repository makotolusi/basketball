Ext.define('Oreilly.view.session.Card', {

    extend: 'Ext.NavigationView',
    xtype: 'sessionContainer',

    config: {

        title: '球队',
        iconCls: 'time',

        autoDestroy: false,

        items: [
            {
                xtype: 'sessions',
                store: 'Sessions',
                grouped: false,
                pinHeaders: false
            }
        ]
    }
});
