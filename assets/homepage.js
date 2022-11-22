// ==================================================
//	Developer:    Jessica Dooley | ToolStudios
//	Email:        jessica@toolstudios.com
//	Created:      06.16.2015
//	Website:      Apex Ski Boots | apexskiboots.com
//	Copyright:    (c) 2015 ToolStudios
// ==================================================

// ==========================================================================
//   HOMEPAGE
// ==========================================================================

/*
* rwdImageMaps jQuery plugin v1.5
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2013 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").load(function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);


$(document).ready(function(){

	// Adds and removes body class depending on screen width.
	function screenClass() {
		if($(window).innerWidth() < 871) {
			$('body').addClass('small-screen').removeClass('big-screen');
		} else {
			$('body').addClass('big-screen').removeClass('small-screen');
			$('.xp2').remove();
		}
	}

	// Fire.
	screenClass();

	// And recheck if window gets resized.
	$(window).bind('resize',function(){
		screenClass();
	});

	$(".products-carousel").owlCarousel({
		nav: true,
		navText: ["&lt;","&gt;"],
		dots: false,
		autoHeight: true,
		responsive: {
			0: { // breakpoint from 0 up - small smartphones
				items: 1
			},
			480: { // breakpoint from 480 up - smartphones // landscape
				items: 2
			},
			768: { // breakpoint from 768 up - tablets
				items: 3
			},
			992: { // breakpoint from 992 up - desktop
				items: 4
			}
		}
	});

	$(".awards img").mouseover(function() {
		var src = $(this).data("hover");
		$(this).attr("src", src);
	}).mouseout(function() {
		var src = $(this).data("original");
		$(this).attr("src", src);
	});

	$('img[usemap]').rwdImageMaps();

});