startOS.OSSettings = {
    music: {
        name: 'deep',
        type: 'musicIcon',
        itext:'music',
        img:'imgMusic',
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
        type: 'textIcon',
        itext:'text',
        img:'imgText',
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
