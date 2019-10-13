<?php
session_start();

if (isset($_POST["submit"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // compare with hard coded user credentials
    if ("admin" === $username && "password" === $password) {
        session_regenerate_id();

        // generate CSRF token
        setcookie("token", hash_hmac("sha256", session_id(), openssl_random_pseudo_bytes(256)), 0, "/");

        $_SESSION["user"] = $username;
    } // end if
    else {
        $_SESSION["error"] = true;
    } // end else
} // end if

header("Location: /");
?>