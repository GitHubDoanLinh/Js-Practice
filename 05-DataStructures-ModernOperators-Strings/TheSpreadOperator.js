'use strict';
const arr = [4, 5, 6];
const badNewArr = [3, 4, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [2, 3, 4, ...arr];
console.log(newArr);
// console.log(...newArr);
console.log('-------------------------------------------------------------------');
const restaurant = {
  name: 'nhà hàng Gà chạy bộ',
  location: 'Nguyễn Khánh Toàn - Quan Hoa - Cầu giấy',
  categories: ['Món mặn', 'Món chay', 'Giải khát', 'Cafe'],
  startMenu: ['CockTail', 'Sâm panh', 'Nước mía'],
  mainMenu: ['Gà rang muối', 'Gà sào sả ớt', 'Gà nướng muối ớt', 'Gà tần'],
  openingHours: {
    thu: {
      open: 6,
      close: 17
    },
    fri: {
      open: 7,
      close: 18
    },
    sat: {
      open: 8,
      close: 19
    }
  },
  orderGatan: function(ck1, ck2, ck3) {
    console.log(`Đây là món gà tần yêu thích của bạn với ${ck1}, ${ck2}, ${ck3}`)
  }
};
const newMenu = [...restaurant.mainMenu, 'Gà bọc đất sét']; // add menu
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];//copy array
//Joint 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.startMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets. Not objects
const str = 'Linh';
const letters = [...str, ' ', 'Đ', 'o', 'a', 'n'];
console.log(letters);

const topping = [
  prompt("Thưởng thức món gà tần với Topping 1:"),
  prompt('Topping 2:'),
  prompt('Topping 3:')
]
// console.log(topping);
restaurant.orderGatan(topping[0], topping[1], topping[2]);// :^(
restaurant.orderGatan(...topping);// :^)

const  newRestaurant = {foundedIn: 2000, ...restaurant, founder: 'Nguyễn Văn A'};
newRestaurant.startMenu.push('trà Chanh');
console.log(newRestaurant)