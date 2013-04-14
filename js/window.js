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

    delet: function(win){
            win.addEventListener('click', function(e){
            var delett = e.target.parentNode.parentNode,
                name = e.target.parentNode.parentNode;
            document.body.removeChild(delett);
            PanelPusc.prototype.delIcon(name.classList[1])
           });
    },
    minWin:function (min){
           min.addEventListener('click',function(e){
           var min = e.target.parentNode.parentNode,
               polo = 'min';
           min.style.display='none';
           PanelPusc.prototype.minIcn(polo,min);

           });

    },

    contex: function(e){
             var polX,
                 polY,
                 contextWin;
             polX = event.clientX;
             polY = event.clientY;

             contextWin = document.createElement('div');
             contextWin.className ='contex';
             contextWin.style.top=polY+"px";
             contextWin.style.left=polX+"px";
             console.log(polX+"s"+polY);

             document.body.appendChild(contextWin);

             return false;

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

            this.delet(winClose);
            this.minWin(winMin);
    }
};

document.oncontextmenu = function(e)
{
        if((e.target.className== 'img')||(e.target.className== 'text'))
        {
            Icon.prototype.context(e);
            return false;
        }
        else
        {
            if(e.target.tagName=='HTML')
            {
                CustomWindow.prototype.contex(e);
                return false;
            }
            else
            {
                return false;
            }
        }
};










//размер
//document.body.onmousedown = function(e)
//{
//    if (e.target.className == "winText")
//    {
//        var polX,
//        polY,
//        sch= 0,
//        polStX,
//        polStY;
//
//        polX = event.clientX;
//        polY = event.clientY;
//        //if(sch==0)
//        //{
//        //    sch=1;
//        //    polStX=e.target.style.width;
//        //    polStY=e.target.style.height;
//        //}
//        //polX=polX-polStX;
//        //polY=polY-polStY;
//
//        e.target.style.width=+polX+"px";
//        e.target.style.height=+polY+"px";
//        console.log(polX+"s"+polY);
//    }
//
//};
