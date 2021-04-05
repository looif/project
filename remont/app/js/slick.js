$(document).ready(function(){
  $('.slider1').slick({
	centerMode:true,
	centerPadding: '0',
    slidesToShow:1,
    initialSlide:0,
    speed:1400,
    pauseOnFocus:true,
    pauseOnHover:true,
	arrows:false,
	responsive: [
		{
			breakpoint: 640,
			settings: {
				centerPadding: '1em',
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows:true,
			}
		}		
	]
  });
  $('.slider2').slick({
    slidesToShow:1,
    initialSlide:0,
    speed:1100,
    pauseOnFocus:true,
    pauseOnHover:true,
	arrows:false,
	dots:true,
	autoplay:true,
	autoplaySpeed:5000,
  });
  $('.slider3').slick({
	centerMode:true,
	centerPadding: '15em',
    slidesToShow:1,
    initialSlide:0,
    speed:1100,
    pauseOnFocus:true,
    pauseOnHover:true,
	responsive: [
		{
		  breakpoint: 1230,
		  settings: {
			centerPadding: '0'
		  }
		}
	]
  });
  $('.slider4').slick({
    slidesToShow:1,
    initialSlide:0,
    speed:1100,
    pauseOnFocus:true,
    pauseOnHover:true,
	arrows:false,
	dots:true,
	autoplay:true,
	autoplaySpeed:5000,
	adaptiveHeight:true,
  });
  $('.slider5').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
    pauseOnHover: true,
    arrows: true,
	asNavFor:".slidermin"
  });
  $('.slidermin').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider5',
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 4
		  }
		},
		{
			breakpoint: 640,
			settings: {
			  slidesToShow: 3
			}
		  }
	]
  });
});

$(document).ready(function() {
	$('.block__title').click(function(event){
    if($('.block').hasClass('one')){
      $('.block__title').not($(this)).removeClass('active');
      $('.block__text').not($(this).next()).slideUp(300);
    }
		$(this).toggleClass('active').next().slideToggle(300);
	});
	if ($('.slider1').attr('data-class')) {
		let items = $('.slider1').children('.slick-list').children('.slick-track').children('.slider__item:not(.slick-cloned)');
		let j=0;
		let helper;
			$.each(items, function(i,item){
				if (item.classList.contains($('.slider1').attr('data-class'))) {
					helper = items[j].children[0].getAttribute("src");
					console.log(helper);
					items[j].children[0].setAttribute("src", item.children[0].getAttribute("src"));
					items[i].children[0].setAttribute("src", helper);
					j++;
				}
				if (item.classList.contains("slick-active")) item.classList.remove("slick-active");
				if (item.classList.contains("slick-current")) item.classList.remove("slick-current");
			});
			items[0].classList.add("slick-active");
			items[0].classList.add("slick-current");
			items[1].classList.add("slick-active");
	}
});