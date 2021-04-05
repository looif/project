function closeModal(){
	document.querySelector('.modal').classList.add('hidden');
}

function showModal(){
	document.querySelector('.modal').classList.remove('hidden');
}

document.addEventListener('click', function(e) {
	if (e.target == document.querySelector(".modal")) closeModal();
	if (e.target == document.querySelector(".modal2")) document.querySelector('.modal2').classList.add('hidden');
});

$(".arrow-up").click(function(){
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#scroll-top").offset().top
	}, 250);
});
$(document).scroll(function(){
	if (window.scrollY > window.innerHeight) {
		$(".arrow-up").removeClass("hidden");
	} else {
		$(".arrow-up").addClass("hidden");
	}
});

$(function(){
	$("a[href^='#']").click(function(){
					var _href = $(this).attr("href");
					$("html, body").animate({scrollTop: $(_href).offset().top-parseInt($(".header").css("height"))+"px"});
					return false;
	});
});

let time = 0;
let timer = setInterval(function(){
	time++;
	if  (time == 120) {
		document.querySelector('.modal2').classList.remove('hidden');
		clearInterval(timer);
	}
},1000);