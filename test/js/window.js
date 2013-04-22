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
        this.render(this.type);
    },

    render: function(e){
      // console.log(e);
      // document.body.innerHTML = tmpl('icon')({id:'icon'+' '+e, img:'img', text:'itext'});
      // iconManager.renderAll();
    }
};



