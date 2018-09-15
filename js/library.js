function strim(str){
    while(str[0] === ' '){
        str = str.substr(1, str.length - 1 );
    }
    while(str[str.length - 1] === ' '){
        str = str.substr(0, str.length - 1);
    }
    return str;
}

function removeClass(obj, ClassName){
    if(obj.className.indexOf(' ') !== -1){
        obj.className = obj.className.replace(' '+ ClassName, '');
    }
    else{
        obj.className = obj.className.replace(ClassName, '');
    }
}

function addClass(obj, ClassName){
    if(obj.className.length === 0){
        obj.className = ClassName;
    }
    else{
        obj.className += (' ' + ClassName);
    }
}

function insertAfter(obj, newobj){
    let parent = obj.parentNode;
    if(obj === parent.lastElementChild){
        parent.appendChild(newobj);
    }
    else{
        parent.insertBefore(newobj, obj.nextSibling);
    }
}

function $(str){
    if(str.indexOf("#") !== -1){
        return typeof str === "string" ? document.getElementById(a):undefined;

    }
    if(str.indexOf(".") !== -1)
    return typeof str === "string" ? document.getElementById(a):undefined;
}