//ex04.js



//언어의 기본 자료형!
/*

    node.js 는 런타임 이름이다.

    Javascript 자료형

    1. Number
        - 숫자형
        - 정수와 실수 모두 포함한다 (오라클의 number와 유사 js는 정수 실수형 따로 분리 x)
    
    2. String
        - 문자 + 문자열

    3. Boolean
        - 논리형
        - true / false

    4. Object 
        - 객체형
             js는 객체는 존재하는데 클래스는 못만들어낸다 (방법은 있지만 어렵다)
            자바스크립트는 이미 만들어진 클래스 객체들을 많이 사용한다.
            배열,날짜시간,수학 객체..등등이 존재함
        
    5. 기타
        - null
        - undefined
        - NaN(난) -> Not a number


    
    변수 or 상수 표기법
    - 자바스크립트는 변수의 타입이 존재하지 않는다. -> var 이 변수 선언문이다 
    - var : variable
        - 동일한 변수를 여러번 선언해도 가능함 즉 덮어쓰기가 된다고 생각하면 된다.
    - 모든 변수는 모든 자료형을 담을 수 있다.(만능 -> 자바의 Object)



*/

var num;//변수선언

var num1 = 100;//정수형 상수
var name = "홍길동";//문자 리터럴
var name1 = '홍길동';//애도 위와 똑같이 문자 리터럴이다.
var flag = true;//논리 리터럴
var today = new Date();//객체
// 이런식으로 선언하면 된다.


console.log(num1);
console.log(typeof num1);//이런식으로 어떤 타입인지 이런식으로 확인이 가능하다.
console.log(typeof name);
console.log(typeof flag);
console.log(typeof today);


num1 = "하나";//이런식으로 해도 잘 들어간다고 -> 애 때문에 헷갈림
console.log(typeof num1);//앞에서는 넘버라고 했는데 지금은 스트링으로 바뀜

console.log(typeof null);//null 객체라고 부르기 때문에 object type 이라고 나온다.
console.log(typeof undefined);//그냥 undefined type 이다.
console.log(typeof NaN);//number 와 관련있는 놈이므로 number type 으로 나온다


var a,b,c
var d= 10, e = 20;


//이상한것
var kor = 100;
var kor = 90;
//이런식으로 선언을 두번해도 상관없다.

console.log(kor);


eng = 100;//이런식으로 변수선언 없이 사용할 수 있는데 이렇게 사용하지 말아라! *******제발*******
console.log(eng);



//문자 이스케이프
console.log("안녕하세요 \"홍길동\"입니다\n");//자바처럼 사용하면 된다.

// 자바스크립트는 문법이 엄격하다(대소문자)
// 자료형에 대해서는 유연(자동 형변환을 잘한다. -> 오라클과 비슷)

