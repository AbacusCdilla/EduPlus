<template>
  <div class="home">
    <h1>Welcome to EduPlus</h1>
    <router-link to="/lessons" class="link">View Lessons</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 3em;
  color: #4CAF50;
}

.link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2em;
  color: white;
  background-color: #4CAF50;
  text-decoration: none;
  border-radius: 5px;
}

.link:hover {
  background-color: #45a049;
}
</style>
