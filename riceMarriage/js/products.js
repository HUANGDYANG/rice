// $(function () {
//     $('#click_content').click(
//         function () {
//             $('#tab').child[0]
//         }
//     )
// })
window.onload = function () {

    click_content.onclick = function (e) {
        // tab.children[1].lastChild.className = 'active_tab'
        // tab.children[0].firstChild.classList.remove('active_tab')
        console.log(e);
        tab.children[1].onclick(e)

    }
    tab.children[0].onclick = function () {
        this.firstChild.className = 'active_tab' ;
        tab.children[1].firstChild.classList.remove('active_tab')
        panel1.style.display = 'block'
        panel2.style.display = 'none'
        return false
    }
    tab.children[1].onclick = function (e) {
        // console.log(e);
        this.firstChild.className = 'active_tab' ;
        tab.children[0].firstChild.classList.remove('active_tab')
        panel1.style.display = 'none'
        panel2.style.display = 'block'
        // e.preventDefault()
    }

    window.onscroll = function (e) {
        // console.log(e);
        // console.log(this);
        // console.log(document.body.scrollTop);
        // console.log(document.documentElement.scrollTop);  //w3c
        if(document.documentElement.scrollTop>780) {
            tab.style.position = 'fixed'
            panel1.style.marginTop = '75px'
            panel2.style.marginTop = '65px'
            // panel2.style.position = 'absolute'
            li_buy.style.opacity = '1'
            li_buy.style.left = '100%'
        } else {
            tab.style.position = 'relative'
            panel1.style.marginTop = '0px'
            panel2.style.marginTop = '0px'
            li_buy.style.opacity = '0'
            li_buy.style.left = '66%'
            // panel1.style.position = 'absolute'
            // panel2.style.position = 'absolute'

        }
    }
}

