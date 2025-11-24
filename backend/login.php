<?php
require_once 'db.php';
session_start();

$data = json_decode(file_get_contents("php://input"));
$email = $data->email ?? '';
$pass = $data->password ?? '';

$stmt = $pdo->prepare("SELECT * FROM users WHERE email=?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if ($user && password_verify($pass, $user['password'])) {
    $_SESSION['user_id'] = $user['id'];
    echo json_encode(["success"=>true, "user"=>["name"=>$user['name']]]);
} else {
    echo json_encode(["success"=>false]);
}
?>