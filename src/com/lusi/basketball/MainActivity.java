package com.lusi.basketball;

import org.apache.cordova.*;

import android.os.Bundle;

public class MainActivity extends DroidGap {

	
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.setIntegerProperty("loadUrlTimeoutValue", 30000);
		super.loadUrl(Config.getStartUrl()); 
	}


}
