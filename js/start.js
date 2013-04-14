var PanelPusc,
    puscManager;

puscManager = {
    puscSettings: {},

    icons: {},

    active: {

    },

    renderAll: function(){
        var a;

        for (a in this.iconSettings) {

            new Icon(this.iconSettings[a]).init(this.position);

            this.position.top+=100;
            if (this.position.top > 500) {
                this.position.left += 100;
                this.position.top = 10;
            }
        }
    }
};

PanelPusc = function (obj) {
    var a;

    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
};

PanelPusc.prototype = {
 desctorStart: function(){
    var menuStart,
	buttonStart,
	workStart,
	oclokStart,
    panelStart;

	panelStart = document.createElement('div');
	panelStart.className = 'panelStart';
	
	buttonStart = document.createElement('div');
	buttonStart.className = 'buttonStart';
	
	workStart = document.createElement('div');
	workStart.className = 'workStart';
	
	oclokStart = document.createElement('div');
	oclokStart.className = 'oclokStart';
	
	menuStart = document.createElement('div');
	menuStart.className = 'menuStart';

	buttonStart.appendChild(menuStart);
	panelStart.appendChild(buttonStart);
	panelStart.appendChild(workStart);
	panelStart.appendChild(oclokStart);
	this.root = panelStart;
	document.body.appendChild(panelStart);
},

delIcon: function(names){
       var k = document.getElementsByClassName('workStart')[0],
           l = document.getElementsByClassName(names+'imgIcon')[0];
           k.removeChild(l);
       //r.substring(0, r.length - 3);
       //console.log(r);

},

 newIconStart:function (iconc){
        var Icon = new Publisher;

        Function.prototype.subscribe = function(publisher) {
        	publisher.subscribers.push(this);
        	return this;
        };

        Publisher.prototype.deliver = function(data) {
        	this.subscribers.forEach(
        	function(fn) {
        			fn(data);
        		}
        	);
        	return this;
        };

        var newIc = function(from) {
        	newIcon = document.createElement('div');
        	r = document.getElementsByClassName('workStart')[0];
        	newIcon.className =iconc.type+'imgIcon'
            r.appendChild(newIcon);
        	this.room=r;


        };

        newIc.subscribe(Icon);
        Icon.deliver(this.color);

        function Publisher() {
        	this.subscribers = [];
        };
    }
};

PanelPusc.prototype.desctorStart();

