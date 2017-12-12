$(document).ready(function() {
  var windowWidth;
  var windowHeight;

  function checkRatio() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    if (windowWidth > windowHeight) {
      $('.overlay').attr('src', 'img/HackathonX.png').css('bottom', '-250px');
      $('#about-row').css('margin-top', '250px');
    } else {
      $('.overlay').attr('src', 'img/HackathonY.png').css('bottom', '-2px');
      $('#about-row').css('margin-top', '-2px');
    }
  }
  checkRatio();

  $(window).resize(function() {
    checkRatio();
  });

  if ($(document).scrollTop() > 90) {
    $('.navbar').css('background-color', '#fff');
  }

  var navHeight = $('nav').height() - 1;

  // $sections includes all of the container divs that relate to menu items.
  var $sections = $('.section');
  var $currentSection;
  $(".scrolltop").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $('html').offset().top - navHeight + 1
    }, 700);
    return false
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 90) {
      $('.navbar').css('background-color', '#fff');
      $('a.scrolltop:hidden, a.scrolltop .fa').fadeIn();
    } else {
      $('.navbar').css('background-color', 'transparent');
      $('a.scrolltop, a.scrolltop .fa').stop(false,false).fadeOut();
    }
    // currentScroll is the number of pixels the window has been scrolled
    var currentScroll = $(this).scrollTop();
    // $currentSection is somewhere to place the section we must be looking at

    // We check the position of each of the divs compared to the windows scroll positon
    $sections.each(function() {
      // divPosition is the position down the page in px of the current section we are testing
      var divPosition = $(this).offset().top;
      // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
      // the -1 is so that it includes the div 1px before the div leave the top of the window.

      if (divPosition - navHeight < currentScroll) {
        // We have either read the section or are currently reading the section so we'll call it our current section
        $currentSection = $(this);

        // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
        // This is the bit of code that uses the currentSection as its source of ID
        var id = $currentSection.attr('id');
        $('li > a.navbar-item').removeClass('active-section');
        $('li > a[href=#' + id + ']').addClass('active-section');
      }
      if (currentScroll + navHeight < $('.section:first-child').offset().top) {
        $('li > a.navbar-item').removeClass('active-section');
      }
    });
  });

  //scroll down na klik nav itema
  $('.nav a[href*=\\#], .footer-navigation p.links a').on('click', function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - navHeight + 1
    }, 700);
  });

  //scroll down na klik scrollDown buttona
  $('.scrollDown-link, .saznaj-vise').on('click', function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - navHeight + 1
    }, 700);
  });
});
