$(function(){
  var content = $('.main-content');
  var timer = $('.main-timer');
  var navM = $('.main-nav-message');
  var bijoM = $('.main-bijo-message');

  // 起こすボタンクリック
  navM.click(function(){
    // 起こされたメッセージを表示
    standMessage();
  });

  // リセットボタンを押すともう一度タイマーセット。
  $('.main-reset-btn').click(function(){
    content.css('background-image', 'url(../../assets/images/people/sleep.jpg)');
    timer.css('display', 'block');
    bijoM.css('display', 'none');
  });

  // タイマーボタンを押すとタイマーをセット
  $('.main-timer-button').click(function(){
    timer.css('display', 'none');
    navM.css('display', 'block');
    vr_function();
    return false;
  });

  // 起こされたメッセージと画像表示
  function standMessage(){
    content.css('background-image', 'url(../../assets/images/people/stand.jpg)');
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
        // 音声が完全に取得された場合の処理
        if (results[i].isFinal)
        {
          // おはようといったら次に進むけど省略
          // if(results[i][0].transcript == "おはよう"){
          //   console.log(results[i][0].transcript);
          // }
          vr_function();
        }
        // 話しかけてる途中の処理
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