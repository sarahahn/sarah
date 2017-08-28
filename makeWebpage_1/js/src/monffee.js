// monffee.js
(function($){
  // 1. accordion만들기
  //---------------------------------------
  var accrBox = $('.accordionBox');
  var accrDD = accrBox.find('dd');
  var accrDT = accrBox.find('dt');
  var firDD = accrBox.find('.fir_dd');
  
  // 1. 모든 dd를 숨기기
  accrDD.hide();

  // 2. 클릭 전, 첫번째 DD는 보여주기
  firDD.show();

  //3. dt를 클릭하면 dd가 나타나기
  accrDT.on('click', function(e){
    e.preventDefault();   // 원래의 클릭기능 삭제

    var _$this = $(this);
   

    // 클릭시 나타나게 함. 
    // 그러나 다른 버튼 클릭 시, 
    // 이전 버튼이 다시 닫히지는 않음.
    _$this.next('dd').slideToggle();

    // 다른 버튼을 클릭 시, 
    // 먼저 열려있던 DD항목이 닫히도록 처리.
    _$this.next('dd').stop().slideToggle();
    accrDD.stop().slideUp();

  });//accrDT.on 끝
  //---------------------------------------



  // 2. tab Menu만들기
  //---------------------------------------
  var tab_box = $('.tabBox');
  var tab_text = $('.tab_text');

  tab_text.children('div').hide();
  tab_text.find('.tab_1').show();

  tab_box.find('li').on('click', function(){
    var _this = $(this);
    var tab_index = _this.index();


    tab_text.children('div').eq(tab_index)
            .siblings().css({'display':'none'});
            // 내가 선택한 div를 제외한
            // 다른 값은 숨겨라!!!

    tab_text.children('div').eq(tab_index)
            .css({'display':'block'});
      // 내가 선택한 div의 값을 나타내어라.

  });// tab_box클릭 끝.

  //---------------------------------------
    })(this.jQuery);