<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $project = $_POST["project"];
    $message = $_POST["message"];

    $to = "vikas1ga16cs1762gmail.com";
    $subject = "New Form Submission";
    $headers = "From: $email";

    $mailBody = "Name: $name\n";
    $mailBody = "Email: $email\n";
    $mailBody = "Project: $project\n";
    $mailBody = "Message: $message\n";

}
?>
