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
    renderAll:function(){
        for (var i = 0;i<this.windows.length;i+=1){
            this.windows[i].render(this.position);
            this.position.top+=20;
            this.position.left+=20;

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
        this.windows.push(win);
        this.renderAll();
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