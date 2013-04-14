var Menu;

var menuIconSettings= {list:[
   { 
		name: 'Destroy',
		title: 'Уда<u>л</u>ить',
		callBack: function()
		{
			os.removeIcon(this.sender);
		}
	},
	{
		name: 'Open',
		title: '<u>О</u>ткрыть',
		callBack: function()
		{
			os.openWindow(this.sender);
		}
	},
	{
		name: 'Rename',
		title: 'Пере<u>и</u>меновать',
		callBack: function()
		{
			os.renameIcon(this.sender);
		}
	},
	{
		name: 'copy',
		title: 'Ко<u>п</u>ировать',
		callBack: function()
		{
			os.addIcon();
		}
	},
	{
		name: 'prop',
		title: '<u>С</u>войства',
		callBack: function()
		{
			alert("Name: "+this.sender.name+"\nType: "+this.sender.type);
		}
	}
],
sender: {}
}
	

var menuDesktopSettings= {list:[
   { 
		name: 'Create',
		title: 'Создать >',
		callBack: function()
		{
			os.addIcon();
		}
	},
	{
		name: 'Refresh',
		title: 'Обновить',
		callBack: function()
		{
			
		}
	},
	{
		name: 'prop',
		title: 'Свойства',
		callBack: function()
		{
		    var ua = navigator.userAgent, brow, date;
			if (ua.search(/MSIE/) > 0) brow = 'Internet Explorer';
			if (ua.search(/Firefox/) > 0) brow = 'Firefox';
			if (ua.search(/Opera/) > 0) brow = 'Opera';
			if (ua.search(/Chrome/) > 0) brow = 'Google Chrome';
			if (ua.search(/Safari/) > 0) brow = 'Safari';
			
			var d=new Date();
			var day=d.getDate();
			var month=d.getMonth() + 1;
			var year=d.getFullYear();
			date = day + "/" + month + "/" + year;
			
			alert("Ваш браузер: "+brow+"\n Дата: "+date);
		}
	}
],
sender: {}
}	
	
ContextMenu = function (obj) {
    var a;
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
};
	/*
ContextMenu = function(x,y){
     this.y = y;
     this.x = x;
};*/

ContextMenu.prototype = {
	menuItems: {},
    init: function(e, obj){
		this.destroy();
        this.render(e, obj);
        this.assignEvents(obj);
    },
    render: function(e, obj){
		var contextMenu, ul, li;

		contextMenu = document.createElement('div');
		contextMenu.id = 'contextMenu';
		
		ul = document.createElement('ul');
		for(var i in this.list)
		{
			if (!this.list.hasOwnProperty(i)) continue
			li = document.createElement('li');
			li.innerHTML = this.list[i].title;
			li.id = this.list[i].name;
			this.sender = obj;
			li.addEventListener('click', this.list[i].callBack.bind(this));
			ul.appendChild(li);
		}
	
		contextMenu.style.margin = e.clientY+"px 0 0 "+e.clientX+"px";
		this.root = contextMenu;
		
		contextMenu.appendChild(ul);
		document.body.appendChild(contextMenu);			
    },
    
    assignEvents: function(obj) {
        this.root.addEventListener('click', this.doIt.bind(this));
        this.root.addEventListener('contextmenu', this.doIt.bind(this));
	},
    
    doIt: function()
    {
		//console.log(this);
    	//this.destroy();
    },
    
    destroy: function()
    {
		if(document.getElementById('contextMenu')!=null)
			document.body.removeChild(document.getElementById('contextMenu'));
    	delete this;
    }

};



//test push from aptana