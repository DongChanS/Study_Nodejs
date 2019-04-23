// let과 const의 비교

function test() {
    if (true) {
        if (true){
            const message = "ㅎㅇ";
            var num = 1;
        }
    }
    console.log(message)
    console.log(num)
}

test()