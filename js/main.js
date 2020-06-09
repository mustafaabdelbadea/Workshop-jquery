var advOffSet=$('#services').offset().top;
$('.back-to-top').css('display','none')
console.log(advOffSet);
$(window).scroll(function(){
    var x=$(window).scrollTop();
    if(x>advOffSet){
        console.log(advOffSet);
        $('.navbar').css('backgroundColor','rgb(52,50,51) ', 'transaction','1s all');
        $('.back-to-top').fadeIn(1000);
    }
    else{
        $('.navbar').css({backgroundColor:'rgba(0,0,0,0.7) '}, {transition:'1s all'});
        $('.back-to-top').fadeOut(1000);
    }
})
$('.back-to-top').click(function(){
    $('body').animate({scrollTop:0},2000)
})

$('.nav-link').click(function(){
    var currentHref=$(this).attr('href');
    var currentOffSet=$(currentHref).offset().top;
    $('body','html').animate({scrollTop:currentOffSet},1000);

})
$(document).ready(function(){
    $('.loading').fadeOut(2000,function(){
        $('body').css('overflow','auto');
    });
    
})

$('.color-options li').eq(0).css('background-color','#fed136');
$('.color-options li').eq(1).css('background-color','#09c');
$('.color-options li').eq(2).css('background-color','#6146d9');
$('.color-options li').eq(3).css('background-color','#fa3c3a');

$('.color-options li').click(function(){
    var currentbg=$(this).css('backgroundColor');
    
    $('.navbar-brand').attr('style','color: '+currentbg+' !important');
    $('.back-to-top').attr('style','background-color: '+currentbg+' !important');
    $('body::-webkit-scrollbar-thumb').css('background-color:',currentbg);
    $('.service-a a').attr('style','color:'+currentbg+'!important');
    $('.card-img-x p').css('color',currentbg);
    $('.btn-warning').attr('style','background-color;'+currentbg+'!important');
    $('.color-options').css('border-color',currentbg);
    $('.color-box i').css('background-color',currentbg)
    $('.button-submit').css('cssText:',currentbg+' !important')
    

})
var leftValue=$('.color-options').outerWidth();
$('.color-box').css('left',-leftValue);
$('.color-box i').click(function(){
    var openWidth=$('.color-options').outerWidth();
    if($('.color-box').css('left')=='0px')
    {
        $('.color-box').animate({left:-openWidth},1000)
    }
    else{
        $('.color-box').animate({left:'0px'},1000)
    }
})
