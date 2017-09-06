// player_01.js

(function($){
  // video를 선택 (#videoBox임.)
  // 재생버튼 선택
  // 정지버튼 선택
  var vi = $('#videoBox');
  var mu = $('#musicBox');

  var video = vi.find('video')[0];
  var audio = mu.find('audio');

  // $('audio')에서 왜 [0]을 가져야 하는가?
  //   console.log( $('audio') ); // 소스가 배열형식으로 나타남, 하위 요소를 파악할 때 사용.
  //   console.log( $('audio')[0] ); // 컨트롤 기능(재생,정지)을 사용하기 위해서 사용.
  //   console.log( $('audio').find('source') ); // audio요소의 내부를 파악하려면 []형식이 아닌 방법으로 찾는다.
  //   console.log( $('audio').find('source').attr('src') ); // 위와 동일한 내용(속성 src를 찾기 위한 방법)
  //   // console.log( $('audio')[0].find('source') ); // 제어의 기능이 아닌, 내부 속성을 파악할때는 쓸 수 없다.  
  //   console.log( $('audio').find('source')[0] ); // source코드 자체를 확인할때는 사용.(속성을 접근할 수 없다.)
  //   // console.log( $('audio').find('source')[0].attr('src') ); // error나타남! // ('source')[0]접근을 허용하지 않음

  
  var viPlay = vi.find('.play');
  var viPause = vi.find('.pause');
  var muPlay = mu.find('.play');
  var muPause = mu.find('.pause');
  var muNext = mu.find('.next');

  // video, audio는 순서라는 개념을 가지고 있음. 

  viPlay.on('click', function(e){
    e.preventDefault();
    video.play();
  });//play.on

  viPause.on('click',['button'], function(e){   // function(e)의 의미는 button태그의 이벤트를 받아주라는 의미에서 써주는 것임. 
    e.preventDefault();
    video.pause();
  });// pause.on끝

  //--------+++++++++++++++++++++++++++++++++++++++++++
  var musicUrl='../../youngsang/multi/music/';
  var myMusicList = [
  {'mp3': '04_Disco_Inferno.mp3', 'nar':'음악 설명 또는 가사'},
  {'mp3': '01_In_Da_Club.mp3', 'nar':'음악 설명 또는 가사'},
  {'mp3': '02_21_Questions_feat Nate Dogg.mp3', 'nar':'음악 설명 또는 가사'},
  {'mp3': '03_P_I_M_P.mp3', 'nar':'음악 설명 또는 가사'},
  {'mp3': '05_Candy_Shop_feat.Olivia.mp3', 'nar':'음악 설명 또는 가사'},
  {'mp3': '06_Just_A_Lil_Bit.mp3', 'nar':'음악 설명 또는 가사'},
  {'mp3': '07_Outta_Control_Remix_feat.MobbDeep.mp3', 'nar':'음악 설명 또는 가사'},
  {'mp3': '', 'nar':'음악 설명 또는 가사'},
  {'mp3': '', 'nar':'음악 설명 또는 가사'},
  {'mp3': '', 'nar':'음악 설명 또는 가사'}
  ];// 변수 myMusicList

  muPlay.hide();

  muPlay.on('click', function(e){
    e.preventDefault();
    audio[0].play();
    // 상황에 따른 버튼 보이기와 숨기기
    muPause.show();
    muPlay.hide();
  });//play.on

  muPause.on('click',['button'], function(e){   // function(e)의 의미는 button태그의 이벤트를 받아주라는 의미에서 써주는 것임. 
    e.preventDefault();
    audio[0].pause();
    // 상황에 따른 버튼 보이기와 숨기기
    muPause.hide();
    muPlay.show();
  });// pause.on끝

// var muNext = $('.next');
var i=0;
muNext.on('click', function(e){
  e.preventDefault();
  $('audio').find('source').attr({'src': musicUrl + myMusicList[++i].mp3}); // mp3 객체를 찾으시오!
  // for문을 사용하여 기존 곡끝나면 다음 곡 반복으로 재생함. 

  audio[0].load();
  audio[0].play();


});//muNext.on


})(this.jQuery);