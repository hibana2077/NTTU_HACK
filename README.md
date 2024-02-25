<!--
 * @Author: hibana2077 hibana2077@gmail.com
 * @Date: 2024-02-25 08:35:48
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2024-02-25 17:58:27
 * @FilePath: \NTTU_HACK\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# NTTU HACK

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Astro](https://img.shields.io/badge/Astro-000000?style=for-the-badge&logo=astro&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)

## Generate a static site

```bash
cd web
npm run build
```

## move dist to public

```bash
mv web/dist/* public
```

## Deploy to firebase

```bash
firebase init hosting
firebase deploy --only hosting
```