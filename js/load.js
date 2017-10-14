$(document).ready(function() {

  $(window).scroll(function(){
    if ($(document).scrollTop() > 50){
      //klasa za neprovidan nav
      $('.navbar').css('background-color','#fff');
    }
    else{
      //klasa za providan nav
    }

 });

 $('.nav a[href*=\\#]').on('click', function(event) {
   event.preventDefault();
   $('html,body').animate({
     scrollTop: $(this.hash).offset().top - 90
   }, 700);
 });

});
