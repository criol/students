var CustomWindow,
    CWManager;

CWManager = {
    windows:{},
    position:{
    	top:100,
    	left:100
    }
};

CustomWindow = function(obj){
    var a;
    for (a in obj){
        if(obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
};

CustomWindow.prototype = {
    init: function () {
        CWManager.windows[this.type] = this;
        this.render();
    },

    render: function(){
		var containerDiv,winHeader,btnMin,btnMax,btnClose,mainDiv,winName;
		
		containerDiv = document.createElement('div');
		containerDiv.className = 'window ' + this.type;
		
		mainDiv = document.createElement('div');
		mainDiv.className = 'winContent';
		winHeader = document.createElement('div');
		winHeader.className = 'header';
		
		winName = document.createElement('label');
		winName.className = 'labelHeader';
		winName.textContent = this.name;
		winHeader.appendChild(winName);
		
		btnClose = document.createElement('button');
		btnClose.className = 'Close';
		winHeader.appendChild(btnClose);
		
		btnMax = document.createElement('button');
		btnMax.className = 'button Max';
		winHeader.appendChild(btnMax);
		
		btnMin = document.createElement('button');
		btnMin.className = 'button Min';
		winHeader.appendChild(btnMin);
		
		
		containerDiv.appendChild(winHeader);
		containerDiv.appendChild(mainDiv);
		
		this.root = containerDiv;
		document.body.appendChild(containerDiv);
		
		
    }

};



//test push from aptana