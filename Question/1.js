// 1. hoisting으로 인해 다르게 동작하는 변수

// 1-1 var를 사용 setTimeout index 출력
function question1() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log('question1 index', i);
        }, i * 100);
    }
}

// 1-2 let을 사용 setTimeout index 출력
function question2() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log('question2 index', i)
        }, i * 100);
    }
}

// 1-3 closer를 사용 setTimeout index 출력
function question3() {
    for(var i = 0; i < 5; i++) {
        setTimeout((function(j) {
            return function() {
                console.log('question3 index', j);
            }
        })(i), i * 100);
    }
}


question1();
// question2();
// question3();