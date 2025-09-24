<?php 
    try {
        $userPhone = $_POST["userPhone"];
        $userName = $_POST["userName"];
        $userSurName = $_POST["userSurName"];
        $email = $_POST["email"];
        $comment = $_POST["comment"];
        $sourcePage = $_POST["sourcePage"];
    } catch (\Throwable $th) {
        $userPhone = "ERROR IN MESSAGE";
        $userName = "ERROR IN MESSAGE";
        $userSurName = "ERROR IN MESSAGE";
        $email = "ERROR IN MESSAGE";
        $comment = "ERROR IN MESSAGE";
        $sourcePage = "ERROR IN MESSAGE";
    }
    $token = "7552130536:AAFzqqczWXgbM_XwD45tgnBNhMSYfdM2kOQ"; // api телеграм бота
    $chat_id = "-1002563931620";
    // $token = "6502486274:AAFqSGBvtvutHB8be-wTlsK3ETbssmLSEWo"; // api телеграм бота
    // $chat_id = "1066741091";

    $userPhone = urlencode("$userPhone");
    $userName = urlencode("$userName");
    $userSurName = urlencode("$userSurName");
    $email = urlencode("$email");
    $comment = urlencode("$comment");
    $sourcePage = urlencode("$sourcePage");
    

    $urlQuery = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" .
        "***<b>Заявка із сторінки" . " " . $sourcePage . "</b>***%0A" . "%0A" .
        "Ім'я: <b>$userName</b>%0A" .
        "Прізвище: <b>$userSurName</b>%0A" .
        "Телефон: <b>$userPhone</b>%0A" .
        "E-mail: <b>$email</b>%0A";
    if($comment != "") {
        $urlQuery .= "Коментар: <b>$comment</b>%0A";
    }

    $urlQuery .= "&parse_mode=HTML";

    $result = file_get_contents($urlQuery);

    header("Location: index.html");
    exit();

?>