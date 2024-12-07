<template>
  <div>
    <h3>Your Cart</h3>
    <p>Total items: {{ cartItemCount }}</p>
    <router-link to="/checkout" v-if="cartItemCount > 0">Proceed to Checkout</router-link>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
    cartItemCount() {
      return this.cart.length;
    }
  }
};
</script>

<style scoped>
/* Styling for the cart summary */
</style>
