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
	//	alert(classNames.inArray([2]));
	}
	else {
		this.addClass(newClass);
      //  alert(classNames.inArray([1]));

	}
};

HTMLElement.prototype.addClass = function (elems, newClass) {

};

Array.prototype.inArray = function (elem) {
    var res = true,
        i = 0,
        max = this.length;

    for (i; i<max; i+=1){
        if (elem === this[i]){
            res = false;
        }
    }

    return res;
};