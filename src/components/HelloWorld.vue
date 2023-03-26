<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-26 07:30:12
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2023-03-26 11:41:48
 * @FilePath: \vuetify-project\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <div ref="container">
      <v-img
        contain
        height="300"
        src="@/assets/logo.svg"
      />
      
      <div class="text-body-12 font-weight-light">歡迎來到</div>

      <h1 class="text-h2 font-weight-bold">東大資安社</h1>

      <h2 class="text-h5 font-weight-light">National Taitung University HACK</h2>

      <h3 class="text-h6 font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate rerum, quia maiores earum aliquid illum nulla dolorum nostrum magnam praesentium, sint temporibus veniam. Impedit iure sint hic? Exercitationem, quae?</h3>
      
      </div>

      <div class="py-14" />

      <div ref="btn_animate">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://discord.gg/QadEu3uAV8"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
            rounded="xl"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16" style="margin-right: 10px;">
            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
          </svg>

            Discord
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
            id="hover"
          >
          <router-link to="/blog" class="text-decoration-none" style="color: inherit;">
            <v-icon
              icon="mdi-post"
              size="large"
              start
            />

            Blog
          </router-link>
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://instagram.com/nttu_hack?igshid=YmMyMTA2M2Y="
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
            rounded="xl"
          >
            <v-icon
              icon="mdi-instagram"
              size="large"
              start
            />

            Instagram
          </v-btn>
        </v-col>
      </v-row>
    </div>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const container = ref(null);
const btn_animate = ref(null);

onMounted(() => {
  gsap.from(container.value, {
    delay: 0.5,
    duration: 1,
    y: '-100',
    x: '-100',
    autoAlpha: 0,
    ease: 'back.out(1.7)',
  });
  gsap.from(btn_animate.value, {
    delay: 0.5,
    duration: 1,
    y: '100',
    x: '100',
    autoAlpha: 0,
    ease: 'back.out(1.7)',
  });
});

</script>
