var ContextMenu,
    CMManager;

CMManager = {
};

ContextMenu = function(x,y){
     this.y = y;
     this.x = x;
};

ContextMenu.prototype = {
    init: function(){
        //CMManager.menu[this.type] = this;	
        this.render();
    },

    render: function(){
		var contextMenu, ul, lis0, lis1, lis2;

		contextMenu = document.createElement('div');
		contextMenu.className = 'contextMenu';
		
		ul = document.createElement('ul');
		
		lis0 = document.createElement('il');
		lis0.innerText = "Открыть";
		
		lis1 = document.createElement('li');
		lis1.innerText = "Удалить";
		
		lis2 = document.createElement('li');
		lis2.innerText = "Свойства";
		
		contextMenu.style.margin = this.y +"px 0 0 "+ this.x +"px";
		
		
		this.root = contextMenu;
		
		//ul.innerHTML += lis0;
		ul.appendChild(lis0);
		ul.appendChild(lis1);
		ul.appendChild(lis2);
		//ul.appendChild(lis2);
		contextMenu.appendChild(ul);
		document.body.appendChild(contextMenu);		
    },
    
    destroy: function()
    {
    	//this = null;
    	alert();
    }

};



//test push from aptana