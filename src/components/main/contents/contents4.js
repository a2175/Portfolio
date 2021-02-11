export default `
<div class="animated fadeIn">
<table border='1' bordercolor='black' width='100%' height='250' align='center'>
		<tr>
			<th>프로젝트 명</th>
			<td>Music SNS</td>
		</tr>
		<tr>
			<th>개발기간</th>
			<td>17.11.07 ~ 17.12.04</td>
		</tr>
		<tr>
			<th>개발환경</th>
			<td>Window7, JDK8, Eclipse Neon, Mysql 5.7, Tomcat 8.5</td>
		</tr>
		<tr>
			<th>프로젝트 개요</th>
			<td>음악이 중심인 소셜 넷트워크 서비스로 자신의 자작곡을 올리거나 자신의 취향인 음악을 서로 추천하거나 추천 받을
				수 있는 서비스를 제공합니다.</td>
		</tr>
		<tr>
			<th>본인 역할</th>
			<td>메인화면의 백엔드와 프론트엔드 구축</td>
		</tr>
		<tr>
			<th>Git 주소</th>
			<td><a href='https://github.com/a2175/JspProject' target='_blank'>https://github.com/a2175/JspProject</a></td>
		</tr>
		<tr>
			<th colspan='2' align='center' bgcolor='#CCEEFF' height='20'>상세내용</th>
		</tr>
	</table>

<table width='100%' height='1'>
<tr>
<td>

	<img src='${process.env.REACT_APP_GIT_URL}/img/4-1.gif' style='width: 60%; height: auto;'>

	○ 프로젝트는 3명이서 진행 했습니다. 로그인, 메인, 디자인으로 역할을 나누었고 저는 <strong>메인 부분</strong>을 구축 했습니다.<br>
	○ 메인을 구축하는데<strong> MVC 패턴과 DAO 패턴</strong>을 적용했으며 <strong>JSP Beans</strong>를 사용 했습니다. <br>
	○ 데이터베이스는<strong> Mysql</strong>을 사용했습니다.
	
	<img src='${process.env.REACT_APP_GIT_URL}/img/4-2.jpg' style='width: 50%; height: auto;'>
	<img src='${process.env.REACT_APP_GIT_URL}/img/4-3.jpg' style='width: 50%; height: auto;'>

	○ 화면의 구성은 페이스북과 비슷하게 구성하였습니다. 오른쪽 위에 회원정보 수정 버튼을 두어서 수정을 할 수 있도록 했습니다.<br>
	○ 게시글을 등록할 수 있으며 파일 첨부 기능 외에는 제가 구축했습니다.<br>
	○ youtube URI를 입력하면 게시글에서 동영상을 재생할 수 있도록 했습니다.<br>
	○ 메인 화면 위에서 3번째까지의 글은 데이터베이스에 자신이 추천한 음악 장르에 따라 ArrayList와 javabean을 사용해 추천되도록 했습니다.

	<img src='${process.env.REACT_APP_GIT_URL}/img/4-4.jpg' style='width: 50%; height: auto;'>

	○ 최상단 게시글 3번째 까지는 추천 게시글이며 다음의 글부터는 등록된 시간 순으로 게시글을 보여줍니다.<br>
	○ 각 글에는 라이크 버튼이 있어 라이크를 클릭 할 때마다 좋아하는 음악 장르가 저장되어 추천 게시글에 영향이 가게 됩니다.<br>
	○ 추천 중복을 방지하기 위해 데이터베이스에 라이크 테이블을 따로 두어 체크하도록 했습니다.<br>
	○ 밑의 펼치기 버튼을 클릭하면 5개의 게시글이 더 보여지도록 했습니다.
	
</td>
</tr>
</table>

</div>
`
	
	