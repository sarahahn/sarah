<h1>조건부주석</h1>

<h2>조건부 주석이란?</h2>
*html을 사용한 익스플로러 실행 시, 버전이 달라 site가 구동되지 않는 경우 주석처리가 되는데, 이때 이를 해결하기 위해 사용된다.*


<h2>조건부 주석에서 사용되는 태그의 의미</h2>
* !(Not) : [if !ie] ie가 아니라면
* lt(Less Than) : [if lt ie 9] ie9 보다 작다면
* lte(Less Than or Equal) : [if lte ie 8] ie8 보다 작거나 같다면
* gt(Greater Than) : [if gt ie 6] ie6 보다 크다면
* gte(Greater Than or Equal) : [if gt ie 6] ie6 보다 크거나 같다면
* () : 우선처리
* &(And) : [if (gte ie 6) & (lt ie 9)] ie6 이상이고 ie9 미만이라면
* |(or) : [if (ie 7) | (ie 8)] : ie7 이거나 ie8 이라면


`<head>`와 `</head>` 안에 다음과 같은 문구를 넣어서 html에 버전별로 클래스를 부여해서 적용하는 방법도 있습니다.
```html
<!--[if IE 7]><html lang="ko" class="no-js ie7"><![endif]-->
<!--[if IE 7]><html lang="ko" class="no-js ie8"><![endif]-->
<!--[if IE 7]><html lang="ko" class="no-js ie9"><![endif]-->
```

```markdown
  <!--  단축키 : "compat"쓰고 tab -->
  <!--[if lte IE 9]>
  <script src="../ie/html5shiv/dist/html5shiv.min.js"></script>
  <![endif]-->
  <!-- 단축키 : "cc:ie"쓰고 tab
        lte의 뜻 : 9보다 작거나 같을때! -->
  <!-- script를 작성하는 이유: html5의 code가 ie6,7,등등의 낮은 버전에서는 안읽히기 때문에 강제로 읽히게 하려고 작성하는 것임. -->
  ````