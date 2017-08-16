// json_02.js

(function($){
  var product = [
    {'car':['아우디','재규어','롤스로이스','폭스바겐','현대','도요타']},
    {'pen':['모나미','지브라','몽블랑','라미']},
    {'coffee':['비엔나','도피오','라떼','더치','돌체라떼'],
     'fruit':['포도','딸기','복숭아','체리','자두','사과','수박']}
  ];

  console.log(product[2]);
  console.log(product[2].coffee);
  console.log(product[2].coffee.length);
  console.log(product[2].fruit[0]);




//---------------------------------------------------------------------------
//  ※차(tea) img 및 alt삽입

var address = '../img/tea/';
var coffee_01 = [
    [ {'img': {'src':'chai.jpg','alt':'제품1 이미지설명'} },
      {'menu':{'title':'chai', 'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit exercitationem officiis aliquam perspiciatis, sint earum consequuntur consequatur facilis quibusdam nihil reiciendis rem veniam aliquid tempore doloremque perferendis optio delectus ad.'}}
    ],// 제품 1

    [ {'img': {'src':'greenTea.jpg','alt':'제품2 이미지설명'} },
      {'menu':{'title':'greenTea', 'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nihil, cupiditate accusantium aut nobis dolorum reprehenderit facilis optio, id expedita soluta eius totam corporis non rerum quibusdam illum rem nisi!'}}
    ],// 제품 2

    [ {'img': {'src':'tropicalPassion.jpg','alt':'제품3 이미지설명'} },
      {'menu':{'title':'tropicalPassion', 'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro modi eos eius neque eum obcaecati in ullam quod iusto, sit officia, hic sequi tempora asperiores quis? Accusantium consectetur autem aperiam.'}}
    ]// 제품 3
  ];
  


$('body').find('#headBox').after('<div id="coffee"><ul>');
var coffee = $('#coffee').children('ul');
// // #coffee 에 li항목을 만들고, 각각의 내용을 삽입 test
//   // coffee.append('<li>');
//   // coffee.find('li').append('<div><img>');
//   // coffee.find('li').append('<dl><dt>');
//   // coffee.find('li').children('dt').after('<dd>');
// coffee.append('<li> <div><img></div>   <dl> <dt></dt> <dd></dd> </dl> </li>');
// var img     = coffee.find('li').eq(0).find('img');
// var title   = coffee.find('li').eq(0).find('dt');
// var content = coffee.find('li').eq(0).find('dd');

// img.attr({'src':address + coffee_01[0][0].img.src , 
//           'alt':address + coffee_01[0][0].img.alt});
// title.text(coffee_01[0][1].menu.title);
// content.text(coffee_01[0][1].menu.content);



// 반복----------------

var img, title, content,
    i = 0,
    cofeeLength = coffee_01.length;

    for(; i<cofeeLength; i++){
      coffee.append('<li> <div><img></div>   <dl> <dt></dt> <dd></dd> </dl> </li>');

      img     = coffee.find('li').eq(i).find('img');
      title   = coffee.find('li').eq(i).find('dt');
      content = coffee.find('li').eq(i).find('dd');

      img.attr({'src':address + coffee_01[i][0].img.src , 
                'alt':address + coffee_01[i][0].img.alt});
      title.text(coffee_01[i][1].menu.title);
      content.text(coffee_01[i][1].menu.content);
    }

})(this.jQuery);