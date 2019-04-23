var _ = require('lodash')

var menus = ['짜장면', "짬뽕", "볶음밥"]; 
console.log(menus);

let pick = _.sample(menus)
console.log(pick)