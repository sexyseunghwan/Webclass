//ex12_function.js;


/*
    자바스크립트에서의 함수
    - 함수는 1급 객체이다.
    - first class citizen
    - first class object

    -함수는 객체처럼 취급된다.(데이터처럼 취급이 가능하다.)

    1. 함수를 변수나 데이터 구조에 담을 수 있다. -> 진짜 그냥 데이터 처럼 취급이 가능하다
    2. 함수를 매개변수에 전달 할 수 있다.
    3. 함수를 반환값으로 사용할 수 있다.

    이걸 모르면 자바처럼 자바스크립트를 쓰게된다. => 저 위에 3개를 살려야 자바스크립트 처럼 코딩이 가능하다!!


 */

 //1. 함수는 변수에 담을 수 있다.

 var m1;

 function f1() {
     console.log("f1");
 }

 m1 = f1;//c언어의 함수포인터와 비슷하다. -> 함수가 정의된 *주소값*을 복사한다.
 //m1 = f1();//이게 아님
 
 m1();//f1() 함수를 수행하게 된다.


//2. 함수를 매개변수에 전달 할 수 있다.
function f2(m) {
     m();
 }
function f3() {
      console.log("f3");
}
function f4() {
    console.log("f4");
}

f2(f3);
f2(f4);


//3. 함수를 반환값으로 사용할 수 있다.
function f5() {
    return f3;
}


f5()();
//->f3();이런식으로 변환되어서 실행될것이므로



//그리고 만약

function fk() {
    console.log("asd");
}


function f6() {
    return fk();
}

f6();//리턴값이 이미 함수라면 그냥 이렇게 써주면 된다.

function f7() {
    return fk;
}

f7()();




// 즉 함수는 1급 객체이다.
