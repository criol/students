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
			delet: 'notDelet',
            iconState:'open',
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
			delet: 'notDelet',
            iconState:'open',
            callback: function(){
                alert('opened!!!');
            }
        }
    },
    
	paint: {
        name: 'picture',
        type: 'img',
        windowOpt: {
            name: 'img1.jpg',
            type: 'img',
            width:300,
            height: 200,
            state: 'open',
            iconState: 'open',
            callback: function(){
                alert('opened!!!');
            }
        }
    }

};

iconManager.renderAll();