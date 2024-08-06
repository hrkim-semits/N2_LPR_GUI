import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    plugins: [vue()],
    build: {
        sourcemap: true,
    },
    publicDir: 'public',
    resolve: {
        // alias: [{ find: '@', replacement: '/src' }],
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "@/assets/styles/reset.scss";
                    @import "@/assets/styles/base.scss";
                    @import "@/assets/styles/theme.scss";
                    @import "@/assets/styles/colors.scss";
                    @import "@/assets/styles/mixins.scss";
                    `,
            },
        },
    },
});



// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// import ArcoVuePlugin from '@arco-plugins/vite-vue';
// import Components from 'unplugin-vue-components/vite';
// import AutoImport from 'unplugin-auto-import/vite';
// import { ArcoResolver } from 'unplugin-vue-components/resolvers';
// import path from 'path';

// export default defineConfig({
//     plugins: [
//         vue(),
//         ArcoVuePlugin(), // Arco Design 플러그인 추가
//         Components({
//         resolvers: [ArcoResolver()], // Arco Design 컴포넌트 리졸버 추가
//         }),
//         AutoImport({
//         imports: [
//             'vue',
//             'vue-router',
//             '@vueuse/core', // 자주 사용하는 API 추가
//         ],
//         dts: 'src/auto-imports.d.ts', // 자동 생성되는 타입 정의 파일의 위치
//         }),
//     ],
//     resolve: {
//         alias: [
//             { find: '@', replacement: path.resolve(__dirname, 'src') },
//         ],
//     },
//     css: {
//         preprocessorOptions: {
//             scss: {
//                 additionalData: '@import "@/assets/styles/_reset.scss";',
//             },
//         },
//     },
// });
