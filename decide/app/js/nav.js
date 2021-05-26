$(".burger").click(function(){
	$(this).parent().next().slideToggle();
	if (!$(this).hasClass("active")) {
		$(this).children().eq(0).css("transform", "translateY(0.7em)");
		$(this).children().eq(2).css("transform", "translateY(-0.7em)");
		let self = $(this);
		setTimeout(function(){
			self.children().eq(1).css("opacity", "0");
		},300);
		setTimeout(function(){
			self.children().eq(0).css("transform", "translateY(0.7em) rotate(45deg)");
			self.children().eq(2).css("transform", "translateY(-0.7em) rotate(-45deg)");
		},400);
		$(this).addClass("active");
	} else {
		$(this).children().eq(0).css("transform", "translateY(0.7em)");
		$(this).children().eq(2).css("transform", "translateY(-0.7em)");
		let self = $(this);
		setTimeout(function(){
			self.children().eq(1).css("opacity", "1");
		},300);
		setTimeout(function(){
			self.children().eq(0).css("transform", "none");
			self.children().eq(2).css("transform", "none");
		},400);
		$(this).removeClass("active");
	}
});

let header_height = parseInt($("header").css("height"));

$(window).scroll(function() {
	if (window.innerWidth >= 992 && window.scrollY > header_height && !$("header").hasClass("active") && header_height == parseInt($("header").css("height"))) {
		$("header").slideToggle(400,"swing");
		$("header").addClass("active")
		$("nav").css("border-color", "#ffffff")
	} else if (window.innerWidth >= 992 && window.scrollY == 0 && $("header").hasClass("active")) {
		$("header").slideToggle(400,"swing");
		$("header").removeClass("active");
		$("nav").css("border-color", "#E5E5E5");
	}
});
$(".services-list-open").click((e)=>{
	e.preventDefault();
	$(".services-list-open").parent().next().slideToggle(400,"swing");
	$(".services-list-open").toggleClass("services-list-open-active");
	// console.log($(".services-list-open").next());
});