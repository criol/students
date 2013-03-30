Window = function(obj){
    var a;
    for (a in obj){
        if(obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
}

Window.prototype = {
    init: function () {
        this.render();
    },
    render: function(){
        var containerDiv,winHeader,btnMin,btnMax,btnClose,mainDiv,winName;

        containerDiv = document.createElement('div');
        containerDiv.style.zIndex=this.layer;
        containerDiv.className = 'window ' + this.type+' '+this.state;

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

        this.root = containerDiv;
        document.getElementById('desktop').appendChild(containerDiv);
        //document.body.appendChild(containerDiv);
    },
    maximize:function(){
        document.getElementById('desktop').removeChild(this.root);
        os.maxWindow(this);
    },
    minimize:function(){
        document.getElementById('desktop').removeChild(this.root);
        os.minWindow(this);
    },
    close:function(){
        document.getElementById('desktop').removeChild(this.root);
        os.closeWindow(this);
    },
    assignEvents:function(){
    }
};

///////////////////////////////////
///////Модель  окна////////////////
////////////////////////////////////
windowModel = {
    name:'',
    type:'',
    width:0,
    height:0,
    state:'open',
    layer:2,
    position:{
        top:0,
        left:0
    },
    callback: function(){
        alert('opened!!!');
    }
};

