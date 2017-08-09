/* //1번째 내용 확인
$(document).ready(function(){
    $('.thumbImg a').on('click',  function(){
        $('.largeImg>img').attr('src', $(this).attr('href') )
        return false;
    });
});*/

/*//2번째 내용 확인
$(document).ready(function(){
//    e.preventDefault();
    $('.thumbImg').find('a').on('click',  function(){
        var path = $(this).attr('href');
        var large = $('.largeImg>img');
        large.attr({ src : path}).css({ opacity : 0}).stop().animate({opacity: 1},1000);
        return false;
    });
});*/

  /*//3번째 caption달기
$(document).ready(function(){
//    e.preventDefault();
    $('.thumbImg').find('a').on('click',  function(){
        var path = $(this).attr('href');
        var large = $('.largeImg>img');
        $("#caption").remove();
        large.attr({ src : path}).css({ opacity : 0}).stop().animate({opacity: 1},1000);
        $('.largeImg').prepend("<div id='caption'> </div>");
        $('#caption').text( $(this).next('span').text() )
        return false;
    });
});*/

//4번째 caption_ani
$(document).ready(function(){
//    e.preventDefault();
    $('.thumbImg').find('a').on('click',  function(){
        var path = $(this).attr('href');
        var large = $('.largeImg>img');
        $("#caption").remove();
        large.attr({ src : path}).css({ opacity : 0}).stop().animate({opacity: 1},1000);
        $('.largeImg').prepend("<div id='caption'> </div>");
        $('#caption').text( $(this).next('span').text() )
        $('#caption').animate({top : 0},1000)
        return false;
    });
});




























