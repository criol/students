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

    render: function(pos){
		 var winTop,
			 winText,
			 winClose,
			 winMin,
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

			
			
			winContainerDiv.appendChild(winTop);
			winContainerDiv.appendChild(winText);
			
			winTop.appendChild(winClose);
			winTop.appendChild(winMin);


			this.root = winContainerDiv;
			
			document.body.appendChild(winContainerDiv);

            winClose.click =function()
            {
                 document.body.removeChild(winContainerDiv);
            };
    }

};

document.oncontextmenu = function()
{   var polX,
    polY,
    contextWin;

    polX = event.clientX;
    polY = event.clientY;

    contextWin = document.createElement('div');
    contextWin.className ='context';
    contextWin.style.top=polY+"px";
    contextWin.style.left=polX+"px";
    console.log(polX+"s"+polY);

    document.body.appendChild(contextWin);

    return false;
};

document.click= function()
{
    document.body.removeChild('div');
};