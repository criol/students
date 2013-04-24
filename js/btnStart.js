/**
 * Created with JetBrains WebStorm.
 * User: Компьютер
 * Date: 12.04.13
 * Time: 15:04
 * To change this template use File | Settings | File Templates.
 */
btnStartModel={
    state:'hide',
    init:function(){
        this.render();
		this.assignEvents();
    },
    render:function(){
        var containerDiv,contentImg;

        containerDiv = document.createElement('div');
        containerDiv.id = 'btnStart';

        contentImg = document.createElement('div');
        contentImg.className = 'img';
        containerDiv.appendChild(contentImg);

        this.root = containerDiv;
        document.getElementById('StartPanel').appendChild(containerDiv);
    },
    openStart:function(){
        os.openStart();
    },
	assignEvents:function(){
		this.root.addEventListener('click', this.openStart);
	}
}
BtnStart =  function(obj){
    var a;
    for (a in obj){
       if(obj.hasOwnProperty(a)){
           this[a]=obj[a];
       }
    }
}
