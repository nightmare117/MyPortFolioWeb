<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/nav.vue'
</script>

<template>

  <div>
    <Nav />
    <div>
      <RouterView />
    </div>
  </div>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
</template>

<style>
body{
  margin: 0% !important;
}
</style>
