// Importing module
// import { addToCart, totalPrice as price, qtQuantity } from './ExportModule_ShoppingCart.js';
// console.log('Importing module...');
// addToCart('bread', 5);
// console.log(`totalPrice: ${price}, totalQuantity: ${qtQuantity}`);

// Importing module
console.log('Importing module...');
import * as ShoppingCart from './ExportModule_ShoppingCart.js';// import all
ShoppingCart.addToCart('bread', 5);
console.log(`totalPrice: ${ShoppingCart.totalPrice}, totalQuantity: ${ShoppingCart.qtQuantity}`);

import add from './ExportModule_ShoppingCart.js';// this is 'export default function';
add('pizza', 2);