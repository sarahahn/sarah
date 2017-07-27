# css float / clearfix / clear:both

## float

 **정의** : css에서 사진이나 text를 정렬하기 위해 사용되는 코드. (쉽게 말해 옆으로 나열되게 하는 것.)
  ```markdown
    사용방법 {float:left;}
  ```
 **특징** : <ul><li>block / inline-block태그에만 사용이 가능하다.</li> 
 <li>특수한 경우가 아니라면, 형제요소의 블럭에 모두 값을 써야 한다.
     (작성하지 않는 경우, 블럭이 뒤로 숨겨지거나 할 수 있다.)</li></ul>

  ```markdown
     <p> / <div> / <ol> / <table> etc..
  ```
 **속성값**
  ```markdown
    1. {float:left;}  왼쪽 정렬
    2. {float:right;} 오른쪽 정렬
    3. {float:none;}  띄우지 않음
  ```
  **참고**
  <p><strong>position태그</strong>
    float태그는 가로로 정렬하고, 맨 앞의 내용이 삭제되면, 바로 뒤의 내용이 순차적으로 맨 앞에 정렬되지만, 
       position태그는 작업자가 원하는 위치에 바로 적용하여 정렬할 수 있다. </p>
    <p> **단점** : position태그는 다른 내용을 수정하게 되는 경우 정렬이 완전히 틀어지는 경우가 있다. </p>

## clearfix

  <p>HTML 문서 구조에서 부모요소가 자식을 감싸고 있을 때, 
  자식 요소에게 float 형식을 적용하면 부모 요소가 자식 요소를 더 이상 감싸지 않게되고 
  높이 값을 파악하지 못하게 되는 버그가 발생합니다.
  이 때 부모 요소가 다시 자식 요소를 감쌀 수 있게 float을 초기화(clear) 하여 버그를 고쳐주는(fix) 코드가 
  바로 <strong>clearfix<strong>이다.</p>

  **사용방법**
  <p>부모 요소에 after를 설정하는 기법, css에 설정하는 것이기에 문서의 구조를 손상시키지 않음
      body부분에는 :after로 표시가 되며, 실제로는 존재하지 않는 것이 된다. (실제 읽어주지는 않는다.) </p>
  ```markdown
  .clearfix:after{} 
    {/*float리셋부분*/
       display:black;
       clear:both;
       height:0px;
       content:"";}
  ```


## clear:both

  <p>앞서 사용한 float의 기능을 삭제하여 자식요소에 영향을 주지 않게 하는 방법.
     clear:both를 사용하면 float의 left/right 모두 제거된다. 
     (받침반의 역할)</p>
     
     clearfix는 항상 float과 함께 쓰는데, 형제관계의 마지막 부분에 사용한다. 
     다시 말해 clear는 float(나열)기능을 상쇄하는 것이다.

  <p>단점 : li값인 경우(list) 사용할 수 없음.</p>
  
 **속성값**
   ```markdown
      {float:left;}값 하단에 작성.
      {clear:none;} (기초값, clear를 설정하지 않은 것과 같다.)
      {clear:left;} (왼쪽을 취소)
      {clear:right;} (오른쪽을 취소)
      {clear:both;} (오른쪽, 왼쪽을 모두 취소)
   ```

