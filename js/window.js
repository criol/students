var CustomWindow,
    CWManager;

CWManager = {
    windows:{}
};

CustomWindow = function(obj){
    var a;
    for (a in obj){
        if(obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
};

CustomWindow.prototype = {
    init: function () {
        CWManager.windows[this.type] = this;
        this.render();
    },

    render: function(){

    }

};



