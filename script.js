
// ファーストビューの要素を順番に表示
$(window).on('load', function() {
   $('.fv').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var target = $('.fv');
      var speed = 400;
      if(scroll > elemPos - windowHeight){
         target.find('.fv-img01-wrap').addClass('load');
         setTimeout(function(){
            target.find('.fv-img02-wrap').addClass('load');
            setTimeout(function(){
               target.find('.fv-img03-wrap').addClass('load');
               setTimeout(function(){
                  target.find('.site-ttl').addClass('load');
               },speed);
            },speed);
         },speed);
      }
   });
});

// スクロールで要素を表示
window.onload = function() {
   scroll_effect();
   $(window).scroll(function(){
      scroll_effect();
   });
   function scroll_effect(){
      $('.effect-slide-r, .effect-slide-l').each(function(){
         var elemPos = $(this).offset().top;
         var scroll = $(window).scrollTop();
         var windowHeight = $(window).height();
         if (scroll > elemPos - windowHeight * 0.9){
            $(this).addClass('effect-scroll');
         }
      });
   }
};

// レシピプルダウンメニュー
$('.recipe-list-default, .recipe-list li').on('click', function() {
   $('.recipe-list').toggleClass('open');
});

// レシピ、表示/非表示
$('.recipe-list li').on('click', function() {
   var recipeText = $(this).text();
   var id = $(this).attr('id');
   $('.recipe-list-default span').text(recipeText);
   $('.recipe-box').not('.' + id).hide();
   $('.' + id).show();
});
$('.recipe-list li:first-child').addClass('active');
$('.recipe-list li').on('click', function() {
   $(this).addClass('active');
   $('.recipe-list li').not(this).removeClass('active');
})

// モーダルウィンドウ、開閉
$('.menu-btn-open').on('click', function() {
   $('body').addClass('fixed');
   $('.menu-btn-open').addClass('open');
   $('.menu-btn-close').addClass('open');
   $('.modal').addClass('open')
});
$('.menu-btn-close, .modal-nav a').on('click', function() {
   $('body').removeClass('fixed');
   $('.menu-btn-open').removeClass('open');
   $('.menu-btn-close').removeClass('open');
   $('.modal').removeClass('open')
});

// ページトップへ自動スクロール、
var toPagetop = $(".scroll-top-btn");
toPagetop.click(function() {
   $("body, html").animate({scrollTop : 0}, 500);
   return false;
});

// 指定箇所への自動スクロールボタン
$(".modal-nav li a, .navlist li:not([class]) a").on("click", function() {
   var adjust = 0;
   var speed = 600;
   var href = $(this).attr("href");
   var target = $(href == "#" || href == "" ? "html" : href);
   var position = target.offset().top + adjust;
   $("body, html").animate({scrollTop : position}, speed, "swing");
   return false;
});

// ページトップから500pxで要素をフェードイン
var scrollFix = $(".scroll-top-fix");
scrollFix.hide();
$(window).scroll(function() {
   if($(this).scrollTop() > 500) {
      scrollFix.fadeIn(200);
   } else {
      scrollFix.fadeOut(200);
   }
});

// ナビゲーション、画面トップまでスクロール後、fixed [min-width:768px]
var navPos = $('.nav').offset().top; // グローバルメニューの位置
var navHeight = $('.nav').outerHeight(); // グローバルメニューの高さ
$(window).on('scroll', function() {
   if ( $(this).scrollTop() > navPos ) {
      $('.nav').addClass('fixed');
   } else {
      $('.nav').removeClass('fixed');
   }
});