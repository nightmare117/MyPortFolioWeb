<script setup>
import { onMounted, ref } from 'vue'
import WatermelonJSON from "../assets/helloLottie.json";

// a culprit that took 2 days to identify -->
// import { fromJSON } from 'postcss';

let anim = ref();
onMounted(() => {
  // the DOM element will be assigned to the ref after initial render
  anim.value.play()
})
</script>

<template>
    <div class="nav">
        <div class="navPart1">
            <div class="navLogo">
                <lottie-animation
                :style="{height:'70px',width:'70px'}"
                :animation-data="WatermelonJSON"
                :auto-play="true"
                :loop="true"
                :speed="1"
                ref="anim"
            />
            </div>
            <!-- <div class="navLogo">

            </div> -->
        </div>
        <div class="navPart2">
            <div class="navPart2Content" :style="{display:'flex',alignItems:'center'}">
                <h7>Home</h7>
                <div class="navSpan"></div>
                <h7>About</h7>
                <div class="navSpan"></div>
                <h7>Skills</h7>
                <div class="navSpan"></div>
                <h7>Education</h7>
                <div class="navSpan"></div>
                <h7>Contact</h7>
            </div>
            <div class="navPart2Margin">

            </div>
        </div>
    </div>
</template>

<style>
.navPart2 .navPart2Content h7:hover{
    margin: 20px;
    font-weight: bold;
    cursor: pointer;
    /* color: white; */
    font-family: Arial, Helvetica, sans-serif;
}

    .navSpan{
        width: 1px;
        height: 10px;
        background: rgb(0, 0, 0);
    }
.navPart2 .navPart2Content h7{
    margin: 20px;
    /* color: white; */
    font-family: Arial, Helvetica, sans-serif;
}

.navPart2Margin{
    width: 5%;
}
.navPart2content{
    display: flex;
}
.navPart2{
    /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
    width: 92%;
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.navLogo{
    height: 70px;
    width: 70px;
    /* background: black; */
}
.navPart1{
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8%;
    height: 100%;
    background: white;
}
.nav{
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    
     /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
    display: flex;
    height: 70px;
    width: 100%;
    background: rgba(250, 143, 61, 0.014);
}
</style>