//ex07_casting.js

//형변환
//자바스크립트는 특별하지 않으면 그냥 자기가 형변환을 해버린다.

console.log("100"*2);

//가끔씩 명시적으로 형변환을 해줘야 하는 경우가 생긴다.
//형변환 연산자 존재
//(int)num 이런거 안된다는거다

//1. parseInt() : 무언가를 정수로바꿔서 리턴
//2. parseFloat() : 무언가를 실수로 바꿔서 리턴

var n1=3.14;
console.log(parseInt(n1));//3으로 나온다

var n2 = "3.14";
console.log(typeof n2);//String
console.log(parseInt(n2));

var n3 = "200점";//애를 숫자로 바꿔줘라
console.log(parseInt(n3));//애는 200만 바꿔줄 수 있다 헐랭~~ 점이라는 글자를 자동으로 버려준다.-> 무한정 해주는건 아니다
var n4 = "점수200";
console.log(parseInt(n4));//NAN 문자로 시작해서 안된다
//즉 처음부터 숫자를 문자를 만나기전까지 추출하고 나머지는 다 버린다는 성질을 가지고 있다.

n3="100+200";
console.log(parseInt(n3));//100이 나온다 + 를 만나는 순간 뒤를 다 버려준다.

//이걸 어디서 사용하는가? -> HTML 과 CSS를 조작하려함
// CSS 에서 200px 이런식으로 뒤에 단위가 붙는다 우리는 js에서 이를 연산을 해줘야 하는데 뒤에px 이런식으로 써져 있잖아 이럴때 parseint 를 써주면
//뒤에 있는 단위를 자동으로 빼주는 역할을 수행한다.

console.log(parseFloat("1.5em")*2 + "em");




//isNaN() 함수에 대해 잠시 알아보자 -> is not a number? -> 너 숫자가 아니니 라고 질문하는것과 같음.
// 자료형에 대한 질문이 아니라 형식에 대한 질문이다.
// 사용자로부터 나이를 입력받는다고 해보자.

var age = "20세";//사용자 입력값이라고 가정

//숫자 유효성 검사에 한해서는 이렇게 하는게 매우 편하다!
if (!isNaN(age)) {
    console.log(age);

} else {
    console.log("숫자만 입력하세요");
}

// console.log(age + 1);//201이 나온다





console.log("---------------------");

var a = "가";
var b = "힣";

console.log(a.charAt(0) == b.charAt(0));
console.log(a.charAt(0) > b.charAt(0));
console.log(a.charAt(0) < b.charAt(0));



console.log("***---------------------***");

var c = 5;
console.log(c < "9");


















