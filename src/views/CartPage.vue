<template>
  <div class="cart">
    <h2>Your Cart</h2>

    <!-- Check if the cart is empty -->
    <div v-if="cartItems.length === 0">
      <p>Your cart is empty. <router-link to="/lessons">Browse lessons</router-link></p>
    </div>

    <!-- Display each item in the cart -->
    <div v-for="item in cartItems" :key="item.id" class="cart-item">
      <p>{{ item.topic }} - {{ item.price }} USD</p>
      <p>Quantity: {{ item.quantity || 1 }}</p>
      <button @click="removeFromCart(item.id)">Remove</button>
    </div>

    <!-- Display Clear Cart button and checkout link -->
    <div v-if="cartItems.length > 0">
      <button @click="clearCart" class="clear-cart-btn">Clear Cart</button>
      <router-link to="/checkout" class="checkout-btn">Proceed to Checkout</router-link>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore'

export default {
  name: 'CartPage',
  computed: {
    cartItems() {
      const cart = useCartStore()
      return cart.cartItems
    },
  },
  methods: {
    removeFromCart(lessonId) {
      const cart = useCartStore()
      cart.removeFromCart(lessonId)
    },
    clearCart() {
      const cart = useCartStore()
      cart.clearCart()
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

.checkout-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.checkout-btn:hover {
  background-color: #45a049;
}
</style>
