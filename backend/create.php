<?php
require_once 'db.php';
session_start();
if (!isset($_SESSION['user_id'])) die(json_encode(["success"=>false]));

$data = json_decode(file_get_contents("php://input"));
$name = $data->campaign_name ?? '';
$budget = $data->daily_budget ?? 0;

$stmt = $pdo->prepare("INSERT INTO campaigns (user_id,campaign_name,daily_budget) VALUES (?,?,?)");
$stmt->execute([$_SESSION['user_id'], $name, $budget]);

echo json_encode(["success"=>true]);
?>