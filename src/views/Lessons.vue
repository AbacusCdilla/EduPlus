<template>
  <div>
    <h2>Available Lessons</h2>
    <div v-for="lesson in lessons" :key="lesson.id" class="lesson-item">
      <p>{{ lesson.topic }} - {{ lesson.price }} USD</p>
      <button @click="addToCart(lesson)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore';

export default {
  name: 'Lessons',
  data() {
    return {
      lessons: [
        { id: 1, topic: 'Math', price: 100 },
        { id: 2, topic: 'Science', price: 120 },
      ],
    };
  },
  methods: {
    addToCart(lesson) {
      const cart = useCartStore();
      cart.addToCart(lesson);
    },
  },
}
</script>

<style scoped>
.lessons {
  padding: 20px;
}

h2 {
  text-align: center;
  font-size: 2.5em;
  color: #333;
  margin-bottom: 30px;
}

.lesson-item {
  background-color: #f9f9f9;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.lesson-title {
  font-size: 1.8em;
  font-weight: bold;
  color: #333;
}

.lesson-price {
  font-size: 1.2em;
  color: #777;
}

.add-to-cart-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;
}

.add-to-cart-btn:hover {
  background-color: #45a049;
}
</style>
