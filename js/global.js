$(document).ready(function(){
    $('article.listings').click(function(){
        var url = $(this).find('a').attr('href');
        document.location.href = url;
        });
    /*$('article.listings a.MCtooltip').click(function(event) {
        event.stopPropagation();
    })*/
    var pluss = $('section.result_outer.account_outer .resuult_ul li a img.pluss');
    var minuss = $('section.result_outer.account_outer .resuult_ul li a img.minus');
    $('section.result_outer.account_outer .resuult_ul li a').click(function(){
    $(this).find(pluss).toggleClass('opaci');
    $(this).find(minuss).toggleClass('opaci');
});
})

$(document).ready(function(){
    var suma_shirini = $('.list_left').width() + $('.list_ryt').width();
    var conteiner = $('.headnav').width() - 60;
    if (suma_shirini > conteiner) {
        $('.list_left').css({'float':'none'});
        $('.list_ryt').css({'float':'none'});
    }
    if (suma_shirini < conteiner) {
        $('.list_left').css({'float':'left'});
        $('.list_ryt').css({'float':'right'});
    }
})
$(window).resize(function(){
    var suma_shirini = $('.list_left').width() + $('.list_ryt').width();
    var conteiner = $('.headnav').width() -60;
    if (suma_shirini > conteiner) {
        $('.list_left').css({'float':'none'});
        $('.list_ryt').css({'float':'none'});
    }
    if (suma_shirini < conteiner) {
        $('.list_left').css({'float':'left'});
        $('.list_ryt').css({'float':'right'});
    }
});
$(window).bind('load', function () {
    $('.preloader9').fadeOut();
    $('.mask9').fadeOut();
    $('.wraper').fadeOut();
});
$(document).ready(function() {
    $("body").css("display", "none");

    $("body").fadeIn(500);

    $("a:not(a[href*=javascript],a[href^=#])").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $('.preloader9').show();
        $('.wraper').show();
        $('.mask9').show();
        $("body").fadeOut(500, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});
$(document).ready(function(){
    $('.breadcrumb .first-child a').prepend('<div class="for_home_images"><img src="http://playandbay.com/betaPlayandBay3/oc-content/themes/isha/images/home.png" clss="visibl"><img src="http://playandbay.com/betaPlayandBay3/oc-content/themes/isha/images/home_hover.png" clss="not" style="position:absolute;top:3px;left:0;z-index:5"></div>');
    $('.inner_listing').click(function(){
        var url = $(this).find('a').attr('href');
        document.location.href = url;
        });
    var block_height = $('.listing').height() - 37;
            $('.location').height(block_height);
        $(window).resize(function() {
            var block_height = $('.listing').height() - 37;
            $('.location').height(block_height);
        })
        $('.listing_text p a:first-child').each(function() {
    var s = this.textContent.split(" ");
    // or var s = $(this).text().split(" ");
    var last = s[s.length-2];
       s[s.length-2] = '<span class="pricing">'+last+'</span>';

})
    
        
})
bender.extend = function(el, opt) {
        for (var name in opt) el[name] = opt[name];
        return el;
}
bender.responsive = function(options) {
    defaults = {'selector':'#responsive-trigger'};
    options = $.extend(defaults, options);
    if($(options.selector).is(':visible')){
        return true;
    }
    return false;
}
bender.toggleClass = function(element,destination,isObject) {
    var $selector = $('['+element+']');
    $selector.click(function (event) {
        var thatClass  = $(this).attr(element);
        var thatDestination;
        if (typeof(isObject) != "undefined"){
            var thatDestination  = $(destination);
        } else {
            var thatDestination  = $($(this).attr(destination));
        }
        thatDestination.toggleClass(thatClass);
        event.preventDefault();
        return;
    });
}
bender.photoUploader = function(selector,options) {
    defaults = {'max':4};
    options = $.extend(defaults, options);
    bender.photoUploaderActions($(selector),options);
}
bender.addPhotoUploader = function(max) {
    if(max < $('input[name="'+$(this).attr('name')+'"]').length+$('.photos_div').length){
        var $image = $('<input type="file" name="photos[]">');
            bender.photoUploaderActions(image);
        $('#post-photos').append($image);
    }
}
bender.removePhotoUploader = function() {
    //removeAndAdd
},
bender.photoUploaderActions = function($element,options) {
    $element.on('change',function(){
        var input  = $(this)[0];
        $(this).next('img').remove();
        $image = $('<img />');
        $image.insertAfter($element);
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $image.attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        } else {
            $image.remove();
        }
    });
}

function createPlaceHolder($element){
  var $wrapper = $('<div class="has-placeholder '+$element.attr('class')+'" />');
  $element.wrap($wrapper);
  var $label = $('<label/>');
      $label.append($element.attr('placeholder').replace(/^\s*/gm, ''));
      $element.removeAttr('placeholder');

  $element.before($label);
  $element.bind('remove', function() {
        $wrapper.remove();
    });
}

function selectUi(thatSelect){
    var uiSelect = $('<a href="#" class="select-box-trigger"></a>');
    var uiSelectIcon = $('<span class="select-box-icon">0</span>');
    var uiSelected = $('<span class="select-box-label">'+thatSelect.find("option:selected").text().replace(/^\s*/gm, '')+'</span>');
    var uiWrap = $('<div class="select-box '+thatSelect.attr('class')+'" />');

    thatSelect.css('filter', 'alpha(opacity=40)').css('opacity', '0');
    thatSelect.wrap(uiWrap);


    uiSelect.append(uiSelected).append(uiSelectIcon);
    thatSelect.parent().append(uiSelect);
    uiSelect.click(function(){
        return false;
    });
    thatSelect.on('focus',function(){
        thatSelect.parent().addClass('select-box-focus');
    });
    thatSelect.on('blur',function(){
        thatSelect.parent().removeClass('select-box-focus');
    });
    thatSelect.change(function(){
        str = thatSelect.find('option:selected').text().replace(/^\s*/gm, '');
        uiSelected.text(str);
    });
    thatSelect.bind('removed', function() {
        thatSelect.parent().remove();
    });
}
$(document).ready(function(event){
    //OK
    $('.r-list h1 a').click(function(){
        if(bender.responsive()){
            var $parent = $(this).parent().parent();
            if($parent.hasClass('active')){
                $parent.removeClass('active');
            } else {
                $parent.addClass('active');
            }
            return false;
        }
    });
    $('.see_by').hover(function(){
        $(this).addClass('hover');
    },function(){
        $(this).removeClass('hover');
    })
    //OK
    bender.toggleClass('data-bclass-toggle','body',true);
    //OK
    /*$('.doublebutton a').click(function (event) {
        var thisParent = $(this).parent();
        if($(this).hasClass('grid-button')){
            thisParent.addClass('active');
            $('#listing-card-list').addClass('listing-grid');
        } else {
        thisParent.removeClass('active');
            $('#listing-card-list').removeClass('listing-grid');
        }
        if (history.pushState) {
            window.history.pushState($('title').text(), $('title').text(), $(this).prop('href'));
        }
        event.preventDefault();
        return;
    });*/


    /////// STARTS PLACE HOLDER
    /*$('body').on('focus','.has-placeholder input, .has-placeholder textarea',function(){
        var placeholder = $(this).prev();
        var thatInput  = $(this);

        if(thatInput.parents('.has-placeholder').not('.input-file')){
            placeholder.hide();
        }
    });
    $('body').on('blur','.has-placeholder input, .has-placeholder textarea',function(){
        var placeholder = $(this).prev();
        var thatInput  = $(this);

        if(thatInput.parents('.has-placeholder').not('.input-file')){
            if(thatInput.val() == '') {
                placeholder.show();
            }
        }
    });

    $('body').on('click touchstart','.has-placeholder label',function(){
        var placeholder = $(this)
        var thatInput  = $(this).parents('.has-placeholder').find('input, textarea');
        if(thatInput.attr('disabled') != 'disabled'){
            placeholder.hide();
            thatInput.focus();
        }
    });

    $('input[placeholder]').each(function(){
      createPlaceHolder($(this));
    });

    $('body').on("created", '[name^="select_"]',function(evt) {
        selectUi($(this));
    });

    $('select').each(function(){
        selectUi($(this));
    });

    $('#mask_as_form select').on('change',function(){
        $('#mask_as_form').submit();
        $('#mask_as_form').submit();
    });

    if(typeof $.fancybox == 'function') {
        $("a[rel=image_group]").fancybox({
            openEffect : 'none',
            closeEffect : 'none',
            nextEffect : 'fade',
            prevEffect : 'fade',
            loop : false,
            helpers : {
                title : {
                    type : 'inside'
                }
            }
        });

        $(".main-photo").on('click', function(e) {
            e.preventDefault();
            $("a[rel=image_group]").first().click();
        });
    }*/

    $('.flashmessage .ico-close').click(function(){
        $(this).parents('.flashmessage').remove();
    });
});
$(document).ready(function(){
    $( "#menu_cliced" ).click(function() {
        $("#menu-mobile_cliced").show(700);
        $(".header_midbox").hide(1000);
        $('.chose-langu').css({"z-index": "1"});
        $('.search_box').hide(700);
    });

    $("#close_menu").click(function(){
        $("#menu-mobile_cliced").hide(600);
        $(".header_midbox").show(300);
        $('.chose-langu').css({"z-index": "99"});
    })
})

