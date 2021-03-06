<?php

// step1
session_start();

$lid = $_POST['lid'];
$lpw = $_POST['lpw'];

//1.  DB接続します
try {
    $pdo = new PDO('mysql:dbname=a_db;charset=utf8;host=localhost', 'root', 'root');
} catch (PDOException $e) {
    exit('DbConnectError:'.$e->getMessage());
}

//2. データ登録SQL作成
$stmt = $pdo->prepare('SELECT * FROM user_table WHERE lid=:lid AND lpw=:lpw');
$stmt->bindValue(':lid', $_POST['lid']); //php変数に置き換えてもOK
$stmt->bindValue(':lpw', $_POST['lpw']);
$res = $stmt->execute();

//4. 抽出データ数を取得
$val = $stmt->fetch(); //1レコードだけ取得する方法

//5. 該当レコードがあればSESSIONに値を代入 ※空っぽじゃなければ（認証がオッケーだったときに新しくセッションIDを作る）
if ($val['id'] != '') {
    $_SESSION['chk_ssid'] = session_id(); //ここでログインしているか判断するsessionID
    $_SESSION['name'] = $val['name'];
    header('Location:select.php');
} else {
    //logout処理を経由して全画面へ
    header('Location:login.php');
}
exit();
