(function accountEvent(){
    let account_input = document.getElementsByClassName('main__account-input')[0];
    let account_logo = document.getElementsByClassName('main__account-logo')[0];
    account_input.addEventListener('focus', function(){
        account_logo.style.color = '#F69';
        this.nextElementSibling.style.color = '#F69';
    });
    account_input.addEventListener('focusout', function(){
        account_logo.style.color = '';
        this.nextElementSibling.style.color = '';
    });
    account_input.addEventListener('keyup', function() {
        if(this.value.length !== 0){
            this.nextElementSibling.style.display = 'block';
            this.nextElementSibling.style.color = '#F69';
        }
        else this.nextElementSibling.style.display = 'none';
    });
})();
(function passwordEvent() {
    let password_input = document.getElementsByClassName('main__password-input')[0];
    let password_logo = document.getElementsByClassName('main__password-logo')[0];
    password_input.addEventListener('focus', function () {
        password_logo.style.color = '#F69';
        this.nextElementSibling.style.color = '#F69';
    });
    password_input.addEventListener('focusout', function () {
        password_logo.style.color = '';
        this.nextElementSibling.style.color = '';
    });
    password_input.addEventListener('keyup', function() {
        if(this.value.length !== 0){
            this.nextElementSibling.style.display = 'block';
            this.nextElementSibling.style.color = '#F69';
        }
        else this.nextElementSibling.style.display = 'none';
    });
})();
(function phone_accountEvent() {
    let phone_input = document.getElementsByClassName('main__phone-input')[0];
    let phone_tip = document.getElementsByClassName('main__phone-tip')[0];
    let phone_logo = document.getElementsByClassName('main__phone-input-logo')[0];
    let phone_reg = /^1[34578]\d{9}$/;                        //验证手机正则(输入前7位至11位)
    phone_input.addEventListener('focus', function () {
        phone_logo.style.color = '#F69';
        this.nextElementSibling.style.color = '#F69';
    });
    phone_input.addEventListener('focusout', function () {
        phone_logo.style.color = '';
        this.nextElementSibling.style.color = '';
        if(!phone_reg.test(this.value) && phone_input.value.length !== 0){
            phone_tip.style.display = 'inline';
        }
        else {
            phone_tip.style.display = 'none';
        }
    });
    phone_input.addEventListener('keyup', function() {
        if(this.value.length !== 0){
            this.nextElementSibling.style.display = 'block';
            this.nextElementSibling.style.color = '#F69';
        }
        else this.nextElementSibling.style.display = 'none';
    });
})();
(function dynamicEvent() {
    let dynamic_input = document.getElementsByClassName('main__dynamic-input')[0];
    dynamic_input.addEventListener('focus', function () {
        this.nextElementSibling.nextElementSibling.style.color = '#F69';
    });
    dynamic_input.addEventListener('focusout', function () {
        this.nextElementSibling.nextElementSibling.style.color = '';
    });
    dynamic_input.addEventListener('keyup', function() {
        if(this.value.length !== 0){
            this.nextElementSibling.nextElementSibling.style.display = 'block';
            this.nextElementSibling.nextElementSibling.style.color = '#F69';
        }
        else this.nextElementSibling.nextElementSibling.style.display = 'none';
    });
})();
(function sendMessageEvent(){
   let send = document.getElementsByClassName('main__send-btn')[0];
   send.onclick = function(e){
       let time = 5;
       let that = this;
       let Countdown = function(){
           if(time < 1) {
               that.disabled = false;
               that.innerHTML = '发送动态密码';
               clearInterval(t);
               return;
           }
           that.innerHTML = `${time}s后重新发送`;
           time--;
       };
       this.disabled = true;
       let t = setInterval(Countdown, 1000);
   }
}());
(function change_box(){
    let main_page_r = document.getElementsByClassName('main__page__r')[0];
    let phone_login_box = document.getElementsByClassName('main__page__phone-login-box')[0];
    let short_message = document.getElementsByClassName('main__Short-message-login')[0];
    let account_a = document.getElementsByClassName('main__account-a')[0];
    let common_login = document.getElementsByClassName('main__common-login')[0];
    short_message.onclick = function(){
        main_page_r.style.display = 'none';
        phone_login_box.style.display = 'inline-block';
    };
    account_a.onclick = function(){
        main_page_r.style.display = 'inline-block';
        phone_login_box.style.display = 'none';
    };
    common_login.onclick = function(){
        main_page_r.style.display = 'inline-block';
        phone_login_box.style.display = 'none';
    }
})();