let bubbles = {};
let size;
bubbles.type = [];
bubbles.type_quantity = 7;
bubbles.block_height = parseInt($(".bubbles-helper").css("height"))*1.1;
bubbles.block_width = parseInt($(".bubbles-helper").css("width"))*0.4;
bubbles.update = function(index){
	$(".bubble").eq(index).css("bottom", rand(-this.block_height,-192) + "px");
	$(".bubble").eq(index).css("right", rand(0,this.block_width) + "px");
	$(".bubble").eq(index).attr("right", rand(0,1));
	$(".bubble").eq(index).attr("speed", rand(1,3));
	$(".bubble").eq(index).css("z-index", rand(0,28));
	size = rand(3,10);
	$(".bubble").eq(index).css("width", size + "em");
	$(".bubble").eq(index).css("height", size + "em");
}
if (window.innerWidth > 767) {
	let divs = "<img src='img/desk4.webp' alt='' class='bubble-phone'>";
	for (i = 0; i < bubbles.type_quantity; i++){
		bubbles.type[i] = rand(1,3);
	}
	for (j = 0; j < bubbles.type_quantity-1; j++) {
		for (i = 0; i < bubbles.type[j]; i++){
			divs = divs + "<img class='bubble' src=img/bubbles/bubble" + (j+1) + ".webp>";
		}
	}
	$(".bubbles-helper").append(divs);
	for (let i = 0; i < $(".bubble").length; i++){
		bubbles.update(i);
	}
	setInterval(() => {
		for (i = 0; i < $(".bubble").length; i++){
			$(".bubble").eq(i).css("bottom", (parseInt($(".bubble").eq(i).css("bottom")) + +$(".bubble").eq(i).attr("speed")) + "px");
			if (parseInt($(".bubble").eq(i).css("bottom")) > bubbles.block_height){ 
				bubbles.update(i);
			}
			if ($(".bubble").eq(i).attr("right") == 1) {
				$(".bubble").eq(i).css("right", (parseInt($(".bubble").eq(i).css("right")) + 1) + "px");
			} else {
				$(".bubble").eq(i).css("right", (parseInt($(".bubble").eq(i).css("right")) - 1) + "px");
			}
			if (parseInt($(".bubble").eq(i).css("right")) > bubbles.block_width*0.85) 
				$(".bubble").eq(i).attr("right", 0);
			else if (parseInt($(".bubble").eq(i).css("right")) < -bubbles.block_width*0.01) $(".bubble").eq(i).attr("right", 1);
		}
	}, 12);
}
function rand(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}