<?php
//1.GETを使って送られたidを取得

$id = $_GET['id'];

//2.
try {
    $pdo = new PDO('mysql:dbname=a_db;charset=utf8;host=localhost', 'root', 'root');
} catch (PDOException $e) {
    exit('DbConnectError:'.$e->getMessage());
}

//３．SELECT * FROM xxx WHERE id=:id
$sql = 'SELECT * FROM travel_table WHERE id=:id';
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':id', $id, PDO::PARAM_INT); //idは数値なのでINT
$status = $stmt->execute();

//4.データ出力

//step４．データ出力
$view = ''; //受け取るための変数を事前に作ります。
if ($status == false) {
    //execute（SQL実行時にエラーがある場合）
    $error = $stmt->errorInfo();
    exit('ErrorQuery:'.$error[2]);
} else {
    //１データのみ抽出の場合はwhileループで取り出さない(一個しかデータが返ってこないので一レコード取得する)
    $row = $stmt->fetch();
}

?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>データ登録</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="style.css" rel="stylesheet">
  <link href="css/detail.css" rel="stylesheet">
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
<!-- ここからupdate.phpにデータを送ります -->
<div id="floating-panel">
      <input id="address" type="textbox" value="<?=$row['address']; ?>" />
      <input id="submit" type="button" value="ピン留め" />
    </div>

<div id="map"></div>

<!-- Google Map API -->

<form method="post" action="update.php">
  <div class="jumbotron">
   <fieldset>
    <legend>旅行記録</legend>
     <label><img src="img/<?=$row['fname']; ?>" alt=""></label><br>
     <label>訪問先：<input type="text" name="place" value="<?=$row['place']; ?>"></label><br>
     <label>日付：<input type="date" name="date" value="<?=$row['date']; ?>"></label><br>
     <label>住所：<input type="text" id="address"  name="address" value="<?=$row['address']; ?>"></label><br>
     <label>点数：<input type="text" name="score" value="<?=$row['score']; ?>"></label><br>
     <label><textArea name="impression" rows="4" cols="40"><?=$row['impression']; ?>
     </textArea></label><br>
     <input type='hidden' name="id" value="<?=$row['id']; ?>">
     <input type="submit" value="更新">
    </fieldset>
  </div>
</form>
<!-- Main[End] -->
<script
  src="https://maps.googleapis.com/maps/api/js?key=　&callback=initMap&libraries=&v=weekly"
  async
></script>
<script src="./detail.js"></script>

</body>






