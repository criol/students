///////////////////////////////////
///////Модель менеджера окна/////////
////////////////////////////////////
windowsManagerModel = {
    windows:{},
    position:{
        top:40,
        left:40
    },
    start: function(){
        this.windows = [];
        this.renderAll();
    },
    open: function(obj){
        //obj  -  иконка,которая вызвала
        var item,
            winName = obj.windowOpt.name;
        if(this.windows.length!=0){
            for(item in this.windows){
                if(!this.windows.hasOwnProperty(item)) continue
                //проверка было ли открыто это окно?
                if(this.windowInArray(winName)){
                    if(this.windows[win].state ==='hide'){
                       this.windows[win].state = 'open';
                       this.windows[win].renderAll();
                    }
                } else {
                    this.create(obj);
                }
            }
        } else {
            this.create(obj);
        }
    },
    minimize: function(obj){
        for (var win in this.windows){
            if(this.windows[win]===obj){
                this.windows[win].state='hide';
                this.windows[win].render();
            }
        }
    },
    maximize: function(obj){
        for(var win in this.windows){
            if(this.windows[win]===obj){
                this.windows[win].state = 'max';
                this.windows[win].render();
            }
        }
    },
    create: function (obj){
       //создать если такого окна не существует в массиве окон
        var win  = new Window(obj.windowOpt);
        if(!this.windows.inArray(win)){
            this.windows.push(win);
            this.renderAll();
        }else {
            delete win;
        }

    },
    close: function(obj){
        for(var win in this.windows){
            if(this.windows[win]===obj){
                this.windows.removeElement(this.windows[win]);
                this.renderAll();
            }
        }
    },
    removeAllHTML:function(){
        for(var i=0;i<this.windows.length;i+=1){
            if(this.windows[i].isRender){
                this.windows[i].removeHTML();
            }
        }
    },
    renderAll:function(){
        this.removeAllHTML();
        this.setDefaultPosition();
        for (var i = 0;i<this.windows.length;i+=1){
            this.windows[i].render(this.position);
            this.position.top+=30;
            this.position.left+=30;
        }
    },
    setDefaultPosition:function(){
        this.position.top = 40;
        this.position.left = 40;
    },
    windowInArray:function(winName){
        var i= 0,res=false;
        for(var i=0;i<this.windows.length;i+=1){
            if(this.windows[i].name===winName){
                res=true;
            }
        }
        return res;
    }
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