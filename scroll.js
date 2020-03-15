$(function () {
  // スクロールのオフセット値
  var offsetY = -10;
  // スクロールにかかる時間
  var time = 2000;

  // ページ内リンクのみを取得
  $('a[href^="#"]').click(function () {
    // 移動先となる要素を取得
    var target = $(this.hash);
    if (!target.length) return;
    // mainのpadding-topを取得
    var main_padding_top = parseInt($('main').css('padding-top'), 10);
    // 移動先となる値
    var targetY = target.offset().top - main_padding_top;
    // スクロールアニメーション
    $('html,body').animate({ scrollTop: targetY }, time, 'easeInOutQuart');
    // ハッシュ書き換えとく
    window.history.pushState(null, null, this.hash);
    // デフォルトの処理はキャンセル
    return false;
  });
});

$('head').append(
  '<style>main{display:none;}'
  );
  $(window).on("load", function() {
  $('main').delay(200).fadeIn(700);
  });