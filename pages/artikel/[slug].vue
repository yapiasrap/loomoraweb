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
      <div class="col-12 col-md-8 col-sm-12">
        <breadcrumbs style="margin-left: -4%" />
        <!-- Tampilkan konten jika sudah ada -->
        <div class="container mt-2" v-if="article && article.content">
          <div v-for="(block, index) in article.content" :key="index">
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
                  <strong>{{ item.description }}</strong><br />
                  {{ item.title }}
                </li>
              </ul>
            </template>

            <template v-else-if="block.type === 'ol'">
              <ol>
                <li v-for="(item, idx) in block.items" :key="idx">
                  <strong>{{ item.description }}</strong><br />
                  {{ item.title }}
                </li>
              </ol>
            </template>

            <template v-else-if="block.type === 'img'">
              <img
                :src="block.url"
                :alt="block.alt"
                style="width: 100%; height: auto"
              />
            </template>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 col-sm-12">
        <!-- Sidebar atau komponen lain bisa ditambahkan di sini -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.a-divider {
  width: 40%;
  height: 3px;
  background-color: red;
}
</style>
