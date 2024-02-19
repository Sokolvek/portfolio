<template>
    <article>
        <!-- <button @click="prev">prev</button> -->
        <TransitionGroup tag="div" class="slider">
            <div v-for="(item, i) in sliderData" :key="i">
                <Transition name="slide-fade">
                    <a href="https://sokolvek.github.io/vue-shop-portfolio/">
                        <img src="https://cdn.discordapp.com/attachments/836649964834521101/1208988067965304863/image.png?ex=65e548e1&is=65d2d3e1&hm=3505f95295367d3a62b1da5517d9097e39891bffcd52f02c8b3581f9ce6e639b&" alt="">
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