<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-26 07:58:57
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2023-03-26 15:18:37
 * @FilePath: \vuetify-project\src\views\About.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <v-app>
        <v-container>
        <v-row style="align-items: center;" class="mt-10">
            <v-col cols="4">
            <v-card>
                <v-img
                src="../assets/SKILL.png"
                height="350px"
                ></v-img>
            </v-card>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="7">
            <v-container>
                <v-row>
                <v-col cols="12">
                    <h1 class="display-1">關於 NTTU HACK</h1>
                </v-col>
                <v-col cols="12">
                    <h2 class="display-2">NTTU HACK 是一個由國立臺東大學資訊工程學系學生所組成的社團，致力於推廣資訊科技與資訊安全的應用，並且提供學生一個互相交流與學習的平台。</h2>
                </v-col>
                </v-row>
                </v-container>
            </v-col>
        </v-row>
        </v-container>
        <v-divider class="my-12"></v-divider>
        <v-container>
            <v-row>
                <v-col cols="12" >
                    <h1 style="display:flex; justify-content:center; align-items:center;">我們的目標</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <v-card class="mx-auto"  prepend-icon="mdi-lightbulb-on" title="推廣資安概念" style="font-family: Helvetica;">
                        <v-card-text style="font-size: large;">
                            <h4>    
                            在數位時代，資安已成為全球議題，推廣資安概念尤其重要。透過各種管道，如講座、社群媒體、網站等，讓更多人了解資安的重要性，並學習如何保護自己和他人的資訊安全。讓資安意識普及，是建立更安全的數位世界的必要一步。
                            </h4>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card class="mx-auto"  prepend-icon="mdi-book" title="提供資安相關的學習資源" style="font-family: Helvetica;">
                        <v-card-text style="font-size: large;">
                            <h4>
                            在今天的數位時代，資安已成為重要的議題。若想要了解如何保護自己和他人的資訊安全，可以透過線上課程、書籍、網站等方式，學習如何建立強固的密碼、避免駭客攻擊、以及保護個人隱私等重要的資安知識。
                            </h4>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card class="mx-auto"  prepend-icon="mdi-web" title="建立現代校園網路安全" style="font-family: Helvetica;">
                        <v-card-text style="font-size: large;">
                            <h4>
                            現代校園網路安全是學校和學生都需要關注的問題。學校應該建立完善的資安政策，並提供相關訓練，讓教職員工和學生了解網路安全的重要性。同時，學生也應該注意個人隱私和資訊安全，例如不隨意公開個人資料，避免點擊不明連結。
                            </h4>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-divider class="my-12"></v-divider>
        <v-container>
            <v-row>
                <v-col cols="12" >
                    <h1 style="display:flex; justify-content:center; align-items:center;">NTTU HACK會做什麼？</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <v-card class="mx-auto"  prepend-icon="mdi-lightbulb-on" title="推廣資安概念" style="font-family: Helvetica;">
                        <v-card-text style="font-size: large;">
                            在數位時代，資安已成為全球議題，推廣資安概念尤其重要。透過各種管道，如講座、社群媒體、網站等，讓更多人了解資安的重要性，並學習如何保護自己和他人的資訊安全。讓資安意識普及，是建立更安全的數位世界的必要一步。
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card class="mx-auto"  prepend-icon="mdi-book" title="提供資安相關的學習資源" style="font-family: Helvetica;">
                        <v-card-text style="font-size: large;">
                            在今天的數位時代，資安已成為重要的議題。若想要了解如何保護自己和他人的資訊安全，可以透過線上課程、書籍、網站等方式，學習如何建立強固的密碼、避免駭客攻擊、以及保護個人隱私等重要的資安知識。
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card class="mx-auto"  prepend-icon="mdi-web" title="建立現代校園網路安全" style="font-family: Helvetica;">
                        <v-card-text style="font-size: large;">
                            現代校園網路安全是學校和學生都需要關注的問題。學校應該建立完善的資安政策，並提供相關訓練，讓教職員工和學生了解網路安全的重要性。同時，學生也應該注意個人隱私和資訊安全，例如不隨意公開個人資料，避免點擊不明連結。
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
  

<script setup>
</script>