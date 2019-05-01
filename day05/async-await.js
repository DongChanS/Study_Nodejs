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

const getCoffee = async (order) => {
    try {    
        const coffee = await orderCoffee(order)
        console.log(coffee)
    } catch (error) {
        console.log(error)
    }
}

