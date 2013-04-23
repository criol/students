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
        containerDiv.className = 'btnStart ' + this.state;

        contentImg = document.createElement('div');
        contentImg.className = 'img';
        containerDiv.appendChild(contentImg);

        this.root = containerDiv;
        document.getElementById('StartPanel').appendChild(containerDiv);
    },
	assignEvents:function(){
		this.root.addEventListener('click', os.openStart);
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
