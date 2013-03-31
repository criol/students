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
        this.assignEvents()
    },

    render: function(){

        var newWindow,
            header,
            btnClose,
            headerText,
            headerBtnGroup,
            leftBorder,
            rightBorder,
            footerBorder,
            footerLeftBorder,
            footerRightBorder,
            headerBorder,
            headerLeftBorder,
            headerRightBorder,
            btnRoll,
            footer,
            content,
            contentBlock;



        newWindow = document.createElement('div');
        newWindow.className = 'window ' + this.type;

        header = document.createElement('div');
        header.className = 'header';

        headerLeftBorder = document.createElement('div');
        headerLeftBorder.className = 'topLeftCornerBorder';

        headerRightBorder = document.createElement('div');
        headerRightBorder.className = 'topRightCornerBorder';

        headerBorder = document.createElement('div');
        headerBorder.className = 'topCentrBorder';

        headerBtnGroup = document.createElement('div');
        headerBtnGroup.className = 'windowBtns';

        btnClose = document.createElement('div');
        btnClose.className = 'close';

        btnRoll = document.createElement('div');
        btnRoll.className = 'roll';

        headerText = document.createElement('div');
        headerText.className ='headerText';
        headerText.innerHTML = this.name;

        contentBlock = document.createElement('div');
        contentBlock.className = 'contentBlock';

        leftBorder = document.createElement('div');
        leftBorder.className = 'leftBorder';

        rightBorder = document.createElement('div');
        rightBorder.className = 'rightBorder';

        content = document.createElement('div');
        content.className = 'content';

        footer = document.createElement('div');
        footer.className = 'footer';

        footerLeftBorder = document.createElement('div');
        footerLeftBorder.className = 'bottomLeftCornerBorder';

        footerBorder = document.createElement('div');
        footerBorder.className = 'bottomCentrBorder';

        footerRightBorder = document.createElement('div');
        footerRightBorder.className = 'bottomRightCornerBorder';


        headerBtnGroup.appendChild(btnRoll);
        headerBtnGroup.appendChild(btnClose);

        headerBorder.appendChild(headerText);
        headerBorder.appendChild(headerBtnGroup);

        header.appendChild(headerLeftBorder);
        header.appendChild(headerBorder);
        header.appendChild(headerRightBorder);

        newWindow.appendChild(header);

        contentBlock.appendChild(leftBorder);
        contentBlock.appendChild(content);
        contentBlock.appendChild(rightBorder);

        newWindow.appendChild(contentBlock);

        footer.appendChild(footerLeftBorder);
        footer.appendChild(footerBorder);
        footer.appendChild(footerRightBorder);

        newWindow.appendChild(footer);

        this.root = newWindow;
    },

    open: function () {
        document.body.appendChild(this.root);
    },

    assignEvents: function() {
        this.root.getElementsByClassName('close').item(0).addEventListener('click',this.close.bind(this));
    },

    close: function() {
        this.root.closeWindow(CWManager.windows);
    }
};



