var CustomWindow,
    CWManager;

CWManager = {
    windows: {},

    options: {
        width: this.width,
        height: this.height
    }
};


//alert('');
CustomWindow = function(obj){
    var a;
    for (a in obj){
        if(obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
};

CustomWindow.prototype = {
    init: function () {
        CWManager.windows[this.type] = this;
        this.render();
    },

    render: function(){

        var windowText,
            windowMusic,
            containerDiv,
            cDHeader,
            btnClose,
            headerText,
            headerBtnGroup,
            leftBorder,
            rightBorder,
            bottomBorder,
            btnRollUp;


        containerDiv = document.createElement('div');
        containerDiv.className = 'window ' + this.type;

        cDHeader = document.createElement('div');
        cDHeader.className = 'windowHeader';

        btnClose = document.createElement('div');
        btnClose.className = 'btnClose';

        windowText = document.createElement('div');
        windowText.className = '';

        btnRollUp = document.createElement('div');
        btnRollUp.className = 'btnRollUp';

        headerText = document.createElement('div');
        headerText.className ='headerText';
        headerText.innerHTML = this.name;

        cDHeader.appendChild(headerText);
        cDHeader.appendChild(btnRollUp);
        cDHeader.appendChild(btnClose);

        containerDiv.appendChild(cDHeader);
        containerDiv.appendChild(windowText);

        this.root = containerDiv;

    },

    open: function () {

        document.body.appendChild(this.root);
    }
};



