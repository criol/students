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
        //obj  -  иконка,которая вызвала
        var nameWin, win;
        nameWin = obj.windowOpt.name;
        if(this.windows.length!=0){
            for(var win in this.windows){
                //проверка было ли открыто это окно?
                if(this.windows[win].name === nameWin) {
                    if(this.windows[win].state ==='hide'){
                       this.windows[win].state = 'open';
                       this.windows[win].render();
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
        var win  = new Window(obj.windowOpt);
        win.init();
        this.windows.push(win);
    },
    close: function(obj){
        for(var win in this.windows){
            if(this.windows[win]===obj){
                this.windows.removeElement(this.windows[win]);
                this.renderAll();
            }
        }
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