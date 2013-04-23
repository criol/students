var OSManager;
///////////////////////////////////
///////Модель менеджера ОС/////////
////////////////////////////////////
oSManagerModel = {
	windowsManager: {},
	iconsManager: {},
    startManager:{},
	onSelect: {},
	x: {},
	y: {},
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
		if(Menu!='undefined' && typeof(Menu)==='object')
		Menu.destroy();
	},
	removeIcon: function(obj){
		this.iconsManager.removeIcon(obj);
		obj.removeHTML();
	},
	renameIcon: function(obj){
		this.iconsManager.renameIcon(obj);
	},
	addIcon: function(type){
		this.iconsManager.addIcon(type);
	},
	openContext: function(e)
	{
	    e.preventDefault();
		e.stopPropagation();
        Menu = new ContextMenu(menuDesktopSettings);
		Menu.init(e, this);
	},
	openStart: function(e)
	{
	alert();
        Start = new StartMenu(menuStartSettings);
		Start.init(e, this);
	},
	click: function(e)
	{
		this.closeContext();
		this.iconsManager.renameIcon();

	},
	selectFiles: function(x1, y1, x2, y2)
	{
		for(i in this.iconsManager.icons)
		{
            if(!this.iconsManager.icons.hasOwnProperty(i)) continue
			if(parseInt(this.iconsManager.icons[i].root.style.top)<y2 && parseInt(this.iconsManager.icons[i].root.style.top)>y1 && parseInt(this.iconsManager.icons[i].root.style.left)<x2 && parseInt(this.iconsManager.icons[i].root.style.left)>x1)
			{
				this.iconsManager.makeNotUniqActive(this.iconsManager.icons[i].root);
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
    this.startManager = new StartManager(startManagerModel);
};


OSManager.prototype = {
     assignEvent:function(){
         document.body.addEventListener('mousemove',dnd.drag);
         document.body.addEventListener('mouseup',dnd.dragFinish);
         window.addEventListener('click', this.click.bind(this));
         window.addEventListener('contextmenu', this.openContext);
         window.addEventListener('mousedown', select.start);
         window.addEventListener('mouseup', select.stop);
         window.addEventListener('mousemove', select.move);
     }
}
var os = new OSManager(oSManagerModel);
os.start();
os.assignEvent();

