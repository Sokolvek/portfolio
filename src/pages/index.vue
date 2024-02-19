<template>
    <div>
        <!-- <ASide /> -->
        <Main />
        <AboutMe />
        <Skills />
        <Works />
    </div>
</template>


<script setup>
import Works from '../components/Works.vue';
import Main from '@/components/Main.vue';
import AboutMe from '@/components/AboutMe.vue';
import Skills from '@/components/Skills.vue';
import ASide from '@/components/ASide.vue'
import { onMounted } from 'vue';

function felimationHandler() {
  const sections = document.querySelectorAll("section");
  const animsList = new Map([
    ["top", "felimotion-top"],
    ["bottom", "felimotion-bottom"],
    ["left", "felimotion-left"],
    ["right", "felimotion-right"],
    ["appearance", "felimotion-appearance"]
    // ["scale", scaleAnim],
    // ["top", "felimotion-top"]
  ]);
  const elements = document.querySelectorAll("section")
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const target = entry.target;
      target.style.position = "relative";

      if (entry.isIntersecting) {
        
        target.querySelectorAll("[felimotion]").forEach((item) => {
        //   console.log(item);
          // resetStyle(item);
          item.classList.add("felimotion-reset")
        });
      } else {
        target.querySelectorAll("[felimotion]").forEach((item) => {
          if (item.getAttribute("felimotion")[0] == "{") {
            // animsList.get(JSON.parse(item.getAttribute("felimotion")).anim)(
            //   item
            // );
          }else{
            // animsList.get(item.getAttribute("felimotion"))(item)
            if(item.classList.contains("felimotion-reset")){
              item.classList.remove("felimotion-reset")
            }
            item.classList.add(animsList.get(item.getAttribute("felimotion")))
          }
        });
      }
    });
  });

  sections.forEach((section) => {
    observer.observe(section);
    const elementsWithAttr = section.querySelectorAll("[felimotion]");
    elementsWithAttr.forEach((item) => {
      if (item.getAttribute("felimotion")[0] == "{") {
        // console.log("dwad ");
      } else {
        // animsList.get(item.attributes.felimotion.value)(item);
        item.classList.add(animsList.get(item.getAttribute("felimotion")))
      }
    });
  });

  function positionController(el, posDirection) {
    const style = el.style;
    style.opacity = "0"
    if (posDirection == "top" || posDirection == "bottom") {
      style.transform = "translateY(100%)";
    } else {
      style.transform = "translateX(100%)";
    }
  }

  function topAnim(el) {
    el.style.transition = "1s ease";
    requestAnimationFrame(() => {
      positionController(el, "top");
    });
  }

  function bottomAnim(el) {
    el.style.transition = "2s";
    requestAnimationFrame(() => {
      positionController(el, "bottom");
    });
  }

  function leftAnim(el) {
    el.style.transition = "2s";
    requestAnimationFrame(() => {
      positionController(el, "left");
    });
  }

  function rightAnim(el) {
    el.style.transition = "1s ease";
    requestAnimationFrame(() => {
      positionController(el, "right");
    });
  }

  function scaleAnim(el) {
    const style = el.style;
    style.transition = "2s";
    requestAnimationFrame(() => {
      style.transform = "scale(0.1)";
    });
  }

  function resetStyle(el) {
    const style = el.style;
    style.opacity = "1"
    // console.log(parseInt(style.left));
    if (parseInt(style.left) > 0) {
      style.left = "0px";
    }
    if (parseInt(style.right) > 0) {
      style.right = "0px";
    }
    if (parseInt(style.bottom) > 0) {
      style.bottom = "0px";
    }
    if (parseInt(style.top) > 0) {
      style.top = "0px";
    }
    requestAnimationFrame(() => {
      style.transform = "scale(1)";
    });
  }
}

onMounted(() => {
    felimationHandler()
})
</script>