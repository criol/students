
var menuStartSettings= {
    menuStartList:[],
    music:{
        name:'mPlayer',
        type:'music',
        data:''
    },
    browser:{
        name:'Sofuri',
        type:'html',
        data:''
    },
    video:{
         name:'vPlayer',
         type:'video',
         data:''
    }
};
	
StartMenu = function (obj) {
    var a;
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
            // заполнить коллекцию свойствами из obj menuStartList, саму себя во внутрь не ложить, УГ получилось, но работает
            if(a!='menuStartList'){
                this.menuStartList.push(obj[a]);
            }
        }
    }
};


StartMenu.prototype = {
    init: function(){
        this.render();
        this.assignEvents();
    },
    open:function(){
        this.root==undefined?this.render():this.showMenu();
    },
    render: function(){
        var container,divContent,menuContainer;

        container = document.createElement('div');
        container.className = 'startMenu';

        divContent = document.createElement('div');
        divContent.className ='startMenu content';
        container.appendChild(divContent);

        menuContainer=document.createElement('ul');
        menuContainer.id='startMenuList';
        divContent.appendChild(menuContainer);

        for(var i = 0 ; i<this.menuStartList.length;i+=1){
            var  menuItem;
            menuItem = document.createElement('li');
            menuItem.className='startMenuItem';
            //open win by click
            menuItem.addEventListener('click',this.openWindow.bind(this.menuStartList[i]));
            //hide startMenu
            menuItem.addEventListener('click',this.hideMenu);

            menuItemDiv=document.createElement('div');
            menuItemLbl=document.createElement('label');

            menuItemDiv.className = 'startMenuImg '+this.menuStartList[i].type;
            menuItemLbl.textContent = this.menuStartList[i].name;

            menuItem.appendChild(menuItemDiv);
            menuItem.appendChild(menuItemLbl);
            menuContainer.appendChild(menuItem);
        }

        document.getElementById('StartPanel').appendChild(container);
        this.root = container;
    },
    openWindow:function(e){
       // this - конкретная иконка,на которую нажали
        os.openWindow(this);
        e.stopPropagation();

    },
    showMenu:function(){
        document.getElementsByClassName('startMenu')[0].removeClass('hide');
    },
    hideMenu:function(){
        //отсылает запрос к менеджеру
        os.hideStart();
    },
    hide:function(){
        //скрыть отображение
        document.getElementsByClassName('startMenu')[0].addClass('hide');
    },
    assignEvents: function() {

	}
};