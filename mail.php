<?
require './libs/phpmailer/PHPMailer.min.php';
require './libs/phpmailer/SMTP.min.php';
require './libs/phpmailer/Exception.min.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$name = $_POST['name'];
$tel = $_POST['tel'];

$title = "Новая заявка с сайта";
$body = "
  <table style='width: 100%; border-collapse: collapse;'>
    <tr>
      <td style='padding: 10px; border: 1px solid #000;'>$name</td>
      <td style='padding: 10px; border: 1px solid #000;'>$tel</td>
    </tr>
  </table>
";

$mail = new PHPMailer(true);

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  $mail->Host       = "smtp.gmail.com";
  $mail->Username   = "79649644703dan@gmail.com";
  $mail->Password   = "vwqfzpworbxthglz";
  $mail->SMTPSecure = "ssl";
  $mail->Port       = 465;
  $mail->setFrom("79649644703dan@gmail.com", "Blanchard - картинная галерея");

  $mail->addAddress("79649644703dan@gmail.com");

  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body    = $body;

  $mail->send();
} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
