
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
        this.render();
    },
    render: function(){
        var container;
        container = document.createElement('div');
        container.className = 'startMenu';

        document.getElementById('StartPanel').appendChild(container);
        this.root = container;
    },
    
    assignEvents: function() {

	}
};