var _ = require('lodash')

var menus = ['짜장면', '짬뽕', '볶음밥']; 
let pick = _.sample(menus);

// template literal
console.log(`오늘의 메뉴는 ${pick} 입니다.`)

// object

var object = {
    짜장면:'http://ojsfile.ohmynews.com/STD_IMG_FILE/2016/1214/IE002069160_STD.jpg',
    짬뽕:'https://png.pngtree.com/element_origin_min_pic/00/00/11/095823383855d7e.jpg',
    볶음밥:'http://food.chosun.com/site/data/img_dir/2012/08/08/2012080802054_0.jpg'
  }

console.log(object[pick])