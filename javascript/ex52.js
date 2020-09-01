    //문법

    //ES6(ECMAScript 2015) 이후에 생긴 문법들이다...


    //화살표 함수, Arrow Function
    //  - 자바 람다와 유사함

    //() => {} 이런식으로 사용한다.


    //일반함수 

    //1함수 선언문을 이용해서 만든 일반함수
    function foo1() {
        console.log("foo1")
    }

    //2함수 표현식을 이용하여 만든 일반함수
    var foo2 = function() {
        console.log("foo2");
    }



    foo1();
    foo2();


    //화살표 함수

    // var foo3 = () => {
    //     console.log("foo3");
    // }

    //화살표 함수는 익명 함수이다.
    var foo3 = () => console.log("foo3");
    foo3();//호출


    //매개변수가 없는 경우
    var foo = () => console.log("bar");
    foo();

    //매개변수가 하나인 경우
    var foo = x => console.log(x);
    foo(123);

    //매개변수가 여러개일 경우
    var foo = (a,b) => console.log(a+b);
    foo(1,3);

    //반환값이 있는 경우
    var foo = () => {return 10;};
    console.log(foo());

    var foo = () => 10;//이런식도 사용이 가능하다!
    var foo = (a,b) => a+b;//이런식으로도 쓸 수 있다.
    console.log(foo(100,200));

    //-----------------------------------------------------------

    //자바스크립트이기 때문에 알고있어야 할 이야기 -> this keyword
    console.log(this);// -> {} 이게 나오게 된다. 객체라는 표현이 뜬다.
    //최상위 객체인 window객체를 가리키는데 node.js에서는 빈 객체가 나온다.







