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
    create: function(type){
        //type - тип создаваемой иконки
        var icon;
        switch(type){
            case 'music':
                icon = new Icon(this.iconSetting.music);
                break
            case 'text':
                icon  = new Icon(this.iconSettings.text);
                break
            default :
                icon = new Icon(this.iconSetting.unknown)
        }

        icons.push(icon);
        this.renderAll();
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