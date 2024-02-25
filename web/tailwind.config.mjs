/*
 * @Author: hibana2077 hibana2077@gmail.com
 * @Date: 2024-02-25 08:56:24
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2024-02-25 08:57:33
 * @FilePath: \NTTU_HACK\web\tailwind.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
}
