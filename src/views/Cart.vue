<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <div v-if="cartItems.length === 0">Your cart is empty.</div>
    <div v-for="item in cartItems" :key="item.id" class="cart-item">
      <p>{{ item.topic }} - {{ item.price }} USD</p>
      <button @click="removeFromCart(item.id)">Remove</button>
    </div>
    <div v-if="cartItems.length > 0">
      <button @click="clearCart" class="clear-cart-btn">Clear Cart</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore';

export default {
  name: 'Cart',
  computed: {
    cartItems() {
      const cart = useCartStore();
      return cart.cartItems;
    },
  },
  methods: {
    removeFromCart(lessonId) {
      const cart = useCartStore();
      cart.removeFromCart(lessonId);
    },
    clearCart() {
      const cart = useCartStore();
      cart.clearCart();
    },
  },
}
</script>

<style scoped>
.cart {
  padding: 20px;
}

.cart-item {
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}

.clear-cart-btn {
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.clear-cart-btn:hover {
  background-color: #d32f2f;
}
</style>
