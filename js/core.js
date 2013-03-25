function getClassReg(className)
{
	return new RegExp('(\\s|^)'+'active'+'(\\s|$)');
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
		console.log(elem+' is find!')
			this.splice(i,1);
		}
	}
}