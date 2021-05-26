@@include('main-desk.js');
@@include('nav.js');
@@include('timer.js');
@@include('modal.js');
@@include('brif.js');
@@include('jquery.maskedinput.min.js');
@@include('phone-mask.js');
@@include('slick.js');
document.addEventListener("DOMContentLoaded", function () {
	if ($(".which-site").length) $(".which-site").css("background-image", "url(" + $(".which-site").attr("data-img") + ")");
	console.log("js load successfull");
	$(".your-sales-back").find("button").click(()=>{
		let client_data = {};
		if ($(".your-sales-back").find("button").parent().children("input").val() == "") return;
		client_data.phone = $(".your-sales-back").find("button").parent().children("input").val();
		$.ajax({
			type: 'POST', //Метод отправки
			url: 'php/modal.php', //путь до php фаила отправителя
			data: client_data,
							success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
								$(".modal").removeClass("hidden");
								setTimeout(() => {
									$(".modal").addClass("modal-dark");
									$(".modal-window").addClass("modal-window-visible");
								}, 10);
								$(".modal-window").append("<div class='modal-success'><p>Мы приняли Вашу заявку,<br>ожидайте звонка в ближайшее время !</p></div>");
								setTimeout(()=>{
									$(".modal").removeClass("modal-dark");
									$(".modal-window").removeClass("modal-window-visible");
									setTimeout(() => {
										$(".modal").addClass("hidden");
									}, 500);
									setTimeout(()=>{
										$(".modal-success").remove();
									},1000);
								},2000);
							}
			});
	});
});