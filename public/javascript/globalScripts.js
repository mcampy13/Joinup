/*
 *Created By: Matt Campagnola
 *2/24/16
 */
$(document).ready(function(){
    
    /*pushes down mobile navbar*/
    $('#dropDown').click(function(){
			var Value=$('#topNav').height();
			document.getElementById('bs-sidebar-navbar-collapse-2').setAttribute("style","margin-top:" + Value.toString() + "px");
            console.log('click pushed');
	});
    
    /*Close extended colapsed navbar menu when user clicks outside of the menu*/
       $(document).ready(function () {
         $(document).click(function(event) {
           $("#bs-sidebar-navbar-collapse-2").collapse('hide');
         });
       });
    
    
    
});