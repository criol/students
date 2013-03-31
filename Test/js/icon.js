///////////////////////////////////
///////Модель иконки по типу///////
////////////////////////////////////
iconsSettings  = eval("("+serverResponse+")");


/*

iconsSettings = {"icons":[{"name":"C:\\Users\\Демьян\\Desktop\\Arabic.ini","type":"none"},{"name":"C:\\Users\\Демьян\\Desktop\\desktop.ini","type":"none"},{"name":"C:\\Users\\Демьян\\Desktop\\Kerkythea 2008.lnk","type":"none"},{"name":"C:\\Users\\Демьян\\Desktop\\Новый документ в формате RTF.rtf","type":"none"}]} 
console.log(iconsSettings);
*/
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
        os.openWindow(this);
    },

    openContextMenu: function(e){
        e.preventDefault();
        this.root.addUniqClass('icon','active');
        Menu = new ContextMenu(menuSettings);
		Menu.init(e, this);
		//console.log(menu);
        //win.open();
    } ,

    removeHTML:function(){
        document.getElementById('desktop').removeChild(this.root);
    }
};