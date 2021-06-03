var cart = {}; //корзина
var sum=0;
var key_prod;
var key_prod1;
$.getJSON('goods.json', function (data) {
    var goods = data; //все товары в массиве
    // console.log(goods);
    checkCart();
    //console.log(cart);
    showCart(); //вывожу товары на страницу

    function showCart() {
        if ($.isEmptyObject(cart)) {
            //корзина пуста
            var out = 'Корзина пуста. Добавьте товар в корзину <a style="color: black; font-size:16px" href="index.html">главная страница</a>';
            // var h1Text = document.querySelector(".entry-title").textContent;
            $('#my-cart').html(out);
        }
        else {
            var out = '';
            for (var key in cart) {
                out+='<div class ="desc1">';
                out+='<img style="width: 100px;" src='+data[key]['image']+'>';
                out+='<h3>'+data[key]['name']+'</h3>';
                out+='<span class="code">Код продукта:  '+key+'</span>'+'<br>'+'<br>';

                key_prod ="                                                                                               "+"Код товара: "+ key +" Количество: "+ cart[key]+"                                                                                               "; // ранее полученные данные Получаю данные из элемента в и вставляю в input
                input = document.getElementById('target'); // целевой тег <input>
                key_prod1 = key_prod + key_prod1;
                target.value = key_prod1;

                var img_key = data[key]['image'];
                input = document.getElementById('img');
                img.value = img_key;

                out+='<span class="code">Количество:  '+cart[key]+'</span>';
                out+='<span class="code"><p style="margin-bottom: 25px;">Описание: '+data[key]['description']+'</p></span>';
                out+='<div class="price"><span class="text">Цена:  </span>'+data[key]['cost']+'₴'+'<br>'+'<br>';
                // out+='<button class="btn_form" data-art="'+key+'">Купить</button>';
                out += '<span class="code">Товаров на сумму:  '+'</span>'+ cart[key] * goods[key].cost +'₴'; 
                sum = cart[key]*goods[key].cost+sum;
                // out += '<span class="code">Общая сумма: '+'</span>'+sum;
                out += '<button class="btn_form1 delete" style="float:right;" data-art="' + key + '" >Удалить</button>'+'<br>'+'<br>';
                // out +='<center><div class = "btn_form"><a class="btn_form" data-art="' + key + '"<a href="zakaz.html">Сделать заказ</a></a></div></center>';
                // out +='</div>';
                out+='<div class="clearfix"></div>';
            }
            out += '<span class="code">Общая сумма: '+'</span>'+sum+'₴'+'<br>'+'<br>';
            out +='</div>';
            $('#my-cart').html(out);
            $('.plus').on('click', plusGoods);
            $('.minus').on('click', minusGoods);
            $('.delete').on('click', deleteGoods);
        }
    }

    function plusGoods() {
        var articul = $(this).attr('data-art');
        cart[articul]++;
        saveCartToLS(); //сохраняю корзину в localStorage
        showCart();
    }

    function minusGoods() {
        var articul = $(this).attr('data-art');
        if (cart[articul] > 1) {
            cart[articul]--;
        }
        else {
            delete cart[articul];
        }
        saveCartToLS();//сохраняю корзину в localStorage
        showCart();
    }

    function deleteGoods() {
        var articul = $(this).attr('data-art');
        delete cart[articul];
        saveCartToLS();//сохраняю корзину в localStorage
        showCart();
    }


});

function checkCart() {
    //проверяю наличие корзины в localStorage;
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function saveCartToLS() {
    localStorage.setItem('cart', JSON.stringify(cart));
}