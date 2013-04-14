///////////////////////////////////
///////Модель  окна////////////////
////////////////////////////////////
windowModel = {
    name:'',
    type:'',
    width:380,
    height:250,
    top:50,
    left:50,
    state:'open',
    isRender:false,
    layer:2,
	data:'',
    callback: function(){
        alert('opened!!!');
    }
};

Window = function(obj){
    windowModel.name = obj.name;
    windowModel.type = obj.type;
    windowModel.data = obj.data;
    var a;
    for (a in windowModel){
        if(windowModel.hasOwnProperty(a)){
            this[a] = windowModel[a];
        }
    }
}

Window.prototype = {
    init: function () {
        this.render();
    },
    render: function(pos){
        var containerDiv,winHeader,btnMin,btnMax,btnClose,mainDiv,winName,textArea;
        containerDiv = document.createElement('div');
        containerDiv.className = 'window ' + this.type+' '+this.state;
        if(pos!=undefined){
            containerDiv.style.top = pos.top + 'px';
            containerDiv.style.left = pos.left + 'px';
        }
        mainDiv = document.createElement('div');
        mainDiv.className = 'winContent';
		if(this.type=="text")
		{
			textArea = document.createElement('textarea');
			textArea.innerHTML = this.data;
			mainDiv.appendChild(textArea);
		}
		else if(this.type=="music")
		{
			mainDiv.innerHTML = '<object type="application/x-shockwave-flash" data="http://xflash.ucoz.ru/raznoe/153.swf" width="500" height="240"><param name="bgcolor" value="#ffffff" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="wmode" value="transparent" /><param name="movie" value="" /><param name="flashvars" value="st=;file=" /></object><audio src="'+this.data+'" controls autoplay></audio>';
		}
		else if(this.type=="video")
		{
			mainDiv.innerHTML = '<iframe width="560" height="315" src="http://www.youtube.com/embed/ew6ZVNJU5_4" frameborder="0" allowfullscreen></iframe>';
		}
        winHeader = document.createElement('div');
        winHeader.className = 'header';

        winName = document.createElement('label');
        winName.className = 'labelHeader';
        winName.textContent = this.name;
        winHeader.appendChild(winName);

        btnClose = document.createElement('button');
        btnClose.addEventListener('click',this.close.bind(this));
        btnClose.className = 'Close';
        winHeader.appendChild(btnClose);

        btnMax = document.createElement('button');
        btnMax.className = 'button Max';
        btnMax.addEventListener('click',this.maximize.bind(this));
        winHeader.appendChild(btnMax);

        btnMin = document.createElement('button');
        btnMin.addEventListener('click',this.minimize.bind(this));
        btnMin.className = 'button Min';
        winHeader.appendChild(btnMin);

        containerDiv.appendChild(winHeader);
        containerDiv.appendChild(mainDiv);
        this.isRender = true;

        this.root = containerDiv;
        document.getElementById('desktop').appendChild(containerDiv);
        this.assignEvents();
    },
    showWindow:function(){
        this.root.removeClass('hide');
        this.root.addClass('open');
        this.root.style.display='block';
    },
    maximize:function(){
        this.removeHTML();
        os.maxWindow(this);
    },
    minimize:function(){
        this.removeHTML();
        os.minWindow(this);
    },
    close:function(){
        this.removeHTML();
        os.closeWindow(this);
    },
    removeHTML:function(){
        document.getElementById('desktop').removeChild(this.root);
    },
    makeActive:function(){
        //this.root.style.zIndex=3;
        this.root.addUniqClass('window','active');

    },
    assignEvents:function(){
        this.root.addEventListener('click',this.makeActive.bind(this));
    }
};
