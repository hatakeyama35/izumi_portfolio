$.parallax({
    stage: window,
    direction: 'y',
});

/* top */
/* 丸モーション */
var $top_item = $('#top .material > *')
$top_item.each(function(i) {
  var random = Math.random() * 8 + 2
  var speed = Math.floor(Math.random() * 2) === 0 ? random : -random
  $(this).parallaxSpeed({
      style: 'top',
      speed: speed,
      fixScrollPosition: 0
  })
})

/* about */
/* 六角形モーション */
var $roku_item = $('#about .material > [class^=roku]')
var aboutPosition = $('#about').offset().top
$roku_item.each(function(i) {
  var random = Math.random() * 8 + 2
  var speed = Math.floor(Math.random() * 2) === 0 ? random : -random
  $(this).parallaxSpeed({
      style: 'top',
      speed: speed,
      fixScrollPosition: aboutPosition
  })
})

/* 六角形を回転する */
var deg = [];
var random1 = Math.random() * 3;
var random2 = Math.random() * 3;
$(window).on('scroll resize load', function () {
	$roku_item.each(function(i){
		deg[i] = deg[i] || 0;
		deg[i] += i % 2 ? random1 : -random2;
		$(this).css({
			transform: `rotate(${deg[i]}deg)`
		})
	});
});

/* rain */
/* 雨モーション */
var $rain_item = $('#about .material > [class^=rain]')
var aboutPosition = $('#about').offset().top
$rain_item.each(function(i) {
  var random = Math.random() * 8 + 2
  var rainRandom = Math.random() * 4 + 1
  var speed = Math.floor(Math.random() * 2) === 0 ? random : -random
  $(this).parallaxSpeed({
      style: ['left', 'top'],
      speed: [-rainRandom - 0.7, rainRandom],
      fixScrollPosition: aboutPosition
  })
})

/* 三角モーション */

var $work_item = $('#work .material > *')
var workPosition = $('#work').offset().top
$work_item.each(function(i) {
  var random = Math.random() * 8 + 2
  var speed = Math.floor(Math.random() * 2) === 0 ? random : -random
  $(this).parallaxSpeed({
      style: 'top',
      speed: speed,
      fixScrollPosition: workPosition
  })
})

/* 三角形を回転する */
var deg = [];
var random1 = Math.random() * 3;
var random2 = Math.random() * 3;
$(window).on('scroll resize load', function () {
	$work_item.each(function(i){
		deg[i] = deg[i] || 0;
		deg[i] += i % 2 ? random1 : -random2;
		$(this).css({
			transform: `rotate(${deg[i]}deg)`
		})
	});
});

/* ダイヤモーション */
var $window = $(window)
var windowHeight = window.innerHeight
var pageHeight = $('body').height()
$window.on('resize', function() {
  windowHeight = window.innerHeight
  pageHeight = $('body').height()
})

var $illust_material = $('#illust .material > *')
var illustPosition = $('#illust').offset().top
$illust_material.each(function(i) {
  var random = Math.random() * 0.5
  var speed = random

  $(this).parallaxSpeed({
      style: 'top',
      max: parseInt($(this).css('top')),
      speed: speed,
      fixScrollPosition: pageHeight - windowHeight
  })
})


/* illustモーション */

var $illust_item = $('#illust .illust_item')
$illust_item.each(function(i) {
  var random = Math.random() * 0.5
  var speed = random

  $(this).parallaxSpeed({
      style: 'top',
      max: 0,
      speed: speed,
      fixScrollPosition: 'lastScrollPosition'
  })
})
