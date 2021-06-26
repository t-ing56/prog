<?php
//1.  DB接続します xxxにDB名を入れます
try {
$pdo = new PDO('mysql:dbname=a_db;charset=utf8;host=localhost','root','root');
} catch (PDOException $e) {
  exit('データベースに接続できませんでした。'.$e->getMessage());
}

//２．データ登録SQL作成
//作ったテーブル名を書く場所  xxxにテーブル名を入れます
$stmt = $pdo->prepare("SELECT * FROM travel_table");
$status = $stmt->execute();

//３．データ表示
$view="";
if($status==false){
  //execute（SQL実行時にエラーがある場合）
  $error = $stmt->errorInfo();
  exit("ErrorQuery:".$error[2]);
}else{
  //Selectデータの数だけ自動でループしてくれる $resultの中に「カラム名」が入ってくるのでそれを表示させる例
  while( $result = $stmt->fetch(PDO::FETCH_ASSOC)){
    $view .= "<p>";
    $view .= "<div class='paragraph'>
    <p class ='list id'>".$result["id"]."</p><p class ='list name'>".$result["name"]."</p><p class ='list date'>".$result["date"]."</p><p class ='list place'>".$result["place"]."</p><p class ='list score'>".$result["score"]."</p><p class ='list address'>".$result["address"]."</p></div>";
    $view .= "</a>";
  }
}
?>

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>旅行記録</title>
<link rel="stylesheet" href="css/range.css">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="style.css" />
<style>div{padding: 10px;}</style>
</head>
<body id="main">
<!-- Head[Start] -->
<header>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
      <a class="navbar-brand" href="index.php">データ登録</a>
      </div>
    </div>
  </nav>
</header>
<!-- Head[End] -->

<!-- 地図部分 -->
<div id="floating-panel">
      <input id="address" type="textbox" value="東京" />
      <input id="submit" type="button" value="Geocode" />
    </div>
    <div id="map"></div>

    <!-- Google Map API -->
    <script
      src="https://maps.googleapis.com/maps/api/js?key=<!-- APIキー -->&callback=initMap&libraries=&v=weekly"
      async
    ></script>

<!-- Main[Start] $view-->
<div>
    <div class="container jumbotron">
    <div class='paragraph'>
      <p class = "column id">ID</p><p class = "column name">訪問者</p><p class = "column date">日付</p><p class = "column place">場所</p><p class ="column score">評価</p><p class="column address">住所</p>
    </div>
    <?=$view?></div>
</div>
<!-- Main[End] -->
<!-- JS -->
<script src="./index.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<!-- JS -->

</body>
</html>
