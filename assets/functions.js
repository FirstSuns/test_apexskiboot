/*~~~~~~~~~~~~~~~~~Start Document Ready~~~~~~~~~~~~~~~~*/
$(document).ready(function($) {
	
	// MOBILE MENU CLASS TOGGLES
	$('.st-menu .parent > a').click(function(e) {
	    e.preventDefault();
		$(this).closest('li').toggleClass('active');
	});

  jQuery('#st-trigger-effects button').click(function(e){
        jQuery('#st-container').addClass('st-effect-1');
  		jQuery('#st-container').toggleClass('st-menu-open');
  });
  
  jQuery('.st-container.st-effect-1').click(function() {
  // Hide the menus if visible.
    jQuery('#st-container').removeClass('st-menu-open');
  });
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*  INITIALIZE PLACEHOLDER TEXT SUPPORT 
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
   
    $('input[type=text], input[type=password], input[type=email], textarea').addPlaceholder();    
		
	
/*~~~~~~~~~~~~~~~~~End Document Ready~~~~~~~~~~~~~~~~*/
});
