window.onload =  function () {
    // var a = document.getElementById('wrapper')
    // console.log(wrapper);
    // console.log(a);
   //票房排行
    var oRanking = document.getElementById('ranking')
    // console.log(oRanking);
    var aItem = oRanking.getElementsByClassName('item')
    var aImg = oRanking.getElementsByTagName('img')
    // console.log(aImg[0]);
    // console.log(aItem);
    for(let i=0 ; i<aItem.length ; i++) {
        aItem[i].onmouseenter = function () {
            // console.log(this);
            // this.style.backgroundColor='yellow'
            for(var j=0 ; j<aImg.length ; j++) {
                aImg[j].style.display = 'none'
            }
            aImg[i].style.display = 'block'
        }
    }

    //类轮播图
    var count = 0,count2=0;
    left.onclick = function () {
        // console.log(1);
        if(count === 0) {
            count = 0
        } else {
            count -- ;
        }
        // console.log(count);
        // wrapper.style.left = 0 + 'px'
        console.log((950 * count));
        buffer(wrapper,{'left':-(950*count)+'px'})
        pages.innerText = (count+1) + '/' + 9
    }
    right.onclick = function () {
        // console.log(2);
        // wrapper.style.left = -950 +'px'
        if(count === 9) {
            count = 9
        } else {
            count ++
        }
        // console.log(count);
        buffer(wrapper,{'left':-(950*count) + 'px'})
        pages.innerText = (count+1) + '/' + 9
    }
    left2.onclick = function () {
        if(count2 === 0) {
            count2 = 0
        } else {
            count2 -- ;
        }
        buffer(wrapper2,{'left':-(950*count2)+'px'})
        pages2.innerText = (count2+1) + '/' + 9
    }
    right2.onclick = function () {
        if(count2 === 9) {
            count2 = 9
        } else {
            count2 ++
        }
        buffer(wrapper2,{'left':-(950*count2) + 'px'})
        pages2.innerText = (count2+1) + '/' + 9
    }

}

function getCSSAttrValue(obj, attr) {
    if(obj.currentStyle){ // IE 和 opera
        return obj.currentStyle[attr];
    }else {
        return window.getComputedStyle(obj, null)[attr];
    }
}


function buffer(obj, json, fn) {
    // 1.1 清除定时器
    clearInterval(obj.timer);

    // 1.2 设置定时器
    var begin = 0, target = 0, speed = 0;
    obj.timer = setInterval(function () {
        // 1.3.0 旗帜
        var flag = true;
        for(var k in json){
            // 1.3 获取初始值
            if("opacity" === k){ // 透明度
                begin =  parseInt( parseFloat(getCSSAttrValue(obj, k)) * 100);
                target = parseInt(parseFloat(json[k]) * 100);
            }else if("scrollTop" === k){
                begin = Math.ceil(obj.scrollTop);
                target = parseInt(json[k]);
            }else { // 其他情况
                begin = parseInt(getCSSAttrValue(obj, k)) || 0;
                target = parseInt(json[k]);
            }

            // 1.4 求出步长
            speed = (target - begin) * 0.2;

            // 1.5 判断是否向上取整
            speed = (target > begin) ? Math.ceil(speed) : Math.floor(speed);

            // 1.6 动起来
            if("opacity" === k){ // 透明度
                // w3c的浏览器
                obj.style.opacity = (begin + speed) / 100;
                // ie 浏览器
                obj.style.filter = 'alpha(opacity:' + (begin + speed) +')';
            }else if("scrollTop" === k){
                obj.scrollTop = begin + speed;
            }else if("zIndex" === k){
                obj.style[k] = json[k];
            }else {
                obj.style[k] = begin + speed + "px";
            }

            // 1.5 判断
            if(begin !== target){
                flag = false;
            }
        }

        // 1.3 清除定时器
        if(flag){
            clearInterval(obj.timer);
            // 判断有没有回调函数
            if(fn){
                fn();
            }
        }
    }, 20);
}
