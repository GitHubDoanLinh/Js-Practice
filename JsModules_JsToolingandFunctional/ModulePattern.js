const shoppingCart2 = (function() {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 234;
  const totalQuantity = 23;

  const addToCart = function(product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart, shipping cost is ${shippingCost}`);
  };

  const orderStock = function(product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity
  };
})();

shoppingCart2.addToCart('apples', 5);
shoppingCart2.addToCart('pizza', 10);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);// ?