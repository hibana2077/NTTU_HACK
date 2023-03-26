<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-26 07:30:12
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2023-03-26 12:23:43
 * @FilePath: \vuetify-project\src\layouts\default\AppBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <v-app-bar :color="pr">
    
      <v-app-bar-title>
        
        <v-icon icon="mdi-redhat" />
  
        東大資安社 部落格
        
      </v-app-bar-title>
      <v-spacer></v-spacer>
        <v-btn icon>
            <RouterLink to="/" class="text-decoration-none" style="color: inherit;">
                <v-icon icon="mdi-home" />
            </RouterLink>
        </v-btn>
        <v-btn icon>
            <v-icon icon="mdi-account" />
        </v-btn>
        <v-btn icon>
            <v-icon icon="mdi-bell" />
        </v-btn>
    </v-app-bar>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue'
  
  const pr = ref('primary')
</script>
  