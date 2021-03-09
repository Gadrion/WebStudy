// 함수 선언식 - Function Declarations

function func1() {
    console.log('함수 선언식이다.!');
}

func1();


// 함수 표현식 - Function Expressions

const func2 = function() {
    console.log('함수 표현식이다.!!!');
}

func2();

// 차이점 함수 선언식은 호이스팅에 영향을 받음
// 표현식은 호이스팅에 영향을 받지 않는다.


// 실행 전
logMessage();
sumNumbers();

function logMessage() {
  return 'worked';
}

var sumNumbers = function () {
  return 10 + 20;
};