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
        document.getElementById('wrapperIcon').innerHTML += tmpl('icon')({id:obj.type, img:obj.img, itext:obj.itext});
        document.getElementById('embmenuStart').innerHTML += tmpl('iconPysk')({id:obj.type+'Pysk', img:obj.img+'Pysk', itext:obj.windowOpt.type});

    },

    openWindow: function(){

    }
};
