<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);


function connectDB() {
    $host = '127.0.0.1';
    $dbname = 'prosodydb';
    $user = 'prosody';
    $password = 'password';

    try {
        $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]);
        return $pdo;
    } catch (PDOException $e) {
        die(json_encode(["status" => "error", "message" => "Error de conexión: " . $e->getMessage()]));
    }
}
?>
