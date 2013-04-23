////////////////////////////////////
///Модель менеджера меню "Пуск"/////
////////////////////////////////////
startManagerModel = {
    btnStart:{},
    iconsStart: {},
    iconStartSetting:{},
    startMenu:{},

    start:function(){
        this.iconsStart = [];
        this.iconStartSetting = iconsStartSettings;
        this.btnStart = new BtnStart(btnStartModel);
        this.startMenu = new StartMenu(menuStartSettings);
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
    createIconStart:function(obj){
        //obj is ico
        iconStartModel.name=obj.name;
        iconStartModel.type=obj.type;
        iconStartModel.isStartPanel = false;
        var icoStart = new IconStart(iconStartModel);
        icoStart.render();
        icoStart.makeActive();
        this.iconsStart.push(icoStart);
    },
    openStartMenu:function(){
        var state = this.btnStart.state;
        if(state=='open'){
            this.startMenu.hide();
            this.btnStart.state='hide';
        } else {
            this.startMenu.open();
            this.btnStart.state='open';
        }
    },
    open:function(obj){
        //obj  -  иконка,которая вызвала
        var name = obj.name;
        var ico = this.iconStartInArray(name);
        if(ico!=undefined){
                this.iconsStart[ico].makeActive();
        } else {
            this.createIconStart(obj);
        }
    },
    close:function(obj){
        //obj is win
        var name = obj.name,
            ico=this.iconStartInArray(name);
        if(ico!=undefined){
            if(this.iconsStart[ico].isStartPanel){
               this.iconsStart[ico].makeDeactive();
            }else{
                this.iconsStart[ico].removeHTML();
                this.iconsStart.removeElement(this.iconsStart[ico]);
            }
            this.renderAll();
        }
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
        var a;
        for (a in this.iconsStart) {
            if (!this.iconsStart.hasOwnProperty(a)) continue
            this.iconsStart[a].init();
        }
    },
    makeActive:function(obj){
        var fromName = 'iconStart',
            className = 'active';
        obj.addUniqClass(fromName, className);
    },
    //ищет иконку в массиве, если находит, то возвращает ее номер
    iconStartInArray:function(name){
        var i= 0,res;
        for(var i=0;i<this.iconsStart.length;i+=1){
            if(this.iconsStart[i].name===name){
                res=i;
            }
        }
        return res;
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