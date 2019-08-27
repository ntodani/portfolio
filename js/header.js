$(function() {
  //スクロール固定
  //下層ヘッダー
  var header = $('#s-header-logo'),
  offset = header.offset();
  $(window).scroll(function () {
    if($(window).scrollTop() > offset.top) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });
});
