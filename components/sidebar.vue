<script setup>
import { useWindowSize } from "@vueuse/core";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { width } = useWindowSize();
const isMobile = computed(() => width.value < 600);

function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const { data: dataproducts } = await useAsyncData(
  `products`,
  () => $fetch(`https://api.perkasaracking.co.id/data?key=products/heavy-duty`),
  { server: false, lazy: true }
);

const products = computed(() => {
  const raw = dataproducts.value?.data;
  if (!raw) return [];
  return Array.isArray(raw) ? raw : Object.values(raw);
});

const { data: articlesData } = await useAsyncData(
  `articles`,
  () => $fetch(`https://api.perkasaracking.co.id/data?key=articles`),
  { server: false, lazy: true }
);

const articles = computed(() => {
  const raw = articlesData.value?.data;
  if (!raw) return [];
  return Array.isArray(raw) ? raw : Object.values(raw);
});

const randomArticles = ref([]);
const randomProducts = ref([]);

watch(articles, () => {
  if (articles.value.length && randomArticles.value.length === 0) {
    randomArticles.value = shuffleArray(articles.value).slice(0, 4);
  }
});

watch(products, () => {
  if (products.value.length && randomProducts.value.length === 0) {
    randomProducts.value = shuffleArray(products.value).slice(0, 4);
  }
});
</script>

<template>
  <aside class="luxury-sidebar">
    <section class="sidebar-section">
      <div class="section-header">
        <h2>Artikel Terbaru</h2>
      </div>
      <ul class="article-list">
        <li
          v-for="(post, idx) in randomArticles"
          :key="idx"
          class="article-item"
        >
          <a :href="`https://blog.perkasaracking.co.id/${post.slug}`">
            <h3>{{ post.title }}</h3>
            <span class="article-date">{{
              new Date(post.published_at).toLocaleDateString("id-ID")
            }}</span>
          </a>
        </li>
      </ul>
    </section>

    <section class="sidebar-section">
      <div class="section-header">
        <h2>Produk Unggulan</h2>
      </div>
      <div class="product-stack">
        <div
          v-for="(prod, idx) in randomProducts"
          :key="idx"
          class="product-card-stack"
        >
          <img :src="prod.image" :alt="prod.title" class="product-img-stack" />
          <div class="product-info-stack">
            <a :href="prod.link" class="product-title-stack">{{
              prod.title
            }}</a>
            <p class="product-description-stack">{{ prod.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </aside>
</template>

<style scoped lang="scss">
.luxury-sidebar {
  position: sticky;
  top: 2rem;
  padding: 1.5rem;
}

.sidebar-section {
  margin-bottom: 2rem;

  .section-header {
    border-left: 4px solid #d4af37; /* Warna emas dominan */
    padding-left: 1rem;
    margin-bottom: 1rem;

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #2c2c2c;
    }
  }
}

.article-list {
  list-style: none;
  padding: 0;

  .article-item {
    margin-bottom: 1rem;
    padding: 0.75rem 1rem;
    border-left: 2px solid #e0e0e0;
    transition: all 0.3s ease;

    a {
      text-decoration: none;
      color: #333;
      display: block;

      h3 {
        font-size: 1rem;
        margin: 0 0 0.25rem;
        font-weight: 500;
      }

      .article-date {
        font-size: 0.75rem;
        color: #999;
      }
    }

    &:hover {
      border-color: #d4af37; /* Hover dengan warna emas */
      background-color: #fafafa;
    }
  }
}

.product-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.product-card-stack {
  display: flex;
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  .product-img-stack {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    flex-shrink: 0;
  }

  .product-info-stack {
    padding: 0.75rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .product-title-stack {
      font-size: 1rem;
      font-weight: 600;
      color: #d4af37; /* Warna emas pada judul produk */
      text-decoration: none;
      margin-bottom: 0.25rem;
    }

    .product-description-stack {
      font-size: 0.85rem;
      color: #666;
      line-height: 1.4;
    }
  }
}
</style>
