// 캔버스 크기 설정
function initialize(){
    graph1.width=document.getElementById('gr1').offsetWidth;/* width 사이즈는 gr1에서 갖고와라 */
    /* element.offsetWidth (Height)
    margin을 제외한 padding값 , border값 까지 계산한 갖고온다. */
    graph1.height=document.getElementById('gr1').offsetHeight; /* height 사이즈는 gr1에서 갖고와라  */
    /* element.offsetWidth (Height)
    margin을 제외한 padding값 , border값 까지 계산한 갖고온다. */
}
initialize();

// 그래프 1 데이터
var graphInfo1 = {
    title: "주요 도시 연평균 미세먼지 농도", 
    /* title 명 설정  */
	max: 35,
	data: [
        /* 그래프의 값들을 넣어줌 
        city는 도시명 / range는 막대 길이 color은 막대 색깔  */
		{city: "서울", range: 23, color: "#fe802c"},
		{city: "부산", range: 26, color: "#ffd100"},
		{city: "대구", range: 26, color: "#81d733"},
		{city: "인천", range: 29, color: "#666666"},
		{city: "광주", range: 26, color: "#43cbff"},
		{city: "대전", range: 28, color: "#3183c2"},
		{city: "진주", range: 25, color: "#d4155b"}
	]
}
// 그래프1 그리기
function drawGraph1(){
    var ctx = graph1.getContext("2d");
    /* getContext() 메소드를 호출해서
    렌더링 컨텍스트와 그리기 함수들을 사용할 수 있따.
    2d는 말그대로 2d로 그릴거냐 3d로 할거냐  */
	var data = graphInfo1;
	// 초기 설정
    ctx.fillStyle = "white";
    /* fillStyle  도형의 색 기본 하얀색으로 설정 */
    ctx.fillRect(0, 0, graph1.width, graph1.height);
    /* fillRect  색칠된 직사각형을 그린다라는 메소드 */
	// 타이틀
    ctx.beginPath();
    /* 새로운 경로 명령 세트를 어셈블링 하고 이전에 어셈블 된 경로를 버립니다.
     또한 드로잉 "펜"을 캔버스의 왼쪽 위 원점(==좌표[0,0])으로 이동합니다.  */
    ctx.fillStyle = "black";
    /* 도형의 색을 블랙으로 설정 */
    ctx.font = "14px Arial";
    /* 폰트는 14px 바탕체 */
    ctx.textAlign = "center";
    /* text위치는 가운데  */
    ctx.textBaseline = "alphabetic";
    /* 일반적인 영문자 기준선  */
    ctx.fillText(data.title, graph1.width / 2, 35);
    /*fillText (텍스트, x , y , maxW폭)
    채워진 텍스트를 캔버스에 그립니다. 그 텍스트의 기본 색상은 검정색입니다.*/
	// 눈금선 
    ctx.font = "12px Arial";
    /* font 설정  */
    ctx.textAlign = "right";
    /* 오른쪽  */
    ctx.textBaseline = "middle";
    /* 중앙선 뒤에 선 말하는것  */
	for(var i = 0; i <= data.max; i += 5){
        /* data의 끝까지 포문 돌림 5씩증가  */
		var y = 65 + i * 4.5;
		ctx.moveTo(50, y);
        ctx.lineTo(graph1.width - 20, y);
        /* 새 점을 추가하고 캔버스에서 마지막으로 지정한 From에 해당점 TO를 작성한다.
        lineTo(x,y);*/
        ctx.fillText(data.max - i, 40, y);
        /* 채워진 텍스트를 캔버스에 그립니다. 그 텍스트의 기본 색상은 검정색입니다.
        max보다 전까지 선그리는 것 
         */
	}
    ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
    /* 도형의 윤곽선을 그리는것 */
    ctx.stroke();
    
	// 그래프
    var y = 65 + data.max * 4.5;
    /* 최대 높이  */
	for(var i = 0; i < data.data.length; i++){
        /* data의 data 길이까지 포문돌림 */
        var x = 110 + i * 30;
        /* 막대 길이 설정  */
        ctx.fillStyle = data.data[i].color;
        /* 위의 data의 컬러 넣기  */
    ctx.fillRect(x, y - data.data[i].range * 4.5, 25, data.data[i].range * 4.5);
   /* fillRect  색칠된 직사각형을 그린다라는 메소드
        막대의 높이는 최대 길이 -data의 range 한값  */
	}
	// 범례
    ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
    /* 윤곽선을 그리는 것  */
    ctx.fillRect(50, y + 10, graph1.width - 100, 30);
    /* 아래의 범례 박스 최대 길이 설정  */
	for(var i = 0; i < data.data.length; i++){
        var x = 65 + i * 45;
        /* 너비의 최대사이즈 지정  */
        ctx.fillStyle = data.data[i].color;
        /* 아래 도시명 색이랑 맞춰서 그리기  */
		ctx.fillRect(x, y + 20, 10, 10);
        /* 색칠된 직사각형 그리기  */
        ctx.font = "11px Arial";
        /* 폰트는 11px 바탕체 */
        ctx.textAlign = "left";
        /* text위치는 왼쪽 */
        ctx.fillStyle = "black";
        /* 스타일은 black */
        ctx.fillText(data.data[i].city, x + 14, y + 25);
        /* 텍스트 내용  */
	}
}
drawGraph1();