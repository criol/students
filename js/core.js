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

    var classNames = [],
        i=0;

    for (var icon in elems) {

        classNames[i]  = elems[icon].root.className;

        var selectedClass = classNames[i].split(' ')

        classNames[i] = selectedClass.removeActive(newClass).join(' ');

        elems[icon].root.className = classNames[i];

        i++;
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
