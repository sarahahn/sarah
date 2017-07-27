<h1>Form</h1>
<h2>Form이란?</h2>
*'양방향 통신'이라 할 수 있다. (서로 주고받는 통신)*
ex) SNS, 문자, 카톡 etc..

<h3>Form사용시 조건</h3>
1. 입력을 할 수 있는가? (ex. naver의 검색창)
2. 입력이 불가능하다면 선택을 할 수 있는가? (ex. 회원가입 시, 여자or남자 선택)
3. 입력 또는 선택이 불가능 하다면, 버튼을 클릭할 수 있는가? (ex. 로그인 버튼)
(버튼이란.. 선택한 내용을 기반으로 다음으로 넘어가는 것.)


개인 정보를 공개할 것인가(get), 비공개 할 것인가(post)??

<h2>Form code</h2>
<br/>

form 작성 시작 시, 처음으로 쓰는 코드명은 <form></form>
```html
  <form action="#" form method="post / get"></form>
```
* action : 어딘가에 있는 데이터를 찾아오시오. 
* # : 임시공간
* post : 비공개(무거움), get : 공개형식(가벼움)
* <fieldset></fieldset> : 구역을 나눔. (의미가 있는 나눔_하나의 공통된 정보끼리 묶음)
* ex) 쇼핑몰 문품 주문 시, 배송지 정보/카드정보/수량정보 등등이 공통된 정보끼리 묶여 있는 것.
* <legend></legend> : form영역 제목 code
cf)  form > filedset > legend

클라이언트 : 사용자
서버 : 어딘가에 저장이 되어있는 data

<h2>Form의 기능</h2>
1. 입력 input
기본형태: <input type="기능" name="" id="user" value="" />  (싱글코드임) 
여기서.. type: 어떤 형태의 어떤 기능을 볼 것인가?임을 나타냄.
input type - text(글자를 입력) / password - 글자를 안보이게 점으로 표시.
name: server언어와 연동하는 공식적인 이름(외부에 알려지는). (id와 class는 html내부에서 쓰는 언어임으로, 구분 잘 해야 함!)(name과 value는 backhand개발자와 꼭 같이 사용해야 함.)
value: 값 (예를들어 로그인창 id/pw에 내가 입력하는 글자)
<label  for="user"  </label>
for : 상기 형태에서 id를 부연설명 해주는 부분. cf)이때 id의 기능은? **연동!(연결)**

html5에서 새로 생긴 기능 : search, tel(모바일에서 바로 숫자키 뜨는 기능.), email, placeholder(값이 아닌, 시각적으로만 보여지는 것,예로, 아이디 칸에 글자쓰면 지워지는 것.), autocomplete(자동완성 기능)
html5 추가기능 및 속성
<input type="text" autocomplete="on" autofocus="autofocus"
      required="required">
     <!-- * autocomplete 속성은 자동완성 기능
      동일한 컴퓨터에서 이전에 방문 또는 작성한 기록이 있다면,
      차후 그 내용이 남아있는 것,
      회원가입/ 로그인 부분/ 개인 기록이 담겨있는 곳에는 사용을 지양함.

      * autofocus 속성은 홈페이지가 로딩되었을 경우 처음부터 활성화 되는 것.
      주의사항 : 홈페이지에서 한번만 사용이 가능함.
                정말 중요한 것이 아니면 사용 지양.
      ex) 인터넷 창 실행시, 마우스 포인트가 검색줄에 가있는 것.

      * required -> 속성은 필수 입력사항
      ex) 이메일의 경우, @가 필수사항으로 입력되어야 한다.
          회원 가입 도중, 필수 입력해야 하는 부분을 느낌표나 텍스트 등등으로 알려주는 것.
          html5로 추가되면서 속성명과, 속성값이 동일한 경우에는 속성명만 작성해도 된다.
          required="required" => required.


2. 선택
기능 : 1)radio(무조건 적으로 하나만 선택 가능. ex.선택 시, 하나 선택하면 하나가 선택이 풀림.) (대신,한번 선택하면 선택을 풀 수 없음. 선택사항중 동일한 결과물에 내용을 전송하려면 name값을 같이 사용해야 한다.  )
ex)<input type="checkbox" name="guy" value="gentle">
<input type="radio" name="guy" value="gentle">
2)checkBox(중복 선택이 가능한 가능.)(정보가 같은 name에 저장됨.)(해제도 가능함)

html5에서 추가된 기능 : number(수량조절기능), range(핸드폰밝기 조절할때 보는 가로줄에 움직이는 점 모양)(필요한 기능 : min="", step="", max=""), color, date, year, month, week


3. 버튼
1) submit 확인(작성된 자료를 기반으로 다른 페이지에 넘어가는 것, 쉽게 말해, 회원정보 쓰고 동의 표시 누르면 다른 페이지로 넘어가는 것)
2) reset 취소 (초기화)
3) button 버튼 (ex. 중복확인, 주소검색 등등, 현재페이지는 가만히 있는데 팝업창처럼 창이 새로 뜨는 것.)
4) image 이미지를 사용하여 버튼을 만드는 것. src="" 속성이 필요함. (확인버튼) 
5) file 자료를 담는 기능. 



4. 복합처리(멀티형)
1) textarea : 여러줄 이용할 수 있는 기능. (다른 사람이 수정 가능함...)
2) 선택 : 예를 들어, 쇼핑몰에서 물품 선택할때 고르는 선택박스!
```markdown
(복합코드: <select>
<option>선택1</option>
<option>선택2</option>
</select>
```
3)버튼형태
```html
<button type="이 자리에 submit, reset, button 선택하여 작성.">
</button>
```
html5의 새로운 기능 : <datalist>





