<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useAsyncData } from "#app";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 600);

const greeting = computed(() => {
  const hour = new Date().getHours();
  if (hour < 12) return "Berita Pagi";
  if (hour < 15) return "Sorotan Siang";
  if (hour < 18) return "Laporan Sore";
  return "Ulasan Malam";
});

const taglines = [
  "Kumpulan artikel terkini seputar industri karpet.",
  "Analisis mendalam dan informasi terpercaya.",
  "Wawasan aktual untuk para profesional interior.",
  "Referensi terpercaya dari redaksi kami.",
  "Berita dan tren yang layak disimak.",
];

const tagline = ref("");

function pickTagline() {
  tagline.value = taglines[Math.floor(Math.random() * taglines.length)];
}

onMounted(() => {
  pickTagline();
  setInterval(pickTagline, 10000);
});

function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const { data: articlesData } = await useAsyncData(
  "articles",
  () => $fetch("https://api.perkasaracking.co.id/data?key=articles"),
  { server: false, lazy: true }
);

const articles = computed(() => {
  const raw = articlesData.value?.data;
  if (!raw) return [];
  return Array.isArray(raw) ? raw : Object.values(raw);
});

const randomArticles = ref([]);
watch(articles, () => {
  if (articles.value.length && randomArticles.value.length === 0) {
    randomArticles.value = shuffleArray(articles.value).slice(0, 9);
  }
});
</script>

<template>
  <aside class="sidebar-formal">
    <div class="sidebar-header">
      <h2>{{ greeting }}</h2>
      <p class="tagline">{{ tagline }}</p>
      <div class="header-divider"></div>
    </div>

    <ul class="articles-list">
      <li v-for="post in randomArticles" :key="post.slug" class="article-item">
        <a :href="`https://blog.perkasaracking.co.id/${post.slug}`">
          <div v-if="post.image" class="thumb">
            <img :src="post.image" :alt="post.title" />
          </div>

          <div class="info">
            <h3>{{ post.title }}</h3>
            <time>
              {{
                new Date(post.published_at).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }}
            </time>
          </div>
        </a>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
.sidebar-formal {
  position: sticky;
  padding: 1.5rem;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.sidebar-header {
  text-align: center;
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.5rem;
    font-family: "Times New Roman", Times, serif;
    font-weight: 700;
    color: #2b2b2b;
    margin-bottom: 0.5rem;
  }

  .tagline {
    font-size: 0.9rem;
    color: #444444;
    font-style: normal;
  }

  .header-divider {
    width: 60px;
    height: 3px;
    background-color: #d4af37;
    margin: 1rem auto 0;
    border-radius: 2px;
  }
}

.articles-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.article-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  padding: 0.75rem;
  border-radius: 10px;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  .thumb {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    margin-right: 0.75rem;
    overflow: hidden;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 0.25rem;
      color: #333;
    }

    time {
      font-size: 0.75rem;
      color: #888;
    }
  }
}
</style>
