///////////////////////////////////
///////Модель иконки по типу///////
////////////////////////////////////
iconsSettings= {
    music: {
        name: 'deep',
        type: 'music',
        isRender:false,
        windowOpt: {
            name: 'Now Playing: Deep Purple - Smoke on the water',
            type: 'music',
            width:300,
            height: 200,
            isRender:false,
            state: 'open',
            layer:2,
            callback: function(){
                alert('opened!!!');
            }
        }
    },

    text: {
        name: 'book',
        type: 'text',
        isRender:false,
        windowOpt: {
            name: 'ololo.txt',
            type: 'text',
            width:300,
            isRender:false,
            height: 200,
            state: 'open',
            layer:2,
            callback: function(){
                alert('opened!!!');
            }
        }
    },

     unknown: {
            name: 'unknown',
            type: 'unknown',
            isRender:false,
            windowOpt: {
                name: 'unknown',
                type: 'unknown',
                width:300,
                height: 200,
                isRender:false,
                state: 'open',
                layer:2,
                callback: function(){
                    alert('unknow!!!');
                }
            }
        }
}

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
        os.openWindow(this);
    },

    openContextMenu: function(e){
        e.preventDefault();
        this.root.addUniqClass('icon','active');
        var menu = new ContextMenu(e.pageX, e.pageY).init();
        //win.open();
    } ,

    removeHTML:function(){
        document.getElementById('desktop').removeChild(this.root);
    },
};