var Icon,
    iconManager;
var workSpace = document.getElementById('workSpace');

iconManager = {

    iconSettings: {},

    icons: {},

    position: {
        top: 10,
        left: 10
    },

    active: {

    },

    renderAll: function(){
        var a;

        for (a in this.iconSettings) {

            new Icon(this.iconSettings[a]).init(this.position,this.iconSettings[a]);

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
    init: function(pos, item) {
        iconManager.icons[this.name] = this;
        this.render(pos,item);
        this.assignEvents();
    },

    render: function (pos,item) {
        /*var iconImg,
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
*/

       // containerDiv.style.top = pos.top + 'px';
       // containerDiv.style.left = pos.left + 'px';

       // this.root = containerDiv;

       // document.body.appendChild(containerDiv);


        workSpace.innerHTML= workSpace.innerHTML + (tmpl('icon_tmpl', this));
        var containerDiv = document.getElementsByClassName("icon "+this.type);
        containerDiv[0].style.top= pos.top +'px';
        containerDiv[0].style.left= pos.left +'px';
        this.root = containerDiv[0];
    },

    assignEvents: function() {
        this.root.addEventListener('click', this.makeActive.bind(this));
      //  this.root.addEventListener('dblclick', this.openWindow.bind(this));
        this.root.addEventListener('click',this.toggleActive.bind(this));
        this.root.on('dblclick', function () {
            publisher.publish('windowOpen');
        });
    },


    makeActive: function () {
       this.root.addClass('active');
    },

    toggleActive :function() {
        this.root.addUniqClass('icon','active');
    }


 /*   openWindow: function(){
        var win = new CustomWindow(this.windowOpt);
        win.init();
        win.open();
    }*/
};

//publisher.subscribe('windowOpen',CustomWindow.open());


