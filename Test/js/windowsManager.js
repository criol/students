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
        // todo : логика ,обрабатывающая открыто ли окно?  нужно ли создать новое?...
        //obj  -  иконка,которая вызвала
        var win  = new Window(obj.windowOpt).init();
        this.windows.push(win);

    },
    close: function() 	{
        console.log("Close window");
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