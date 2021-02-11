export default `
<div class="animated fadeIn">
<h2>1.</h2>
<table border='1' bordercolor='black' width='100%' height='250' align='center'>
	<tr>
		<th>프로젝트 명</th>
		<td>스프링 프레임워크 게시판</td>
	</tr>
	<tr>
		<th>개발환경</th>
		<td>Spring 4, JDK 1.8, Mysql 5.7, Tomcat 8.5, Eclipse, MyBatis, JSTL, jQuery</td>
	</tr>
	<tr>
		<th>프로젝트 개요</th>
		<td>스프링 관련 도서를 보면서 만든 게시판입니다. Spring Security를 사용한 로그인과 권한 인증, Hibernate Validator를 
		사용한 검증, Transaction 등등 기본적이고 필수적인 기능을 구현한 게시판입니다.  </td>
	</tr>
	<tr>
		<th>Git</th>
		<td><a href='https://github.com/a2175/Springboard'
			target='_blank'>https://github.com/a2175/Springboard</a></td>
	</tr>
	<tr>
		<th>Demo</th>
		<td><a href='http://a2175.iptime.org/first/'
			target='_blank'>http://a2175.iptime.org/first/</a></td>
	</tr>
	<tr>
		<th colspan='2' align='center' bgcolor='#CCEEFF' height='20'>상세내용</th>
	</tr>
</table>

<table width='100%' height='1'>
<tr>
<td>

<img src='${process.env.REACT_APP_GIT_URL}/img/1-1.jpg' style='width: 70%; height: auto;'>

<ul>
 <li>개인 블로그와 책을 보면서 시작한 간단한 게시판 프로젝트입니다. 설정이나 코드를 따라 해보면서 공부했습니다.</li>
</ul>

<img src='${process.env.REACT_APP_GIT_URL}/img/1-2.jpg' style='width: 50%; height: auto;'>

<ul>
 <li>로그인, 권한, 보안 기능을 <strong>Spring Security</strong>를 사용하여 구현했습니다.</li>
</ul>

<img src='${process.env.REACT_APP_GIT_URL}/img/1-3.jpg' style='width: 50%; height: auto;'>

<img src='${process.env.REACT_APP_GIT_URL}/img/1-4.jpg' style='width: 70%; height: auto;'>

<img src='${process.env.REACT_APP_GIT_URL}/img/1-5.jpg' style='width: 70%; height: auto;'>

<ul>
 <li><strong>댓글 기능</strong>을 Ajax로 구현했습니다.</li>
 <li>스프링 <strong>Security Tags</strong>를 사용하여 자신의 글일 경우에만 수정하기, 삭제하기 버튼이 렌더링 되도록 했습니다.</li>
</ul>

<img src='${process.env.REACT_APP_GIT_URL}/img/1-6.jpg' style='width: 70%; height: auto;'>

<ul>
	<li>회원가입, 글쓰기, 글수정, 댓글등록 <strong>POST 요청의 데이터 검증</strong>은 1차로 브라우저에서 경고창을 띄어서 하도록 했고</li>
	<li>2차로 서버 측에서 <strong>@Valid</strong> 어노테이션을 사용해 데이터 검증을 했습니다.</li>
	<li>게시글 출력과 검색, 페이징 등을 <strong>Ajax와 JSON</strong>을 이용해 구현했습니다.</li>
	<li>모든 파라미터는 <strong>ArgumentResolver</strong>를 사용하여 <strong>HashMap</strong> 자료구조로 처리했습니다.</li>
	<li>삽입, 수정, 삭제 기능에 <strong>@PreAuthorize</strong> 어노테이션을 사용하여 비회원이 접근할 수 없게 방지했습니다.</li>
	<li><strong>@ControllerAdvice</strong> 어노테이션을 사용하여 예외를 처리했습니다.</li>
	<li><strong>@Transactional</strong> 어노테이션을 사용하여 <strong>트랜잭션</strong>을 적용했습니다.</li>
	<li><strong>resultMap, association, collection</strong> 사용하여 mapper SQL을 작성했습니다.</li>
</ul>

</td>
</tr>
</table>` +

/* ------------------------------------------------------------------------------------------ */

`
<br><br><br><br>
<h2>2.</h2>
<table border='1' bordercolor='black' width='100%' height='250' align='center'>
	<tr>
		<th>프로젝트 명</th>
		<td>Spirng Boot 게시판 & 채팅</td>
	</tr>
	<tr>
		<th>개발환경</th>
		<td>Spring Boot 2.1.7, JDK 1.8, Mysql 5.7, Tomcat 9</td>
	</tr>
	<tr>
		<th>프로젝트 개요</th>
		<td>Spring Boot을 사용하여 만든 간단한 CURD 게시판과 댓글, WebSocket을 사용한 실시간 채팅 프로젝트입니다.</td>
	</tr>
	<tr>
		<th>Git 주소</th>
		<td><a href='https://github.com/a2175/SpringBootProject'
			target='_blank'>https://github.com/a2175/SpringBootProject</a></td>
	</tr>
	<tr>
		<th>Demo</th>
		<td><a href='http://a2175.iptime.org/myboot/'
			target='_blank'>http://a2175.iptime.org/myboot/</a></td>
	</tr>
	<tr>
		<th colspan='2' align='center' bgcolor='#CCEEFF' height='20'>상세내용</th>
	</tr>
</table>

<table width='100%' height='1'>
<tr>
<td>
<img src='${process.env.REACT_APP_GIT_URL}/img/1-7.png' style='width: 60%; height: auto;'>

Spring Boot을 사용하여 간단한 CRUD 게시판과 댓글, WebSocket을 사용한 실시간 채팅을 구현한 프로젝트입니다.

</td>
</tr>
</table>
</div>
`;
