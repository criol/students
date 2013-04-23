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
	writeStorage:function(){
	var forSer = {icons:[]};
			for(var i=0; i<this.icons.length; i++)
			{
				var obj = {};
                var icon = this.icons[i];
				for(var a in icon)
				{
                    if (icon.hasOwnProperty(a)){
                        if(a!="root"){
                            obj[a]=icon[a];
                        }
                    }	
				}
				forSer.icons.push(obj);
			}
			localStorage.setItem('testObject', JSON.stringify(forSer));
	},
	removeIcon:function(obj){
		if(this.icons.inArray(obj))
		{		
			if(confirm("Вы уверены что хотите удалить: "+obj.name+"?"))
			{
			this.icons.removeElement(obj);
			this.writeStorage();
			this.renderAll();
			}
		}
	},
	renameIcon:function(obj){
		var icon;
		if(this.icons.inArray(obj))
		{	
			icon = obj.root.getElementsByClassName('text')[0];
			icon.setAttribute('ContentEditable', 'true');
			icon.toggleClass("editable");
		}
		else
		{
			for (var i = 0; i < this.icons.length; i++)
			{
				icon = this.icons[i].root.getElementsByClassName('text')[0];
				if (icon.getAttribute('contenteditable'))
				{
					icon.setAttribute('ContentEditable', 'false');
					icon.toggleClass = "editable";
					this.icons[i].name = icon.innerHTML;
					this.writeStorage();
					this.renderAll();
				}
			}	
		}
	},
	addIcon:function(type){
		this.icons.push(new Icon({name:"Новый "+type, type:type, data:""}));
			this.writeStorage();
			this.renderAll();
			os.renameIcon(this.icons[this.icons.length-1]);
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