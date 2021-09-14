export default {
 addProduct(state, payload) {
  const productIndex = state.cart.items.findIndex(
   (item) => item.productId === payload.id
  );
  
  if (productIndex >= 0) {
   state.cart.items[productIndex].qty++;
  } else {
   const newItem = {
    productId: payload.id,
    title: payload.title,
    image: payload.image,
    price: payload.price,
    qty: 1,
   };
   state.cart.items.push(newItem);
  }
  state.cart.qty++;
  state.cart.total += payload.price;
 },
 removeProduct(state, payload) {
  // const productInCartIndex = this.cart.items.findIndex(
  //  (cartItem) => cartItem.productId === prodId
  // );
  const productIndex = state.cart.items.findIndex(
   (item) => item.productId === payload.id
  );
  const prodData = state.cart.items[productIndex];
  state.cart.items.splice(productIndex, 1);
  state.cart.qty -= prodData.qty;
  state.cart.total -= prodData.price * prodData.qty;
 },
 setAuth(state, payload) {
  state.isLoggedIn = payload.isAuth;
 }
}