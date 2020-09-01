//ex06.js


//자바스크립트의 변화
//1. BOM
//---->
//2. DOM
//---->
//3. ES6

//ECMAScript 2016 == ES6 엄청 중요한 버전이다.
//ECMAScript 2019 == ES10


/*

변수선언

1. var 키워드(BOM DOM 에서 쓰던 물론 ES6도 쓰긴함)
    - function-scoped

2. let 키워드
    - block-scoped(제어문 안에서 선언하면 밖으로 못 빠져나가고 해당 지역에서만 사용가능)
    - 중복선언 불가 -> 자바스크립트에서 계속 중복해서 선언해줬던것
    - 변수 선언 키워드

3. const 키워드
    - block-scoped(제어문 안에서 선언하면 밖으로 못 빠져나가고 해당 지역에서만 사용가능)
    - 중복선언 불가 -> 자바스크립트에서 계속 중복해서 선언해줬던것
    - 상수선언 키워드(자바로 치면 final 변수)

*/


var num1 = 10;
let num2 = 20;
const num3 = 30;

num1 = 100;
num2 = 200;
num3= 300;//이건 const 이므로 바꿀 수 없는 형태임.
consolelog(num1,num2,num3);

if (true) {
    var num4 = 10;//애는 전역변수
    let num5 = 20;//애는 if 안의 지역변수
    const num6 = 30;//애는 if 안의 지역상수
}

console.log(num4,num5,num6);



