//ex11_object.js


/*

    자바스크립트 객체
    1. 내장 객체
        - Array,Date,Math
    2. BOM 객체 : 나중에 정리
    3. DOM 객체 : 나중에 정리
    4. 사용자 정의 객체 -> 자바에서 클래스를 생성해서 객체를 사용하는것과 유사한 모습을 띄게 된다.

    사용자 정의 객체 생성
    1. object 클래스 사용
    2. {}: 객체 리터럴(***)

    자바에서 홍길동 객체 생성 하기 위해서

    Class User {
        private String name;
        private int age;
    }
    
    User user = new User();
    이런식으로 하는게 자바에서 하는 방식인데.
    
    -> 이런행위를 자바스크립트에서는 어떤방식으로 처리할까?
    */


    //1. object 클래스 사용 

    var hong = new Object();//인스턴스가 생성됨 근데 그냥 빈 깡통을 만든거지
    hong.name = "홍길동";//프로퍼티가 생성된다 -> private String name 이런식으로 동적으로 만들어진게 된다.
    console.log(hong.name);
    hong.age = 10;
    console.log(hong.age);
    // 마음대로 인스턴스 구성을 만들어 낼 수 있다.
    console.log(hong);//{ name: '홍길동', age: 10 } 이런식으로 멤버하나당 키와벨류로 이어진 형태를 볼 수 있다.

    // 여기서 이순신을 다시 만들고 싶다...
    var lee = new Object();
    lee.name = "이순신";
    lee.age=30;
    lee.address = "부산";
    console.log(lee); 


    //2. 객체 리터럴

    var haha = {};
    haha.name = "하하하";
    haha.age = 20;
    haha.address = "서울시";
    console.log(haha);

    //보통은 아래와 같이 객체리터럴 방식을 사용해서 객체를 생성한다.
    var hoho = {name : "호호호",age:20,address:"서울시"};
    console.log(hoho);

    //가독성을 높여주려면 아래와 같은 방식으로 객체를 생성한다.
    //아래의 표기법을 가장 널리 사용한다.
    var huhu = {
        name:"후후후",//프로퍼티라고 부른다 -> 멤버변수가 그 객체의 성질을 담는 공간이므로
        name : 20,
        address:"서울시"
    }
    console.log(huhu);

    //프로퍼티에 접근하는 방법
    console.log(huhu.name);//이런식으로 읽기를 하면 된다.
    huhu.name = "카캌카";//이런식으로 쓰기도 가능하다.
    console.log(huhu.name);

    console.log(huhu["name"]);//이런식으로 연관 배열 접근 방법으로 가능
    //java의 hashmap 사용법이랑 비슷하다 name 자체가 key 값이 된걸로 볼 수 있다.

    huhu["gender"] = "남자";//이거는 동적으로 프로퍼티가 추가가 된것이다.**이런방식을 많이 사용하므로 꼭 기억하도록 하자.
    huhu.gender = "여자"//이런식으로도 동적으로 프로퍼티가 (추가,수정) 될 수 있다.
    huhu.height = 180;
    console.log(huhu);

    //대괄호를 쓰게 되면 이런짓도 가능하다
    huhu["mobile-number"] = "010";//연관배열 형태는 문자열이므로 마이너스가 들어간 데이터도 담을 수 있다. -> 권장되는 방법은 아니다.

    //프로퍼티 삭제

    delete huhu.gender;//이런식으로 프로퍼티도 삭제를 하기도 한다.
    delete huhu["gender"];//이런방법으로도 삭제가 가능하다.
    console.log(huhu);


    //향상된 for문
    //주로 대상이 배열이나 컬렉션이었다.
    //&&자바는 객체 프로퍼티 탐색하는 용도로만 향상된 for문을 사용할 수 있다.
    // for (변수 in 집합) {

    // }

    for ( var p in huhu) {
        console.log(p);
    }//특정 객체가 가지고 있는 프로퍼티 목록을 탐색해준다



    //객체(클래스) 맴버
    //1. 변수
    //2. 메서드(함수) -> 이건 어케 만드느냐?!

    
    //오브젝트 표기법~?! 이건 뭐냐
    var hong = new Object();
    hong.name = "홍길동";
    hong.age = 20;

    hong.hello = function() {
        console.log("안녕하세요 저는" + this.name + "입니다.");//시점상 말이 안된다. 객체에서 본인 자신을 참조할때 this 를 쓴다.
    };
    //함수 자체를 객체 취급한다.
    //익명함수
    console.log(hong);

    console.log(hong);
    console.log(hong.name);
    hong.hello();

    //객체 리터럴 방식
    var hong = {
        name: "홍길동",
        age : 20,
        hello: function() {
            console.log("안녕 ~ 저는~" + this.name)
        }
    };


    //현재 길동이의 주소가 서울시 강남구 역삼동 20번지라고 해보자
    hong.address = "서울시 강남구 역삼동 20번지";

    //자바 -> 멤버변수 -> 다른 클래스 객체로 만들수 있었다.ㄴ
    // class user {
    //     private String name;
    //     private Address Address;
    // }

    var hong = {
        name :"홍길동",//문자열멤버
        age:20,//숫자형 멤버
        hello:function() {

        },//함수형 멤버
        address: {
            sido : "서울시",
            gugun : "강남구",
            dong : "역삼동",
            bunji: "20번지"
        },//객체형 멤버
        job:["학생","직장"]
    }//클래스 생성

    console.log(hong.address.dong);
    console.log(hong["address"]);

    //직업?
    console.log(hong.job);
    console.log(hong.job[0]);
    console.log(hong.job[1]);


    
    //생성자 함수(=클래스 역할 수행)~~~
    //- 객체를 만드는데 사용하는 전용 함수
    //- 표기법이 대문자로 시작 즉 파스칼 표기법을 사용한다. -> 다른사람들이 알아보기 편하게 하기 위해서
    //- 
    var user = {
        name:"홍길동",
        age:20,
        hello: function() {

        }
    };

    //함수를 하나 만들어준다.

    function User(name,age) {
        this.name = name;//this가 hong 을 가리킨다.
        this.age = age;
        this.hello = function() {
            console.log(this.name);
            console.log(this.age);
        }
    }
    

    var hong = new User("홍길동",20);//이런식으로 함
    //hong.name = "홍길동"; 이걸 해준거라고 보면 된다.

    var lee = new User("이순신",30);
    //lee.name = "이순신"; 이런식으로 작업 해준것이다. => 진짜 클래스와 유사한 행동을 할 수 있다 자바스크립트 클래스는 이런식으로 생성자 함수를 통해서 만든다
    console.log("-------------------");
    lee.hello();
    console.log("-------------------");
    hong.hello();

    console.log("-------------------");
    var list = [];
    var today = new Date();
    console.log(typeof hong);//모든객체는 object 기반으로 만든것이므로 
    console.log(typeof lee);
    console.log(typeof list);
    console.log(typeof today);

    //객체들은 서로 어케 구분을 하냐??
    console.log(hong.constructor);//user 라고 나오게된다
    console.log(lee.constructor);
    //같은 생성자 함수로 만든놈이므로
    console.log(list.constructor);
    console.log(today.constructor);
    //이제 constructor 을 써보니 구분이 되기 시작했다

    console.log(hong.constructor == lee.constructor);
    console.log(hong.constructor == today.constructor);//이런식으로 구분이 가능하다

    //자바 스크립트는 생성자 함수까지 찍어내면서 객체를 생성할 일은 없다.









    