<?php

include("include.HTML");

$name = $_POST["name"];
$randam = mt_rand(1,5);

echo date("Y年m月d日");

$d = date("h");

if($d < 6){
    echo "夜";
}elseif($d < 10){
    echo "朝";
}elseif($d < 18){
    echo "昼";
}else{
    echo "夜";
};


echo "<h3>".$name."</h3>"."<p>さんの今日の運勢は<br><br></p>";


if ($randam === 1) {
    echo "<img src='img/daikichi.png'>";
}elseif($randam === 2){
    echo "<img src='img/cyukichi.png'>";
}elseif($randam === 3){
    echo "<img src='img/syokichi.png'>";
}elseif($randam === 4){
    echo "<img src='img/suekichi.png'>";
}elseif($randam === 5){
    echo "<img src='img/kyou.png'>";
}

if ($randam <= 2){
    echo '<p style="color:red"=>今日はラッキー</p>';
}

?>
