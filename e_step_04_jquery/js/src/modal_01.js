// modal_01.js

(function($){
$('.modal_box').html('<img>');
var modal_img = $('.modal_box').find('img');


// addClass 다수처리를 위한 함수 생성
  var ModalOff = function(display){
    $('.modal_box').addClass(display);
    $('.modal_bg').addClass(display);
  };
  ModalOff('modal_dp');
//------------------------------------

// removeClass 다수처리
var ModalOn = function(display){
  $('.modal_box').removeClass(display);
  $('.modal_bg').removeClass(display);
};
// ModalOn('modal_dp');
//------------------------------------

$('.modal_bg').on('click', function(){
  ModalOff('modal_dp');
});
//------------------------------------

var g_ul = $('.gallery_list');
var g_li = g_ul.children('li');

  // modal큰 이미지 json형태로 처리
var url = '../img/modal_gallery/img/'
var modalData = [
                 {'thum':'j01.jpg',
                  'big':{'src':'j01_big.jpg', 'alt':'큰이미지_1 설명'}
                    },
                 {'thum':'j02.jpg',
                  'big':{'src':'j02_big.jpg', 'alt':'큰이미지_2 설명'}
                    },
                 {'thum':'j03.jpg',
                  'big':{'src':'j03_big.jpg', 'alt':'큰이미지_3 설명'}
                    },
                 {'thum':'j04.jpg',
                  'big':{'src':'j04_big.jpg', 'alt':'큰이미지_4 설명'}
                    },
                 {'thum':'j05.jpg',
                  'big':{'src':'j05_big.jpg', 'alt':'큰이미지_5 설명'}
                    },
                 {'thum':'j06.jpg',
                  'big':{'src':'j06_big.jpg', 'alt':'큰이미지_6 설명'}
                    },
                 {'thum':'j07.jpg',
                  'big':{'src':'j07_big.jpg', 'alt':'큰이미지_7 설명'}
                    },
                 {'thum':'j08.jpg',
                  'big':{'src':'j08_big.jpg', 'alt':'큰이미지_8 설명'}
                    },
               ];


  // li요소 각각에 배경 이미지 삽입
  var liImg;
  // liImg = url+modalData[3].thum;
  // g_li.eq(3).find('button')
  //           .css({'backgroundImage':'url('+ liImg +')', 'backgroundRepeat':'no-repeat',
  //                 'backgroundPosition':'center','backgroundSize':'cover'});

  
  // 버튼 반복처리
  var i = 0;
  var dataLength = modalData.length;
  //   liImg = url+modalData[0].thum;
  //   g_li.eq(0).find('button')
  //           .css({'backgroundImage':'url('+ liImg +')', 'backgroundRepeat':'no-repeat',
  //                 'backgroundPosition':'center','backgroundSize':'cover'});
  // }



for(; i<dataLength; i++){
  liImg = url + modalData[i].thum;
  g_li.eq(i).find('button').css({'backgroundImage':'url('+ liImg +')', 'backgroundRepeat':'no-repeat',
                  'backgroundPosition':'center','backgroundSize':'cover'});
}





  //※ li 클릭 시 모달창 띄우기
  g_li.on('click',function(e){
  e.preventDefault();
  var _this = $(this);
  var _this_i = _this.index();
  console.log(_this_i);
  // console.log(modalData[_this_i]);

  var _src = url + modalData[_this_i].big.src;
  var _alt = modalData[_this_i].big.alt;
  modal_img.attr({'src':_src, 'alt':_alt});
  ModalOn('modal_dp');



});// g_li.on이벤트 끝




//-----------------------------------

})(this.jQuery);