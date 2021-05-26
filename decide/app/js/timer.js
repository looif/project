if ($(".right-time")) {
	let sale_end = new Date().getDay();
	if (sale_end == 0) sale_end = 7;
	sale_end = (7 - sale_end);
	sale_end = new Date().getDate() + sale_end + 1;
	sale_end = new Date(new Date().getFullYear(), new Date().getMonth(), sale_end);
	sale_end = sale_end.getTime();
	setInterval(() => {
		let curr_time = new Date();
		curr_time = curr_time.getTime();
		let time = sale_end - curr_time;

		time = Math.round(time/1000);
		$('.right-time').children("p").children("span").eq(3).html(time % 60); // секунды

		time = Math.round(time/60);
		$('.right-time').children("p").children("span").eq(2).html(time % 60); // минуты

		time = Math.round(time/60);
		$('.right-time').children("p").children("span").eq(1).html(time % 24); // часы

		time = Math.round(time/24);
		$('.right-time').children("p").children("span").eq(0).html(time); // дни
	}, 1000);
}