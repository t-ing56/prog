// 初期位置
function initMap() {
  // The location of tokyo
  const tokyo = { lat: 35.681236, lng: 139.767125 };
  // The map, centered at Tokyo
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: tokyo,
  });
  // The marker, positioned at Tokyo
  const marker = new google.maps.Marker({
    position: tokyo,
    map: map,
  });
}


console.log(1)

// 送信ボタンでデータ送信
$("#button1").on("click", function () {
      //緯度乱数
      function rand1(){
        var num1 = Math.random()*(45.3326-27.0101)+(27.0101);
        return num1;
      }
      //経度乱数
      function rand2(){
          var num2 = Math.random()*(144.2909-128.0616)+(128.0616);
          return num2;
      }

      const ido = rand1();
      const keido = rand2();

      console.log(ido)
      console.log(keido)

      const destination = { lat: ido, lng: keido };
      // The map, centered at ダーツ
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: destination,
        mapId: 'e283299e003e310c'
      });
      // The marker, positioned at ダーツ
      const marker = new google.maps.Marker({
        position: destination,
        map: map,
        icon: {
          url: 'imgs/darts.png',
          scaledSize: new google.maps.Size(30, 30), //マーカーのサイズを縮小
          }
        });
});



