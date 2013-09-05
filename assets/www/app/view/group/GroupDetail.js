Ext.define('Oreilly.view.group.GroupDetail', {

    extend: 'Ext.Container',
    xtype: 'groupDetail',

    config: {

    	title:'xxxxx',
		layout: 'vbox',
		items: [
				{
	                flex: 1,
	                scrollable: 'vertical',
					xtype: 'groupInfo'
				}
				,
	            {
	                xtype: 'component',
	                cls: 'dark',
	                html: '球员'
	            },
	        	{
	            		                flex: 2,
	            						xtype: 'list',
	            						store: 'Speakers',
	            						grouped: true,
	            						pinHeaders: false,
	            						title: 'Speakers',
	            						itemCls: 'speaker',
	            				        variableHeights: true,
	            						itemTpl: [
	            							'<div class="avatar" style="background-image: url({photo});"></div>',
	            							'<h3>{first_name} {last_name}</h3>',
	            							'<h4>{position}, {affiliation}</h4>'
	            						]
	            }
//	            {
//					xtype: 'speakers',
//					store: 'Speakers',
//					grouped: true,
//					pinHeaders: false
//				}
			]

	}
});
