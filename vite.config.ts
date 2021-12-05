import { UserConfigExport, defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import html from 'vite-plugin-html';
import vue from '@vitejs/plugin-vue';

import { resolve } from 'path';
import pkg from './package.json';

export default (): UserConfigExport => defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
    vue(),
    vueJsx(),
    html({
      inject: {
        data: {
          title: pkg.name,
        },
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
      },
    },
  },
});
