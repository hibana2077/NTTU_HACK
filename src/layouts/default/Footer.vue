<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-26 07:35:49
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2023-03-26 21:50:20
 * @FilePath: \vuetify-project\src\layouts\default\Footer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <v-footer class="bg-grey-lighten-1" :color="pr">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
          size="x-large"
        >
        <router-link :to="route[links.indexOf(link)]" class="text-decoration-none" style="color: inherit;">{{ link }}</router-link>
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
            &copy; {{ new Date().getFullYear() }} — <strong>NTTU HACK</strong>
        </v-col>
      </v-row>
    </v-footer>
</template>

<script>
import { ref } from 'vue'

export default {
    data: () => ({
      links: [
        '首頁',
        '關於我們',
        '加入我們',
        '歷屆幹部',
      ],
      route: [
        '/',
        '/about',
        '/join',
        '/team',
      ],
      pr: ref("primary"),
    }),
  }
</script>