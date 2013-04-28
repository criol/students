iconManager.iconSettings = {
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
    },

    internet: {
        name:'Internet Explorer',
        type:'internet',
        windowOpt: {
            name:'InternetExplorer',
            type: 'internet',
            width:800,
            height:600
        }
    }

};

iconManager.renderAll();