$(function(){
  $('.main-flex-slider').flexslider({
    slideshowSpeed: 5000,
    directionNav: false,
    animation: "fade",
    controlNav:false
  });

  $('.portfolio-slide').flexslider({
    slideshowSpeed: 5000,
    directionNav: false,
    animation: "fade",
    controlNav:true
  });

  $('.sticky').sticky({
    topSpacing: 0
  });

  $('.scrollto a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
  });

  $('[data-toggle=popover]').popover();

  $('[data-toggle=tooltip]').tooltip();

  $(window).stellar({
      horizontalScrolling: false,
      responsive: true
  });

  //Check to see if the window is top if not then display button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });

  $('.player').mb_YTPlayer();

  $('#modal').on('show.bs.modal', function (event) {
    var $target = $(event.relatedTarget),
        modalType = $target.data('modal-type'),
        $modal = $(this);

    $modal.find('.modal-documentcloud').hide();
    $modal.find('.modal-acrobat').hide();
    $modal.find('.modal-linkedin').hide();
    $modal.find('.modal-extensions').hide();

    $modal.find('.modal-' + modalType).show();
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 5){  
      $('.navbar-transparent').addClass('navbar-bg');
    } else {
      $('.navbar-transparent').removeClass('navbar-bg');
    }
  });
});

/* ==============================================
Auto Close Responsive Navbar on Click
=============================================== */
function close_toggle() {
  if ($(window).width() <= 768) {
    $('.navbar-collapse a').on('click', function() {
      $('.navbar-collapse').collapse('hide');
    });
  } else {
    $('.navbar .navbar-default a').off('click');
  }
}

close_toggle();
$(window).resize(close_toggle); 

/*=========================*/
/*========Animation on scroll with wow.js====*/
/*==========================*/
(function(){
  wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true
  });

  wow.init(); 
})();