<template>
  <NavBar v-if="userStore.authenticated"></NavBar>
  <router-view/>
</template>

<style>
#app {
  font-family: 'Nunito';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
}

@font-face {
  font-family: 'Nunito';
  src: url('~@/assets/nunito.ttf');
}
</style>

<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { useUserStore } from './stores/userStore';
const userStore = useUserStore();
</script>