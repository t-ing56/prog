<?php
session_start();

if (
  !isset($_SESSION['chk_ssid']) ||
  $_SESSION['chk_ssid'] != session_id()
) {
    echo 'login Error';
    exit();
}

try {
  $pdo = new PDO('mysql:dbname=a_db;charset=utf8;host=localhost', 'root', 'root');
} catch (PDOException $e) {
  exit('データベースに接続できませんでした。'.$e->getMessage());
}




?>


<!DOCTYPE html>

<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>データ登録</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <style>div{padding: 10px;font-size:16px;}</style>
</head>
<body>

<!-- Head[Start] -->
<header>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
    <div class="navbar-header"><a class="navbar-brand" href="select.php">データ一覧</a></div>
    </div>
  </nav>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->
<!-- ここからinsert.phpにデータを送ります -->
<form method="post" action="insert.php" enctype="multipart/form-data">
  <div class="jumbotron">
   <fieldset>
    <legend>旅行記録</legend>
     <label>訪問先：<input type="text" name="place"></label><br>
     <label>日付：<input type="date" name="date"></label><br>
     <label>住所：<input type="text" name="address"></label><br>
     <label>点数：<input type="text" name="score"></label><br>
     <label><textArea name="impression" rows="4" cols="40"></textArea></label><br>
     <label>画像：<input type="file" name="fname" accept="image/*"></label><br>
     <p class="cms-thumb"><img src="https://placehold.jp/c9c9c9/ffffff/600×600.png?text=%E3%83%80%E3%83%9F%E3%83%BC%E7%94%BB%E5%83%8F" width="200"></p>
     <input id ="submit" type="submit" value="送信">
    </fieldset>
  </div>
</form>
<!-- Main[End] -->

<script src="http://code.jquery.com/jquery-3.0.0.js"></script>

<script>
//---------------------------------------------------
//画像サムネイル表示
//---------------------------------------------------
// アップロードするファイルを選択
$('input[type=file]').change(function() {
  //選択したファイルを取得し、file変数に格納
  var file = $(this).prop('files')[0];
  // 画像以外は処理を停止
  if (!file.type.match('image.*')) {
    // クリア
    $(this).val(''); //選択されてるファイルを空にする
    $('.cms-thumb > img').html(''); //画像表示箇所を空にする
    return;
  }
  // 画像表示
  var reader = new FileReader(); //1
  reader.onload = function() {   //2
    $('.cms-thumb > img').attr('src', reader.result);
  }
  reader.readAsDataURL(file);    //3
});
</script>

</body>
</html>
