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
window.onload = function(){
    (function CategoryListener(){
        let li_detail_List = document.querySelectorAll('.row-nav .li-detail');
        for(let i of li_detail_List){
            i.addEventListener('mouseover', function(e){
                e = e || window.event;
                let LiName = this.parentNode;
                for(let i of li_detail_List){
                    removeClass(LiName, 'li-select');
                }
                addClass(LiName, 'li-select');
            });
            i.addEventListener('mouseout',function(e){
                e = e || window.event;
                let LiName = this.parentNode;
                removeClass(LiName, 'li-select');
            });
        }
    })();
    (function ProblemListener(){
        let li_List = document.querySelectorAll('.common-problem-ul>li');
        for(let i of li_List){
            i.addEventListener('mouseover', function(e){
                e = e || window.event;
                for(let j of li_List){
                    removeClass(j.lastElementChild, 'ul-select');
                }
                // this.lastElementChild.className += ' ul-select';
                addClass(this.lastElementChild, 'ul-select');
                for(let k of li_List){
                    removeClass(k.firstElementChild, 'li-select');
                }
                addClass(this.firstElementChild, 'li-select');
            });
        }
    }());
};