HTMLElement.prototype.addClass = function (newClass) {
    var classNames = this.className.split(' ');

    if (classNames.inArray(newClass)){
        return this;
    } else {
        this.className = this.className + ' ' + newClass;
        return this;
    }
};


HTMLElement.prototype.addUniqClass = function (shareClass, newClass) {

    var i= 0,
        elems = document.querySelectorAll('.' + shareClass);

    for (i; i<elems.length; i+=1) {
        elems[i].className = elems[i].className.split(' ').removeActive(newClass).join(' ');
    }

    this.className = this.className + ' ' + newClass;
};

/*
HTMLElement.prototype.closeWindow = function (windowsList) {
    var a;
    for ( a in windowsList) {
        if (windowsList[a].root == this) {
            delete windowsList[a];
            document.body.removeChild(this);
        }
    }
};
*/



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



Array.prototype.removeActive = function (newClass) {

    var i= 0,
        max = this.length;

    for (i; i < max; i+=1) {

        if( newClass===this[i] ) {

            this.splice(i,1);

        }

    }
    return this;
};

HTMLElement.prototype.on = function (type, fn) {
    var types = type.split(' '),
        i;

    for (i=0; i < types.length; i += 1){
        this.addEventListener(types[i], fn);
    }
    return this;
};