//ex09_date.js


//날짜 시간 자료형
//- new Date()
//- object(자료형)

//현재시각
var now = new Date();//Calendar.getInstance();
console.log(now.toLocaleString());//이런식으로 한번 거쳤다가 나오면 된다.
// 그냥은 잘 쓰지 않고-> 덩어리이기 때문에 추출해서 많이 사용한다.

console.log(now.getYear());//이상하게 나오는데 120 이라고 나오거나 20이라고 나오거나 -> 2000년 되기 전에 쓰던 함수라 이상하게 변하는 것임
console.log(now.getFullYear());
console.log(now.getMonth());//애도 1 적게 나오는구나
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());
console.log(now.getDay());//일요일이0 토요일이 6이다 명심~
console.log(now.getDate());//틱값




//출력
console.log(now);
console.log(now.toString());//자바 스크립트도 .toString이 자동 호출이 된다.
console.log(now.toLocaleDateString());
//지금 여기 콘솔창에서는 결과가 다르게 나오지만 웹 환경에서는 똑같이 나오게 된다.

console.log(now.toLocaleDateString());//연월일 따로 뺀것이다.
console.log(now.toLocaleTimeString());//시분초 따로 뺀것이다.


//특정 시각을 만드는 경우 -> 애도 자바랑 비슷함
var xmas = new Date();
xmas.setMonth(11);
xmas.setDate(25);

console.log(xmas.toString());

var birthday = new Date(1993,7,23,11);

console.log(birthday.toString());


//연산
console.log(xmas-now);//15292800009 -> 약 177일 남은것이다.

//오늘 + 100일
//console.log(now + 100); -> 문자열 + 문자열 형식이 된다.

var result = new Date();
result.setTime(now.getTime() + 100 * 24 * 60 * 60 * 1000);
console.log(result.toString());


