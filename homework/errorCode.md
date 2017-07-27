<h1>Error Code</h1>

<h2>200 Code (Success)</h2>
<ul>
**200**: 요청 정상 처리
**202**: Accepted, server가 client의 명령을 받음
**203**: Non-authoritative Information, server가 client의 요구 중, 일부만 전송함
**204**: Non Content client요구를 처리하였으나, 전송할 데이터가 없음.
**205**: Reset content
**206**: Partial Content, range가 지정된 요청인 경우, 지정된 범위만큼의 요청을 받았다는 것을 알려줌
</ul>

<h2>300 Code (Redirection)</h2>
<ul>
**301**: Move Permanently, 요청된 리소스에는 새로운 URI가 지졍되어 있기 때문에, 이후로는 새 URI를 사용해야 한다는 것을 나타냄. (영구적인URI변경)
**302**: Found, 요청된 리소스에는 새로운 URI가 지정되어 있기 때문에, 이후로는 새 URI를 사용해야 한다는 것을 나타냄, 301과 유사하지만 302는 일시적인 URI이동.
**303**: See Other, 요청에 대한 리소스는 다른 URI에 있기 때문에 get메서드를 사용해서 얻어야 한다는 것은 나타냄. (302코드와 같지만, 303은 리디렉션 위치를 get메서드를 통해 얻어야 한다고 명확하게 되어 있음.)
**304**: Not modifiled, 요청한 리소스가 마지막 요청 이후 변경된 적이 없기 때문에 기존 클라이언트의 로컬 캐시 리소스를 사용하도록 알려줌.
**307**: Temporary redirect, 임시로 페이지를 리다이렉트 함.
</ul>

<h2>400 Code (Client Error)</h2>
<ul>
**400**: Bad request, 클라이언트의 요청 구문이 잘못됨, 브라우저는 이 응답을 200 OK응답과 동일한 형태로 취급함.
**401**: Unauthorized, 요청처리를 위해 http인증정보가 필요함을 알려줌. 접근 허용을 차단함, 최초 요청에는 인증 다이얼로그 표시하고, 두번째는 인증 실패 응답을 보냄. 
**403**: forbidden, 접근 금지. Directory listing요청 및 관리자 페이지 접근 등을 차단하는 경우의 응답. 서버는 엔티티 바디에 접근 거부에 대한 이유를 명시하여 보낼 수 있음.
**404**: Not found, client가 요청한 리소스가 서버에 없음.
**405**: Mothod Not Allowed, 허용되지 않는 http 메서드를 사용함
</ul>

<h2>500 Code (Server error)</h2>
<ul>
**500**: Internal Server Error, 서버에서 client 요청을 처리중에 error가 발생함.
**503**: Service Unavailable, 서버가 일시적으로 요청을 처리할 수 없음. 또는 서버가 과부하 상태이거나 점검중이므로 요청을 처리할 수 없음.
**504**: Gateway Timeout, 서버를 통하는 게이트웨이에 문제가 발생하여 시간이 초과됨.
**505**: http version not supported, 해당 http버전에서는 지원이 되지 않는 요청임을 알려줌.
</ul>