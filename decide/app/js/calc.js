$(".calc-site-type").click(function(){
	let index;
	for (let i=0; i < $(".calc-site-type").length; i++) {
		if ($(".calc-site-type").eq(i)[0] == $(this)[0]) index = i;
		$(".calc-site-type").eq(i).removeClass("calc-site-type-active");
		$(".calc-site-types-desc").eq(i).addClass("calc-site-types-desc-hidden");
	}
	for (let j=0; j < $(".calc-site-types-desc-block").length; j++) {
		$(".calc-site-types-desc-block").eq(j).removeClass("calc-site-types-desc-block-active");
	}
	$(this).addClass("calc-site-type-active");
	$(".calc-site-types-desc").eq(index).removeClass("calc-site-types-desc-hidden");
	$(".calc-site-types-desc").eq(index).find(".calc-site-types-desc-block").eq(0).addClass("calc-site-types-desc-block-active");
	priceCollect();
});

$(".calc-site-types-desc-block").click(function(){
	for (let i=0; i < $(".calc-site-types-desc-block").length; i++) {
		$(".calc-site-types-desc-block").eq(i).removeClass("calc-site-types-desc-block-active");
	}
	$(this).addClass("calc-site-types-desc-block-active");
	priceCollect();
});

$(".calc-add-service-title").click(function(){
	$(this).next().slideToggle();
});

if ($(".calc-add-service-block").eq(0).css("display") == "grid") $(".calc-add-service-block").slideToggle();

$(".calc").find("input[type=checkbox]").click(function(){
	priceCollect();
});

let data = {};

function priceCollect(){
	let price = +$(".calc-site-types-desc-block-active").attr("data-price");
	for (let i=0; i < $(".calc").find("input[type=checkbox]").length; i++) {
		if ($(".calc").find("input[type=checkbox]").eq(i)[0].checked)
			price += +$(".calc").find("input[type=checkbox]").eq(i).attr("data-price");
	}
	$(".calc-price-value").html(price.toLocaleString());
	data["site-type"] = $(".calc-site-type-active").html();
	data["site-type-variant"] = $(".calc-site-types-desc-block-active").find(".desc-title").html();
	data["options"] = [];
	for (let k = 0; k < $(".calc").find("input[type=checkbox]").length; k++) {
		if ($(".calc").find("input[type=checkbox]").eq(k)[0].checked) {
			data["options"].push($(".calc").find("input[type=checkbox]").eq(k).prev().html());
		}
	}
	// console.log(data);
}
priceCollect();

$(".calc-order").find("button").click(function(){
	if ($(this).prev().val() != "") {
		data["phone"] = $(this).prev().val();
		data["price"] = $(".calc-price-value").html();
		$.ajax({
			type: 'POST', //Метод отправки
			url: 'php/calc.php', //путь до php фаила отправителя
			data: data,
				success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
					$(".modal").removeClass("hidden");
					setTimeout(() => {
						$(".modal").addClass("modal-dark");
						$(".modal-window").addClass("modal-window-visible");
					}, 10);
					$(".modal-window").append("<div class='modal-success'><p>Мы приняли Вашу заявку,<br>ожидайте звонка в ближайшее время !</p></div>");
					setTimeout(()=>{
						closeModal();
						setTimeout(()=>{
							$(".modal-success").remove();
						},1000);
					},2000);
					// ym(71890936,'reachGoal','brif');
				}
		});
	}
});

function closeModal() {
	$(".modal").removeClass("modal-dark");
	$(".modal-window").removeClass("modal-window-visible");
	setTimeout(() => {
		$(".modal").addClass("hidden");
	}, 500);
}