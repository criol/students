var OSManager, OSManagerModel, /*WindowsManager,*/ WindowsManagerModel, /*IconsManager,*/ IconsManagerModel;
///////////////////////////////////
///////Модель менеджера ОС/////////
////////////////////////////////////
oSManagerModel = {
	windowsManager: {},
	iconsManager: {},
	openWindow: function(){
		this.windowsManager.open();
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
        renderAll();
    },
    renderAll:function(){

      for (var i = 0;i<this.windows.Length;i+=1){
          windows[i].render();
      }

    },
    open: function(){
		console.log("Open window");    
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
///////Модель менеджера иконок/////
////////////////////////////////////
iconsManagerModel = {
    iconSettings: {},
    icons: {},

    position: {
        top: 10,
        left: 10
    },
    active: {

    },
	iconSettings: {},
	
	create: function(){
		 this.icons[0] = new Icon(this.iconSettings);
		 console.log(this.icons[0]);
	},
		
    renderAll: function(){
        var a;

        for (a in this.iconSettings) {

            new Icon(this.iconSettings[a]).init(this.position);

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
        iconManager.icons[this.name] = this;
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
		var win = new CustomWindow(this.windowOpt).init();
        //win.open();
    },
        
    openContextMenu: function(e){
    	e.preventDefault();
    	this.root.addUniqClass('icon','active');
    	var menu = new ContextMenu(e.pageX, e.pageY).init();
        //win.open();
    }
};


var os = new OSManager(oSManagerModel);
os.start();

