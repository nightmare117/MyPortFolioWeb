<script setup>
import image from '../assets/homeImg.png'
</script>

<template>
    <div class="homeMain">
        <div class="homeSection1">
            <img src="../assets/homeImg.png" />
        </div>
        <div class="homeBody">
            <div class="homeBodyCore">
                <p>Creative individual with passion for learning new technologies and strong interest in software design
and development.</p>
            </div>
        </div>
    </div>
</template>

<style>
    .homeBodyCore{
        text-align: center;
        width: 50%;
        color: rgba(255, 255, 255, .9);
        font-size: 20px;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        /* font-family:'Times New Roman', Times, serif ; */
        /* font-weight: bold; */
        /* backdrop-filter: blur(10px); */
    }
.homeBody{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.homeSection1 img{
    width: 100%;
    /* margin-left: 5%; */
}

.homeMain{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc( 100vh - 70px);
    background: rgb(250, 143, 61);
}

</style>
