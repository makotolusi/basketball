Ext.define('Oreilly.view.speaker.Detail', {

	extend: 'Ext.carousel.Carousel',
	xtype: 'speaker',

	config: {
		fullscreen: true,

        defaults: {
            styleHtmlContent: true
        },
//		layout: 'vbox',
		items: [
			{
			  flex: 1,
			  scrollable: 'vertical',
				xtype: 'speakerInfo'
			},
			  {
            	
            	xtype:'formpanel',
            	items:[{
            		 xtype: 'speakerFieldSet'
            	}]
               
                
            }	,
	         
            	{
	                flex: 2,
					xtype: 'list',
					store: 'SpeakerSessions',
					itemTpl: [
						'{title}'
					]
				}
	         
	     ]
//			
//            {
//                xtype: 'component',
//                cls: 'dark',
//                html: 'About You',
//                itmes:[]
//            },
//            {
//            	
//            	xtype:'formpanel',
//            	items:[{
//            		 xtype: 'speakerFieldSet'
//            	}]
//               
//                
//            }
//            ,Item 3
//            {
//                xtype: 'component',
//                cls: 'dark',
//                html: '参加的活动'
//            },
//			{
//                flex: 2,
//				xtype: 'list',
//				store: 'SpeakerSessions',
//				itemTpl: [
//					'{title}'
//				]
//			}
//		]

	}
});
