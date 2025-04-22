<script setup>
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

const route = useRoute();
const slug = route.params.slug;

// Fetch data dari Firebase Realtime Database berdasarkan slug
const { data, error } = await useAsyncData("article-blog", () =>
  $fetch(
    `https://loomora-cdb63-default-rtdb.firebaseio.com/articles/${slug}.json`
  )
);

// Jika data belum ada, gunakan objek kosong agar tidak error
const article = computed(() => data.value || { content: [] });

const banner = ref({
  judul: "WAWASAN & INSPIRASI INTERIOR",
});

// SEO & Schema bisa diaktifkan nanti jika data tersedia
// useSeoMeta(article.value.seoMeta);
// useSchemaOrg(article.value.schemaArticle);
</script>

<template>
  <Top :operandata="banner" />
  <breadcrumbs data-aos="fade-down" data-aos-duration="800" />

  <a-container data-aos="fade-up">
    <a-row>
      <a-col
        class="col-12 col-sm-6 col-md-8"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div v-if="article && article.content">
          <div
            v-for="(block, index) in article.content"
            :key="index"
            class="mb-4"
            data-aos="fade-up"
            data-aos-delay="index * 100"
          >
            <template v-if="block.type === 'h1'">
              <h1 class="fs-2 fw-bold mb-2">{{ block.text }}</h1>
              <div class="a-divider mb-3" />
            </template>

            <template v-else-if="block.type === 'h2'">
              <h2 class="fs-4 fw-semibold mb-2">{{ block.text }}</h2>
              <div class="a-divider mb-3" />
            </template>

            <template v-else-if="block.type === 'p'">
              <p class="mb-3 lh-base text-justify">{{ block.text }}</p>
            </template>

            <template v-else-if="block.type === 'ul'">
              <ul class="ps-3 mb-3">
                <li v-for="(item, idx) in block.items" :key="idx" class="mb-2">
                  <strong>{{ item.description }}</strong
                  ><br />
                  {{ item.title }}
                </li>
              </ul>
            </template>

            <template v-else-if="block.type === 'ol'">
              <ol class="ps-3 mb-3">
                <li v-for="(item, idx) in block.items" :key="idx" class="mb-2">
                  <strong>{{ item.description }}</strong
                  ><br />
                  {{ item.title }}
                </li>
              </ol>
            </template>

            <template v-else-if="block.type === 'img'">
              <div class="text-center my-4 img-wrapper" data-aos="zoom-in">
                <img
                  :src="block.url"
                  :alt="block.alt"
                  class="img-fluid rounded img-fixed"
                />
              </div>
            </template>
          </div>
        </div>
      </a-col>

      <a-col
        class="col-12 col-sm-6 col-md-4"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <LazyHydration when-visible>
          <sidebar class="ml-5" />
        </LazyHydration>
      </a-col>
    </a-row>
  </a-container>
</template>

<style scoped>
.a-divider {
  width: 40%;
  height: 3px;
  background-color: #d2ad37;
}

/* wrapper dengan ukuran fixed */
.img-wrapper {
  width: 100%; /* atau max-width: 800px; */
  height: 400px; /* tentukan tinggi yang kamu mau */
  overflow: hidden; /* sembunyikan bagian yang melebihi container */
  margin: 0 auto; /* center jika perlu */
}

/* img di-stretch ke ukuran penuh container, tapi menjaga proporsi via crop */
.img-fixed {
  width: 100%;
  height: 100%;
  object-fit: cover; /* crop gambar agar mengisi penuh container */
}
</style>
