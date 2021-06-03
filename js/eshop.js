
$('document').ready(function(){
    loadGoods();
});

function loadGoods() {

    
    const query = window.location.search.substring(4);
    // console.log(query);
   

    $.getJSON('data.json', function (data) {
        console.log(data);
        var out = '';

        for (var key in data){

            out+='<div style="margin-top: 25px;" class ="wrapEx">';
            out+='<h3>'+data[key]['name']+'</h3>';
            out+='<span class="code"><p><span class="code">Количесвто участвий </span>'+data[key]['involvement']+'</p></span>';
            out+='<div class="price"><span class="text">Средняя оценка </span>'+data[key]['avg_marks']+'</div>';
            out+='<div class="price"><span class="text">Подтверждение ГЕР </span>'+data[key]['GER']+'</div>';

            out+='<div class="price"><span class="text">Критерий 1: </span>'+data[key]['criterion1']+'</div>';
            out+='<div class="price"><span class="text">Критерий 2: </span>'+data[key]['criterion2']+'</div>';
            out+='<div class="price"><span class="text">Критерий 3: </span>'+data[key]['criterion3']+'</div>';
            out+='<div class="price"><span class="text">Критерий 4: </span>'+data[key]['criterion4']+'</div>';
            out+='<div class="price"><span class="text">Критерий 5: </span>'+data[key]['criterion5']+'</div>';
            out+='<div class="price"><span class="text">Критерий 6: </span>'+data[key]['criterion6']+'</div>';
            out+='<div class="price"><span class="text">Критерий 7: </span>'+data[key]['criterion7']+'</div>';
            out+='<div class="price"><span class="text">Критерий 8: </span>'+data[key]['criterion8']+'</div>';
            out+='<div class="price"><span class="text">Критерий 9: </span>'+data[key]['criterion9']+'</div>';
            out+='</div>';
        }
        $('.desc1').html(out);
    });
}


