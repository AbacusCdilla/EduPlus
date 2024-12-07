import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addToCart(lesson) {
      // Check if the lesson is already in the cart
      const existingLesson = this.cartItems.find(item => item.id === lesson.id);
      if (!existingLesson) {
        this.cartItems.push(lesson);
      } else {
        // Optionally, increase quantity if it's the same lesson
        existingLesson.quantity = (existingLesson.quantity || 0) + 1;
      }
    },
    removeFromCart(lessonId) {
      // Remove the lesson from the cart
      this.cartItems = this.cartItems.filter(item => item.id !== lessonId);
    },
    clearCart() {
      // Clears the cart
      this.cartItems = [];
    },
  },
});
