export default {
 getCartList(state) {
  console.log(state.cart);
  return state.cart;
 },
 getProductList(state) {
  console.log(state.products);
  return state.products;
 },
 isLoggedIn(state) {
  return state.isLoggedIn;
 },
 productCartIndex(id, state) {
  return state.cart.items.findIndex(
   (item) => item.productId === id
  );
 }
}