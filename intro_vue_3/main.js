const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
          this.cart.push(id)
        },
        removeOneFromCart(id) {
            const index = this.cart.findIndex(item => item.id === id);
            if (index !== -1) {
              
              if (this.cart[index].quantity > 1) {
                this.cart[index].quantity--;
              } else {
                this.cart.splice(index, 1);
              }
            }
          },
      }
});
