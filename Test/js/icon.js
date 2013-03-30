///////////////////////////////////
///////Модель иконки по типу///////
////////////////////////////////////
iconsSettings= {
    music: {
        name: 'deep',
        type: 'music',
        windowOpt: {
            name: 'Now Playing: Deep Purple - Smoke on the water',
            type: 'music',
            width:300,
            height: 200,
            state: 'open',
            callback: function(){
                alert('opened!!!');
            }
        }
    },

    text: {
        name: 'book',
        type: 'text',
        windowOpt: {
            name: 'ololo.txt',
            type: 'text',
            width:300,
            height: 200,
            state: 'open',
            callback: function(){
                alert('opened!!!');
            }
        }
    }
}

Icon = function (obj) {
    var a;
    console.log("create icon " +obj);
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
            console.log(this[a]);
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

        document.body.appendChild(containerDiv);
    },

    assignEvents: function() {
        this.root.addEventListener('click', this.makeActive.bind(this));
        this.root.addEventListener('dblclick', this.openWindow.bind(this));
        this.root.addEventListener('contextmenu', this.openContextMenu.bind(this));
    },

    makeActive: function (e) {
        var fromName = 'icon',
            className = 'active';

        this.root.addUniqClass(fromName, className);
    },

    openWindow: function(){
        this.root.removeClass('active');
        os.windowsManager.open(this);
        //win.open();
    },

    openContextMenu: function(e){
        e.preventDefault();
        this.root.addUniqClass('icon','active');
        var menu = new ContextMenu(e.pageX, e.pageY).init();
        //win.open();
    }
};