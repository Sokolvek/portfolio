<template>
    <section>
        <Mouse felimotion="bottom"/>
        <h3 class="aqua" felimotion="appearance">Работы</h3>
        <p felimotion="appearance">Мне было приятно работать над этими проектами</p>
        <WorksSlider felimotion="appearance" />
    </section>    
</template>

<script setup>

import WorksSlider from './WorksSlider.vue';
import Mouse from "./Mouse.vue"
</script>

<style scoped>
section{
    background: #292F36;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h3{
    font-size: 64px;
    font-weight: normal;
    margin-bottom: 5px;
}

p{
    margin-bottom: 50px;
}



</style>