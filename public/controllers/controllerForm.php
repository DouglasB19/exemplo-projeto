<?php
//var_dump($_POST);
include("/class/PHPMailer-master/src/PHPMailer.php");
include("/class/PHPMailer-master/src/SMTP.php");
include("/class/PHPMailer-master/src/Exception.php");

$nomeUser=filter_input(INPUT_POST,"nome",FILTER_SANITIZE_SPECIAL_CHARS);
$telefoneUser=filter_input(INPUT_POST,"telefone",FILTER_SANITIZE_SPECIAL_CHARS);
$emailUser=filter_input(INPUT_POST,"email",FILTER_SANITIZE_SPECIAL_CHARS);
$mensagemUser=filter_input(INPUT_POST,"mensagem",FILTER_SANITIZE_SPECIAL_CHARS);

$mail=new \PHPMailer\PHPMailer\PHPMailer();
$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
$mail->isSMTP();                                            // Send using SMTP
$mail->Host       = 'smtp1.example.com';                    // Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
$mail->Username   = 'Douglas';                     // SMTP username
$mail->Password   = 'SENHA';                               // SMTP password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
$mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

//Recipients
$mail->setFrom($emailUser);
$mail->addAddress('dou.bor.555@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

// Attachments
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

// Content
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Contato do Site';
$mail->Body    = "
Nome: {$nomeUser} <br>
Email: {$emailUser} <br>
Telefone: {$telefoneUser} <br>
Mensagem: {$mensagemUser}
";
//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

$mail->send();
echo 'Mensagem enviada com sucesso!';