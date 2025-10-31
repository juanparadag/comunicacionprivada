<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require_once 'db_connect.php';
require '/usr/share/php/PHPMailer/src/PHPMailer.php';
require '/usr/share/php/PHPMailer/src/SMTP.php';
require '/usr/share/php/PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$db = connectDB();
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];

try {
    $stmt = $db->prepare("SELECT username FROM prosody_user_emails WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        echo json_encode(["status" => "error", "message" => "Correo no registrado"]);
        exit;
    }

    $token = bin2hex(random_bytes(16));
    $expire = date('Y-m-d H:i:s', strtotime('+1 hour'));
    $stmt = $db->prepare("UPDATE prosody_user_emails SET recovery_token = ?, token_expire = ? WHERE email = ?");
    $stmt->execute([$token, $expire, $email]);

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'mail.bmstecnology.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'soporteti@bmstecnology.com';
    $mail->Password = 'ZapqYHrdjgPgSKzdn6BCTfKzA';  
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('soporteti@bmstecnology.com', 'Soporte del Sistema');
    $mail->addAddress($email);
    $mail->isHTML(true);
    $mail->Subject = 'Recuperación de contraseña';
    $mail->Body = "Hola,<br><br>Haz clic en este enlace para restablecer tu contraseña:<br>
                   <a href='https://comsec.bmstecnology.com/reset.html?token=$token'>Restablecer contraseña</a><br><br>
                   Este enlace expira en 1 hora.";

    $mail->send();

    echo json_encode(["status" => "ok", "message" => "Correo de recuperación enviado"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
