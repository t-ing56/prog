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
    <div class="navbar-header"><a class="navbar-brand" href="login.php">ログイン画面</a></div>
    </div>
  </nav>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->
<!-- ここからinsert.phpにデータを送ります -->
<form method="post" action="user_insert.php" enctype="multipart/form-data">
  <div class="jumbotron">
   <fieldset>
    <legend>ユーザー登録</legend>
     <label>ログインID：<input type="text" name="lid"></label><br>
     <label>パスワード：<input type="text" name="lpw"></label><br>
     <label>名前：<input type="text" name="name"></label><br>
     <label>住所：<input type="text" name="u_address"></label><br>
     <label>email：<input type="text" name="email"></label><br>
     <input id ="submit" type="submit" value="登録">
    </fieldset>
  </div>
</form>
<!-- Main[End] -->

<script src="http://code.jquery.com/jquery-3.0.0.js"></script>

</body>
</html>
