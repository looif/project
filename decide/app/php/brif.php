<?php
// Подключаем библиотеку PHPMailer
// use PHPMailer\PHPMailer\PHPMailer;
// require 'PHPMailer/PHPMailer.php';
print_r($_POST);
// Создаем письмо
// if(isset($_POST['phone']) && $_POST['phone']!="" && $_POST['phone']!="+7 (___) ___-__-__"){
// 	$mail = new PHPMailer();
// 	$mail->setFrom('request@decide-group.ru', 'Заявка'); // от кого (email и имя)
// 	$mail->addAddress('info@decide-group.ru', 'Decide-group');  // кому (email и имя)
// 	$mail->Subject = 'Заявка';                         // тема письма
// 	$mail->CharSet = "utf-8";
// 	// html текст письма
// 	$mail->msgHTML('
// 		<html>
// 		<head>
// 			<title>Заявка</title>
// 			<meta charset="UTF-8" />
// 		</head>
// 		<body>
// 			<p>Телефон: '.$_POST['phone'].'</p>
// 		</body>
// 		</html>
// 	');
// 	// Отправляем
// 	if ($mail->send()) {
// 		echo 'Письмо отправлено!';
// 	} else {
// 		echo 'Ошибка: ' . $mail->ErrorInfo;
// 	}
// }
// else {
// 	echo "Incorrect data";
// 	return;
// }