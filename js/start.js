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
var adre ;

PanelPusc.prototype = {
 desctorStart: function(){
    var menuStart,
	buttonStart,
	workStart,
	oclokStart,
    panelStart,
    close,replay,controlDiv,user,
    stringText,
    stringMusic,IM,PM,IT,PT,
    embmenuStart;

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


    embmenuStart = document.createElement('div');
    embmenuStart.className = 'embmenuStart';

    close = document.createElement('div');
    close.className = 'close';
    close.addEventListener('click',function(){window.close(true)});


     user = document.createElement('div');
    user.className = 'user';

    controlDiv = document.createElement('div');
    controlDiv.className = 'control';

    replay = document.createElement('div');
    replay.className = 'replay';
     replay.addEventListener('click',function(){window.location.reload(true)});

    stringText = document.createElement('div');
    stringText.className = 'stringText'

    stringMusic = document.createElement('div');
    stringMusic.className = 'stringMusic';

     IM = document.createElement('div');
     IM.className = 'IM';

     PM = document.createElement('div');
     PM.className ='PM';
     PM.innerHTML='Music';

     IT = document.createElement('div');
     IT.className = 'IT';

     PT = document.createElement('div');
     PT.className = 'PT';
     PT.innerHTML='Text';

    stringMusic.appendChild(IM);
    stringMusic.appendChild(PM);

    stringText.appendChild(IT);
    stringText.appendChild(PT);

    embmenuStart.appendChild(stringMusic);
    embmenuStart.appendChild(stringText);

    menuStart.appendChild(embmenuStart);
    menuStart.appendChild(user);
    menuStart.appendChild(controlDiv);
    controlDiv.appendChild(close);
    controlDiv.appendChild(replay);
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
},

 minIcn: function(polo,min){
     var i,adres,minim;
     if(polo!='min')
     {
        adre=polo;
     }
     else
     {
         minim=polo;
     }
     adre.addEventListener('click', function (){
     if(minim=='min')
     {   adres=min;
         adres.style.display='block';
         minim='max';
     }
     });

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
            var newIcon,
                r;
            newIcon = document.createElement('div');
        	r = document.getElementsByClassName('workStart')[0];
        	newIcon.className =iconc.type+'imgIcon'
            r.appendChild(newIcon);
        	this.root=r;
            PanelPusc.prototype.minIcn(newIcon,r);
        };

        newIc.subscribe(Icon);
        Icon.deliver(this.color);

        function Publisher() {
        	this.subscribers = [];
        };
    }
};

PanelPusc.prototype.desctorStart();

