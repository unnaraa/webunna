<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Process the data, such as sending an email or saving to database
    echo "Name: $name, Email: $email, Message: $message";
}
?>
