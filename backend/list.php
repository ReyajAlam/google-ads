<?php
require_once 'db.php';
session_start();
if (!isset($_SESSION['user_id'])) die(json_encode(["success"=>false]));

$stmt = $pdo->prepare("SELECT * FROM campaigns WHERE user_id=? ORDER BY id DESC");
$stmt->execute([$_SESSION['user_id']]);
$list = $stmt->fetchAll();

echo json_encode(["success"=>true, "campaigns"=>$list]);
?>