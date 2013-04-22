var OS,
    startOS;

startOS = {
    renderAll: function(){
        var a;
        for (a in this.OSSettings) {
            new OS(this.OSSettings[a]);
        }
    }
};

OS = function (obj) {
    var a;
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
this.prototype.newWindows();
};

OS.prototype={
    newIcon:function(obj){
        Icon.newIcon(obj);
    },
    newWindows:function(){
    alert('ololo');
    }

}



