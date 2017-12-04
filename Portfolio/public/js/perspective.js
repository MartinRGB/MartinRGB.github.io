'use strict';		
		
// $(document).on('mousemove', function (e) {		
//   $('.light').css({		
//     left: e.pageX - 300,		
//     top: e.pageY - 300		
//   });		
// });		
		
		
var el = $('.js-tilt-container');		
		
el.on('mousemove', function (e) {		
  var _$$offset = $(this).offset();		
		
  var left = _$$offset.left;		
  var top = _$$offset.top;		
		
  var cursPosX = e.pageX - left;		
  var cursPosY = e.pageY - top;		
  var cursFromCenterX = $(this).width() / 2 - cursPosX;		
  var cursFromCenterY = $(this).height() / 2 - cursPosY;		
		
  $(this).css('transform', 'perspective(500px) rotateX(' + cursFromCenterY / 40 + 'deg) rotateY(' + -(cursFromCenterX / 40) + 'deg) translateZ(10px)');		
		
  var invertedX = Math.sign(cursFromCenterX) > 0 ? -Math.abs(cursFromCenterX) : Math.abs(cursFromCenterX);		
		
  //Parallax transform on image		
  $(this).find('.js-perspective-neg').css('transform', 'translateY(' + cursFromCenterY / 10 + 'px) translateX(' + -(invertedX / 10) + 'px) scale(1.15)');		
		
  $(this).removeClass('leave');		
});		
		
el.on('mouseleave', function () {		
  $(this).addClass('leave');		
}); 