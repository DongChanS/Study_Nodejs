// 01.class.js

class Car {
    constructor(option){
        this.title = option.title
    }
    drive() {
        return 'Vroom'
    }
}

const car = new Car({title:'tico'})
console.log(car.drive())
console.log(typeof car.drive)
console.log(typeof car)

// 상속

class Audi extends Car {
    constructor(option) {
        super(option)
        this.color = option.color
    }

    honk () {
        return 'Baaaaaam'
    }

    drive = () => 'Vrooom'
}

const audi = new Audi({title : 'A8', color : 'blue'})

console.log(audi)
console.log(audi.drive())
console.log(audi.honk())

Audi.prototype.drive = () => 'Vr'

console.log(audi.drive())