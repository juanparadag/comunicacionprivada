<?php
// === CONFIGURACIÓN INICIAL ===
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// === MANEJO DE ERRORES ===
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/create_user_error.log');
error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

// === CONEXIÓN A LA BASE DE DATOS ===
require_once 'db_connect.php';
$db = connectDB();

// === LEER DATOS DEL JSON ===
$data = json_decode(file_get_contents("php://input"), true);
if (!isset($data['user'], $data['password'], $data['email'])) {
    echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
    exit;
}

$usuario = trim($data['user']);
$password = trim($data['password']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);

// === VALIDAR SI EL USUARIO YA EXISTE ===
try {
    $stmt = $db->prepare("SELECT COUNT(*) FROM prosody_user_emails WHERE username = ?");
    $stmt->execute([$usuario]);
    $existe = $stmt->fetchColumn();

    if ($existe > 0) {
        echo json_encode(["status" => "exists", "message" => "El nombre de usuario ya está en uso. Por favor elige otro."]);
        exit;
    }
} catch (Exception $e) {
    error_log("Error en validación de usuario: " . $e->getMessage());
    echo json_encode(["status" => "error", "message" => "Error al verificar usuario existente."]);
    exit;
}

// === REGISTRAR USUARIO EN PROSODY ===
try {
    $usuarioEscapado = escapeshellarg($usuario);
    $passwordEscapado = escapeshellarg($password);

    $cmd = "prosodyctl register $usuarioEscapado im.bmstecnology.com $passwordEscapado 2>&1";
    $output = shell_exec($cmd);

    // Limpiar mensajes NOTICE
    $lines = explode("\n", $output);
    $lines = array_filter($lines, fn($line) => stripos($line, "NOTICE") === false);
    $output = implode("\n", $lines);

    if ($output === "" || strpos($output, "done") !== false || strpos($output, "added") !== false) {
        $stmt = $db->prepare("INSERT INTO prosody_user_emails (username, email) VALUES (?, ?)");
        $stmt->execute([$usuario, $email]);
        echo json_encode(["status" => "ok", "message" => "Usuario creado correctamente"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error al registrar en Prosody", "output" => $output]);
    }
} catch (Exception $e) {
    error_log("Error interno: " . $e->getMessage());
    echo json_encode(["status" => "error", "message" => "Error interno en el servidor"]);
}
?>
