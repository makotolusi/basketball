Ext.define('Oreilly.controller.BaiduMap', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			
		},
		control: {
		
		}
	}

	showInfo:function(e){
	 alert(e.point.lng + ", " + e.point.lat);
	}	
});
