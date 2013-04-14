var Menu;

var menuStartSettings= {list:[
   { 
		name: 'Destroy',
		title: 'Удалить',
		callBack: function()
		{
			os.removeIcon(this.sender);
		}
	},
	{
		name: 'Open',
		title: 'Открыть',
		callBack: function()
		{
			os.openWindow(this.sender);
		}
	},
	{
		name: 'prop',
		title: 'Свойства',
		callBack: function()
		{
			alert("Name: "+this.sender.name+"\nType: "+this.sender.type);
		}
	}
],
sender: {}
}
	
StartMenu = function (obj) {
    var a;
	alert();
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
};


StartMenu.prototype = {
	menuItems: {},
    init: function(e, obj){
		this.destroy();
        this.render(e, obj);
        this.assignEvents(obj);
    },
    render: function(e, obj){
		var contextMenu, ul, li;
alert();
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