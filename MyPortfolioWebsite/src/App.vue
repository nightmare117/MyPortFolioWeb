<script setup>
// import * as animationData from '@/assets/helloLottie.json'
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/nav.vue'

// // const defaultOptions = {
//   animationData: animationData.default
// }
</script>

<template>
  <div class="appContainer">
    <Nav />
    <!-- <div class="qwqw">
      <lottie-animation
    :animation-data="WatermelonJSON"
    :auto-play="true"
    :loop="true"
    :speed="1"
    ref="anim"
  />
    </div> -->
    
    
    <RouterView />
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

.appContainer{
  display: flex;
  flex-direction: column;
}
body{
  margin: 0px;
}
</style>
