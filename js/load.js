var cart = {}; //моя корзина

$('document').ready(function(){
    loadGoods();
    checkCart();
    showMiniCart();
});

function loadGoods() {

    
    // const query = window.location.search.substring(4);
    // console.log(query);
   

    //загружаю товары на страницу
    $.getJSON('data.json', function (data) {
        console.log(data);
        var out = '';

        for (var key in data){
            // if (key== query){
                

            out+='<div class ="desc1">';
            out+='<h3>'+data[key]['name']+'</h3>';
            out+='<span class="code">Код товара: '+key+'</span>';
            out+='<span class="code"><p style="margin-bottom: 25px;"><span class="code">Описание: </span>'+data[key]['description']+'</p></span>';
            out+='<div class="price"><span class="text">Цена: </span>'+data[key]['cost']+'₴</div>';
            out+='<button class="btn_form" onclick="clickAlert()" data-art="'+key+'">Купить</button>';
            out+='</div>';
            // }
        }
     
        $('.desc1').html(out);
        $('button.btn_form').on('click', addToCart);
        // $('button.btn_form').on('click', show_popap);
    });
}

function clickAlert() {
    alert("Товар добавлен в корзину!");
}
function show_popap(){
    //Выводим подсказку
    out+='<div class="overlay" id="modal-1">';
    out=+'<div class="flex-popap">';
    out=+'<div class="popap">';
    out=+'<span class="close_popap">Закрыть</span>';
    out=+'<h2>Товар в корзине!</h2>';
    out=+'<p>желаете продолжить покупки?</p>';
    out=+'</div>';
    out=+'</div>';
    out=+'</div>';
}

function addToCart() {
    //добавляем товар в корзину
    var articul = $(this).attr('data-art');
    if (cart[articul]!=undefined) {
        cart[articul]++;
    }
    else {
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart) );
    console.log(cart);
    showMiniCart();
}

function checkCart(){
    //проверяю наличие корзины в localStorage;
    if ( localStorage.getItem('cart') != null) {
        cart = JSON.parse (localStorage.getItem('cart'));
    }
}

function showMiniCart(){
    //показываю содержимое корзины
    var out ='';
    for (var w in cart){
        out += w + ' --- '+cart[w]+'<br>';
    }
    $('#mini-cart').html(out);
}
