jQuery(function ($) {
//declare slider (owl-carousel slider)
  $('.coursesCarusel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    rtl:true,
    dots:false,

    responsive: {
      0: {
        items: 1,

      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,

      },
      1200:{
        items:3
      }

    }
  });
  $('.trainersSlider').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 150,
    rtl:true,
    dots:false,

    responsive: {
      0: {
        items: 1,

      },
      600: {
        items: 2,
        margin:100,
      },
      1000: {
        items: 3,
        margin:70

      },
      1300:{
        items:3
      }
      

    }
  });
 
  function onScroll(event){
			
		var scrollPosition = $(document).scrollTop();
    //add class active when select item from navbar 
		$('.navbar-collapse .nav-item a[href^="#"').each(function () {
			console.log($(this).attr('href')); 
		  var refElement = $($(this).attr("href"));
		  if (refElement.length&&refElement.position().top <= scrollPosition) {
			$('.navbar-collapse .nav-item ').removeClass("active");
			$(this).parent().addClass("active");
		  }
		  else{
			$(this).removeClass("active");
		  }
  
		});
	  }
    $(document).on("scroll", onScroll);
// animate to the section when click  on it
    $('.navbar-collapse ul li a').on('click', function () {
      $('html, body').animate({ scrollTop: $(this.hash).offset().top  - 5 }, 1000);
      $('.navbar-collapse.collapse.in').removeClass('in');
      return false;
    });
    
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
//add fix header when scroll down and remove when back up
    if (scrollTop > $('header').height()) {
      $('header').addClass('scrollNav');


    }

    else {
      $('header').removeClass('scrollNav');
    }

  });
  //close menu when choose item
  $(".navbar .nav-link").click(function(){
    $(".collapse").removeClass("show");
  })
  // declare rating 
  $(".my-rating").starRating({
    starSize: 16,
    rtl: true,
    activeColor: '#FFAE01',
    hoverColor: '#F9D674',
    ratedColor: '##FFAE01',
    emptyColor: '#F3F3F3',
    starShape: 'rounded',
    useGradient: false,
    disableAfterRate: false,

    callback: function (currentRating, $el) { }
  });
});

