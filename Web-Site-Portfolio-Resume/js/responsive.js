// Adaptive functions

$(window).resize(function(){
    adaptive_function();
});

function adaptive_header(w/*,h*/){
    var headerMenu=$('.header-menu');
    var headerLang=$('.header-top-lang');
    if(w<=750){
        if(!headerLang.hasClass('done')){
            headerLang.addClass('done').appendTo(headerMenu);
        }
    }else{
        if(headerLang.hasClass('done')){
            headerLang.removeClass('done').prependTo($('.header-top'));
        }
    }
    if(w<=750){
        if(!$('.header-bottom-menu').hasClass('done')){
            $('.header-bottom-menu').addClass('done').appendTo(headerMenu);
        }
    }else{
        $.each($('.header-bottom-menu'), function(index, val){
            if($(this).hasClass('header-bottom-menu--right')){
                if($(this).hasClass('done')){
                    $(this).removeClass('done').prependTo($('.header-bottom__colomn').eq(2));
                }
            }else{
                if($(this).hasClass('done')){
                    $(this).removeClass('done').prependTo($('.header-bottom__colomn').eq(0));
                }
            }
        });
    }
}
function adaptive_function(){
    var w=$(window).outerWidth();
    // var h=$(window).outerHeigth();
    adaptive_header(w/*,h*/);
}
adaptive_function();

