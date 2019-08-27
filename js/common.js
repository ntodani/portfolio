//フッダー
function footer(){
   var html = 
    '<footer id="footer">' +
    '<div class="inner">' +
    '<p class="copyright">&copy;natsumi todani</p>' +
    '</div>' +
    '</footer>' ;
    document.write(html);
};

//スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });


//■page topボタン
  var topBtn=$('#pageTop');
  topBtn.hide();
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    } 
  });
});

window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });

  function scroll_effect(){
   $('.effect-fade,.effect-fade-head').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
     $(this).addClass('effect-scroll');
    }
   });
  }
};