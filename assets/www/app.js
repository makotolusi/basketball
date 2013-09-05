//<debug>
Ext.Loader.setPath({
    'Ext': '../../src',
    'Oreilly': 'app'
});
//</debug>

Ext.require('Oreilly.util.Proxy');
var appSelf=null;
Ext.application({
    // Change the values below to re-configure the app for a different conference.

    title:   '球队公告',
    dataUrl: 'http://en.oreilly.com/web2010/public/mobile_app/all',

    twitterSearch: '#w2s',

    mapCenter: [37.788539, -122.401643],
    mapText: 'The Palace Hotel<br /><small>2 New Montgomery Street<br />San Francisco, CA 94105<br />(415) 512-1111</small>',

    
    aboutPages: [
        {
            title: 'Overview',
            xtype: 'htmlPage',
            url: 'data/about.html'
        },
        {
            title: 'Sponsors',
            xtype: 'htmlPage',
            url: 'data/sponsors.html'
        },
        {
            title: 'Credits',
            xtype: 'htmlPage',
            url: 'data/credits.html'
        },
        {
            title: 'Videos',
            xtype: 'videoList',
            playlistId: '2737D508F656CCF8',
            hideText: 'Web 2.0 Summit 2010: '
        }
    ],

    // App namespace

    name: 'Oreilly',

    startupImage: {
        '320x460': 'resources/startup/Default.jpg', // Non-retina iPhone, iPod touch, and all Android devices
        '640x920': 'resources/startup/640x920.png', // Retina iPhone and iPod touch
        '640x1096': 'resources/startup/640x1096.png', // iPhone 5 and iPod touch (fifth generation)
        '768x1004': 'resources/startup/768x1004.png', //  Non-retina iPad (first and second generation) in portrait orientation
        '748x1024': 'resources/startup/748x1024.png', //  Non-retina iPad (first and second generation) in landscape orientation
        '1536x2008': 'resources/startup/1536x2008.png', // : Retina iPad (third generation) in portrait orientation
        '1496x2048': 'resources/startup/1496x2048.png' // : Retina iPad (third generation) in landscape orientation
    },

    isIconPrecomposed: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@72.png'
    },

    // Dependencies

    requires: ['Oreilly.util.Proxy'],

    models: [
        'Session',
        'Speaker',
        'Group'
    ],

    views: [
        'Main',

        'session.Card',
        'session.List',
        'session.Detail',
        'session.Info',

        'group.Info',
        'group.GroupDetail',
        'group.GroupImg',
        'group.radarChart',
        
        
        'speaker.Card',
        'speaker.List',
        'speaker.Detail',
        'speaker.Info',
        'speaker.FieldSet',

        'Tweets',
        'Location',

        'about.Card',
        'about.List',
        'about.HtmlPage',
        'about.VideoList'
    ],

    controllers: [
        'Sessions',
        'Speakers',
        'Tweets',
        'About'
    ],

    stores: [
        'Sessions',
        'SpeakerSessions',
        'Speakers',
        'Groups',
        'SessionGroup',
        'SessionSpeakers',
        'Tweets',
        'Videos'
    ],

    launch: function() {
    	appSelf=this;
        Ext.Viewport.setMasked({ xtype: 'loadmask' });
//
        Oreilly.util.Proxy.process('data/feed.js', function() {
            Ext.Viewport.add({ xtype: 'main' });
         	 baiduMap = new BMap.Map("baidu");           
         	baiduMap.centerAndZoom('北京', 12);
    		//baiduMap.enableScrollWheelZoom();
//    		//var myCity = new BMap.LocalCity();
//    		myCity.get(myFun);
//    		baiduMap.setCenter(myCity);
//    		var local = new BMap.LocalSearch(baiduMap, {
//				  renderOptions:{map: baiduMap}
//				});
//    		var geolocation = new BMap.Geolocation(); 
//			geolocation.getCurrentPosition(function(r){ 
////				var point = new BMap.Point(r.point.lng, r.point.lat);  
//	    		
//					var mk = new BMap.Marker(r.point); 
//					baiduMap.addOverlay(mk); 
//					baiduMap.panTo(r.point); 
////					alert('您的位置：'+r.point.lng+','+r.point.lat); 
//					baiduMap.centerAndZoom(r.point, 14); 
//		    		var myKeys = ["篮球场", "篮球"];
//				
//						local.searchInBounds(myKeys, baiduMap.getBounds());
//
//						baiduMap.addEventListener("dragend",function(){
////							baiduMap.clearOverlays();
//						    local.searchInBounds(myKeys, baiduMap.getBounds());
//						});
//			});
			
//    		baiduMap.addEventListener("click", appSelf.showInfo);
            Ext.Viewport.setMasked(false);
        });
   

   
    },

    showInfo:function(e){
    	//var point = new BMap.Point(e.point.lng, e.point.lat);
    	//var marker = new BMap.Marker(point);  // 创建标注
    //	baiduMap.addOverlay(marker);              // 将标注添加到地图中
    	//marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
//		 alert(e.point.lng + ", " + e.point.lat);
	}
});
