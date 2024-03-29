Ext.define('Oreilly.controller.Sessions', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			sessions: 'sessions',
			session: 'session',
			sessionInfo: 'sessionContainer sessionInfo',
			sessionSpeakers: 'sessionContainer list',
			sessionContainer: 'sessionContainer',
			sessionDayPicker: 'sessions segmentedbutton',

			speakers: 'sessionContainer speakers',
			speakerInfo: 'sessionContainer speakerInfo',
				
			groupImg:'groupImg',
			groupDetail:'groupDetail',
			groupInfo:'groupInfo',
			groupSession:'sessions'
		},
		control: {
			sessions: {
				initialize: 'initSessions',
				itemtap: 'onSessionTap',
				activate: 'onSessionsActivate'
			},
			sessionDayPicker: {
				toggle: 'onSessionDateChange'
			},
			speakers: {
				itemtap: 'onSpeakerTap'
			},
			groupImg:{
				initialize:'initGroupImg',
				tap: 'onGroupImgTap'
			}
		}
	},
	initGroupImg:function(){
		var groupStore = Ext.getStore('SessionGroup');
//		alert(groupStore);
	},
	initSessions: function() {
		
//		var firstButton = this.getSessionDayPicker().getItems().items[0];
//		this.getSessionDayPicker().setPressedButtons(firstButton);
//		this.filterByButton(firstButton);
	},

	onSessionDateChange: function(seg, btn, toggle) {
        if (toggle) {
            this.filterByButton(btn);
        }
	},

	filterByButton: function(btn) {
		if (this.getSessionSpeakers()) {
			this.getSessionSpeakers().deselectAll();
		}
		Ext.getStore('Sessions').clearFilter(true);
		Ext.getStore('Sessions').filter(function(record) {
			return record.get('time').getDate() == btn.config.day;
		});
	},

	onSessionTap: function(list, idx, el, record) {
		
		var speakerStore = Ext.getStore('SessionSpeakers'),
			speakerIds = record.get('speakerIds');

		speakerStore.clearFilter(true);
		speakerStore.filterBy(function(speaker) {
			return Ext.Array.contains(speakerIds, speaker.get('id'));
		});

		if (!this.session) {
			this.session = Ext.widget('session');
		}

//		alert(record.get('title'))
		this.session.setTitle(record.get('title'));
		this.getSessionContainer().push(this.session);
		this.getSessionInfo().setRecord(record);
	},

	onSpeakerTap: function(list, idx, el, record) {
		if (!this.speakerInfo) {
			this.speakerInfo = Ext.widget('speakerInfo', {
				scrollable: 'vertical'
			});
		}

		this.speakerInfo.config.title = record.getFullName();
		this.speakerInfo.setRecord(record);
		this.getSessionContainer().push(this.speakerInfo);
	},

	onSessionsActivate: function() {
		if (this.session) {
			this.session.down('speakers').deselectAll();
		}
	}
	,onGroupImgTap:function(img){
		if (!this.groupDetail) {
			this.groupDetail = Ext.widget('groupDetail');
		}


	
		this.getSessionContainer().push(this.groupDetail);
		
	}
});
