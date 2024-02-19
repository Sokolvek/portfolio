<template>
    <section>
        <Mouse felimotion="bottom"/>
        <h3 class="aqua" felimotion="appearance">Навыки</h3>
        <p felimotion="appearance">Я стремлюсь никогда не прекращать учиться и совершенствоваться</p>
        <div class="skills" felimotion="appearance">
            <div class="skills-card">
                <img src="@/assets/imgs/pc-icon.png" alt="">
                <p>веб разработка</p>
                <span>HTML·CSS·JS·VUE</span>
            </div>
            <div class="skills-icon">
                <div>
                    <img src="@/assets/imgs/html-icon.png" alt="">
                    <p class="html-color">HTML</p>
                </div>
                <div>
                    <img src="@/assets/imgs/css-icon.png" alt="">
                    <p class="css-color">CSS</p>
                </div>
                <div>
                    <img src="@/assets/imgs/js-icon.png" alt="">
                    <p class="js-color">JS</p>
                </div>
                <div>
                    <img src="@/assets/imgs/vue-icon.svg" alt="">
                    <p class="vue-color">VUE</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Mouse from '@/components/Mouse.vue';
</script>

<style scoped>
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #292F36;
    position: relative;

}

section::before {
  content: "";
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/imgs/skills-background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  opacity: 0.1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

h3{
    font-size: 64px;
    font-weight: normal;
    margin-bottom: 5px;
}


.skills{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.skills-card{
    display: flex;
    width: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 5px;
    border-radius: 8px;
    
    /* border-left: 8px solid #28A9E0; */
    background-color: #17F290;
    padding: 16px 24px;
}

.skills-card > p,span{
    color: #292F36;
}

.skills-card > p{
    font-size: 24px;
}

.skills-icon{
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    gap: 100px;
}

.skills-icon > div > p{
    text-align: center;
    margin-top: 20px;
    font-size: 32px;
}

.html-color{
    color: #E54F26;
}

.css-color{
    color: #0C73B8;
}

.js-color{
    color: #E7A020;
}

.vue-color{
    color: #17F290;
}

@media (max-width: 768px) {
    .skills-icon {
display: grid;
grid-template-columns: 1fr 1fr;
grid-auto-rows: 1fr 1fr;
}
.skills-icon > div {
display: flex;
flex-direction: column;
align-items: center;
}
h3.aqua:nth-child(2) {
font-size: 32px;
}

section > p{
    text-align: center;
}

.skills-icon > div > img{
width: 100px;
}
}

</style>