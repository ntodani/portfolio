$(function() {
  //スクロール固定
  //TOPメニュー 
  var menu = $('#gnav'),
  offset = menu.offset();
  $(window).scroll(function () {
    if($(window).scrollTop() > offset.top) {
      menu.addClass('fixed');
    } else {
      menu.removeClass('fixed');
    }
  });
});
