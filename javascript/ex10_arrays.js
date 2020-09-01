//ex10_arrays.js

//배열
//Array + Collection 느낌

//자바형식
//int[] nunms = new int[3]

//자바스크립트 형식
var nums = new Array();//arraylist 와 닮아있음 -> 가변길이를 적용하기 때문에 길이를 따로 명시해주지 않아도 된다.
nums[0] = 1;
nums[1] = 2;
nums[2] = 3;

// 중간에 방이 존재함에도 건너뛰기를 한 경우??  사이의 낀방은 방은 만들어져 있는데 데이터가 셋팅이 안된것이므로 undefined 로 나오게 된다.
nums[5] = 600;//이런식으로 이빠진 형식으로 만들지 말자

//둘다 정의가 안되어있는데 왜 하나는 되고 하나는 안되는거냐?
//원래 javascript는 진짜 배열은 아니고 유사배열이라고 생각해야 한다 -> 순수한 배열이 아니고 배열처럼 행동하는 애들임 -> HashMap에 가까움
console.log(nums[10]);
// console.leg(n1);


nums["one"]="하나";//누가봐도 hashmap같음
console.log(nums["one"]);// key - value 의 역할 수행


//배열 초기화 리스트
//int[] nums = {100,200,300}; -> 자바버전
var nums = [100,200,300];
console.log(nums);
console.log(nums[0]);
console.log(nums[1]);


//배열 생성
var m1 = new Array();//객체 생성 방법
var m2 = [];//배열 리터럴


//예외처리
//상세한 예외처리는 못함

try {
    console.log(name);
} catch(e) {
    console.log("정의되지 않은 변수발생");
}



//자바 조건 -> boolean
//- 정수 : 0(false), 1(true)
//- 실수 : 0.0(false), 나머지는 모두 true
//- 문자 : ""(false),null,undefined -> 거짓, 나머지 모든문자는 true 처리를 해준다.

// var n = 10;
// var n = 3.14;
// var n = "홍길동";
var n = new Date();//이런 정보가 있는거면 true가 나오게 되고 데이터 자체가 없으면 false 가 나오게 된다.

if(n) {
    console.log("참");
} else {
    console.log("거짓");
}





