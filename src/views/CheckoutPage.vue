<template>
  <form @submit.prevent="submitOrder">
    <div>
      <label>First Name:</label>
      <input v-model="order.firstName" required />
    </div>
    <div>
      <label>Last Name:</label>
      <input v-model="order.lastName" required />
    </div>
    <div>
      <label>Phone Number:</label>
      <input v-model="order.phone" type="text" required />
    </div>
    <button type="submit">Submit Order</button>
  </form>

  <div v-if="orderSubmitted">
    <p>Thank you for your order, {{ order.firstName }}! We will contact you at {{ order.phone }}.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        firstName: '',
        lastName: '',
        phone: '',
      },
      orderSubmitted: false,
    };
  },
  methods: {
    submitOrder() {
      // Handle the form submission, e.g., clear cart, process order
      this.$emit('order-submitted', this.order);
      this.orderSubmitted = true;
    }
  }
};
</script>

<style scoped>
.checkout {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input {
  padding: 10px;
  margin-top: 5px;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

div {
  margin-top: 20px;
}
</style>
