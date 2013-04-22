startOS.OSSettings = {
    music: {
        name: 'deep',
        type: 'music',
        itext:'music',
        img:'url(../images/music.png) no-repeat top left',
        windowOpt: {
            name: 'Now Playing: Deep Purple - Smoke on the water',
            type: 'music',
            width: 300,
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
        itext:'itext',
        img:'url(../images/text.png) no-repeat top left',
        windowOpt: {
            name: 'ololo.txt',
            type: 'text',
            width: 300,
            height: 200,
            state: 'open',
            callback: function(){
                alert('opened!!!');
            }
        }
    }

};

startOS.renderAll();
