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
		 var winTop,
			 winText,
			 winClose,
			 winMin,
             embWinText,
             winContainerDiv;

		winContainerDiv = document.createElement('div');
		winContainerDiv.className = 'win' +' ' + this.type;

		winTop = document.createElement('div');
		winTop.className = 'winTop';
		winTop.innerHTML = this.name;
			
		winClose = document.createElement('div');
		winClose.className = 'winButton'+' '+'winClose';
		winClose.innerHTML = 'x';
		
		winMin = document.createElement('div');
		winMin.className = 'winButton'+' '+'winMin';
		winMin.innerHTML = '_';
					
		winText = document.createElement('div');
		winText.className ='winText';

        embWinText = document.createElement('div');
        embWinText.className ='embwinText';

        winText.appendChild(embWinText);

	    winContainerDiv.appendChild(winTop);
	    winContainerDiv.appendChild(winText);
			
		winTop.appendChild(winClose);
		winTop.appendChild(winMin);


		this.root = winContainerDiv;
			
		document.body.appendChild(winContainerDiv);
    }
};










