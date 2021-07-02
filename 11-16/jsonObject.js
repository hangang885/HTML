//변수를 선언합니다.
const javascriptObject =[{
    name: '박샘이',
    region: '서울'
},{
    name : '윤샘이',
    region: '도쿄'
}];
//JSON.stringify() 메소드로 자바스크립트 객체를 JSON 문자열로 변경합니다.
const outputA = JSON.stringify(javascriptObject);
/* A는 저위에 값을 문자열로 변환해서 쭉 길게 출력 */
const outputB = JSON.stringify(javascriptObject, null, 2);
/* JSON.stringify(<객체>, <변환 함수>, <공백 개수>)
객체는 위에 자바스크립트 오브젝트 , 변환함수는 null , 공백개수는 2개  */
console.log(typeof(outputA));
/* A의 타입을 출력 string으로 바꿧기에 string */
console.log(outputA);
/* A의 값을 출력한다. */
console.log(outputB);
/* B의 틀대로 출력한다.  */
console.log('-----------------');
//JSON.parser() 메소드로 JSON 문자열을 자바스크립트 객체로 변경합니다.

const outputC = JSON.parse(outputB)
/* 기본 값은 문자열이 아닌 object 타입 */
console.log(typeof(outputC));
/* 그래서 object 출력 */
console.log(outputC);
/* 값은 그대로 출력 오우야  */