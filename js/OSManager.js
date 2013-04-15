var OSManager;
///////////////////////////////////
///////Модель менеджера ОС/////////
////////////////////////////////////
oSManagerModel = {
	windowsManager: {},
	iconsManager: {},
    startManager:{},

	openWindow: function(obj){
        //obj  -   иконка ,которая вызвала
		this.windowsManager.open(obj);
        this.startManager.open(obj);
	},
	closeWindow: function(obj){
        //obj - окно
        this.windowsManager.close(obj);
        this.startManager.close(obj);
	},
    maxWindow:function(obj){
        //obj - окно
        this.windowsManager.maximize(obj);
    },
    minWindow:function(obj){
        //obj - окно
        this.windowsManager.minimize(obj);
    },
	makeActiveIcon:function(obj){
		this.iconsManager.makeActive(obj);
	},	
    start: function(){
        this.windowsManager.start();
        this.iconsManager.start();
        this.startManager.start();
    	this.assignEvents();
		//alert();
    },
	closeContext: function(){
		//if(Menu=!'undefined'&&Menu!=false)
		Menu.destroy();
	},
	assignEvents: function(){
		//window.addEventListener('click', this.closeContext);
		//window.addEventListener('contextmenu', this.openContext);
	},
	removeIcon: function(obj){
		this.iconsManager.removeIcon(obj);
		obj.removeHTML();
	},
	renameIcon: function(obj){
		this.iconsManager.renameIcon(obj);
	},
	addIcon: function(){
		this.iconsManager.addIcon();
	},
	openContext: function(e)
	{
	    e.preventDefault();
        Menu = new ContextMenu(menuDesktopSettings);
		Menu.init(e, this);
	},
	openStart: function(e)
	{
	alert();
        Start = new StartMenu(menuStartSettings);
		Start.init(e, this);
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
    this.startManager = new StartManager(startManagerModel);
};


OSManager.prototype = {

}
var os = new OSManager(oSManagerModel);
os.start();
