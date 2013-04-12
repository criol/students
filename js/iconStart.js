/**
 * Created with JetBrains WebStorm.
 * User: Компьютер
 * Date: 12.04.13
 * Time: 14:40
 * To change this template use File | Settings | File Templates.
 */
///////////////////////////////////
///////Модель иконки в меню ПУСК///
////////////////////////////////////
iconsStartSettings = {"iconsStart":[{"name":"Kerkyth.mp3","type":"music"}]}

IconStart = function (obj) {
    var a;
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
};

IconStart.prototype = {
    init: function(pos) {
        this.render(pos);
        this.assignEvents();
    },

    render: function (pos) {
        var iconImg,
            containerDiv;

        containerDiv = document.createElement('div');
        containerDiv.className = 'iconStart ' + this.type;

        iconImg = document.createElement('div');
        iconImg.className = 'imgStart';
        containerDiv.appendChild(iconImg);

        containerDiv.style.top = pos.top + 'px';
        containerDiv.style.left = pos.left + 'px';

        this.root = containerDiv;
        document.getElementById('StartPanel').appendChild(containerDiv);
        this.isRender = true;
    },

    assignEvents: function() {
        this.root.addEventListener('click', function(){os.makeActiveIcon(this)});
        this.root.addEventListener('dblclick', this.openWindow.bind(this));
        this.root.addEventListener('contextmenu', this.openContextMenu.bind(this));
    },

    openWindow: function(){
        this.root.removeClass('active');
      /*  if(this.type=="folder")
        {
            api = "http://localhost:51204/Api/GetDektop?path="+this.path;
            getApi(api);
            iconsSettings  = eval("("+serverResponse+")");
            os.iconsManager.openFolder();
        }  */
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
        try{
            document.getElementById('StartPanel').removeChild(this.root);
        }
        catch(e){}
    }
};


