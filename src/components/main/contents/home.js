import pdf from './pdf.png';

export default `
<div class="animated fadeIn">
<h2>Welcome!</h2>
<table width='100%' height='1'>
	<tr>
		<th><img src='${process.env.REACT_APP_GIT_URL}/img/반.jpg' alt='' width='300' height='auto' class='alignleft' /></th>
		<td> 안녕하세요. 웹 개발자를 목표로 공부하고 있는 이석주입니다. <br>
			<br> 29살 (93년생)<br> 경기대학교 컴퓨터과학과 학사 <br>
			<br> <strong>email</strong>: as217512@gmail.com
			<br><br>
			제가 공부하면서 만들어보았던 결과물의 설명은 상단의 탭메뉴에서 보실 수 있습니다. <br>
			또한, 결과물의 데모를 라즈베리 파이로 호스팅 하고 있습니다. <br>
			<ul>
				<li><a href='http://a2175.iptime.org/first/'
				target='_blank'>Spring-MVC CRUD 게시판</a></li>
				<li><a href='http://a2175.iptime.org/myboot/'
				target='_blank'>Spring Boot CRUD 게시판</a></li>
				<li><a href='http://a2175.iptime.org/php/'
				target='_blank'>PHP-MVC CRUD 게시판</a></li>
				<li><a href='http://a2175.iptime.org:3001/'
				target='_blank'>Node.js-Express-Pug RESTful CRUD 게시판</a></li>
				<li><a href='http://a2175.iptime.org:3002/'
				target='_blank'>React-Node.js CRUD 게시판</a></li>
			</ul>
		</td>
	</tr>
</table>
<br>
<br>
<br>
<br>

<h2>Experience</h2>
<table class='test' align='center'>
<tr>
<td><img src="${process.env.REACT_APP_GIT_URL}/img/CnCPP.jpg" /></td>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/java.jpg' /></td>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/python.png' /></td>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/aws.png' /></td>
</tr>
<tr>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/html_css.png' /></td>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/JS.png' /></td>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/jquery.png' /></td>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/spring.png' /></td>
</tr>
<tr>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/mysql.jpg' /></td>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/mybatis.jpg' /></td>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/php.png' /></td>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/nodejs.png' /></td>
</tr>
<tr>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/react.png' /></td>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/spring_boot.jpg' /></td>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/django.png' /></td>
<td><img src='${process.env.REACT_APP_GIT_URL}/img/laravel.png' /></td>
</tr>
</table>
</div>
`;
