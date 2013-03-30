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
        for(win in this.windows){
            //проверка было ли открыто это окно?
            if(win.name == nameWin) {
                if(win.state=='hidde'){
                   win.state == 'open';
                }
                win.render();
            } else {
                this.create(obj);
            }
        }
    },
    create: function (obj){
        var win  = new Window(obj.windowOpt).init();
        this.windows.push(win);
    },
    close: function(obj){
        for(var win in this.windows){
            if(win===obj){
                this.windows.removeElement(win);
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