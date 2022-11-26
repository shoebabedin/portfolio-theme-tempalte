// Code for preloader will be disappeared after all contents being loaded ----------------------------------------------------------*****
 

$(document).ready(function() {
  setTimeout(function() {
    $('.prelaoder').addClass('loaded');
    // Once the container has finished, the scroll appears
    if ($('.frame').hasClass('loaded')) {
      // It is so that once the container is gone, the entire preloader section is deleted
      $('.preloader').delay(500).queue(function() {
        $(this).remove();
      });}
  }, 3000);

});
