<template>
  <section class="background">
    <div class="container">
      <Mouse felimotion="bottom"/>
      <div class="about-me" >
        <div class="about-me-inner">
          <h3 felimotion="bottom">Обо мне</h3>
          <article felimotion="appearance">
            <span class="light-aqua fz-14">&lt;p&gt; <br /><br /></span>
            <p>
              <strong class="aqua">Привет!</strong><br /><br />
              Меня зовут Вадим, и я специализируюсь на веб-разработке,
использующей HTML, CSS, JS, REACT и т.д.<br /><br />
Я высокомотивированный человек и вечный оптимист, посвятивший себя
написанию ясного, краткого, надежного кода, который работает. Стремлюсь
никогда не прекращать учиться и совершенствоваться.<br /><br />
Когда я не занимаюсь программированием, читаю или занимаюсь
каким-нибудь новым практическим художественным проектом.<br /><br />
Мне нравится подвергать сомнению мою точку зрения и систему убеждений, чтобы я мог взглянуть на мир новыми глазами.
            </p>
            <span class="light-aqua fz-14">&lt;/p&gt;</span>
          </article>
        </div>
        <img src="@/assets/imgs/about-me.png" alt="" felimotion="right" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Mouse from "@/components/Mouse.vue";
</script>

<style scoped>

section{
  overflow: hidden;
}
.background {
  position: relative;
  background-color: #1a1e23;
  z-index: 1;
}

.background::before {
  content: "";
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/imgs/about-me-background.png");
  opacity: 0.1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.container {
  padding-bottom: 200px;
}

.about-me {
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
}

.about-me > div:nth-child(1) {
  width: 60%;
}

.about-me-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

img {
  position: relative;
  z-index: 2;
}

h3 {
  display: inline-block;
  position: relative;
  width: fit-content;
  font-size: 72px;
  font-weight: normal;
  border: 4px solid #17F290;
  border-radius: 40px 0px 40px 0px;
  padding: 16px 40px 16px 40px;
  background-color: #292f36;
  z-index: 5;
}

article {
  position: relative;
  z-index: 5;
  background-color: #292f36;
  border-radius: 40px;
  padding: 24px 40px 24px 40px;
}

article > p > strong {
  font-size: 24px;
  font-weight: normal;
}

@media (max-width: 1280px) {
  .about-me {
    flex-direction: column;
    align-items: center;
    gap: 100px;
  }

  .about-me-inner {
    gap: 40px;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .about-me > div:nth-child(1) {
    width: auto;
  }

  .about-me > img:nth-child(2) {
width: 100%;
}

  .about-me-inner > h3:nth-child(1) {
font-size: 40px;
}
}
</style>
