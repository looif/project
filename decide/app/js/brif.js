if (document.querySelector(".brif")) {
	var brif_data = {};
	document.addEventListener("click", function (e) {
		if (!$(".brif").hasClass("hidden") && (e.target == document.querySelector(".brif") || (e.target == document.querySelector(".brif-window").querySelector("span")))) {
			closeBrif();
		}
	});
	$(".which-site-content").children("button").eq(0).click(()=>{
		$(".brif").removeClass("hidden");
		setTimeout(() => {
			$(".brif").addClass("brif-dark");
			$(".brif-window").addClass("brif-window-visible");
		}, 10);
	});
	function closeBrif() {
		$(".brif").removeClass("brif-dark");
		$(".brif-window").removeClass("brif-window-visible");
		setTimeout(() => {
			$(".brif").addClass("hidden");
		}, 500);
	}
	let radio_checked = true;
	$(".next-brif-window").click(()=>{
		for (i = 0; i < $(".brif-question").length; i++) {
			if (!$(".brif-question").eq(i).hasClass("hidden")) {
				if ($(".brif-question").eq(i).children("div").length == true) {
					radio_checked = false;
					for (j = 0; j < $(".brif-question").eq(i).children("div").children("input").length; j++) {
						if ($(".brif-question").eq(i).children("div").children("label").eq(0).hasClass("not_required")) {
							radio_checked = true;
							break;
						}
						if ($(".brif-question").eq(i).children("div").children("input").eq(j)[0].checked) radio_checked = true;
					}
				}
				if (($(".brif-question").eq(i).children("input").val() == "" && $(".brif-question").eq(i).children("input")[0].required)|| !radio_checked) {
					for (j = 0; j < $(".brif-question").eq(i).children("input").length; j++) {
						if ($(".brif-question").eq(i).children("input")[j].required) $(".brif-question").eq(i).children("input").eq(j).css("border-color", "red");
					}
					$(".brif-required-fields").removeClass("hidden");
					return;
				} else {
					for (j = 0; j < $(".brif-question").eq(i).children("input").length; j++) {
						if ($(".brif-question").eq(i).children("input")[j].required) $(".brif-question").eq(i).children("input").eq(j).css("border-color", "#2F80ED");
					}
					$(".brif-required-fields").addClass("hidden");
				}
			}
			if (!$(".brif-question").eq(i).hasClass("hidden") && (i+1) < $(".brif-question").length) {
				$(".brif-question").eq(i).addClass("hidden");
				$(".brif-question").eq(i+1).removeClass("hidden");
				if (i+2 == $(".brif-question").length) $(".next-brif-window").html("Заказать");
				$(".progress-bar-line").css("width", (i+1)*11 + "%");
				// console.log((i+1)*11 + "%");
				return;
			} else if ((i+1) == $(".brif-question").length) {
				brif_data.type_of_business = $(".brif-window").find("input[name=type_of_business]").val();
				for (k = 0; k < $(".brif-window").find("input[name=goal_for_site]").length; k++) {
					if ($(".brif-window").find("input[name=goal_for_site]")[k].checked)
						brif_data.site_goal = $(".brif-window").find("input[name=goal_for_site]").eq(k).val();
				}
				brif_data.your_site = $(".brif-window").find("input[name=your_site]").val();
				brif_data.your_site_plus = $(".brif-window").find("input[name=your_site_plus]").val();
				brif_data.your_site_minus = $(".brif-window").find("input[name=your_site_minus]").val();
				for (k = 0; k < $(".brif-window").find("input[name=deadline]").length; k++) {
					if ($(".brif-window").find("input[name=deadline]")[k].checked)
						brif_data.deadline = $(".brif-window").find("input[name=deadline]").eq(k).val();
				}
				brif_data.site_style = $(".brif-window").find("input[name=site_style]").val();
				brif_data.colors = $(".brif-window").find("input[name=colors]").val();
				brif_data.materials = [];
				for (k = 0; k < $(".brif-window").find("input[name=materials]").length; k++) {
					if ($(".brif-window").find("input[name=materials]")[k].checked)
						brif_data.materials.push($(".brif-window").find("input[name=materials]").eq(k).val());
				}
				brif_data.add_services = [];
				for (k = 0; k < $(".brif-window").find("input[name=add_services]").length; k++) {
					if ($(".brif-window").find("input[name=add_services]")[k].checked)
						brif_data.add_services.push($(".brif-window").find("input[name=add_services]").eq(k).val());
				}
				brif_data.name = $(".brif-window").find("input[name=contacts_fio]").val();
				brif_data.phone = $(".brif-window").find("input[name=contacts_phone]").val();
				brif_data.email = $(".brif-window").find("input[name=contacts_email]").val();
				// console.log(brif_data);
				$.ajax({
				type: 'POST', //Метод отправки
				url: 'php/brif.php', //путь до php фаила отправителя
				data: brif_data,
								success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
									$(".brif-window").append("<div class='modal-success'><p>Мы приняли Вашу заявку,<br>ожидайте звонка в ближайшее время !</p></div>");
									setTimeout(()=>{
										closeModal();
										setTimeout(()=>{
											$(".modal-success").remove();
											$(".brif").click()
										},1000);
									},2000);
									ym(71890936,'reachGoal','brif');
								}
				});
			}
		}
	});
	$(".prev-brif-window").click(()=>{
		$(".brif-required-fields").addClass("hidden");
		radio_checked = true;
		for (i = 0; i < $(".brif-question").length; i++) {
			if (!$(".brif-question").eq(i).hasClass("hidden") && (i-1) > -1) {
				if (i == $(".brif-question").length - 1) $(".next-brif-window").html("Далее");
				$(".brif-question").eq(i).addClass("hidden");
				$(".brif-question").eq(i-1).removeClass("hidden");
				return;
			}
		}
	});
	$("label").click(function(){
		if ($(this).hasClass("check")) {
			$(this).toggleClass("label-active");
		} else {
			$(this).parent().children("label").removeClass("label-active");
			$(this).addClass("label-active");
		}
	});
}