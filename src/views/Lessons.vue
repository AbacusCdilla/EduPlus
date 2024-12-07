<template>
  <div v-for="lesson in sortedLessons" :key="lesson.id" class="lesson-item">
    <h2>{{ lesson.title }}</h2>
    <figure v-if="lesson.image">
      <img :src="lesson.image" alt="Lesson image">
    </figure>
    <p>{{ lesson.description }}</p>
    <p>Price: {{ lesson.price }} USD</p>
    <p>Available stock: {{ lesson.availableInventory - cartCount(lesson.id) }}</p>
    <button @click="addToCart(lesson)" v-if="canAddToCart(lesson)">Add to cart</button>
    <button disabled v-else>Add to cart</button>
    <span v-if="lesson.availableInventory === cartCount(lesson.id)">All out!</span>
    <span v-else-if="lesson.availableInventory - cartCount(lesson.id) < 5">
      Only {{ lesson.availableInventory - cartCount(lesson.id) }} left!
    </span>
    <span v-else>Buy now!</span>
    <div>
      <span v-for="n in lesson.rating" :key="'star-' + n">★</span>
      <span v-for="n in 5 - lesson.rating" :key="'empty-star-' + n">☆</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lessons: Array,  // Pass lessons as a prop
    cart: Array,     // Pass cart as a prop
  },
  methods: {
    addToCart(lesson) {
      this.$emit('add-to-cart', lesson.id);
    },
    canAddToCart(lesson) {
      return lesson.availableInventory > this.cartCount(lesson.id);
    },
    cartCount(id) {
      return this.cart.filter(item => item === id).length;
    }
  },
  computed: {
    sortedLessons() {
      return this.lessons.sort((a, b) => a.price - b.price);
    },
  },
};
</script>

<style scoped>
.lesson-item {
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}
</style>
