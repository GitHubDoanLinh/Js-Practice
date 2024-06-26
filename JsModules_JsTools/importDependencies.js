import cloneDeep from './node_modules/lodash-es/cloneDeep';
const state = {
  cart: [
    {product: 'bread', quantity: 50},
    {product: 'grape', quantity: 500},
    {product: 'milk', quantity: 100}
  ],
  user: {loggedIn: true},
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);