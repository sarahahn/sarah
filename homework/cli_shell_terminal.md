# Cli (Command line interface)
## cli란?
명령줄 인터페이스 또는 명령어 인터페이스라고 하며, 텍스트터미널을 통해 사용자와 컴퓨터가 상호작용하는 방식을 뜻함. 
문자열의 형태로 사용자가 작업명령을 입력하고, 컴퓨터의 출력 역시 문자열의 형태로 주어짐.

## 사용방법
## 이미지
![Cli](https://upload.wikimedia.org/wikipedia/commons/e/e7/Bash_screenshot.png)

참고site : [위키백과]
'<https://ko.wikipedia.org/wiki/%EB%AA%85%EB%A0%B9_%EC%A4%84_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4>'
<hr/>


# Shell 
##Shell란?
사용자의 명령어를 입력받아 기게어의 형태로 변환하여 커널에 전달하는 역할을 수행하는 프로그램.
##사용방법
 - Backspace : 최근에 입력했던 text가 지워짐
 - Ctrl-U : 전체 행이 삭제
 - Ctrl-C : 실행이 중단
 - Ctrl-Z : 일시중지 상태
 - Tab : 명령어를 입력하는 중에 누르면, 나머지 명령어를 채워줌. 명령어가 하나 이상 존재하는 경우 두번 두르면 명령어들을 다시 꺼내어 사용 가능
 - 상하방향키 : 명령행의 히스토리 기능을 사용. 앞서 사용했던 명령어들을 다시 꺼내어 사용 가능


##이미지
![shell](http://cfile23.uf.tistory.com/image/2134744453B41C2E10BC09)
######참고site : [블로그]
'<http://blog.naver.com/0019296/150160478270>'
<hr/>


# Terminal (text input/output environment)
##Terminal란?
*다른 말로 DOS(Disk Operating system)라고 표현할 수 있다. Text로써 문서를 작성하여 결과를 도출.*
##사용방법
* **pwd**: 현재 위치를 찾음.
* **ls**: directory의 List를 볼 수 있음.
* **clear**: 새로운 화면처럼 깔끔하게 내용이 안보여짐, 하지만 git bash상에서 사용한 내용은 지워지지 않음.
* **cd/**: 최초 생성된 directory창을 띄워줌.
* **start .**: 현재 작성중인 directory창을 띄워줌.
* **방향키**: 사용했던 명령어를 확인 할 수 있음.
* **mkdir**: 폴더 만들기. (만고자 하는 폴더가 여러개 인 경우 spaceBar 또는 슬러시로 표시), 맨 뒤에 `-p`작성 시 강제 만들어짐.
```markdown
표기방법: $ mkdir 폴더명1 폴더명2    or    $ mkdir 폴더명1/폴더명2
```
* **touch**: 파일 만들기 (만들고자 하는 파일의 확장자를 작성 요망. (ex. *.txt, *.css, *.md etc..))
* **ll**: 숨겨진 권한이나 언제 만들어졌는지 등의 정보를 확인할 수 있음. 
* **history**: 사용자가 사용하였던 명령어를 확인할 수 있음.
* **rm**: 삭제기능,복구가 불가능하다. (ex. $ rm file/directory), 삭제하고자 하는 file명 앞에 `-rd`작성시 강제삭제됨.

##이미지
![terminal](http://blogfiles7.naver.net/MjAxNzAyMDVfMjk5/MDAxNDg2Mjk2MDY1NDc3.-U-YUVNOwYxlEieaVUSze0tEyu8Sd70W6w5wVbc0xVwg.JTWEqb9BktaxnmDmKExfFL0fsTsuew0aKwonS1kIthUg.PNG.lyhy0310/2017-02-05_21%3B00%3B06.PNG)
######참고: UXUI 디자인 수업 / Naver지식백과
'<http://terms.naver.com/entry.nhn?docId=1592235&cid=50372&categoryId=50372>'
<hr/>