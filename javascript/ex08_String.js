//ex08_String.js

//문자열 관련된 함수
var txt = "Hello~ hong~ Hong";

//1.문자열 길이
console.log(txt.length);//랭스 프로퍼티(property)

//2.문자열 검색
//- indexOf()
//- lastIndexOf()

console.log(txt.indexOf("~"));//5
console.log(txt.indexOf("~",6));//11
console.log(txt.indexOf("?"));//-1

console.log(txt.lastIndexOf("?"));//-1

//3. 대소문자 변환
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());

//4. 치환
console.log(txt.replace("Hong","홍길동"));//우리가 알던 리플레이스와 쪼금 다르다
//처음 만나는 애만 바꿔주는 성질이 있다 -> 정규표현식을 쓰면 반복이 가능함
console.log(txt.replace(/Hong/gi,"홍길동"));//정규표현식을 이용하면 가능하게 된다.

//5. 범위 추출 
console.log(txt.substring(2,8));//2번째 부터 7번째 전까지 가져와라
console.log(txt.substring(2));//시작위치에서 끝까지

console.log(txt.substr(2,8));//결과가 위에꺼랑 다르게 나오는데 두번째가 글자수 즉 2번째글자부터 8개를 뽑아와라라는 뜻이 된다.
console.log(txt.substr(2));//애도 글자수 지정안하면 끝까지 잘라오게 된다.

//6. 공백 제거
console.log("      하나    둘    ".trim());

//7. 스플릿
var result = "홍길동,아무개,하하하,호호호".split(",");
console.log(result[0]);
console.log(typeof result);//그냥 오브젝트라고 나온다-> 어떤 객체인지 구별이 어려움


//8.캐릭터
console.log(txt.charAt(1));//여기서는 문자를 반환
console.log(txt.charCodeAt(1));//여기서는 문자코드값을 반환한다. -> e 이므로 101로 반환된다

//9. startswith~
console.log(txt.startsWith("홍"));
console.log(txt.startsWith("Hello"));

console.log(txt.endsWith("Hello"));

console.log(txt.bold());//<b>Hello~ hong~ Hong</b> 이건 브라우저단에서 활용해야 좋은것이다.








