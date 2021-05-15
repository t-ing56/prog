
function rand(n){
    var num = Math.floor(Math.random()*n+1);
    return num;//returnは関数外に値を渡す
}

function rand2(n){
    var num = Math.floor(Math.random()*n+1);
    return num;//returnは関数外に値を渡す
}

//const mybtn = document.querySelector('')


//引数と戻り値(t=戻り値)
var x = rand(6)//キャラ数
var t = rand(3)//手

console.log(t);

//const準備
const character_select = document.querySelector('character_select')
const character_lufy = document.querySelector('#character_lufy')
const character_naruto = document.querySelector('#character_naruto')
const character_tanjiro = ('#character_tanjiro')
const character_eren = document.querySelector('#character_eren')
const m_gu= document.querySelector("#m_gu-")
const m_cyoki= document.querySelector("#m_cyoki")
const m_pa= document.querySelector("#m_pa-")
const result =  document.querySelector("#result")
const enemy =  document.querySelector("#enemy")


//敵のランダム選択機能
function enemy_select(){
    if(x == 1){
            $("#enemy_character").prepend("<img class='character_img' src='img/ルフィ/character.jpeg' alt='ルフィ'>");   
            $("#e_gu-").prepend("<img class='skil_img e_gu-_img' src='img/ルフィ/グー.jpeg' alt='1'>");   
            $("#e_cyoki").prepend("<img class='skil_img e_cyoki_img' src='img/ルフィ/チョキ.jpeg' alt='2'>");   
            $("#e_pa-").prepend("<img class='skil_img e_pa-_img' src='img/ルフィ/パー.jpeg' alt='3'>");  
        }else if(x == 2){
            $("#enemy_character").prepend("<img class='character_img' src='img/ナルト/character.jpeg' alt='ナルト'>");   
            $("#e_gu-").prepend("<img class='skil_img e_gu-_img' src='img/ナルト/グー.jpeg' alt='1'>");   
            $("#e_cyoki").prepend("<img class='skil_img e_cyoki_img' src='img/ナルト/チョキ.jpeg' alt='2'>");   
            $("#e_pa-").prepend("<img class='skil_img e_pa-_img' src='img/ナルト/パー.jpeg' alt='3'>");  
        }else if(x == 3){
            $("#enemy_character").prepend("<img class='character_img' src='img/炭治郎/character.jpeg' alt='炭治郎'>");   
            $("#e_gu-").prepend("<img class='skil_img e_gu-_img' src='img/炭治郎/グー.jpeg' alt='1'>");   
            $("#e_cyoki").prepend("<img class='skil_img e_cyoki_img' src='img/炭治郎/チョキ.jpeg' alt='2'>");   
            $("#e_pa-").prepend("<img class='skil_img e_pa-_img' src='img/炭治郎/パー.jpeg' alt='3'>");  
        }else if(x == 4){
            $("#enemy_character").prepend("<img class='character_img' src='img/エレン/character.jpeg' alt='エレン'>");   
            $("#e_gu-").prepend("<img class='skil_img e_gu-_img' src='img/エレン/グー.jpeg' alt='1'>");   
            $("#e_cyoki").prepend("<img class='skil_img e_cyoki_img' src='img/エレン/チョキ.jpeg' alt='2'>");   
            $("#e_pa-").prepend("<img class='skil_img e_pa-_img' src='img/エレン/パー.jpeg' alt='3'>");  
        }else if(x == 5){
            $("#enemy_character").prepend("<img class='character_img' src='img/一護/character.jpeg' alt='一護'>");   
            $("#e_gu-").prepend("<img class='skil_img e_gu-_img' src='img/一護/グー.jpeg' alt='1'>");   
            $("#e_cyoki").prepend("<img class='skil_img e_cyoki_img' src='img/一護/チョキ.jpeg' alt='2'>");   
            $("#e_pa-").prepend("<img class='skil_img e_pa-_img' src='img/一護/パー.jpeg' alt='3'>");              
        }else{
            $("#enemy_character").prepend("<img class='character_img' src='img/信/character.jpeg' alt='信'>");   
            $("#e_gu-").prepend("<img class='skil_img e_gu-_img' src='img/信/グー.jpeg' alt='1'>");   
            $("#e_cyoki").prepend("<img class='skil_img e_cyoki_img' src='img/信/チョキ.jpeg' alt='2'>");   
            $("#e_pa-").prepend("<img class='skil_img e_pa-_img' src='img/信/パー.jpeg' alt='3'>");              
        }};

//初期画面リセット
function reset(){
    $(".view1").remove()
    $(".chara_select_box").css("margin-top","80px");
    $('#view2').show()  
};



//ルフィ選択時動作
$('#character_lufy').on('click',function () { 
    reset()
    $("#my_character").prepend("<img class='character_img' src='img/ルフィ/character.jpeg' alt='ルフィ'>");   
    $("#m_gu-").prepend("<img class='skil_img' src='img/ルフィ/グー.jpeg' alt='1'>");   
    $("#m_cyoki").prepend("<img class='skil_img' src='img/ルフィ/チョキ.jpeg' alt='2'>");   
    $("#m_pa-").prepend("<img class='skil_img' src='img/ルフィ/パー.jpeg' alt='3'>");  
    enemy_select()
});

//ナルト選択時動作
$('#character_naruto').on('click',function () { 
    reset()
    $("#my_character").prepend("<img class='character_img' src='img/ナルト/character.jpeg' alt='ナルト'>");   
    $("#m_gu-").prepend("<img class='skil_img' src='img/ナルト/グー.jpeg' alt='1'>");   
    $("#m_cyoki").prepend("<img class='skil_img' src='img/ナルト/チョキ.jpeg' alt='2'>");   
    $("#m_pa-").prepend("<img class='skil_img' src='img/ナルト/パー.jpeg' alt='3'>");  
    enemy_select()
});

//炭治郎選択時動作
$('#character_tanjiro').on('click',function () { 
    reset()
    $("#my_character").prepend("<img class='character_img' src='img/炭治郎/character.jpeg' alt='炭治郎'>");   
    $("#m_gu-").prepend("<img class='skil_img' src='img/炭治郎/グー.jpeg' alt='1'>");   
    $("#m_cyoki").prepend("<img class='skil_img' src='img/炭治郎/チョキ.jpeg' alt='2'>");   
    $("#m_pa-").prepend("<img class='skil_img' src='img/炭治郎/パー.jpeg' alt='3'>");  
    enemy_select()
});

//エレン選択時動作
$('#character_eren').on('click',function () { 
    reset()
    $("#my_character").prepend("<img class='character_img' src='img/エレン/character.jpeg' alt='エレン'>");   
    $("#m_gu-").prepend("<img class='skil_img' src='img/エレン/グー.jpeg' alt='1'>");   
    $("#m_cyoki").prepend("<img class='skil_img' src='img/エレン/チョキ.jpeg' alt='2'>");   
    $("#m_pa-").prepend("<img  class='skil_img' src='img/エレン/パー.jpeg' alt='3'>");  
    enemy_select()
});

//一護選択時動作
$('#character_ichigo').on('click',function () { 
    reset()
    $("#my_character").prepend("<img class='character_img' src='img/一護/character.jpeg' alt='一護'>");   
    $("#m_gu-").prepend("<img class='skil_img' src='img/一護/グー.jpeg' alt='1'>");   
    $("#m_cyoki").prepend("<img class='skil_img' src='img/一護/チョキ.jpeg' alt='2'>");   
    $("#m_pa-").prepend("<img  class='skil_img' src='img/一護/パー.jpeg' alt='3'>");  
    enemy_select()
});

//一護選択時動作
$('#character_sinn').on('click',function () { 
    reset()
    $("#my_character").prepend("<img class='character_img' src='img/信/character.jpeg' alt='信'>");   
    $("#m_gu-").prepend("<img class='skil_img' src='img/信/グー.jpeg' alt='1'>");   
    $("#m_cyoki").prepend("<img class='skil_img' src='img/信/チョキ.jpeg' alt='2'>");   
    $("#m_pa-").prepend("<img  class='skil_img' src='img/信/パー.jpeg' alt='3'>");  
    enemy_select()
});



//敵の出し手
const r =Math.ceil(Math.random()*3);


e_hand = " ";
hand_name = " "
if(t == 1){
    e_hand = 1;
    hand_name = "グー"
}else if(t == 2){
    e_hand = 2;
    hand_name = "チョキ"
}else{
    e_hand = 3;
    hand_name = "パー"
};

$('.skil_img').on('click',function () { 
if(t == 1){
    $('.e_gu-_img').style('border','3px solid #ccc100');
}else if(t == 2){
    $('.e_cyoki_img').style('border','3px solid #ccc100');
}else{
    $('.e_pa-_img').style('border','3px solid #ccc100');
}
});

$('.e_gu-_img').css('width','5px');
$('.e_gu-_img').css('border','solid');
$('.e_gu-_img').css('border','#ccc100');




//グーの時
function gu(){if(e_hand==1){
    match = "Draw"
}else if(e_hand==2){
    match = "You Win"
}else{
    match = "You lose"
}};

$('#m_gu-').on('click',function () { 
    gu()
    result.innerHTML = match
    enemy.innerHTML = hand_name
    my.innerHTML = "グー"
    $('#view3').slideDown(2000);
});

//チョキの時
function cyoki(){if(e_hand==1){
    match = "You lose"
}else if(e_hand==2){
    match = "Draw"
}else{
    match = "You win"
}};

$('#m_cyoki').on('click',function () { 
    cyoki()
    result.innerHTML = match
    enemy.innerHTML = hand_name
    my.innerHTML = "チョキ"
    $('#view3').slideDown(2000);
});

//パーの時
function pa(){if(e_hand==1){
    match = "You win"
}else if(e_hand==2){
    match = "You lose"
}else{
    match = "Draw"
}};

$('#m_pa-').on('click',function () { 
    pa()
    result.innerHTML = match
    enemy.innerHTML = hand_name
    my.innerHTML = "パー"
    $('#view3').slideDown(2000);
});





