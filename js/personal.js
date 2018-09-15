/*方法说明
 *@method 删除类
 *@param{object} obj DOM节点对象
 *@param{string} ClassName 类名
*/
function removeClass(obj, ClassName){
    if(obj.className.indexOf(' ') !== -1){
        obj.className = obj.className.replace(' '+ ClassName, '');
    }
    else{
        obj.className = obj.className.replace(ClassName, '');
    }
}
/*方法说明
 *@method 添加类
 *@param{object} obj DOM节点对象
 *@param{string} ClassName 类名
*/
function addClass(obj, ClassName){
    if(obj.className.length === 0){
        obj.className = ClassName;
    }
    else{
        obj.className += (' ' + ClassName);
    }
}
/*方法说明
 *@method 元素后插入
 *@param{object} obj 被插入的DOM节点对象
 *@param{object} newobj 插入的新DOM节点对象
*/
function insertAfter(obj, newobj){
    let parent = obj.parentNode;
    if(obj === parent.lastElementChild){
        parent.appendChild(newobj);
    }
    else{
        parent.insertBefore(newobj, obj.nextSibling);
    }
}
/*方法说明
 *@method 显示个人菜单详情
 *@param{object} e 事件对象
*/
function ShowBlock(e){
    let block_name = e.target.innerHTML;
    let block = document.querySelector('.main-page__left-menu>div');
    let groupHTML = `<ul class="group-order__ul">
                    <li><a href="#" class="a-select">全部</a></li>
                    <li><a href="#">未使用</a></li>
                    <li><a href="#">即将到期</a></li>
                    <li><a href="#">待付款</a></li>
                    <li><a href="#">已使用</a></li>
                    <li><a href="#">已过期</a></li>
                    <li><a href="#">退款</a></li>
                </ul>
                     <table class="group-order__table">
                    <tr>
                        <th class="w260">团购信息</th>
                        <th class="w70">单价</th>
                        <th class="w100">数量</th>
                        <th class="w120">实付金额</th>
                        <th class="w120">状态</th>
                        <th class="w80">操作</th>
                    </tr>
                    <tr>
                        <td class="td-group-message">
                            <img src="image/lxy.jpg" alt="" class="fl">
                            <a href="#" class="fl">蓝小轩蛋糕20元代金...</a>
                            <span class="fl">有效期至：2018-09-27</span>
                        </td>
                        <td>￥18.00</td>
                        <td>1</td>
                        <td>￥0.60</td>
                        <td>
                            <p>已使用</p>
                            <a href="#">订单详情</a>
                        </td>
                        <td><a href="#">评价</a></td>
                    </tr>
                </table>`;
    let storedHTML = `<div class="no-order-logo">暂无账单</div>
                      <h4 class="main-page__h4">储值卡的作用</h4>
                      <ul>
                    <li>储值卡是糯米商户发行的单用途电子预付卡。</li>
                    <li>到商家消费时,可使用其发行的储值卡直接付款。</li>
                </ul>
                      <h4 class="main-page__h4">与团单代金券的区别</h4>
                      <ul>
                    <li>代金券和储值卡都可以在指定商家抵扣现金。</li>
                    <li>代金券和储值卡都可以在指定商家抵扣现金。</li>
                    <li>储值卡可自助付款抵扣现金。</li>
                </ul>
                      <h4 class="main-page__h4">使用说明</h4>
                      <ul>
                    <li>在我的储值卡页中选择储值卡，输入消费金额告知收银员确认即可。</li>
                    <li>不同的储值卡的面值、有效期和使用限制不同，使用前请认真阅读。</li>
                    <li>储值卡不记名、不挂失、不兑现、不计息。</li>
                    <li>储值卡只能单独下单购买（即不能与其他商品同时下单购买），且不能使用代金券、红包进行购买。</li>
                    <li>储值卡仅能在指定商家所属门店消费，不同糯米商家不可通用。</li>
                    <li>储值卡只限于普通消费者使用，如发现有经销商或其他非普通消费者使用，百度糯米有权立即取消订单并做相关处理。</li>
                    <li>所有储值卡严禁出售或转让，如经发现并证实的，将予以作废处理。</li>
                    <li>储值卡订单，退款结算按照实际支付金额退款；部分退货的订单，将取消该笔订单的促销优惠。</li>
                </ul>`;
    let logisticsHTML = `<ul class="logistics__ul">
                    <li><a href="#" class="a-select">全部</a></li>
                    <li><a href="#">待付款</a></li>
                    <li><a href="#">待发货</a></li>
                    <li><a href="#">已发货</a></li>
                    <li><a href="#">退款</a></li>
                    <li>
                        <p>在百度糯米客户端购买的<span class="c-pink">“品牌购物”订单</span></p>
                        <p>只能在客户端<span class="c-pink">“我的-全部订单-品牌购物”</span>里查询</p>
                    </li>
                </ul>
                         <div class="no-order-logo">暂无全部账单</div>`;
    let movieHTML = `<ul class="movie__ul">
                    <li><a href="#" class="a-select">全部</a></li>
                    <li><a href="#">待付款</a></li>
                    <li><a href="#">已付款</a></li>
                    <li>帐户绑定手机号码：176****8985  |  <a href="#" class="movie__last-a">查询其他手机号码订单</a></li>
                </ul>
                     <div class="no-order-logo">暂无全部账单</div>`;
    let unevaluateHTML = `<ul class="unevaluate__ul">
                          <li><a href="#" class="a-select">待评价</a></li>
                          <li><a href="#">已评价</a></li>
                          </ul>
                          <div class="unevaluate__box">
                          <h4 class="main-page__h4">蓝小轩蛋糕20元代金券</h4>
                          <img src="image/lxy.jpg" alt="" class="unevaluate__img">
                          <span class="">20元代金券！仅限自提！</span>
                          <div class="unevaluate__star-box">评价：</div>
                          </div>`;
    let evaluateHTML = `<ul class="unevaluate__ul">
                          <li><a href="#">待评价</a></li>
                          <li><a href="#" class="a-select">已评价</a></li>
                          </ul>
                          <div class="no-order-logo">暂无已评价订单</div>`;
    let accountHTML = `<ul class="account-set__ul">
                          <li><a href="#" class="a-select">基本资料</a></li>
                          <li><a href="#">收货地址</a></li>
                          <li><a href="#">资产安全管理</a></li>
                          </ul>
                        <div class="account-message">
                        <ul>
                        <li>用户名：用户</li>
                        <li><a href="#" class="account-message__link">百度帐号设置</a></li>
                        <li>密码：********</li>
                        <li><a href="#" class="account-message__link">修改密码</a></li>
                        <li>手机号：232****2323</li>
                        <li><a href="#" class="account-message__link">绑定新号码</a></li>
                        </ul>
                        <p class="account-message__p">可用余额：<a href="#" class="account-message__link">查询</a> | <a href="#" class="account-message__link">充值</a> | <a href="#" class="account-message__link">提现</a> | &nbsp&nbsp&nbsp原糯米余额提现事宜，请拨打客服电话400-9216-666完成提现。</p>
                        </div>`;
    let balanceHTML = `<div class="account-balance__box">
                        <span>可用余额 <span class="c-pink">¥0</span></span>
                        <button class="account-balance__btn">兑换</button><input type="text" class="account-balance__input">
                        </div>
                        <ul class="account-balance__ul">
                          <li><a href="#" class="a-select">全部</a></li>
                          <li><a href="#">可使用</a></li>
                          <li><a href="#">已用完</a></li>
                          </ul>
                        <div class="no-order-logo">暂无余额</div>
                        <h4 class="main-page__h4">余额的作用？</h4>
                        <ul>
                         <li>余额是指用户在百度糯米平台支付订单时，在一定品类和条件下，可用于抵付现金的金额。</li>
                          </ul>
                        <h4 class="main-page__h4">余额如何获得？</h4>
                        <ul>
                          <li>使用糯米卡密码进行兑换，或参加糯米平台的余额活动。</li>
                        </ul>
                        <h4 class="main-page__h4">余额如何使用？</h4>
                        <ul>
                          <li>在订单支付页中，如果您的订单允许使用余额，百度糯米会根据您的可用余额自动帮您计算出该订单最大的余额抵用金额，支付时所需现金相应扣减。暂不支持手动修改余额支付金额。</li>
                          <li>若您的余额不足以支付订单金额，则不足部分仍需您继续使用其他方式予以支付；若您的余额金额较多，支付订单后仍有剩余，则剩余部分您再次购买时可继续使用。</li>
                         </ul>
                        <h4 class="main-page__h4">余额发放、使用的限制说明？</h4>
                        <ul>
                          <li>余额支持电脑网页上代金券、团购套餐等产品的购买。到店付、电影选座、外卖、酒店预订、旅游、KTV预订等订单，仅支持在手机客户端使用余额。若后续支持其他品类适用或有调整，以用户支付时订单页面显示的结果为准。</li>
                          <li><span class="c-pink">部分特殊团单不支持使用余额支付，以用户支付时订单页面显示的结果为准。</span></li>
                         </ul>
                        <h4 class="main-page__h4">使用余额的订单退款</h4>
                        <ul>
                          <li>如果订单申请退款成功，订单中余额支付的金额可以返还到您的余额中；如果订单同时使用红包及余额支付，部分退款时优先退余额，超出余额的部分优先退有效期较长的红包。</li>
                        </ul>`;
    let couponHTML = `<div class="coupon__box">
                      <label for="c" class="coupon__label">激活优惠券：</label><input type="text" class="coupon__input"><button class="coupon__btn">激活</button>
                      </div>
                      <ul class="coupon__ul">
                      <li><a href="#" class="a-select">全部</a></li>
                      <li><a href="#">未使用</a></li>
                      <li><a href="#">已使用</a></li>
                      <li><a href="#">已过期</a></li>
                      </ul>
                      <div class="no-order-logo">您目前没有优惠券</div>
                      <h4 class="main-page__h4">优惠券使用规则是怎样的？</h4>
                      <ul>
                        <li>优惠券不退款、不找零；不同的优惠券面值、有效期和使用限制不同，使用前请认真阅读；</li>
                        <li>一个订单只能使用一张优惠券；</li>
                        <li>优惠券金额大于订单金额，则差额不予退回；如优惠券金额小于订单金额，则需由客户支付差额；优惠券不可兑现，且不开发票；</li>
                        <li>使用优惠券支付的订单，退款结算按照实际支付金额退款；部分退货的订单，按照退货部分所占订单金额的比例使用优惠券，优惠券余额不予补给；</li>
                        <li>优惠券只限于供普通消费者使用，如发现有经销商使用优惠券，百度糯米有权立即取消订单并做相关处理；</li>
                        <li>所有优惠券严禁出售或转让，如经发现并证实的，将予以作废处理。</li>
                        <li>具体优惠券使用规则参见《百度糯米优惠券使用规则》(详见https://www.nuomi.com/about/eula)</li>
                      </ul>
                      <h4 class="main-page__h4">为什么有的优惠券不能使用？</h4>
                      <ul>
                        <li>一个订单使用的优惠券需满足该优惠券使用范围等规则。优惠券适用的范围（品类、团单等），百度糯米有权根据不同时段进行调整和优化，请用户关注团单页面详细信息（如该团单显示优惠券可用用户即可使用，如该团单显示或提示优惠券不可用用户则不可使用）。相关疑问请致电糯米客服电话：400-9216-666。</li>
                        <li>优惠券应当在有效期内使用，过期则无法使用；</li>
                        <li>优惠券一旦使用，在订单生成后，将无法退回。如取消订单，订单中所使用的优惠券将无法再次使用。</li>
                      </ul>
                      </div>`;
    switch(block_name){
        case '团购订单': block.className = 'main-page__group-order'; block.innerHTML = groupHTML; break;
        case '储值卡': block.className = 'main-page__stored-card'; block.innerHTML = storedHTML; break;
        case '物流单': block.className = 'main-page__logistics'; block.innerHTML = logisticsHTML; break;
        case '电影选座': block.className = 'main-page__movie'; block.innerHTML = movieHTML; break;
        case '待评价': block.className = 'main-page__unevaluate'; block.innerHTML = unevaluateHTML; break;
        case '已评价': block.className = 'main-page__evaluate'; block.innerHTML = evaluateHTML; break;
        case '账户设置': block.className = 'main-page__account-set'; block.innerHTML = accountHTML; break;
        case '余额(充值卡兑换)': block.className = 'main-page__account-balance'; block.innerHTML = balanceHTML; break;
        case '优惠券': block.className = 'main-page__coupon'; block.innerHTML = couponHTML; break;
    }
}
/*方法说明
 *@method 加载个人菜单的头部导航详情
 *@param{object} e 事件对象
*/
function LoadA(e){
    let str = e.target.innerHTML;
    let TableHTML = `<table class="group-order__table">
                    <tr>
                        <th class="w260">团购信息</th>
                        <th class="w70">单价</th>
                        <th class="w100">数量</th>
                        <th class="w120">实付金额</th>
                        <th class="w120">状态</th>
                        <th class="w80">操作</th>
                    </tr>
                    <tr>
                        <td class="td-group-message">
                            <img src="image/lxy.jpg" alt="" class="fl">
                            <a href="#" class="fl">蓝小轩蛋糕20元代金...</a>
                            <span class="fl">有效期至：2018-09-27</span>
                        </td>
                        <td>￥18.00</td>
                        <td>1</td>
                        <td>￥0.60</td>
                        <td>
                            <p>已使用</p>
                            <a href="#">订单详情</a>
                        </td>
                        <td><a href="#">评价</a></td>
                    </tr>
                </table>`;
    let unevaluate_boxHTML = `<div class="unevaluate__box">
                          <h4 class="main-page__h4">蓝小轩蛋糕20元代金券</h4>
                          <img src="image/lxy.jpg" alt="" class="unevaluate__img">
                          <span class="">20元代金券！仅限自提！</span>
                          <div class="unevaluate__star-box">评价：</div>
                          </div>`;
    let account_messageHTML = `<div class="account-message">
                                <ul>
                                <li>用户名：用户</li>
                                <li><a href="#" class="account-message__link">百度帐号设置</a></li>
                                <li>密码：********</li>
                                <li><a href="#" class="account-message__link">修改密码</a></li>
                                <li>手机号：232****2323</li>
                                <li><a href="#" class="account-message__link">绑定新号码</a></li>
                                </ul>
                                <p class="account-message__p">可用余额：<a href="#" class="account-message__link">查询</a> | <a href="#" class="account-message__link">充值</a> | <a href="#" class="account-message__link">提现</a> | &nbsp&nbsp&nbsp原糯米余额提现事宜，请拨打客服电话400-9216-666完成提现。</p>
                                </div>`;
    let ul_listHTML = ` <div class="no-order-logo">暂无${str}余额</div>
                        <h4 class="main-page__h4">余额的作用？</h4>
                        <ul>
                         <li>余额是指用户在百度糯米平台支付订单时，在一定品类和条件下，可用于抵付现金的金额。</li>
                          </ul>
                        <h4 class="main-page__h4">余额如何获得？</h4>
                        <ul>
                          <li>使用糯米卡密码进行兑换，或参加糯米平台的余额活动。</li>
                        </ul>
                        <h4 class="main-page__h4">余额如何使用？</h4>
                        <ul>
                          <li>在订单支付页中，如果您的订单允许使用余额，百度糯米会根据您的可用余额自动帮您计算出该订单最大的余额抵用金额，支付时所需现金相应扣减。暂不支持手动修改余额支付金额。</li>
                          <li>若您的余额不足以支付订单金额，则不足部分仍需您继续使用其他方式予以支付；若您的余额金额较多，支付订单后仍有剩余，则剩余部分您再次购买时可继续使用。</li>
                         </ul>
                        <h4 class="main-page__h4">余额发放、使用的限制说明？</h4>
                        <ul>
                          <li>余额支持电脑网页上代金券、团购套餐等产品的购买。到店付、电影选座、外卖、酒店预订、旅游、KTV预订等订单，仅支持在手机客户端使用余额。若后续支持其他品类适用或有调整，以用户支付时订单页面显示的结果为准。</li>
                          <li><span class="c-pink">部分特殊团单不支持使用余额支付，以用户支付时订单页面显示的结果为准。</span></li>
                         </ul>
                        <h4 class="main-page__h4">使用余额的订单退款</h4>
                        <ul>
                          <li>如果订单申请退款成功，订单中余额支付的金额可以返还到您的余额中；如果订单同时使用红包及余额支付，部分退款时优先退余额，超出余额的部分优先退有效期较长的红包。</li>
                        </ul>`;
    let Block = e.target.parentNode.parentNode.parentNode;
    let dd_select = document.getElementsByClassName('dd-select')[0];
    let ul_ClassName = Block.firstElementChild.className;
    let ul_HTML = Block.firstElementChild.innerHTML.replace('>' + str, ' class="a-select">' + str);
    let NewHTML = `<div class="group-no-order-logo">暂无${str}订单</div>`;
    if(dd_select.innerHTML === '团购订单' && str === '全部'){
        Block.innerHTML = `<ul class="${ul_ClassName}"> ${ul_HTML}</ul>${TableHTML}`;
    }
    else if((dd_select.innerHTML === '待评价' && str === '待评价') || (dd_select.innerHTML === '已评价' && str === '待评价')){
        Block.innerHTML = `<ul class="${ul_ClassName}"> ${ul_HTML}</ul>${unevaluate_boxHTML}`;
    }
    else if(dd_select.innerHTML === '账户设置' && str === '基本资料'){
        Block.innerHTML = `<ul class="${ul_ClassName}"> ${ul_HTML}</ul>${account_messageHTML}`;
    }
    else if(dd_select.innerHTML === '余额(充值卡兑换)'){
        Block.innerHTML = `<ul class="${ul_ClassName}"> ${ul_HTML}</ul>${ul_listHTML}`;
    }
    else Block.innerHTML = `<ul class="${ul_ClassName}"> ${ul_HTML}</ul>${NewHTML}`;
}
/*方法说明
 *@method 个人菜单事件委托
 *@param{object} e 事件对象
*/
function PersonalMenuEntrust(e){
    let dd_list = document.querySelectorAll('.main-page__left-menu dd');
    if(e.target.tagName === 'DD'){
        for(let i of dd_list){
            removeClass(i, 'dd-select');
        }
        addClass(e.target, 'dd-select');
        ShowBlock(e);
    }
    else if(e.target.tagName === "DT"){
        let dl = e.target.parentNode;
        if(dl.className.indexOf('hide') !== -1){
            removeClass(dl, 'hide');
        }
        else{
            addClass(dl, 'hide');
        }
    }
}
/*方法说明
 *@method 菜单详情事件委托
 *@param{object} e 事件对象
*/
function ContentBlockEntrust(e){
    if(e.target.tagName === 'A'){
        if(e.target.parentNode.parentNode.tagName === "UL"){
            e.preventDefault();
            let NavClassName = e.target.parentNode.parentNode.className;
            let nav_a_list = document.querySelectorAll('.' + NavClassName + ' a');
            for(let i of nav_a_list){
                removeClass(i, 'a-select');
            }
            addClass(e.target, 'a-select');
            LoadA(e);
        }
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

    (function PersonalMenuListener(){
        let left_menu = document.getElementsByClassName('main-page__left-menu')[0];
        left_menu.onclick = function(e){
            e = e || window.event;
            PersonalMenuEntrust(e);
            ContentBlockEntrust(e);
        }
    }());

};