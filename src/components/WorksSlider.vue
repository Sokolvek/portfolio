<template>
    <article>
        <!-- <button @click="prev">prev</button> -->
        <TransitionGroup tag="div" class="slider">
            <div v-for="(item, i) in sliderData" :key="i">
                <Transition name="slide-fade">
                    <a href="https://sokolvek.github.io/vue-shop-portfolio/">
                        <img :src="`../src/assets/imgs/${item.img}`" alt="">
                    </a>
                </Transition>
        </div>
        </TransitionGroup>
        <!-- <button @click="next">next</button> -->
    </article>
</template>

<script setup>

import {ref} from "vue"

const index = ref(0)

function next(){
    index.value++

}

function prev(){
    index.value--

}

const sliderData = ref([
    {
        text:"1",
        img:"work-img-1.png"
    },
    {
        text:"2"
    }
])

</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media (max-width: 1200px) {
    img{
        width: 80%;
        margin: 0 auto;
    }

    .slider > div >a{
        display: flex;
        justify-content: center;
    }
}

</style>