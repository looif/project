$(document).ready(function() {
	$('.phone').on('input', function () {
		let val = $('.phone').val();
		if (val[0] == 8 || val[0] == 7){
				$('.phone').val(val.slice(1));
		}
	});
	$('.phone').mask('+7 (999) 999-99-99');
});