const dataset = {
    object_time : $("#time").val(),
    object_theme : $("#theme").val(),
    object_kodawari : $("#kodawari").val(),
    object_question :  $("#question").val(),
    object_impression : $("#impression").val()
}

//値を取得する

$("#save").on('click',function () { 
    const date = $("#date").val();
    const time = $("#time").val();
    const theme = $("#theme").val();
    const kodawari = $("#kodawari").val();
    const question = $("#question").val();
    const impression = $("#impression").val();  

    //複数データをオブジェクト化   
    const dataset = {
    object_time : $("#time").val(),
    object_theme : $("#theme").val(),
    object_kodawari : $("#kodawari").val(),
    object_question :  $("#question").val(),
    object_impression : $("#impression").val()
}

    console.log(date);
    console.log(time);
    console.log(theme);
    console.log(kodawari);
    console.log(question);
    console.log(impression);    

    //JSON文字列化
    console.log(JSON.stringify(dataset));

    //必須項目アラート
    if(date === "" || time === "" || theme === ""){
        alert("必須項目が入力されていません")
    }

    //localstrageに保存
    localStorage.setItem(date, JSON.stringify(dataset));

    //htmlを追加
    const html = `
    <tr>
        <th>${date}</th>
        <td>${theme}</td>
        <td>${time}</td>
        <td>${kodawari}</td>  
        <td>${question}</td>  
        <td>${impression}</td>  
    </tr>
    `
    $("#list").append(html);

    //中身の文字を空にする
    $("#date").val("");
    $("#time").val("");
    $("#kodawari").val("");
    $("#question").val("");
    $("#impression").val("");

    window.location.reload();
});

//2.clear クリックイベント
$("#clear").on("click" ,function(){ 
    localStorage.clear(); 
    $("#date").empty();
    $("#time").empty();
    $("#kodawari").empty();
    $("#question").empty();
    $("#impression").empty();
    window.location.reload();
});



//3.ページ読み込み：保存データ取得表示
for(let i =0; i < localStorage.length; i++){
    const key =localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    const html = '<tr><th>'+key+'</th><td>'+value.object_impression+'</td></tr>';

    const time_list = '<tr><th>'+key+'</th><td>'+value.object_time+'分</td></tr>';


    const kodawari = `
    <p>${value.object_kodawari}</p>
    `   
    const question = `
    <p>${value.object_question}</p>
    `
    const impression = `
    <p>${value.object_impression}</p>
    `
    $("#totaltime_container").append(time_list)
    $("#kodawari_list").append(kodawari)
    $("#question_list").append(question)
    $("#impression_list").append(impression)

}



//タイトル部分をデフォルトで表示

theme = document.querySelector("#theme")
theme_output = document.querySelector("#theme_output")

$("#theme").ready(function(){
const theme_value = JSON.parse(localStorage.getItem(localStorage.key(localStorage.length-1)))
const theme_initial= theme_value.object_theme
console.log(theme_value);
theme.value = theme_initial
theme_output.innerHTML = `<p>${theme_initial}</p>`

});


