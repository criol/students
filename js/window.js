var CustomWindow,
    CWManager;

CWManager = {
    windows:{}
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
		var containerDiv,winHeader,btnMin,btnMax,btnClose,mainDiv;
		
		containerDiv = document.createElement('div');
		containerDiv.className = 'window ' + this.type;
		
		winHeader = document.createElement('div');
		winHeader.className = 'window header';
		
		btnMin = document.createElement('input');
		btnMin.type = 'button';
		btnMin.value = 'min';
		btnMin.className = 'button min';
		winHeader.appendChild(btnMin);
		
		containerDiv.appendChild(winHeader);
		
		this.root = containerDiv;
		document.body.appendChild(containerDiv);
		
		
    }

};



//test push from aptana