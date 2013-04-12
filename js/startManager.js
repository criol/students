////////////////////////////////////
///Модель менеджера меню "Пуск"/////
////////////////////////////////////
startManagerModel = {
    btnStart:{},
    iconsStart: {},
    iconStartSetting:{},

    position: {
        top: 0,
        left: 0
    },
    start:function(){
        this.iconsStart = [];
        this.iconStartSetting = iconsStartSettings;
        this.btnStart = new BtnStart(btnStartModel);
        this.btnStart.init();
        this.create();
    },
    create: function(){
        for(var i = 0; i<this.iconStartSetting.iconsStart.length;i+=1){
            var iconStart = new IconStart(this.iconStartSetting.iconsStart[i]);
            this.iconsStart.push(iconStart);
        }
        this.renderAll();
    },
    removeAllHTML:function(){
        for(var iconStart in this.iconsStart){
            if(!this.iconsStart.hasOwnProperty(iconStart)) continue
            if(this.iconsStart[iconStart].isRender){
                this.iconsStart[iconStart].removeHTML();
            }
        }
    },
    renderAll: function(){
        this.removeAllHTML();
        this.setDefaultPosition();
        var a;
        for (a in this.iconsStart) {
            if (!this.iconsStart.hasOwnProperty(a)) continue
            this.iconsStart[a].init(this.position);
            this.position.left+=40;
            if (this.position.left >800) continue
        }
    },
    setDefaultPosition:function(){
        this.position.left=0;
        this.position.top=0;
    },
    makeActive:function(obj){
        var fromName = 'iconStart',
            className = 'active';
        obj.addUniqClass(fromName, className);
    },
    removeIconStart:function(obj){
        if(this.iconsStart.inArray(obj))
        {
            this.iconsStart.removeElement(obj);
            this.renderAll();
        }
    }
};

StartManager = function(obj) {
    var a;
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
};