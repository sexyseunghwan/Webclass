



/*
    js 내의 함수 
    - 함수, 메소드
    
    자바 메소드
    pbulic static int m1(int num) {
        return 10;
    }


    자바스크립트 메소드(함수) 생성법
    function m1(num) {
        return 10;
    }
    num 앞에 var을 붙이면 안된다.


 */

 function m1(num) {
     return num;
 }
 console.log(m1(1));

function f1() {
    console.log("성공");
    // return null;
}

f1();

//독특한 자바스크립트의 성질
function f2(name) {
    // console.log(name);
    console.log(arguments); //내장 배열(유사 배열)
    console.log(arguments[3]);//몇번째 인자 받아올 것인지
}

f2("홍길동",10,true,new Date());

function f3(name) {
    console.log(name);
}

f3();//null 이 아니라 undefined라고 찍힌다

//초기화 하지 않은 변수를 자바에서는 사용 불가했는데 js에서는 사용이 가능하긴 한데 그것을 undefined 라고 표현한다.
var num;
console.log(num);

// js 의도적으로 비워둔 상태를 null이라고 부른다.! undefined 와 약간 차이가 나는 성질임.
var name = null;
console.log(name);


// 지금은 일단 null이랑 undefined 는 같은 값이라고 생각하자
console.log(null==undefined);//true 가 나오긴 하는데 일단 다른 값이다.
console.log(null===undefined);//false 라고 나오게 된다. 세부적으로 비교해야할때는 === 을 사용한다.

//=== : 절대 형변환이 존재하지 않는다.
//== : 형변환이 일어난다.

console.log(100 == "100");//이걸 true 로 출력해준다.
console.log(100 === "100");//정식으로 비교해야 할때는 이런식으로 ===를 써주면 된다. 이런식으로 하면 false 가 나오게 된다.

console.log(100 != "100");
console.log(100 !== "100");



function f4() {
    return 0;
}

console.log(f4());


//독특한 현상
f5();//선언하기 전에 호출이 가능하다!

function f5() {
    console.log("f5");
}
//변수로도 확인해보자.


console.log(ak);
var ak = 100;//undefined 라고 찍힘

//자바스크립트에서는 아래 현상이 무조건 발생한다.
//함수 호이스팅
//변수 호이스팅
//순서에 상관없이 끌어올려진다 즉 선언부만 끌어올리는것이다
/*

var ak; -> 이런식으로 호이스팅 된다.

console.log(ak);
//var ak = 100;
그리고 이놈이 
ak = 100; 이런식이 된다 

*/


/*
    자바: 멤버변수 vs 지역변수
        - 클래스 영역 or 메소드 영역 or 제어문 영역

    자바스크립트: 전역변수 vs 지역변수
        1. 전역변수( global variable)
            - 한 페이지 안에서 모두 사용 가능한 변수(js 에서 가장 넓은 영역)
            - 집합에서 가장 바깥족
        2. 지역변수(local variable)
            - 블럭(**함수만 유효함!**) 내에서 선언한 변수    -?무슨말?

*/


//전역변수
var m1 = 100;//이게 전역변수이다. 해당 페이지 안에서 언제든지 접근 할 수 있으므로

console.log(m1);

function c1() {
    console.log(m1);//바깥쪽에서 선언한거 안쪽에서 당근 선언할 수 있다
}

//지역변수

function c2() {
    var m2 = 200;
    console.log(m2);
}

//console.log(m2);//해당 변수는 선언을 한적이 없으므로 function 안에서만~
//undefined는 선언을 했는데 값을 안넣을 경우에 뜨는 것이고 해당은 아예 선언자체를 한적이 없음


function c3() {

    if(true) {
        var m3 = 300;
        console.log(m3);
    }
        console.log(m3);//제어문은 영역분리 안댐 ** 조심해야한다 자바랑 완전 다르다! -> 제어문 안에서 만들어서 나와도 살아남는다 함수 안에서만!
}

c3();


//자바스크립트는 var 선언 없이 변수를 선언 할 수 있다.

var nick1 = "강아지";//전역변수
nick2 = "고양이"//전역변수

function c4() {
    var gender1 = "남자";//지역변수
    gender2 = "여자";//전역변수가 된다 ***
}

//* 즉 var 을 선언하지 않은 모든 변수는 전역변수가 된다!

console.log(gender2);//? 뭐지



