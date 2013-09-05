Ext.define('Oreilly.view.speaker.FieldSet', {

	extend: 'Ext.form.FieldSet',
	xtype: 'speakerFieldSet',

	config: {
               instructions: '展现你的能力',
               defaults: {
                   required: true
               },
               items: [

                   {
                       xtype: 'textfield',
                       name: 'name',
                       readOnly:true,
                       label: '姓名',
                       autoCapitalize: false
                   }
                   ,
                   {
                       xtype: 'textfield',
                       name: 'nick',
                       label: '别名',
                       autoCapitalize: false
                   }
                   ,
                   {
                       xtype: 'emailfield',
                       name: 'email',
                       label: '邮箱',
                       placeHolder: 'you@sencha.com'
                   }
                   ,
                   {
                       xtype: 'selectfield',
                       name: 'rank',
                       label: '位置',
                       valueField: 'rank',
                       displayField: 'title',
                       store: {
                           data: [
                               { rank: 'master', title: '中锋(C)'},
                               { rank: 'padawan', title: '大前锋(PF)'},
                               { rank: 'teacher', title: '小前锋(SF)'},
                               { rank: 'aid', title: '得分后卫(SG)'},
                               { rank: 'aid', title: '组织后卫(PG)'}
                           ]
                       }
                   },
                   {
                       xtype: 'numberfield',
                       name: 'number',
                       label: '身高(CM)'
                   }
                   ,
                   {
                       xtype: 'numberfield',
                       name: 'br',
                       label: '生日'
                   },
                   {
                       xtype: 'numberfield',
                       name: 'number',
                       label: '球员号码'
                   },
                   {
                       xtype: 'textfield',
                       name: 'rank',
                       label: '所属球队',
                       autoCapitalize: false
                   }
                  
                   
               ]
           }
		      
	
});
