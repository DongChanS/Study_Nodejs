var _ = require('lodash');

const luckNumbers = [29, 32, 44, 24, 2, 41]

// 랜덤으로 생성한 6개의 숫자가
// luckNumbers와 얼마나 매칭하는지 카운트를 반환하는 함수

const numbers = _.range(1, 46);

const match = () => {
    let myNumbers = _.sampleSize(numbers, 6);
    return _.intersection(myNumbers, luckNumbers).length
}

let counts = [0, 0, 0, 0, 0, 0, 0]

for (let i = 0; i < 10000000; i++){
    counts[match()] ++
}

console.log(counts)


