///////////////////////////////////
///////Модель  окна////////////////
////////////////////////////////////
windowModel = {
    name:'',
    type:'',
    width:400,
    height:200,
    top:50,
    left:50,
    state:'open',
    isRender:false,
    layer:2,
    callback: function(){
        alert('opened!!!');
    }
};

Window = function(obj){
    windowModel.name = obj.name;
    windowModel.type = obj.type;
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
        var containerDiv,winHeader,btnMin,btnMax,btnClose,mainDiv,winName;
        containerDiv = document.createElement('div');
        containerDiv.className = 'window ' + this.type+' '+this.state;
        if(pos!=undefined){
            containerDiv.style.top = pos.top + 'px';
            containerDiv.style.left = pos.left + 'px';
        }
        mainDiv = document.createElement('div');
        mainDiv.className = 'winContent';
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
