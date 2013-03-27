var OSManager, OSManagerModel, /*WindowsManager,*/ WindowsManagerModel, /*IconsManager,*/ IconsManagerModel;
///////////////////////////////////
///////Модель менеджера ОС/////////
////////////////////////////////////
oSManagerModel = {
	windowsManager: {},
	iconsManager: {},
	openWindow: function(obj){
        //obj  -   иконка ,которая вызвала
		this.windowsManager.open(obj);
	},
	closeWindow: function(){
		this.windowsManager.close();
	},
    start: function (){
        this.windowsManager.start();
        this.iconsManager.start();
    }

};
 ///////////////////////////////////
///////Модель менеджера окна/////////
////////////////////////////////////
windowsManagerModel = {
    windows:{},
    start: function(){
        this.windows = [];
        this.renderAll();
    },
    renderAll:function(){

      for (var i = 0;i<this.windows.length;i+=1){
          windows[i].render();
      }

    },
    open: function(obj){
        // todo : логика ,обрабатывающая открыто ли окно?  нужно ли создать новое?...
        //obj  -  иконка,которая вызвала
        var win  = new Window(obj.windowOpt).init();
        this.windows.push(win);

	},
	close: function() 	{
		console.log("Close window");
	}
};

///////////////////////////////////
///////Модель  окна////////////////
////////////////////////////////////
windowModel = {
    width:0,
    height:0,
    position:{
        top:0,
        left:0
    }
}
///////////////////////////////////
///////Модель иконки по типу///////
////////////////////////////////////
iconsSettings= {
    music: {
            name: 'deep',
            type: 'music',
            windowOpt: {
                name: 'Now Playing: Deep Purple - Smoke on the water',
                type: 'music',
                width:300,
                height: 200,
                state: 'open',
                callback: function(){
                alert('opened!!!');
            }
        }
    },

    text: {
        name: 'book',
            type: 'text',
            windowOpt: {
            name: 'ololo.txt',
                type: 'text',
                width:300,
                height: 200,
                state: 'open',
                callback: function(){
                alert('opened!!!');
            }
        }
    }
}
///////////////////////////////////
///////Модель менеджера иконок/////
////////////////////////////////////
iconsManagerModel = {
    iconSetting:{},

    icons: {},

    position: {
        top: 10,
        left: 10
    },
    active: {

    },

    start:function(){
       icons = [];
        this.iconSetting = iconsSettings;
       this.renderAll();
    },
	create: function(){
		 var icon = new Icon(this.iconSetting.music).init(this.position);
        icons.push(icon);
		 console.log(this.icons[0]);
	},
		
    renderAll: function(){
        var a;

        for (a in this.icons) {
            this.icons[a].init(this.position);
            this.position.top+=100;
            if (this.position.top > 500) {
                this.position.left += 100;
                this.position.top = 10;
            }
        }
    }
};

OSManager = function (obj) {
    var a;
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
    this.windowsManager = new WindowsManager(windowsManagerModel);
    this.iconsManager = new IconsManager(iconsManagerModel);
};

WindowsManager = function(obj) {
    var a;
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
    this.windows = [];
};

Window = function(obj){
    var a;
    for (a in obj){
        if(obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
}

IconsManager = function(obj) {
    var a;
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
};

Icon = function (obj) {
    var a;
	console.log("create icon " +obj);
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
			console.log(this[a]);
        }
    }
};

Icon.prototype = {
    init: function(pos) {
        this.render(pos);
        this.assignEvents();
    },

    render: function (pos) {
        var iconImg,
            iconText,
            containerDiv;

        containerDiv = document.createElement('div');
        containerDiv.className = 'icon ' + this.type;

        iconImg = document.createElement('div');
        iconImg.className = 'img';

        iconText = document.createElement('div');
        iconText.className = 'text';
        iconText.innerHTML = this.name;

        containerDiv.appendChild(iconImg);
        containerDiv.appendChild(iconText);

        containerDiv.style.top = pos.top + 'px';
        containerDiv.style.left = pos.left + 'px';

        this.root = containerDiv;

        document.body.appendChild(containerDiv);
    },

    assignEvents: function() {
        this.root.addEventListener('click', this.makeActive.bind(this));
        this.root.addEventListener('dblclick', this.openWindow.bind(this));
    	this.root.addEventListener('contextmenu', this.openContextMenu.bind(this));
    },

    makeActive: function (e) {
  		var fromName = 'icon',
    		className = 'active';
   		
    	this.root.addUniqClass(fromName, className);
    },

    openWindow: function(){
    	this.root.removeClass('active');
		os.windowsManager.open(this);
        //win.open();
    },
        
    openContextMenu: function(e){
    	e.preventDefault();
    	this.root.addUniqClass('icon','active');
    	var menu = new ContextMenu(e.pageX, e.pageY).init();
        //win.open();
    }
};

Window.prototype = {
    init: function () {
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

var os = new OSManager(oSManagerModel);
os.start();
os.iconsManager.create();

