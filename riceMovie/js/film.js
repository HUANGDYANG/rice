window.onload = function () {
    var oRanking = document.getElementById('ranking')
    var aItem = oRanking.getElementsByClassName('item')
    var aImg = oRanking.getElementsByTagName('img')
    for(let i=0 ; i<aItem.length ; i++) {
        aItem[i].onmouseenter = function () {
            for(var j=0 ; j<aImg.length ; j++) {
                aImg[j].style.display = 'none'
            }
            aImg[i].style.display = 'block'
        }
    }

    arrow.onclick = function (e) {
        maskPanel.style.display = 'block'
        e.stopPropagation() ;
        // return false
    }
    document.onclick = function () {
        maskPanel.style.display = 'none'

    }
    content.onclick=function (e) {
        e.stopPropagation() ;
    }
}