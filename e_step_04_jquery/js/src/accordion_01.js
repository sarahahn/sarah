// accordion_01.js

(function($){
  //==============================================
    /* jquery 아코디언
    *  1. 선택 개체 숨기기( hide() )
    *  2. 선택 되지 않은 다른 개체 사라지게 만들기
    *    2-1. 현재값에서 높이가 0이 되도록 animate
    *    2-2. 0으로 만들어지면 hide()
    *  3. 선택 개체 바로 뒤 요소 보이게
    *    3-1. show()  -> height:0
         3-2. 원래 가져야 하는 높이 값으로 설정
    */


  //    // $('.add_h').find('dd').hide();
  //    $('.add_h').find('dd').css({display:'block', padding:0, height:0, overflow:'hidden'});
  //    $('dt').on('click',function(e){
  //      e.preventDefault();
  //      // $('dd').hide();
  //      $(this).next('dd')
  //             .css({'height':'auto', 'padding':'0.5em'});
  //             });


  

    // 상기 내용을 한데 묶을꺼임!!!(하기)
    $('.add_h').find('dd').hide();
    $('dt').on('click',function(e){
      e.preventDefault();


      //   $('dd').not( $(this).next('dd') )
      //          .animate({height:0, padding:0}, function(){
      //             $(this).css({display:'none'});
      //          });

      // 상기 또는 하기

      //  $(this).next('dd').siblings('dd')
      //         .animate({height:0, padding:0}, function(){
      //            $(this).css({display:'none'});
      //         });

     //변수로 정리
        var _$this=$(this);
        var nextDd=_$this.next('dd');
        var ddBro = nextDd.siblings('dd');

        var fromAni = function(evt){
          evt.animate({height:0, padding:0}, function(){
                 evt.css({display:'none'});
              });
        };// fromAni()

        var fromview = function(evt){
          var j = addH_dt.index($this); // dd높이값에 따라 맞춰서 길이 조절
          evt.css({display:'block',padding:0, height:0, overflow:'hidden'}, function(){
             evt.animate({height:arr[j], padding:'0.5em'});
        });
        };// fromview()

        fromAni(ddBro);



     // 변수 적용
        //   nextDd.siblings('dd')
        //         .animate({height:0, padding:0}, function(){
        //            $(this).css({display:'none'});
        //         });  // 여기서의 $this는 nextDd.siblings('dd')이다. 



      // 변수 적용
      // nextDd.css({display:'block',padding:0, height:0, overflow:'hidden'})
      //       .animate({'height':'200px', 'padding':'0.5em'});

     var ddDp=nextDd.css('display','none');
      if(ddDp){
        nextDd.css({display:'block',padding:0, height:0, overflow:'hidden'})
              .animate({'height':'200px', 'padding':'0.5em'});
      }else{
        nextDd.animate({height:0, padding:0}, function(){
                 $(this).css({display:'none'});
              });
        } // else

      // if문을 삼항연산자로 쓰면... 
      // var ddDp - nextDd.css('display');
      //  (ddDp == 'none')? formView(nextDd) : fromAni(nextDd);



    
    }); // $('dt').on('click')

    // callback형식이 계속 늘어나는 형태
    //  선택자.메소드(기능, 함수(){
    //       선택.메소드(기능, 함수(){
    //       선택. 메소드(기능, 함수(){
    //         ....
    //         });
    //     });
    // });

  //==============================================
})(this.jQuery);



// animate의 기능
// --> css를 사용 시 transition을 사용하는데, 이를 좀 더 쉽게 사용하는 것을 
// 'animate'라고 한다. 
// 형태 :  .animate({},500);
// 하지만, css의모든 기능을 animate를 사용하여 쓸 수는 없다. 
// 예를 들어 'display:block'과 같은...... 것.
// 두번째 문제는   .animate({height:'auto'}) 기능이 없다.
// 그래서 방법은 생각해 봤는데,,, 
// 우리에겐 css의 width와 height 기능이있다. 
// $('dd').width()  -> ()안에 값을 입력하지 않으면, 가져오는 기능. (dd의 가로값 파악)
// $('dd').height()  -> ()안에 값을 입력하지 않으면, 가져오는 기능. (dd의 세로값 파악)