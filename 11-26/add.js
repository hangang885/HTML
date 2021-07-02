onmessage =function(e){
    /* 받은 내용을 여기서 계산함 */
    var sum=0;
    var from = parseInt(e.data.from);
    /* 자료형 인트로 변경 */
    var to = parseInt(e.data.to);
    /* 자료형 인트로 변경 */

    for (var i=from; i<=to; i++)
    sum+=i;
    /* 계산이 다 된 후 메시지를 보냄 sum값을  */
    postMessage(sum);
}