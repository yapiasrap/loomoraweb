<script setup>
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

const route = useRoute();
const slug = route.params.slug;

// Fetch data dari Firebase Realtime Database berdasarkan slug
const { data, error } = await useAsyncData("article-blog", () =>
  $fetch(`https://loomora-cdb63-default-rtdb.firebaseio.com/articles/${slug}.json`)
);

// Jika data belum ada, gunakan objek kosong agar tidak error
const article = computed(() => data.value || { content: [] });

const banner = ref({
  judul: "DETAIL PRODUK",
});

// SEO & Schema bisa diaktifkan nanti jika data tersedia
// useSeoMeta(article.value.seoMeta);
// useSchemaOrg(article.value.schemaArticle);
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Konten Artikel -->
      <div class="col-12 col-md-8 col-sm-12 pe-md-5">
        <breadcrumbs class="mb-3 ms-n2" />

        <!-- Tampilkan konten jika sudah ada -->
        <div v-if="article && article.content">
          <div
            v-for="(block, index) in article.content"
            :key="index"
            class="mb-4"
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
                <li
                  v-for="(item, idx) in block.items"
                  :key="idx"
                  class="mb-2"
                >
                  <strong>{{ item.description }}</strong><br />
                  {{ item.title }}
                </li>
              </ul>
            </template>

            <template v-else-if="block.type === 'ol'">
              <ol class="ps-3 mb-3">
                <li
                  v-for="(item, idx) in block.items"
                  :key="idx"
                  class="mb-2"
                >
                  <strong>{{ item.description }}</strong><br />
                  {{ item.title }}
                </li>
              </ol>
            </template>

            <template v-else-if="block.type === 'img'">
              <div class="text-center my-4">
                <img
                  :src="block.url"
                  :alt="block.alt"
                  class="img-fluid rounded"
                  style="max-width: 100%; height: auto"
                />
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="col-12 col-md-4 col-sm-12 mt-4 mt-md-0">
        <!-- Tambahkan komponen sidebar di sini jika diperlukan -->
      </div>
    </div>
  </div>
</template>


<style scoped>
.a-divider {
  width: 40%;
  height: 3px;
  background-color: #D2AD37;
}
</style>
