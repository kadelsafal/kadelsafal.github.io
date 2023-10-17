<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $number = $_POST["number"];
    $message = $_POST["subject"];
    
    $recipient = "successkadel97@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $body = "Name: " . $name . "\nEmail: " . $email . "\nPhn-Number: " . $number . "\nMessage: " . $message;
    $headers = "From: " . $email;
    
    // Error handling
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    
    $success = mail($recipient, $subject, $body, $headers);
    if ($success) {
        echo '<script>
            alert("Email sent successfully!");
            window.location.href = "index.html#contact";
        </script>';
    } else {
        $lastError = error_get_last();
        echo '<script>
            var retry = confirm("Failed to send email. Retry? Error: ' . $lastError['message'] . '");
            if (retry) {
                window.location.href = "index.html#contact";
            } else {
                // Do something else or redirect to another page
            }
        </script>';
    }
} else {
    echo '<script>
        var retry = confirm("Invalid request. Retry?");
        if (retry) {
            window.location.href = "index.html#contact";
        } else {
            // Do something else or redirect to another page
        }
    </script>';
}
?>
