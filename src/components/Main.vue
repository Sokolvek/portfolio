<template>
  <section>
    <h2 class="light-aqua" felimotion="appearance">Developer</h2>
    <div class="container main-info" >
      <div class="card" felimotion="appearance">
        <div class="card-header" >
          <img src="@/assets/imgs/profile.svg" alt="" />
          <h3>Вадим</h3>
          <p>Front-End developer</p>
        </div>
        <ul>
          <li>
            <img src="@/assets/imgs/mail-icon.svg" alt="" />
            <p>@DrainEjnoyer</p>
          </li>
          <li>
            <img src="@/assets/imgs/gps-icon.svg" alt="" />
            <p>Россия</p>
          </li>
          <li>
            <img src="@/assets/imgs/work-icon.svg" alt="" />
            <p>Фулл-тайм / Фриланс   </p>
          </li>
        </ul>
        <div class="skill-chips">
          <span>HTML</span>
          <span>CSS</span>
          <span>JS</span>
          <span>VUE   </span>
        </div>
        <!-- <button>Download CV</button> -->
      </div>
      <div felimotion="bottom">
        <span class="light-aqua fz-14 left-20">&lt;h1&gt;</span>
        <h1>
          Привет<br />
          Я <strong class="aqua">Вадим</strong>, <br />
          Front-End Developer
        </h1>
        <span class="light-aqua fz-14 left-20 mb-40">&lt;/h1&gt;<br /></span>
        <span class="light-aqua fz-14 left-20">&lt;p&gt;</span>
        <p>
          Я помогаю бизнесу расти, создавая потрясающий веб-опыт. Если вы<br />
          ищете разработчика, которому нравится доводить дело до конца, то я вам помогу
        </p>
        <span class="light-aqua fz-14 left-20">&lt;/p&gt;<br /></span>
        <!-- <router-link to="/"> Let's Talk </router-link> -->
      </div>

      <div class="experience-block" felimotion="top">
        <div >
          <h3 class="aqua">4</h3>
          <p>
            языка<br />
            программирования
          </p>
        </div>
        <div>
          <h3 class="aqua">6</h3>
          <p>инструментов<br/> разработки</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #292F36;
  overflow: hidden;
}

.container{
  overflow: hidden;
}

h2 {
  text-align: center;
  font-size: 80px;
  font-weight: normal;
  padding: 50px 0;
}

h1 {
  font-size: 48px;
}

.main-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 250px;
}

button{
    width: 75%;
    color: black;
    padding: 12px 32px;
    border-radius: 32px;
    border: none;
}

.skill-chips {
  display: flex;
  gap: 10px;
}
.skill-chips > span {
  font-size: 14px;
  color: black;
  padding: 4px 8px;
  border-radius: 10px;
  background-color: #17F290;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
  border: 4px solid white;
  border-radius: 160px 0px 160px 0px;
  padding: 38px;
}

.card-header{
    text-align: center;
}

.card > ul:nth-child(2) > li {
  padding: 7px 0;
}

ul > li {
  display: flex;
  gap: 15px;
}

.experience-block{
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: fit-content;
  background-color: #1A1E23;
  padding: 48px 32px;
  border-radius: 80px;
}

.experience-block > div{
  display: flex;
  align-items: center;
  gap: 16px;
}

.experience-block > div > h3{
  font-size: 48px;
}

ul > li > img {
  object-fit: scale-down;
}

@media (max-width: 1280px) {
  div.container:nth-child(2) {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    
  }
  .card {
    grid-row: 1;
    width: fit-content;
    margin-left: 19%;
  }
  div.container:nth-child(2) > div:nth-child(2) {
    grid-row: 2;
  }
  .experience-block {
    grid-row: 2;
  }
}

@media (max-width: 768px) {
  div.container:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    
  }

  

  .main-info{
    padding-bottom: 50px;
  }

  h2{
    font-size: 50px;
  }

  .card{
    margin: 0;
  }
}
</style>
