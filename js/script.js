$('.header__bur').click(function(){
    $('.move,.header__bur').toggleClass('active');
    $('body').toggleClass('active1');
    $('.header__madia-img').toggleClass('header__active');
    
});
$(window).load(function(){
    $('.up').css({'opacity':'0'});
});
$('.up').click(function(){
    window.scrollTo(0,0);
    $(this).addClass('ScrollUp');
});
var scr,header;
var head = document.querySelector('.jewelry');
$(window).load(function(){
     header = (head.getBoundingClientRect().y+pageYOffset);
});
function remove1(){
    $('.up').removeClass('ScrollUp');
};
$(window).scroll(function(){    
    scr = pageYOffset;
    
    console.log(header);
    if (scr>header){
        $('.header__bur').addClass('header__bur__active');
        $('.head__body-title').addClass('head__move');
        $('.up').css({'opacity':'1'});
    }
    if (scr<header){
        $('.header__bur').removeClass('header__bur__active');
        $('.head__body-title').removeClass('head__move');
        setTimeout(remove1,500);
        $('.up').css({'opacity':'0'});
    }    
});
