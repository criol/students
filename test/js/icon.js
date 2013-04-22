var Icon,
    IconManager;
Icon = function(obj){
    var a;
    for (a in obj){
        if(obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
};

Icon.prototype= {
    newIcon: function(obj){
    console.log(obj);
    },

    openWindow: function(){

    }
};
