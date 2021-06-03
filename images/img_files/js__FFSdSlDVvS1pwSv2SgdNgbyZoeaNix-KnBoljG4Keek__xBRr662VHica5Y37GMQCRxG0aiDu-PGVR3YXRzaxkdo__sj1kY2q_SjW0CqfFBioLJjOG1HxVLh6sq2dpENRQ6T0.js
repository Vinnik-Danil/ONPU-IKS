function initMap() {
  var opu = {
    lat: 46.4613931,
    lng: 30.7504092
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: opu
  });
  var marker = new google.maps.Marker({
    position: opu,
    map: map
  });
}

function initLibraryMap() {
  var library = {
    lat: 46.460362,
    lng: 30.751455
  };

  var map = new google.maps.Map(document.getElementById('librarymap'), {
    zoom: 16,
    center: library
  });
  var marker = new google.maps.Marker({
    position: library,
    map: map
  });
}

jQuery(document).ready(function() {
  
  jQuery('.dropdown-toggle').dropdown();
  
  if (document.getElementById('librarymap')) {

    var options = {
      rootMargin: '400px',
      threshold: 0
    }

    var map = document.getElementById('librarymap');

    if (map) {

      var observer = new IntersectionObserver(
        function(entries, observer) {
          var isIntersecting = typeof entries[0].isIntersecting === 'boolean' ? entries[0].isIntersecting : entries[0].intersectionRatio > 0
          if (isIntersecting) {
            var script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB4MJJN8D1Xp71Aap2DY98E24Bue2quEB4&callback=initLibraryMap';
            script.type = 'text/javascript';
            document.getElementsByTagName('head')[0].appendChild(script);
            observer.unobserve(map);
          }
        },
        options
      )

      observer.observe(map);
    }

  }

  if (document.getElementById('map')) {

    var options1 = {
      rootMargin: '400px',
      threshold: 0
    }
    var map1 = document.getElementById('map')
    if (map1) {

      var observer1 = new IntersectionObserver(
        function(entries, observer) {
          var isIntersecting = typeof entries[0].isIntersecting === 'boolean' ? entries[0].isIntersecting : entries[0].intersectionRatio > 0
          if (isIntersecting) {
            var script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB4MJJN8D1Xp71Aap2DY98E24Bue2quEB4&callback=initMap';
            script.type = 'text/javascript';
            document.getElementsByTagName('head')[0].appendChild(script);
            observer.unobserve(map1);
          }
        },
        options1
      )

      observer1.observe(map1);
    }

  }

  jQuery('.parallax-js').each(function() {
    var filearray = this.dataset.imagesarray.split(' ');
    var folder = "/" + this.dataset.folder;
    var truefilearray = filearray.filter(function(item) {
      return item.indexOf('.jpg') > -1;
    });
    var rand = Math.floor(Math.random() * truefilearray.length);
   
     
   
     this.style.backgroundImage = "url(" + folder + truefilearray[rand] + ")";
     
  });


  //Таймлайн
  if (jQuery('.cd-timeline-block')) {

    var timelineBlocks = jQuery('.cd-timeline-block'),
      offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    jQuery(window).on('scroll', function() {
      (!window.requestAnimationFrame) ? setTimeout(function() {
        showBlocks(timelineBlocks, offset);
      }, 100): window.requestAnimationFrame(function() {
        showBlocks(timelineBlocks, offset);
      });
    });

    timelineBlocks.each(function() {
      var cdbg = jQuery(this).find('.cd-timeline-img').css('background-color');
      jQuery(this).find('.colortext').css('color', cdbg);
    })

  }


  function hideBlocks(blocks, offset) {
    blocks.each(function() {
      (jQuery(this).offset().top > jQuery(window).scrollTop() + jQuery(window).height() * offset) && jQuery(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function() {
      (jQuery(this).offset().top <= jQuery(window).scrollTop() + jQuery(window).height() * offset && jQuery(this).find('.cd-timeline-img').hasClass('is-hidden')) && jQuery(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    });
  }
  //Конец таймлайн



  //   Слайдер страниц  
  jQuery('.slickPageSlider .view-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="arrowBG prev"><div class="arrowPrev"></div></div>',
    nextArrow: '<div class="arrowBG next"><div class="arrowNext"></div></div>',
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
  });
  // Конец  Слайдер страниц  

  //   Слайдер для новостей на странице новостей
  jQuery('.field-name-field-news-image .field-items').slick({
    infinite: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: '<div class="arrowBG prev"><div class="arrowPrev"></div></div>',
    nextArrow: '<div class="arrowBG next"><div class="arrowNext"></div></div>',
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    variableWidth: true,
    centerMode: true,
    centerPadding: '20px',
  });
  //   Конец Слайдер для новостей на странице новостей

  //   Слайдер для главной кафедр образование
  jQuery('.node-type-department .field-name-field-dep-eduslides .field-items').slick({
    infinite: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2600,
    arrows: false,
    pauseOnFocus: false,
  });
  //   Конец Слайдер для главной кафедр образование

  //   Слайдер для главной кафедр наука
  jQuery('.node-type-department .field-name-field-dep-scislides .field-items').slick({
    infinite: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    vertical: true,
    pauseOnFocus: false,
  });

  //   Слайдер для главной кафедр наука
  jQuery('.academ-slider .view-content').slick({
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 5,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<div class="prev"><div class="arrowUp"></div></div>',
    nextArrow: '<div class="next"><div class="arrowDown"></div></div>',
    vertical: true,
  });

  //   Добавление домена к полю почты

  //       jQuery('.field-name-field-staff-email .field-item').append("@opu.ua");




  // Эффекты выезжания animate.css

  jQuery('.anim-slideRight').addClass('hiddens').viewportChecker({
    classToAdd: 'visibles animated slideInRight',
    offset: 70
  });
  jQuery('.anim-slideLeft').addClass('hiddens').viewportChecker({
    classToAdd: 'visibles animated slideInLeft',
    offset: 70
  });
  jQuery('.anim-slideInDown').addClass('hiddens').viewportChecker({
    classToAdd: 'visibles animated slideInDown',
    offset: 70
  });
  jQuery('.anim-slideInDown2').addClass('hiddens').viewportChecker({
    classToAdd: 'visibles animated slideInDown2',
    offset: 70
  });
  jQuery('.anim-slideInDown3').addClass('hiddens').viewportChecker({
    classToAdd: 'visibles animated slideInDown3',
    offset: 70
  });
  jQuery('.anim-slideInDown4').addClass('hiddens').viewportChecker({
    classToAdd: 'visibles animated slideInDown4',
    offset: 70
  });
  jQuery('.anim-slideInDown5').addClass('hiddens').viewportChecker({
    classToAdd: 'visibles animated slideInDown5',
    offset: 70
  });
  jQuery('.animheading').viewportChecker({
    classToAdd: 'anim',
    offset: 70
  });
  jQuery('.anim-slideInUp').addClass('hiddens').viewportChecker({
    classToAdd: 'visibles animated slideInUp',
    offset: 70
  });
  jQuery('.anim-fadeIn').addClass('hiddens').viewportChecker({
    classToAdd: 'visibles animated fadeIn',
    offset: 70
  });
  jQuery('.anim-fadeIn2s').addClass('hiddens').viewportChecker({
    classToAdd: 'visibles animated2 fadeIn2',
    offset: 70
  });
  jQuery('.anim-bounce').addClass('hiddens').viewportChecker({
    classToAdd: 'visibles animated bounceInUp',
    offset: 70
  });
  jQuery('#block-block-7 .popSection').addClass('hiddens').viewportChecker({
    classToAdd: 'visibles animated fadeIn',
    offset: 70
  });
  jQuery('#block-block-8 .popSection').addClass('hiddens').viewportChecker({
    classToAdd: 'visibles animated fadeIn',
    offset: 70
  });

  // Конец Эффекты выезжания animate.css

  // Фиксированное  верхнее меню при прокрутке
  jQuery(document).scroll(function() {
    var wrapperpos = jQuery(".fixedWrapper")[0].getBoundingClientRect();
    if (wrapperpos.bottom <= 0) {
      jQuery(".fixedLine").addClass("posfixed");
      jQuery(".fixedWrapper").addClass("posfixed");
    } else {
      jQuery(".fixedLine").removeClass("posfixed")
      jQuery(".fixedWrapper").removeClass("posfixed")
    }

  });
  
  // Конец фиксированное верхнее меню при прокрутке

  
  jQuery('fieldset.jscollapsible legend').each(function() {
    jQuery(this).next().hide();
  });
  jQuery('fieldset.jscollapsible legend').on( 'click',function() {
    if (jQuery(this).parent().hasClass('show')) {
      jQuery(this).next().hide('fast');
      jQuery(this).parent().removeClass('show');
    } else {
      jQuery(this).parent().addClass('show');
      jQuery(this).next().show('slow');
    }


  });
  
  
  if (jQuery('#block-views-priceview-block-1')) {
    jQuery('#block-views-priceview-block-1').on("DOMNodeInserted", function (event) { 
      jQuery('fieldset.jscollapsible legend').each(function() {
        jQuery(this).off().next().hide();
      });
      jQuery('fieldset.jscollapsible legend').on( 'click',function() {
        if (jQuery(this).parent().hasClass('show')) {
          jQuery(this).next().hide('fast');
          jQuery(this).parent().removeClass('show');
        } else {
          jQuery(this).parent().addClass('show');
          jQuery(this).next().show('slow');
        }
      });
    });
  }
  
  // Футер к низу
  function pageFullHeight() {
    var footerh = jQuery('.footerwrapper').innerHeight();
    if (jQuery('body.front')[0]) {
      jQuery('body').css("padding-bottom", footerh + "px");
    } else {
      jQuery('body').css("padding-bottom", footerh + 20 + "px");
    }
    jQuery('.footerwrapper').css("position", "absolute");
  }
  pageFullHeight();
  jQuery(window).resize(function() {
    pageFullHeight();
  });
  // Конец Футер к низу

  // Меню подразделения на всю ширину вне зависимости от количества элементов
  var menuItemsNum = jQuery(".subdivMenu .menu > li").length;
  if (menuItemsNum >= 2) {
    jQuery(".subdivMenu .menu > li").addClass('subdivMenuWidth' + menuItemsNum);
  }
  // КонецМеню подразделения на всю ширину вне зависимости от количества элементов

  // Стрелка пролистівания вверх встраницы
  jQuery('body').append('<a href="#" id="go-top" title="Вверх"><i class="fas fa-chevron-up fa-3x"></i></a>');

  jQuery(function() {
    jQuery.fn.scrollToTop = function() {
      jQuery(this).hide().removeAttr("href");

      if (jQuery(window).scrollTop() >= "1000") jQuery(this).fadeIn("slow");
      var scrollDiv = jQuery(this);
      var showheight = 400;
      jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() <= showheight) {
          jQuery(scrollDiv).fadeOut("slow")
        } else {
          jQuery(scrollDiv).fadeIn("slow")
        }

      });
      jQuery(this).click(function() {
        jQuery("html, body").animate({
          scrollTop: 0
        }, "slow")
      })
    }
  });

  jQuery(function() {
    jQuery("#go-top").scrollToTop();
  });
  //  Конец Стрелка пролистівания вверх встраницы


  jQuery('.mainMenu .dropdown-menu .nolink').each(function() {
    jQuery(this).parent().addClass('nolink');
  });
  jQuery(document).on("click.bs.dropdown.data-api", ".dropdown-menu", function(e) {
    e.stopPropagation()
  });
  
  jQuery('.views-field-view-node a').each(function() {
    jQuery(this).attr("target", "_blank")
  });
  jQuery('.filesblank a').each(function() {
    jQuery(this).attr("target", "_blank")
  });

  // АККОРДЕОН Клик по якорю
  jQuery('.field-name-body a').click(function(e) {

    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];

    if (trgt) {
      var target = jQuery("#" + trgt);
      var parentdiv = jQuery(target).parents('.ckeditor-accordion-dl')[0];
      if (parentdiv) {
        e.preventDefault();
        openAncorInAccordion(target, parentdiv);
      } else {
        openAncorFixMenu(target);
      }
    }
  });

  var accordhash = window.location.hash.substr(1);
  if (accordhash) {
    var target = jQuery("#" + accordhash);
    var parentdiv = jQuery(target).parents('.ckeditor-accordion-dl')[0];
    if (parentdiv) {
      openAncorInAccordion(target, parentdiv);
    } else {
      openAncorFixMenu(target);
    }
  }

  function openAncorInAccordion(target, parentdiv) {
    var parentdd = jQuery(target).parents('dd')[0];
    var oldactive = jQuery(parentdiv).find("dt.active")
    jQuery(parentdd).slideDown(300).addClass('active');
    jQuery(parentdd).prev().addClass('active');

    if (oldactive && (jQuery(oldactive).html() != jQuery(parentdd).prev().html())) {
      jQuery(oldactive).removeClass('active');
      jQuery(oldactive).next().slideUp();
    }

    jQuery('html, body').stop().animate({
      scrollTop: jQuery(parentdd).parent().offset().top - 80
    }, 1000);

  }

  function openAncorFixMenu(target) {
    jQuery('html, body').stop().animate({
      scrollTop: jQuery(target).parent().offset().top - 80
    }, 1000);
  }

  // Конец Клик по якорю


  // Отступ названия подразделения для логотипа на страницах подразделений
  if (jQuery('.views-field-field-subdiv-logo')) {
    jQuery('.views-field-field-subdiv-logo').next().addClass('haslogo');
  }
  // Телефон контактов ссылкой
  if (jQuery('.views-field-field-subdiv-phone')) {
    jQuery(".views-field-field-subdiv-phone").each(function() {
      var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*,\-.\/:;<=>?@\[\]^_`{|}~]/g;
      var spaceRE = /\s+/g;
      var rawtxt = jQuery(this).text();
      var rawphones = rawtxt.split(', ');
      var result = rawphones.reduce(function(res, current, index) {
        var point = '';
        if (index > 0) {
          point = '</br>'
        }
        return res + point + '<a href="tel:' + current.replace(punctRE, '').replace(spaceRE, '') + '">' + current + '</a> ';
      }, "")
      
      
      
      jQuery(this).html(result);
    })
  }


  //   Пагинатор для страниц институтов

  if (jQuery('.node-type-institute')) {
    var headings = jQuery('.node-type-institute .region-content').find('.addtonav');
    var anchors = '<div id="anchors" class="anchors"><ul class="nav nav-tabs" role="tablist">';

    for (var i = 0; i < headings.length; i++) {
      anchors += '<li role="presentation"><a href="#head' + i + '" data-anchor="' + i + '"></a></li>';
      jQuery(headings[i]).attr('id', 'head' + i);
    }
    anchors += '</ul></div>';

    jQuery('body').append(anchors);

    jQuery('body').scrollspy({
      target: '#anchors'
    })

    jQuery("#anchors ul li a[href^='#']").on('click', function(e) {

      // prevent default anchor click behavior
      e.preventDefault();

      // store hash
      var hash = this.hash;

      // animate
      jQuery('html, body').animate({
        scrollTop: jQuery(hash).offset().top
      }, 1000, function() {

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });

    });

  }


  //   Коец Пагинатор для страниц институтов

  jQuery(window).one('scroll', function() {
    jQuery(window).trigger('resize').trigger('scroll');
  });

  window.setTimeout(function() {
    jQuery(window).resize();
  }, 500);
  

  if(jQuery('.views-exposed-widget select').length) {
        jQuery('.views-exposed-widget select').trigger('change');
    }
  
  // Сортировка предметов в образовательной программе
//    if (jQuery('body.node-type-educationprog')) {

//      var $btn = jQuery('<input id="tostart" type="button" value="new button" />');
//      $btn.appendTo(jQuery('.view-eduplan.view-display-id-block_3 > .view-header'));
//      var $denbtn = jQuery('<input id="toden" type="button" value="new button" />');
//      $denbtn.appendTo(jQuery('.view-eduplan.view-display-id-block_3 > .view-header'));
     
//      var edudataid = 0;
//      var rawedudataarray = [];
//      var edudataarray = [];

//      jQuery('.view-eduplan.view-display-id-block_3 .view-comp-field-collection-view .view-content.ui-accordion').each(function() {
//        rawedudataarray[edudataid] = jQuery(this).html();
//        jQuery(this).data('arrayid', edudataid);
       
//        var array = [];
       
//        jQuery(this).find('.views-row').each(function() {
//          var classes = jQuery(this).attr("class");
//          var den = classes.charAt(classes.indexOf('den') + 3);
//          var zao = classes.charAt(classes.indexOf('zao') + 3);
//          var thishtml = '<div class="views-row">' + jQuery(this).html() + '</div>';
//          array.push(predmetobj(thishtml, den, zao));
//        })
       
//        edudataarray[edudataid] = array;
       
//        edudataid++;
       
//      })
     
//      jQuery('#toden').on('click', function(e) {
       
//        jQuery('.view-eduplan.view-display-id-block_3 .view-comp-field-collection-view .view-content.ui-accordion').each(function() {
         
//          var arrayid = jQuery(this).data("arrayid");
//          var testarray = edudataarray[arrayid];
//          testarray.sort(compareDen);
         
//          var thishtml = '';
//          var semesterden = 0;
         
//          testarray.forEach(function(item){
//            if (item.semden != semesterden) {
//              thishtml += '<h3 class="views-accordion-comp_field_collection_view-default-header">Семестр' + item.semden + '</h3>'
//              semesterden = item.semden
//            } 
//            thishtml += item.html;
//          })
         
//          jQuery(this).html(thishtml);
//        }); 
//      });
     
//      jQuery('#tostart').on('click', function(e) {
//        jQuery('.view-eduplan.view-display-id-block_3 .view-comp-field-collection-view .view-content.ui-accordion').each(function() {
//           var arrayid = jQuery(this).data("arrayid");
//          jQuery(this).html(rawedudataarray[arrayid]);
//        })
//      })

//    }

//    function predmetobj(html, semden, semzao) {
//      var predmet = {
//        html: html,
//        semden: semden,
//        semzao: semzao
//      }
//      return predmet;
//    }

//    function compareDen(a, b) {
//      if (a.semden > b.semden) return 1;
//      if (a.semden == b.semden) return 0;
//      if (a.semden < b.semden) return -1;
//    }
   // Конец Сортировка предметов в образовательной программе
});

jQuery(window).load(function() {

  //        Высота вкладок  меню
  //для главного оменю
  function dropmenuheight() {
    if (jQuery(window).width() >= 768) {
      var menuheight = jQuery(window).height() - jQuery(".menuWrapper").height() - 25;
      var ofsettopmenu = jQuery('.menuWrapper').offset().top - jQuery(window).scrollTop();
      var maxmenuheight = (menuheight - ofsettopmenu);
      jQuery(".mainMenu li.open .dropdown-menu").each(function() {
        var scroolblockheight = jQuery(this).find('.mCSB_container').height() + 8;
        if (scroolblockheight < 10) {
          jQuery(this).css("height", maxmenuheight + "px");
        } else if (scroolblockheight < maxmenuheight) {
          jQuery(this).css("height", scroolblockheight + "px");
        } else {
          jQuery(this).css("height", maxmenuheight + "px");
        }
      })
    } else {
      jQuery(".mainMenu .dropdown-menu").each(function() {
        jQuery(this).css("height", "auto");
      })
    }
  }

  dropmenuheight();

  jQuery(window).on('scroll', function() {
    if ((jQuery('.menuWrapper').offset().top - jQuery(window).scrollTop()) >= 0) {
      dropmenuheight();
    }
  });

  //для подразделов
  function dropsubmenuheight() {
    var menuheight = jQuery(window).height() - jQuery(".subdivMenu").height() - 30;
    //         jQuery(".subdivMenu")[0].getBoundingClientRect().bottom
    jQuery(".region-subdivmenu .dropdown-menu").each(function() {
      //             var thisheight = jQuery(this).find(".mCSB_container").height();
      //           console.log(thisheight);
      if (jQuery(this).height() > menuheight) {
        jQuery(this).css("height", menuheight + "px");
      }
    })
  }
  dropsubmenuheight();

  jQuery(window).resize(function() {
    dropmenuheight();
    dropsubmenuheight();
  });
  //       Конец Высота вкладок  меню
  //        Стиль скролла вкладок  меню
  function scrollImageAdd(obj) {
    jQuery(obj).append("<div class='scrolltoggle'><div class='mouseimg'></div></div>");
  }

  function scrollImageRemove(obj) {
    if (jQuery(obj).find(".scrolltoggle")) {
      jQuery(obj).find(".scrolltoggle").hide(500);
    }
  }

  jQuery(".mainMenu .dropdown-menu").mCustomScrollbar({
    theme: "dark",
    scrollInertia: 300,
    advanced: {
      updateOnContentResize: true
    },
    callbacks: {
      onUpdate: function() {
        dropmenuheight();
      },
      onInit: function() {
        scrollImageAdd(this);
      },
      onScrollStart: function() {
        scrollImageRemove(this);
      }
    }
  });
  jQuery(".region-subdivmenu .dropdown-menu").mCustomScrollbar({
    theme: "dark",
    scrollInertia: 300,
  });
  //      Конец  Стиль скролла вкладок  меню

});
;/*})'"*/
;/*})'"*/
