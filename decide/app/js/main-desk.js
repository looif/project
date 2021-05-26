if ($(".main-desk-slide").length > 1){
	slider = {};
	// Отслеживание параметра нажатии мышки или удержания пальцем
	slider.drug_n_drop = false;
	// Время через которое слайдер повторно запускается, если прекраитть с ним взаимодействие
	slider.delay_to_start = 20;

	slider.time_to_start = slider.delay_to_start + 1;

	// Инициализация слайдера
	slider.start = function(){
		slider.movement = setInterval(() => {
			slider.moveForward();
		}, 6000);
	}

	// Остановка слайдера
	slider.stop = function(){
		clearInterval(slider.movement);
	}

	// Движение слайдера вперед
	// После перехода ко 2-му слайду, перемещает 1-ый на место, которое идет за 3-м и т.д.
	slider.moveForward = function(){
		$(".main-desk-slide").eq(0).css("margin-left", ("-" + $(".main-desk").css("width")));
		if ($(".main-desk-slide").eq(1).hasClass("black")) $(".main-desk").css("background-color", "#031329");
			else $(".main-desk").css("background-color", "#2F80ED");
		setTimeout(() => {
			$(".main-desk-slide").eq(0).css("margin-left", "0");
			$(".main-desk-slide").eq(0).insertAfter($(".main-desk-slide").eq($(".main-desk-slide").length-1));
		}, 1000); // Время у SetTimeout напрямую связано со свойством transition .main-desk-slide
	}

	// Движение слайдера назад
	// Останавливаем анимацию у элемента, который будем двигать, перемещаем последний экран на первое место
	// с минусовым отступом на ширину экрана и текущая картинка не меняется. Затем включаем анимацию теперь уже 
	// нового первого элемента и двигаем его на 0 отступ
	slider.moveBackward = function(){
		$(".main-desk-slide").eq($(".main-desk-slide").length-1).css("transition", "none");
		$(".main-desk-slide").eq($(".main-desk-slide").length-1).css("margin-left", "-" + ($(".main-desk").css("width")));
		$(".main-desk-slide").eq($(".main-desk-slide").length-1).css("transition", $(".main-desk-slide").eq(1).css("transition"));
		$(".main-desk-slide").eq($(".main-desk-slide").length-1).insertBefore($(".main-desk-slide").eq(0));
		setTimeout(()=>{
			$(".main-desk-slide").eq(0).css("margin-left", "0");
		},50);
		if ($(".main-desk-slide").eq(0).hasClass("black")) $(".main-desk").css("background-color", "#031329");
			else $(".main-desk").css("background-color", "#2F80ED");
	}
	// Событие инициализации клика на области
	$(".main-desk").mousedown((e)=>{
		slider.start_mouse_x = e.pageX;
		slider.drug_n_drop = true;
		return false;
	});
	// Событие тач на области
	document.querySelector(".main-desk").addEventListener('touchstart', function(e) {
		slider.start_mouse_x = e.targetTouches[0].pageX;
		slider.drug_n_drop = true;
		return false;
	})
	// Событие перетаскивания курсора
	$(document).mousemove((e)=>{
		if (slider.drug_n_drop) {
			if (((slider.start_mouse_x - e.pageX) > parseInt($(".main-desk").css("width"))/5)) {
				slider.stop();
				slider.moveForward();
				slider.drug_n_drop = false;
				slider.time_to_start = 0;
			}
			if (((e.pageX - slider.start_mouse_x) > parseInt($(".main-desk").css("width"))/5)) {
				slider.stop();
				slider.moveBackward();
				slider.drug_n_drop = false;
				slider.time_to_start = 0;
			}
		}
	});
	// Событие перетаскивания тача
	document.addEventListener('touchmove', function(e) {
		if (slider.drug_n_drop) {
			if (((slider.start_mouse_x - e.targetTouches[0].pageX) > parseInt($(".main-desk").css("width"))/8)) {
				slider.stop();
				slider.moveForward();
				slider.drug_n_drop = false;
				slider.time_to_start = 0;
			}
			if (((e.targetTouches[0].pageX - slider.start_mouse_x) > parseInt($(".main-desk").css("width"))/8)) {
				slider.stop();
				slider.moveBackward();
				slider.drug_n_drop = false;
				slider.time_to_start = 0;
			}
		}
	});
	// Событие, когда убираешь палец с кнопки мыши
	$(document).mouseup((e)=>{
		slider.drug_n_drop = false;
	});
	// Событие, когда убираешь палец экрана
	document.addEventListener('touchend', function(e) {
		slider.drug_n_drop = false;
	});

	slider.start();
	// Инициализируем счетчик, который отслеживает время до повторного запуска слайдера после окончания действий с ним
	setInterval(() => {
		slider.time_to_start++;
		if (slider.time_to_start == slider.delay_to_start) slider.start();
			else if (slider.time_to_start > (slider.delay_to_start + 1)) slider.time_to_start = slider.delay_to_start + 1;
	}, 1000);
}