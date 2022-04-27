// alert on page load

// $(document).ready( function() {
//   alert('Hello Web Site Setup');
// }); 


// alert on click


// $(document).ready( function(){
//  $('body').click(function(){ alert('Hello Web Site Setup');  });
 
// });



// header menu active class onload page 

 jQuery(document).ready(function($) {
    var url = window.location.pathname,
   urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); 
    $(".menu li a").each(function() {//alert('dsfgsdgfd');
    if(urlRegExp.test(this.href.replace(/\/$/,''))){
    $(this).addClass("active");}
});
});   

// Menu Toggle

$(document).ready(function(){
  $(".menu_toggle").click(function(){
    $("body").toggleClass('menuactive');
  });
});
