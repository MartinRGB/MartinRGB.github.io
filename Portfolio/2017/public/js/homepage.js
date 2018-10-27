$(document).ready(function($) {
	$('.container--grid ul').mixItUp({
	    animation: {
	    duration: 350,
	    effects: 'fade translateY(40px)',
	    easing: 'ease'
	    }
	});
});

$('a').on("touchstart", function (e) {
'use strict';
var link = $(this);
if (link.hasClass('hover')) {
    return true;
 } 
else {
   link.addClass('hover');
   $('a').not(this).removeClass('hover');
   e.preventDefault();
   return false;
  }
});