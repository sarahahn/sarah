// xidoPage.js

(function($){
  //----1. btn 요소들을 만들어주고, 위치 잡아주기.
  //================= btn도 만들어주어야 함.
  var banner = $('#bannerBox');
  var bannerBtnBox = $('<div class="banBtnBox"></div>').appendTo(banner);

  bannerBtnBox.parents().css({'position':'relative'});

  bannerBtnBox.css({'width':100+'%', 'height':0, 'position':'absolute','top':50+'%',
                 'left':0+'%','z-index':100});// banBtnBox.css끝

  // +++첫번째, button태그 생성하는 방식
  for(var i=0; i<2; i++){
   $('<button></button>').appendTo(bannerBtnBox);
  }//버튼 for문 끝.
         // 두번째, button태그 생성하는 방식
         //  var btn= $('<button></button><button></button>').appendTo(bannerBtnBox);

  // +++ 생성한 버튼에 addClass하기
  var i = 0
  var button_0 = $('.banBtnBox').find('button').eq(0);
  var button_1 = $('.banBtnBox').find('button').eq(1);

  var btnClass= ['l_btn','r_btn'];
  for(var i=0; i<2; i++){
  bannerBtnBox.children('button').eq(i).addClass(btnClass[i]);
 }// button에 addClass 끝!

  //+++ 생성한 btn에 css를 넣어주자!!!
  bannerBtnBox.children('.l_btn')
        .css({'width':55+'px','height':75+'px','marginLeft':10+'px',
              'float':'left',
              'backgroundImage':'url(../main/main/banner/left_btn.png)'});

  bannerBtnBox.children('.r_btn')
        .css({'width':55+'px','height':75+'px','marginRight':10+'px',
              'float':'right',
              'backgroundImage':'url(../main/main/banner/right_btn.png)'});




  //----2.  banner에 ul과 li(5개)를 넣어주어야 함.
  var banner_ul = $('<ul>').appendTo(banner);
 // var banner_ul = banner.append('<ul>');

  for(var i=0; i<5; i++){
    $('<li>').appendTo(banner_ul);
  }// li갯수 늘리기 끝



  //+++ ul사이즈 잡아주고, 생성한 li에 사진 넣기!!!!
  banner_ul.css({'width':'500%','height':430+'px'});
  banner_ul.children('li')
           .css({'width':'20%','height':430+'px','float':'left'});









})(this.jQuery);