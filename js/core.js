function getClassReg(className)
{
	return new RegExp('(\\s|^)'+className+'(\\s|$)');
};

HTMLElement.prototype.addClass = function (newClass) {
    if (this.hasClass(newClass)) return this;
    else {
        this.className = this.className + ' ' + newClass;
        return this;
    }
};

HTMLElement.prototype.removeClass = function (className) {
    this.className=this.className.replace(getClassReg(className),'');
};

HTMLElement.prototype.toggleClass = function (className) {
    if (this.hasClass(className)) this.removeClass(className); else this.addClass(className);	
};

HTMLElement.prototype.hasClass = function(className) {
	return this.className.match(getClassReg(className));
};

HTMLElement.prototype.addUniqClass = function (fromName, className) {
    var elems = document.getElementsByClassName(fromName);
    for(e in elems){
	    if(Object.prototype.toString.call(elems[e]) === "[object HTMLDivElement]" && elems[e]!=this){
			elems[e].removeClass(className);
		}
		else this.toggleClass(className);
	}
};

Array.prototype.inArray = function (elem) {
    var res = false,
        i = 0,
        max = this.length;

    for (i; i<max; i+=1){
        if (elem === this[i]){
            res = true;
        }
    }

    return res;
};

Array.prototype.removeElement =  function(elem){
	var i;
	for(i=0;i<this.length;i+=1){
		if(this[i]===elem){
			this.splice(i,1);
		}
	}
}

Array.prototype.lastElement = function (){
    var lastElem = this.pop();
    this.push(lastElem);
    return lastElem;
}

/////////////////
///Drag'n'Drop///
/////////////////
var dnd = {
    //начало перемещения
    //e - event obj
    //node  - узел, который двигаем
    dragStart:function(e,node){
        //координата узла
        var rect;
        dnd.canDrag=true;
        dnd.objTarget=node||e.target.parentNode;
        //записать координаты узла в объект
        rect = dnd.objTarget.getBoundingClientRect();
        dnd.left = getComputedStyle(dnd.objTarget).getPropertyValue('left');
        dnd.top =  getComputedStyle(dnd.objTarget).getPropertyValue('top');
        dnd.x = e.pageX - rect.left;
        dnd.y = e.pageY - rect.top;
        //отказаться от стд действий браузера
        e.preventDefault();
    },
    //перемещение
    //e - event obj
    drag:function(e){
       if(dnd.canDrag){
           dnd.objTarget.style.left = e.pageX-dnd.x+'px';
           dnd.objTarget.style.top = e.pageY-dnd.y+'px';
       }
    },
    //опустить объект
    //e - event obj
    dragFinish:function(e){
         dnd.canDrag=false;
        dnd.x=null;
        dnd.y=null;
        //можно накладывать разные условия в зависимости от того,куда упало окно...
    }
}


