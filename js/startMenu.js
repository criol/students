
var menuStartSettings= {
    startMenuItems:[
    {
        music:{
            name:'mPlayer',
            type:'music',
            data:''
        }
    },
    {
        browser:{
            name:'Sofuri',
            type:'html',
            data:''
        }
    },
    {
        video:{
            name:'vPlayer',
            type:'video',
            data:''
        }
    }]
};
	
StartMenu = function (obj) {
    var a;
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
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
        var container,divContent;

        container = document.createElement('div');
        container.className = 'startMenu';

        divContent = document.createElement('div');
        divContent.className ='startMenu content';
        container.appendChild(divContent);

        document.getElementById('StartPanel').appendChild(container);
        this.root = container;
    },
    showMenu:function(){
        document.getElementsByClassName('startMenu')[0].removeClass('hide');
    },
    hide:function(){
        document.getElementsByClassName('startMenu')[0].addClass('hide');
    },
    assignEvents: function() {

	}
};