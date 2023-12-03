<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $imie = $_POST["imie"];
    $email = $_POST["email"];
    $wiadomosc = $_POST["wiadomosc"];

    $to = "adres_odbiorcy@example.com"; // Zmień na adres e-mail odbiorcy
    $subject = "Nowa wiadomość z formularza kontaktowego";
    $message = "Imię: $imie\nEmail: $email\nWiadomość: $wiadomosc";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Wiadomość została wysłana pomyślnie.";
    } else {
        echo "Błąd podczas wysyłania wiadomości.";
    }
} else {
    echo "Nieprawidłowe żądanie.";
}
?>