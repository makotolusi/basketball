Ext.define('Oreilly.view.group.Info', {

	extend: 'Ext.Container',
	xtype: 'groupInfo',

	config: {

		cls: 'speakerInfo',
//		tpl: [
//			'<div class="header">',
//				'<div class="avatar" style="background-image: url(http://tp3.sinaimg.cn/3679949470/180/5670220251/1);"></div>',
//				'<h3>{lusi}</h3>',
//				'<h4>{position}, {affiliation}</h4>',
//			'</div>'
//				,
//			'<p>{bio}</p>'
//		]
		html: 
				'<div class="header"><div class="avatar" style="background-image: url(http://tp3.sinaimg.cn/3679949470/180/5670220251/1);"></div><h3>8030</h3><h4>队长徐晨，经理</h4></div>'+
			
				'<p>从03年成立并不断的吸收全国各地的顶尖球员'+
				'在中国30多个城市进行巡回比赛表演'+
				'与众多NBA球员以及国际知名球队进行比赛交流在全国乃至国际上具有相当的影响力'+
				'参与拍摄众多知名商业品牌广告以及商业演出'+
				'举办民间大型街头篮球权威赛事以及开办篮球训练营'+
				'并积极参与慈善篮球活动并且给予爱心捐赠'+
				'CL SMOOTH CREW 作为一支最全面的街球团队拥有职业级别的实战选手，顶尖的Freestyle球员，百年一遇的超级扣将，能和国际知名团队对抗的出色球员，并不断的发展壮大。</p>'
			
	}
});
