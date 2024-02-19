<template>
  <aside>
    <div v-for="(section,i) in 3" :key="i" :class="{'active' : sections[i].visible == true}">
      {{ section }}
    </div>
  </aside>
</template>

<script setup>
import { onMounted, ref } from "vue";

let sections = ref([
  {
    id:1,
    element: null,
    position: 0,
    visible: false,
  },
  {
    id:2,
    element: null,
    position: 0,
    visible: false,
  },
  {
    id:3,
    element: null,
    position: 0,
    visible: false,
  },
]);
onMounted(() => {
  document.addEventListener("scroll", ()=> {

    const elements = document.querySelectorAll("section");
    let intersectedElements = []
    elements.forEach((item, i) => {
      sections.value[i].element = item
      const rect = item.getBoundingClientRect();
      const visibleHeight =
      Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      sections.value[i]["position"] = visibleHeight;
      if (sections.value[i]["position"] > 0) {
        intersectedElements.push({element:item, id:i+1})
      }
    });
    sections.value.forEach((item, i) =>{
      console.log(intersectedElements)
        if(intersectedElements > 1){
          // item["visible"] = true
        }else{
          if(intersectedElements[0].id == item.id){
              item["visible"] = true
          }
        }
    })
    console.log(sections.value[0].element === sections.value[0].element)
    intersectedElements = 0
  })


});
</script>

<style scoped>
aside {
  position: fixed;
  z-index: 5;
}

.active {
  color: red;
}
</style>
