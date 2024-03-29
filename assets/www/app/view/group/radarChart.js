Ext.define('Oreilly.view.group.radarChart', {

    extend: 'Ext.chart.PolarChart',
    xtype: 'groupRadarChart',

    config: {
    	 animate: true,
    	    interactions: ['rotate'],
    	    store: {
    	      fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],
    	      data: [
    	          {'name':'metric one', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},
    	          {'name':'metric two', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},
    	          {'name':'metric three', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},
    	          {'name':'metric four', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},
    	          {'name':'metric five', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}
    	      ]
    	    },
    	    series: [{
    	        type: 'radar',
    	        xField: 'name',
    	        yField: 'data4',
    	        style: {
    	          fillStyle: 'rgba(0, 0, 255, 0.1)',
    	          strokeStyle: 'rgba(0, 0, 0, 0.8)',
    	          lineWidth: 1
    	        }
    	    }],
    	    axes: [
    	      {
    	        type: 'numeric',
    	        position: 'radial',
    	        fields: 'data4',
    	        style: {
    	            estStepSize: 10
    	        },
    	        grid: true
    	      },
    	      {
    	        type: 'category',
    	        position: 'angular',
    	        fields: 'name',
    	        style: {
    	            estStepSize: 1
    	        },
    	        grid: true
    	      }
    	    ]
	}
});


