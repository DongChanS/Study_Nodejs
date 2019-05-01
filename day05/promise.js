// 2. promise

const orderCoffee = (order) => new Promise( (resolve, reject) => {
    
    if (order === undefined) {
        reject('주문에 실패함')
    } else {        
        setTimeout( () => {
            let coffee = order
            resolve(coffee)
        }, 1000)
    }
})

orderCoffee()
    .then( coffee => {
        console.log(coffee)
    })
    .catch( string => {
        console.log(string)
    })

