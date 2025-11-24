<?php
require_once 'db.php';

$data = json_decode(file_get_contents("php://input"));

$name = trim($data->name ?? '');
$email = trim($data->email ?? '');
$password = $data->password ?? '';

if (empty($name) || empty($email) || empty($password)) {
    echo json_encode(["success" => false, "message" => "All fields are required"]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Invalid email format"]);
    exit();
}

$hash = password_hash($password, PASSWORD_DEFAULT);

try {
    $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $hash]);
    echo json_encode(["success" => true, "message" => "Registered successfully"]);
} catch(PDOException $e) {
    if ($e->getCode() == 23000) {
        echo json_encode(["success" => false, "message" => "Email already exists"]);
    } else {
        echo json_encode(["success" => false, "message" => "Registration failed"]);
    }
}
?>  