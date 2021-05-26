document.addEventListener("click", function (e) {
	if (!$(".modal").hasClass("hidden") && (e.target == document.querySelector(".modal") || (e.target == document.querySelector(".modal-window").querySelector("span")))) {
		closeModal();
	}
});
$(".mod").click(()=>{
	$(".modal").removeClass("hidden");
	setTimeout(() => {
		$(".modal").addClass("modal-dark");
		$(".modal-window").addClass("modal-window-visible");
	}, 10);
});
function closeModal() {
	$(".modal").removeClass("modal-dark");
	$(".modal-window").removeClass("modal-window-visible");
	setTimeout(() => {
		$(".modal").addClass("hidden");
	}, 500);
}
function changeTable(li){
	let curr_item;
	let i;
	if (!li.classList.contains('active')){
		let types = Array.from(li.parentNode.querySelectorAll('li'));
		for (i = 0 ; i < types.length; i++){
			types[i].classList.remove('active');
			if (li == types[i]) curr_item = i;
		}
		li.classList.add('active');

		let tables = Array.from(li.parentNode.parentNode.querySelectorAll('table'));
		for (let j = 0; j < tables.length; j++){
			tables[j].classList.add('hidden');
		}
		tables[curr_item].classList.remove('hidden');
		// console.log(li.parentNode.parentNode.querySelectorAll('table'))
	}
}
$(".modal-window").children("button").click(()=>{
	let client_data = {};
	client_data.phone = $(".modal-window").children("input").val();
	$.ajax({
		type: 'POST', //Метод отправки
		url: 'php/modal.php', //путь до php фаила отправителя
		data: client_data,
						success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
							$(".modal-window").append("<div class='modal-success'><p>Мы приняли Вашу заявку,<br>ожидайте звонка в ближайшее время !</p></div>");
							setTimeout(()=>{
								closeModal();
								setTimeout(()=>{
									$(".modal-success").remove();
								},1000);
							},2000);
						}
		});
});