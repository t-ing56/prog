require('dotenv').config();

// Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: process.env.KEY1,
        authDomain: process.env.KEY2,
        databaseURL: "https://dev20chat-d8214-default-rtdb.firebaseio.com",
        projectId: "dev20chat-d8214",
        storageBucket: "dev20chat-d8214.appspot.com",
        messagingSenderId: "169454693663",
        appId: "1:169454693663:web:ed3425e670750d9db5142a"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  
      //firebaseのデーターベース（保存させる場所）を使いますよ
      const newPostRef = firebase.database().ref();
      console.log(newPostRef)
  
      // ここから下にjqueryの処理を書いて練習します


      
      // 現在時刻
      let now = new Date()
      const year = now.getFullYear();
      const month = now.getMonth()+1;
      const date = now.getDate();
      const hour = now.getHours();
      const minutes = now.getMinutes();

      console.log(now);   
      console.log(year);    
      console.log(month);    
      console.log(date);    
      console.log(hour);    
      console.log(minutes);       

      // 送信ボタンでデータ送信
      $("#send").on("click", function () {
        //乱数生成
        function rand(n){
          var num = Math.floor(Math.random()*n+1);
          return num;
        }
        //botランダム情報
        const character = rand(5);
        const coment = rand(5);

        //反省点Timestampをうまく戻せない
            const now = firebase.firestore.Timestamp.fromDate(new Date());        
            newPostRef.push({
            text1: $("#text1").val(),
            status1:  $("#status").val(),
            //botランダム情報
            character1: character, 
            coment1: coment,
            //時間取得
            year1: year,
            month1: month,
            date1: date,
            hour1: hour,
            minutes1: minutes,
            timestamp: now,         
            flag : 0
        })
        
      });
 
      // 受信処理
      newPostRef.on("child_added", function (data) {
        //各オブジェクトのプロパティを定義
        let v = data.val();
        let year2 = v.year1;
        let month2 = v.month1;
        let date2 = v.date1;
        let hour2 = v.hour1;
        let minutes2 = v.minutes1;
        let status2 = v.status1;
        let character2 = v.character1;
        let coment2 = v.coment1;

        console.log(hour2);
        console.log(minutes2);
        console.log(character2);
        console.log(coment2);

        console.log(status2)
        
        //ランダムコメント配列作成
        const joy_set = ["","すごい！","ヤバイwww","さすが！","いいなー","おめでとう！！"]
        const grief_set = ["","だいじょうぶだいじょうぶ！","元気出して！","分かりみが深い","そんな時もあるよ","それな"]
        const angry_set = ["","マジかよ","それはヤバイな","切り替えていこう","それは腹たつ",""]
        
        //ランダムコメントのオブジェクト化
        const coment_list ={
          'joy' : joy_set,
          'grief' : grief_set,
          'angry' : angry_set
        }
        
        //ステータス情報を元にコメントリストから参照するオブジェクトを選択
        const cl = coment_list[status2]
        
        //オブジェクト内のコメント配列から参照するコメントを最終決定
        const coment3 = cl[coment2];
        console.log(coment3);

        let str =
        `<div class = "message-box mine"> 
          <div class =" text-wrapper">
            <p class = "message">${v.text1}</p>
            <p class = "time">${year2}年${month2}月${date2}日<br>${hour2}時${minutes2}分</p>
          </div>
          <div class="icon-wrapper">
            <img class="icon" src="imgs/man.png">
          </div>  
        </div>`;

        let str2 = 
        `<div class = "message-box yours"> 
          <div class="icon-wrapper">
            <img class="icon" src="imgs/${Number(character2)}.png">
          </div>  
          <div class =" text-wrapper">
            <p class = "message">${coment3}</p>
            <p class = "time">${year2}年${month2}月${date2}日<br>${hour2}時${minutes2}分</p>
          </div> 
        </div>`;

      $("#text1").val("");//空にする

  
    //console.log(q.substr(0,4))
      //データをhtmlに埋め込む
      $("#output1").append(str);
      $("#output1").append(str2);
      })
  
      $("#text1").on("keydown", function (e) {
        console.log(e, 'eventデータの塊')
  
        if(e.keyCode === 13){
        newPostRef.push({
          username: $("#username").val(),
          text1: $("#text1").val(),
        })
  
        $("#text1").val("");//空にする
        }
      });

