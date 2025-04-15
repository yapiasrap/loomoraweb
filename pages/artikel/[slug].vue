<script setup>
const route = useRoute();
const slug = route.params.slug;
const { data, error } = await useAsyncData("article-blog", () =>
  $fetch(`/api/artikel/${slug}`)
);

console.log({ slug });
// Menggunakan computed untuk memastikan item selalu memiliki nilai (default array kosong)
const article = computed(() => data.value); // Pastikan item tidak undefined

//   const { data } = await useFetch("/api/produk/cantilever/cantilever");
//   const item = data.value;
const banner = ref({
  judul: "DETAIL PRODUK",
});

useSeoMeta(article.value.data.seoMeta);
useSchemaOrg(article.value.data.schemaArticle);
</script>
<template>
  <top-detail :operandata="banner" />

  <div class="container mt-5">
    {{ artikel }}
    <div class="row">
      <div class="col-12 col-md-8 col-sm-12">
        <breadcrumbs style="margin-left: -4%" />
        <div class="container mt-2" v-if="article">
          <div v-for="(block, index) in article.data.content" :key="index">
            <template v-if="block.type === 'h1'">
              <h1>{{ block.text }}</h1>
              <div class="a-divider" />
            </template>

            <template v-else-if="block.type === 'h2'">
              <h2>{{ block.text }}</h2>
              <div class="a-divider" />
            </template>

            <template v-else-if="block.type === 'p'">
              <p>{{ block.text }}</p>
            </template>

            <template v-else-if="block.type === 'ul'">
              <ul>
                <li v-for="(item, idx) in block.items" :key="idx">
                  {{ item }}
                </li>
              </ul>
            </template>

            <template v-else-if="block.type === 'ol'">
              <ul>
                <li v-for="(item, idx) in block.items" :key="idx">
                  {{ item }}
                </li>
              </ul>
            </template>

            <template v-else-if="block.type === 'img'">
              <img
                :src="block.url"
                :alt="block.alt"
                style="width: 100%; height: auto"
              />
            </template>
          </div>

          <LazyHydration when-visible>
            <ArticleClosingText />
          </LazyHydration>

          <LazyHydration when-visible>
            <ReviewPelanggan />
          </LazyHydration>

          <LazyHydration when-visible>
            <Kalkulator />
          </LazyHydration>

          <LazyHydration when-visible>
            <ChatAi />
          </LazyHydration>
          <br />
        </div>
      </div>

      <div class="col-12 col-md-4 col-sm-12">
        <LazyHydration when-visible>
          <ArticleSidebar />
        </LazyHydration>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/article.scss"; // Import file SCSS yang sudah dibuat

.a-divider {
  width: 40%;
  height: 3px;
  background-color: red;
}
</style>
