<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-26 07:58:57
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2023-03-26 20:21:34
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
                    <h1 style="display:flex; justify-content:center; align-items:center;">成立宗旨</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <v-card class="mx-auto"  prepend-icon="mdi-lightbulb-on" title="普及資安知識" style="font-family: Helvetica;">
                        <v-card-text style="font-size: large;">
                            <h4>    
                            在數位時代，資安已成為全球議題，推廣資安概念尤其重要。透過各種管道，如講座、社群媒體、網站等，讓更多人了解資安的重要性，並學習如何保護自己和他人的資訊安全。讓資安意識普及，是建立更安全的數位世界的必要一步。
                            </h4>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card class="mx-auto"  prepend-icon="mdi-book" title="參加資安比賽、證照考試" style="font-family: Helvetica;">
                        <v-card-text style="font-size: large;">
                            <h4>
                            在今天的數位時代，資安已成為重要的議題。若想要了解如何保護自己和他人的資訊安全，可以透過線上課程、書籍、網站等方式，學習如何建立強固的密碼、避免駭客攻擊、以及保護個人隱私等重要的資安知識。
                            </h4>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card class="mx-auto"  prepend-icon="mdi-web" title="培養資安人才" style="font-family: Helvetica;">
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
                <v-col cols="2"></v-col>
                <v-col cols="4">
                    <v-card class="mx-auto"  prepend-icon="mdi-text" title="每周社課" style="font-family: Helvetica;">
                        <v-card-text style="font-size: large;">
                            <h4>
                            每周社課，週四晚上 19:00 ~ 21:00，目前由社團幹部或是聯合校外資安專家主講，講題包含資安基礎、資安實務、資安工具等，讓學生了解資安的重要性，並學習如何保護自己和他人的資訊安全。
                            </h4>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card class="mx-auto"  prepend-icon="mdi-text" title="講座＆工作坊" style="font-family: Helvetica;">
                        <v-card-text style="font-size: large;">
                        <h4>
                            不定期舉行講座或工作坊。講座或工作坊的講師會邀請校外資安專家或是資安公司的工程師，讓學生了解資安的實際應用。
                        </h4>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="2"></v-col>
            </v-row>
            <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="4">
                    <v-card class="mx-auto"  prepend-icon="mdi-text" title="比賽&證照" style="font-family: Helvetica;">
                        <v-card-text style="font-size: large;">
                            <h4>
                                當有資安比賽或證照考試時，會舉辦相關的培訓課程，讓學生可以成功考取證照或是參加比賽。
                            </h4>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card class="mx-auto"  prepend-icon="mdi-text" title="更多活動" style="font-family: Helvetica;">
                        <v-card-text style="font-size: large;">
                            <h4>
                                想知道最近資安社有什麼活動嗎？請關注我們的粉絲專頁，我們會在上面公告最新的活動資訊。
                            </h4>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="2"></v-col>
            </v-row>
        <v-divider class="my-12"></v-divider>
        </v-container>
        <v-container>
            <v-row align="start">
                <v-col cols="2"></v-col>
                <v-col cols="4" class="mt-15 align-center">
                    <h1 >
                        加入我們
                    </h1>
                    <h3>
                        想了解更多資安知識，心動不如馬上行動 !
                    </h3>
                    <v-btn color="secondary" block class="mt-5" style="font-family: Helvetica;" rounded="xl">
                        <a href="https://www.facebook.com/nttuhack/" target="_blank" style="color: white;" class="text-decoration-none">
                            加入我們
                        </a>
                    </v-btn>
                </v-col>
                <v-col cols="2"></v-col>
                <v-col cols="4">
                    <v-img src="../assets/jigsaw.png" max-width="65%"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
  

<script setup>
import { ref } from 'vue'

const More_color = ref('secondary')
</script>