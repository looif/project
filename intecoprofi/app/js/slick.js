$(document).ready(function(){
  $('.slider1').slick({
    slidesToShow:4,
    initialSlide:0,
    speed:700,
    pauseOnFocus:true,
    pauseOnHover:true,
    responsive: [
      {
        breakpoint: 1148,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 864,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
});

$(document).ready(function() {
	$('.block__title').click(function(event){
    if($('.block').hasClass('one')){
      $('.block__title').not($(this)).removeClass('active');
      $('.block__text').not($(this).next()).slideUp(300);
    }
		$(this).toggleClass('active').next().slideToggle(300);
	})
});