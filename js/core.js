HTMLElement.prototype.addClass = function (newClass) {
    var classNames = this.className.split(' ');

    if (classNames.inArray(newClass)){
        return this;
    } else {
        this.className = this.className + ' ' + newClass;
        return this;
    }
};

HTMLElement.prototype.toggleClass = function (newClass) {
var classNames = this.className.split(' ');

    if (classNames.inArray(newClass)){
		//alert("off");		
	}
	else {
		this.addClass(newClass);
		//alert("on");		

	}
};

HTMLElement.prototype.addClass = function (elems, newClass) {

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