Ext.define('Oreilly.view.session.List', {

	extend: 'Ext.List',
	requires: 'Ext.SegmentedButton',

	xtype: 'sessions',

	config: {
		items: [
			{
				docked: 'top',
				xtype: 'panel',
				ui: 'gray',
				html:'<div style="padding-left:10px;" ><div style="font-weight:bold;" >8030</div><div style="font-size:13px;padding-top:5px;">球队成立于2003年，现役球员20名，平均年龄29。</div></div>',
				items: [
				        {
				        	docked:'left',
				        	ui:'light',
				        	xtype:'panel',
				        	items:[
				        	       
				        	       {
				        		xtype:'groupImg',

				        	    style: {
				        	        'border': '2px solid gray'
				        	    }
				        		
				        	}
				        	       ]
				        }
//				        { ui: 'decline', iconCls: 'delete' }

				]
			}
		],
        variableHeights: true,
        useSimpleItems: true,
		itemTpl: [
			'<div class="session"><div class="title">{title}</div><div class="room">{room}</div></div>'
		]
	},

	initialize: function() {
		
		this.config.title = Oreilly.app.title;
		this.callParent();
		
//		var data = {
//			     text: 'Groceries',
//			     items: [{
//			         text: 'Drinks',
//			         items: [{
//			             text: 'Water',
//			             items: [{
//			                 text: 'Sparkling',
//			                 leaf: true
//			             }, {
//			                 text: 'Still',
//			                 leaf: true
//			             }]
//			         }]
//			     }]
//			 };
//
//			 Ext.define('ListItem', {
//			     extend: 'Ext.data.Model',
//			     config: {
//			         fields: [{
//			             name: 'text',
//			             type: 'string'
//			         }]
//			     }
//			 });
//
//			 var store = Ext.create('Ext.data.TreeStore', {
//			     model: 'ListItem',
//			     defaultRootProperty: 'items',
//			     root: data
//			 });
//
//			 this.nestedList = Ext.create('Ext.NestedList', {
//			     fullscreen: true,
//			     title: 'Groceries',
//			     displayField: 'text',
//			     store: store
//			 });

//		var segmentedButton = this.down('segmentedbutton');
//
//		Ext.Array.each(Oreilly.sessionDays, function(day) {
//			segmentedButton.add(day);
//		});
	}
});
