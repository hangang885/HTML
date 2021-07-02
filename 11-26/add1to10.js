//1부터 10까지 합 계싼
var sum = 0;
for (var i=0; i<=10; i++){
    sum +=i;
}

//합을 메시지로 전송
postMessage(sum);