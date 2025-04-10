// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineLocalBusiness } from "nuxt-schema-org/schema";
import compression from "vite-plugin-compression";
import lightningcss from "vite-plugin-lightningcss";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare-pages",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

  modules: [
    "nitro-cloudflare-dev",
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@pinia/nuxt",
  ],

  css: ["~/assets/main.scss"],

  vite: {
    plugins: [
      compression({ algorithm: "gzip" }),
      compression({ algorithm: "brotliCompress" }),
      lightningcss({ browserslist: ["> 1%", "last 2 versions"], minify: true }),
    ],
    build: {
      cssMinify: "lightningcss",
      minify: "terser",
      terserOptions: {
        compress: { drop_console: true, drop_debugger: true },
        format: { comments: false },
      },
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {},
      },
    },
  },

  runtimeConfig: {
    public: {
      firebase: {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
      },
    },
  },
});
