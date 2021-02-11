export default `
<div class="animated fadeIn">
<h2>1.</h2>
<table border='1' bordercolor='black' width='100%' height='250' align='center'>
		<tr>
			<th>프로젝트 명</th>
			<td>아파트 주차 관리 시스템</td>
		</tr>
		<tr>
			<th>개발기간</th>
			<td>18.4.15 ~ 18.6.04</td>
		</tr>
		<tr>
			<th>개발환경</th>
			<td>Raspbian, Raspberry Pi 3 Model B, Python 3.6, Mysql</td>
		</tr>
		<tr>
			<th>프로젝트 개요</th>
			<td>아파트 주차 관리 시스템으로 웹으로 주차장의 빈 공간을 실시간으로 알 수 있고 차량의 번호판을 촬영하여 자신의
				차량 위치를 알 수 있게 서비스 합니다.</td>
		</tr>
		<tr>
			<th>본인 역할</th>
			<td>라즈베리 파이를 사용하여 센서, 카메라 제어</td>
		</tr>
		<tr>
			<th>Git 주소</th>
			<td><a href='https://github.com/a2175/AptParkingMgt'
				target='_blank'>https://github.com/a2175/AptParkingMgt</a></td>
		</tr>
		<tr>
			<th colspan='2' align='center' bgcolor='#CCEEFF' height='20'>상세내용</th>
		</tr>
	</table>

<table width='100%' height='auto'>
<tr>
<td>

	<img src='${process.env.REACT_APP_GIT_URL}/img/5-1.jpg' style='width: 50%; height: auto;'>

	프로젝트는 3명이 진행했으며 각각 역할은<br>
	<br> 1) 웹사이트, DB 구현 및 수정<br> 2) OCR, DB 설계, DB 쿼리 전송<br>
		<strong>3) 라즈베리 파이 센서, 카메라 제어</strong><br>
	<br> 웹 사이트는 AWS에 서버를 띄웠고 스프링 프레임 워크를 사용했으며 DB는 mysql을 사용했습니다. OCR은
		구글 클라우드 비전 API를 사용했습니다.<br>
	<br>
	
	<img src='${process.env.REACT_APP_GIT_URL}/img/5-2.gif' style='width: 50%; height: auto;'>
	<img src='${process.env.REACT_APP_GIT_URL}/img/5-3.jpg' style='width: 50%; height: auto;'>

	라즈베리 파이 GPIO를 통해 초음파 센서를 사용하여 일정 거리 안에 탐지가 되면
		카메라로 촬영합니다. 촬영한 사진을 OCR을 사용해 번호판에서 차량 번호를 추출해 DB로 쿼리 전송을 하도록 구축했습니다.<br>
	<br> 관리자는 장시간으로 주차된 차량이라든가 외부 차량이 있는지 파악할 수 있고 이용자는 자신의 차량 위치나 빈
		공간의 위치를 시각적으로 알 수 있습니다.

</td>
</tr>
</table>

<br><br><br><br>
<h2>2.</h2>
<table border='1' bordercolor='black' width='100%' height='250' align='center'>
	<tr>
		<th>프로젝트 명</th>
		<td>31게임</td>
	</tr>
	<tr>
		<th>개발기간</th>
		<td>17.6.07 ~ 17.6.14</td>
	</tr>
	<tr>
		<th>개발환경</th>
		<td>Cobuntu 10.04 LT</td>
	</tr>
	<tr>
		<th>프로젝트 개요</th>
		<td>리눅스 환경에서 C언어를 사용하여 TCP 소켓을 이용해 간단한 31게임을 만들었습니다.</td>
	</tr>
	<tr>
		<th>본인 역할</th>
		<td>클라이언트, 서버 구축</td>
	</tr>
	<tr>
		<th>Git 주소</th>
		<td><a href='https://github.com/a2175/31game' target='_blank'>https://github.com/a2175/31game</a></td>
	</tr>
	<tr>
		<th colspan='2' align='center' bgcolor='#CCEEFF' height='20'>상세내용</th>
	</tr>
</table>

<table width='100%' height='1'>
<tr>
<td>

<img src='${process.env.REACT_APP_GIT_URL}/img/5-4.jpg' style='width: 90%; height: auto;'>

	클라이언트, 서버를 구축할 때 Select를 사용하여 데이터를 받거나 키보드로 입력한
	값을 보내는 것을 동시에 할 수 있도록 했습니다.<br>
	<br> 그 외에는 fork()를 이용해 간단한 concurrent server를 구축해봤고 SIGCHLD signal
	handler을 이용하여 좀비 프로세서 제어를 해보았습니다.

</td>
</tr>
</table>

</div>
`