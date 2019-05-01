function Func (option) {
    this.a = option.a
    this.b = option.b
    this.c = option.c
    return this
 }

var abc = new Func({a:'1',b:'2',c:'3'})

console.log(abc.a)

var what = Func({a:'1',b:'2',c:'3'})

console.log(typeof what)