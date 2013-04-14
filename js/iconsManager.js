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
        this.icons = [];
        this.iconSetting = iconsSettings;
        this.create();
    },
    openFolder:function(){
        this.removeAllHTML();
        this.start();
        this.create();
    },
    create: function(){
        for(var i = 0; i<this.iconSetting.icons.length;i+=1){
	        var icon = new Icon(this.iconSetting.icons[i]);
            this.icons.push(icon);
        }
        this.renderAll();
    },
    removeAllHTML:function(){
        for(var icon in this.icons){
           if(!this.icons.hasOwnProperty(icon)) continue
           if(this.icons[icon].isRender){
               this.icons[icon].removeHTML();
           }
        }
    },
    renderAll: function(){
		this.removeAllHTML();
        this.setDefaultPosition();
        var a;
        for (a in this.icons) {
            if (!this.icons.hasOwnProperty(a)) continue
            this.icons[a].init(this.position);
            this.position.top+=100;
            if (this.position.top > 500) {
                this.position.left += 100;
                this.position.top = 10;
            }
        }
    },
    setDefaultPosition:function(){
        this.position.left=10;
        this.position.top=10;
    },
	makeActive:function(obj){
        var fromName = 'icon',
            className = 'active';
        obj.addUniqClass(fromName, className);
	},
	removeIcon:function(obj){
		if(this.icons.inArray(obj))
		{		
			this.icons.removeElement(obj);
			var forSer = {};
			
			console.log(this.icons);  
			
			//console.log(forSer);
			//console.log(localStorage.getItem('testObject'));
			for(var i=0; i<this.icons.lenght; i++)
			{alert("lll");
				var obj = {};
				for(a in this.icons[i])
				{
				if (this.icons[i].hasOwnProperty(a))
					{
					if(a!="root"){
					alert(a);
						obj[a]=this.icons[i][a];
						}
					}					
				}
			}
			JSON.stringify(this.icons)
			//localStorage.setItem('testObject', );
			console.log(this.icons);
			this.renderAll();
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