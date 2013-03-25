HTMLElement.prototype.addClass = function (newClass) {
    var classNames = this.className.split(' ');

    if (classNames.inArray(newClass)){
        return this;
    } else {
        this.className = this.className + ' ' + newClass;
        return this;
    }
};

HTMLElement.prototype.addUniqClass = function (elems, newClass) {

    var nodes = elems.querySelectorAll('.icon');

    var i= 0;

    for (i; i< nodes.length; i+=1) {

        var classNames = nodes[i].className.split(' ');

         nodes[i].className=classNames.removeActive(newClass).join(' ');
    }

    this.className = this.className + ' ' + newClass;

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

Array.prototype.removeActive = function (elem) {

    var i= 0,
        max = this.length;

    for (i; i < max; i+=1) {

        if(elem===this[i]) {

            this.splice(i,1);

        }

    }
    return this;
};