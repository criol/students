var Icon,
    iconManager;

iconManager = {
    iconSettings: {},

    icons: {},

    position: {
        top: 10,
        left: 10
    },

    active: {},

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
        iconManager.icons[this.name] = this;
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
    },

    //makeActive: function () {
    //    this.root.toggleClass('active');
    //},

    openWindow: function(){
        var win = new CustomWindow(this.windowOpt).init();
	}
};


