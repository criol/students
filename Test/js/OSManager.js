var OSManager;
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
	closeWindow: function(obj){
        //obj - окно
        this.windowsManager.close(obj);
	},
    maxWindow:function(obj){
        //obj - окно
        this.windowsManager.maximize(obj);
    },
    minWindow:function(obj){
        //obj - окно
        this.windowsManager.minimize(obj);
    },
    start: function(){
        this.windowsManager.start();
        this.iconsManager.start();
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

var os = new OSManager(oSManagerModel);
os.start();
os.iconsManager.create('music');
os.iconsManager.create('text');
os.iconsManager.create();
