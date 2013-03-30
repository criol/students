///////////////////////////////////
///////Модель менеджера иконок/////
////////////////////////////////////
iconsManagerModel = {
    iconSetting:{},

    icons: {},

    position: {
        top: 10,
        left: 10
    },
    active: {

    },

    start:function(){
        icons = [];
        this.iconSetting = iconsSettings;
        this.renderAll();
    },
    create: function(){
        var icon = new Icon(this.iconSetting.music).init(this.position);
        icons.push(icon);
        console.log(this.icons[0]);
    },

    renderAll: function(){
        var a;

        for (a in this.icons) {
            this.icons[a].init(this.position);
            this.position.top+=100;
            if (this.position.top > 500) {
                this.position.left += 100;
                this.position.top = 10;
            }
        }
    }
};

IconsManager = function(obj) {
    var a;
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
};