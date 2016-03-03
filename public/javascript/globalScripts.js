/*
 *Created By: Matt Campagnola
 *2/24/16
 */
$(document).ready(function(){
    
    console.log('globalScripts.js loaded');
    
    /*pushes down mobile navbar*/
    $('#dropDown').click(function(){
			var Value=$('#topNav').height();
			document.getElementById('bs-sidebar-navbar-collapse-2').setAttribute("style","margin-top:" + Value.toString() + "px");
            console.log('click pushed');
	});
    
    
     /*Close extended colapsed navbar menu when user clicks outside of the menu*/
     jQuery('body').bind('click', function(e) {
        if(jQuery(e.target).closest('.navbar').length == 0) {
            // click happened outside of .navbar, so hide
            var opened = jQuery("#bs-sidebar-navbar-collapse-2").hasClass('collapse in');
            if ( opened === true ) {
                jQuery('#bs-sidebar-navbar-collapse-2').collapse('hide');
            }
        }
    });
    
    
});