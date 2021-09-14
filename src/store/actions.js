export default {
 addProductToCart(context, payload) {
  context.commit("addProduct", payload);
 },
 removeProductFromCart(context, payload) {
  context.commit("removeProduct", payload);
 },
 login(context) {
  context.commit("setAuth", { isAuth: true });
 },
 logout(context) {
  context.commit("setAuth", { isAuth: false });
 },
}