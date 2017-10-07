$(function(){
  var header = $('#header');
  var content = $('.content');
  var navM = $('#nav-message');
  var bijoM = $('#bijo-message');

  $('#camera-btn').click(function () {

  });

  // 起こすボタンクリック
  $('#nav-message').click(function(){
    // 起こされたメッセージを表示
    standMessage();
  });

  // リセットボタンを押すともう一度タイマーセット。
  $('#reset-btn').click(function(){
    header.css('background-image', 'url(../images/stand.jpg)');
    content.css('display', 'block');
    bijoM.css('display', 'none');
  });

  // タイマーボタンを押すとタイマーをセット
  $('#timer-btn').click(function(){
    console.log("set");
    content.css('display', 'none');
    navM.css('display', 'block');
    vr_function();
    return false;
  });

  // 起こされたメッセージと画像表示
  function standMessage(){
    header.css('background-image', 'url(../../images/stand.jpg)');
    navM.css('display', 'none');
    bijoM.css('display', 'block');
  }


  // 以下、音声認識
  var flag_speech = 0;
  var end = false;

  function vr_function() {
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'ja';
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onsoundstart = function() {
    };
    recognition.onnomatch = function() {
    };
    recognition.onerror = function() {
      if(flag_speech == 0)
        vr_function();
    };

    //何も言わなかった時は次のビデオを再生する
    recognition.onsoundend = function() {
      if(end){
        return;
      }
      vr_function();
    };

    var end = false;

    recognition.onresult = function(event) {
      var results = event.results;
      for (var i = event.resultIndex; i < results.length; i++) {
        if (results[i].isFinal)
        {
          // おはようといったら次に進むけど省略
          // if(results[i][0].transcript == "おはよう"){
            console.log(results[i][0].transcript);
          // }
          vr_function();
        }
        else {

          // 何か言ったら次へ
          if(results[i][0].transcript){
            console.log(results[i][0].transcript);
            standMessage();
            end = true;
            return;
          }
          flag_speech = 1;
        }
      }
    };

    flag_speech = 0;
    recognition.start();

  } // end 音声認識

});