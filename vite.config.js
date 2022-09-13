import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'

let plugins = [
    vue(),
    vueJsx()
];

if (! process.env.CYPRESS) {
    plugins.push(laravel({
        input: ['resources/css/app.css', 'resources/js/app.js'],
        refresh: true,
    }))
}

export default defineConfig({
    plugins,
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});
