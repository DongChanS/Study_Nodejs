// lambda


const sum1 = function(a, b){
    this // 실행 시점의 객체를 바라보게 됨.
    return a + b
}

const sum2 = (a, b) => {
    this // 선언 시점의 객체를 바라보게 됨.
    return a + b
}
