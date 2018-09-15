
window.onload = function () {
    window.onscroll = function () {
        var top = document.documentElement.scrollTop
        if(top>455) {
            ranking.style.position = 'fixed'
            ranking.style.top = '0'
            ranking.style.width = '950px'
        } else if(top<=450){
            ranking.style.position = 'static' ;

        }
    }
}