/*

카페에 가서 커피를 시킴
-> 커피를 만들고
-> 손님에게 커피를 다시 주는 시나리오

*/

const orderCoffee = (order, callback) => {
    let coffee

    setTimeout(() => {
        coffee = order
        callback(coffee)
    }, 1000);
}

console.log(orderCoffee('아아', (coffee) => {
    console.log(coffee)
}))

