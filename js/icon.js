///////////////////////////////////
///////Модель иконки по типу///////
////////////////////////////////////

//Переключение между боевым отображением====>>>>>>>>>>>>>>>
//iconsSettings  = eval("("+serverResponse+")");

//ИЛИ 

//Тестовым контентом!!! VVVVVVVVVVVVVVVVVVVVVVVV
iconsSettings = {"icons":[{"name":"Arabic.ini","type":"text","data":"Title  = Ethernet-Adaptertreiber, Description = Ethernet-Adaptertreiber installieren."},{"name":"desktop.ini","type":"text","data":"[Desktop] On MacBook Pro"},{"name":"Avetis.mp3","type":"music", "data":"Avetis.mp3"},{"name":"dema.html","type":"html", "data":"dema.html"},{"name":"Новый док.rtf","type":"text", "data":"Инфографика ИТАР-ТАСС. Иллюстрированные сведения о продолжительности новогодних и майских праздников в 2013 г. и переносе выходных дней, Минтруд предложил назначить россиянам 10-дневные каникулы в январе и девять выходных в мае."},{"name":"Ne budite spyaschih.mp3","type":"music", "data":"Ne budite spyaschih.mp3"},{"name":"Девочка огонь.mp4","type":"video", "data":"lie to me.mp4"},{"name":"Sofuri","type":"html", "data":"_start.html"}]}


Icon = function (obj) {
    var a;
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
};

Icon.prototype = {
    init: function(pos) {
        this.render(pos);
        this.assignEvents();
    },

    render: function (pos) {
        var iconImg,
            iconText,
            containerDiv;

        containerDiv = document.createElement('div');
        containerDiv.className = 'icon ' + this.type;

        iconImg = document.createElement('div');
        iconImg.className = 'img';

        iconText = document.createElement('div');
        iconText.className = 'text';
        iconText.innerHTML = this.name;

        containerDiv.appendChild(iconImg);
        containerDiv.appendChild(iconText);

        containerDiv.style.top = pos.top + 'px';
        containerDiv.style.left = pos.left + 'px';

        this.root = containerDiv;
        document.getElementById('desktop').appendChild(containerDiv);
        this.isRender = true;
    },

    assignEvents: function() {
        this.root.addEventListener('click', function(){os.makeActiveIcon(this)});
        this.root.addEventListener('dblclick', this.openWindow.bind(this));
        this.root.addEventListener('contextmenu', this.openContextMenu.bind(this));
    },
/*
    makeActive: function (e) {
        var fromName = 'icon',
            className = 'active';
        this.root.addUniqClass(fromName, className);
    },*/

    openWindow: function(){
        this.root.removeClass('active');
		if(this.type=="folder")
		{
			api = "http://localhost:51204/Api/GetDektop?path="+this.path;
			getApi(api);
            iconsSettings  = eval("("+serverResponse+")");
            //os.iconsManager.iconSetting = iconsSettings;

            os.iconsManager.openFolder();
           // os.iconsManager.renderAll();
		}
        os.openWindow(this);
    },

    openContextMenu: function(e){
        e.preventDefault();
        this.root.addUniqClass('icon','active');
        Menu = new ContextMenu(menuIconSettings);
		Menu.init(e, this);
		//console.log(menu);
        //win.open();
    } ,

    removeHTML:function(){
	try{
        document.getElementById('desktop').removeChild(this.root);
	}
	catch(e){}
	}
};