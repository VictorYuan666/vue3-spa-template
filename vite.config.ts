import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import ViteComponents, { AntDesignVueResolver } from "vite-plugin-components";

export default defineConfig({
  server: {
    port: 4500, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   "/api": {
    //     target: "http://xxx.xxx.xxx.xxx:x000",
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace("/api/", "/"),
    //   },
    // },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ],
});
