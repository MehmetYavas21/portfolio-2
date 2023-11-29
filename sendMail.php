<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = $_POST["email"];
    $message = htmlspecialchars($_POST["message"]);

    // Basic email validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Invalid email format";
        exit();
    }

    // CSRF token validation
    if ($_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        http_response_code(403);
        echo "Invalid request";
        exit();
    }

    // Set your SMTP credentials
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com'; 
        $mail->SMTPAuth   = true;
        $mail->Username   = 'contact@rezandesign.online'; 
        $mail->Password   = '*********'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 65002;

        $mail->setFrom($email);
        $mail->addAddress('contact@rezandesign.online'); 

        $mail->isHTML(false);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";

        $mail->send();
        http_response_code(200);
        echo 'Message sent successfully';
    } catch (Exception $e) {
        http_response_code(500);
        echo "Error sending message. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(400);
    echo "Invalid request";
}
?>