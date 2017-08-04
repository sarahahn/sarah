// accordion_ listCheck.js

(function($){
  var addH = $('.add_h');
  var addDt = addH.find('dt');
  var addDd = addH.find('dd');

    console.log(addDd.length); // dd의 갯수 파악
    addDt.on('click', function(e){
      e.preventDefault();
      var _this = $(this);
      console.log(addDt.index(_this));
      var selectDt = addDt.index(_this);

      addDd.eq(selectDt).css({background:'#afa'});  // dt를 클릭 시, dd에 지정한 색이 나옴 
    });
 
//     var selectDt = addDt.index(_this);
    console.log(addDd.eq(i).height());
var arr = []; // 배열 작성
var i=0;
for(; i<addDd.length; i++){
  arr[i] = addDd.eq(i).height();
}
console.log(arr);
  
})(this.jQuery);