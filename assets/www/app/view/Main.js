Ext.define('Oreilly.view.Main', {

	extend: 'Ext.tab.Panel',
	xtype: 'main',

	config: {

		tabBarPosition: 'bottom',
		tabBar: {
			ui: 'gray'
		},
		listeners: {
		    tap: {
		        fn: function(t) {
//		        	alert(t)
		       
		        },
		        element: 'element'
		    }
		},
		items: [
{ xclass: 'Oreilly.view.Location' },
			{ xclass: 'Oreilly.view.session.Card' },
			{ xclass: 'Oreilly.view.speaker.Card' },
			{ xclass: 'Oreilly.view.Tweets'   },
			
			{ xclass: 'Oreilly.view.about.Card'    }
			//{ xclass: 'Oreilly.view.group.GroupInfo'    }
		]
	}
});
