import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addToCart(lesson) {
      this.cartItems.push(lesson);
    },
    removeFromCart(lessonId) {
      this.cartItems = this.cartItems.filter(item => item.id !== lessonId);
    },
  },
});
