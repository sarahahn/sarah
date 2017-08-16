// json_01.js
// JSON(javascript object Notation - 자바스크립트 객체 표현방법)
// 과거 sql(db) -> : 관계형db - table형태 : mySql, oracle, msSql, mariaDB...
// 현재 sql(bd) -> 빅데이터를 처리하거나 좀 더, 복잡한 구조를 처리하기 위해 개량 : mongoDB
// .html(); - 코드가 포함된 html형식의 값을 가져오거나, 담아줄 때 사용.
// .val();  - form형식의 값을 가져오거나 입력할때 사용
// .text(); - 글자를 가져오거나, 글자를 변경.
// .append() , .appendTo()
// .prepend() , .prependTo()

(function($){
  var db = [
    {'name':'이도형','gender':'male'},
    {'name':'전혜빈','gender':'female'},
    {'name':'김하영','gender':'female'},
    {'name':'안영란','gender':'male'},
    {'name':'박새나','gender':'female'},
    {'name':'김승희','gender':'male'},
    {'name':'이현준','gender':'male'},
    {'name':'서보람','gender':'male'},
    {'name':'이수진','gender':'female'},
    {'name':'이단비','gender':'female'},
  ];
  // console.log(db[1].gender, db[0].name);  // 제대로 적용 되는지 확인.

  var headBox = $('#headBox');
  var head_ul = headBox.children('ul');
  var head_li = head_ul.children('li');

  // 1. html문서를 담을 수 있다. 
  // head_li.eq(0).html('<span>').text(db[0].name);

  // 2. for문으로 만들기
    var i = 0;
    var li_length = head_li.length;  // 갯수 확인

    for (; i<li_length; i++){
      // console.log(i); // 확인.
      head_li.eq(i).html('<span>')
      head_li.eq(i).find('span').text(db[i].name);
        // 순서 : html에 'span'을 만들고 
        // find로 'span'을 찾은 후에, db[i].name값을 넣으세요!
    }


// ------------------------------------------------------------------------------
// ※ 사이트 링크 주소 넣기!!

var st=[
    {'name':'naver',    'address':'https://naver.com/'},
    {'name':'google',   'address':'https://google.com/'},
    {'name':'w3schools','address':'https://w3schools.com/'},
    {'name':'darum',    'address':'http://darum.daum.net/'},
    {'name':'nuli',     'address':'http://nuli.navercorp.com/'},
  ];

// body에 #webpage만들기
// $('body').append('<div id = "webpage">');
// 하지만, 이렇게 만들면, body 문서의 맨 뒤에 만들어 지는데, 
// 이때, script링크보다 뒤에 만들어지는 것이 문제!!!!!
// 그래서 before() | after() 를 사용하여 만든다. (생성)
// before() | after() : 내부가 아닌 형제에서 이전, 또는 이후
  $('body').find('script').before('<div id = "webpage">');

// 자,,,, 그럼 webpage를 찾아오자!!!
  var webPage = $('#webpage');
  var web = webPage.html('<ul>').find('ul');  // #webpage에  ul생성하면서 한번에 변수로 지정할 수 없기 때문에, 생성 후, 변수로 다시 지정해 주어야 한다.  
  // console.log(web_ul); // ul이 잘 만들어졌는지 확인. 
  // console.log(web);  // web이 잘 만들어졌는지 확인.
  
  // 이제는 li를 만들 것인데, .html또는 .append로 만들 수 있다.!!!
  // 하지만, for문을 사용할 것이기에, .append를 사용하여 만들어야 한다. 
  // 왜냐하면 .html은 기존의 내용을 무시하고 덮어씌워 만들기에 한개의 li만 생성되지만, 
  // .append는 기존의 내용 뒤에 추가하는 것이기 때문에 li가 여러개 생성된다. 

  for(i=0; i<st.length; i++){
    web.append('<li><a>');  // 여기서!! 닫는  부분이 생략 된 것이기에 알아서 자식요소로 만들어줌. (<li><a></a></li>)
    // console.log(i);
    web.find('li').eq(i).find('a').attr('href',st[i].address)
                                  .text(st[i].name);
    // 참고! attr([속성명],[변경할 값])
  }

  // 상기 for 문의 정확한 표기법!!!!
  // var i=0;
  // var li_eq;

  // for (; i<st.length; i++){
  //   web.append('<li><a>');
  //   li_eq = web.find('li').eq(i).find('a');

  //   li_eq.attr('href', st[i].address);
  //   li_eq.text(st[i].name);
  // }


//------------------------------------------------------------
// ※  img와 alt 넣기!!

  // 1. car list 변수 작성
  var address = '../img/car/';
  var car = [
      {'name':'audi',    'img':'audi.jpg'},
      {'name':'benz',    'img':'benz.png'},
      {'name':'hyundai', 'img':'hyundai.png'},
      {'name':'jagua',   'img':'jagua.jpg'},
      {'name':'kia',     'img':'kia.png'}
    ];

    // console.log(address + car[0].img);  // 확인
  

  // 2. #carMark 만들기
$('body').find('#webpage').after('<div id = "carMark">');

  // 3. 만들은 carMark를 찾아와서 ul을 만들기
var brand = $('#carMark');
var brand_ul = brand.html('<ul>').find('ul');
var brand_li = brand_ul.children('li');

  //4. for문을 이용하여 li를 만들고, img를 삽입!!
  i = 0;
  var myImg, myAlt, liImg;
  
  for(; i<car.length; i++){
    brand_ul.append('<li><img>');
    // console.log(brand_ul);

    myImg = address+car[i].img;
    myAlt = car[i].name;
    liImg = brand_ul.find('li').eq(i).find('img');


    liImg.attr('src',myImg);
    liImg.attr('alt',myAlt);
    // 또는 한 줄로 작성하면 liImg.attr({'src':myImg, 'alt':myAlt});
  }





})(this.jQuery);