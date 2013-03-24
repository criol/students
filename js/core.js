HTMLElement.prototype.addClass = function (newClass) {
    if (this.hasClass(newClass)) return this;
    else {
        this.className = this.className + ' ' + newClass;
        return this;
    }
};

HTMLElement.prototype.removeClass = function (name) {
            var reg = new RegExp('(\\s|^)'+name+'(\\s|$)');
            this.className=this.className.replace(reg,'');
        };

HTMLElement.prototype.toggleClass = function (name) {
    if (this.hasClass(name)) this.removeClass(name); else this.addClass(name);	
};

HTMLElement.prototype.hasClass = function(name) {
    return this.className.match(new RegExp('(\\s|^)'+name+'(\\s|$)'));
}

HTMLElement.prototype.addUniqClass = function (elems, newClass) {

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