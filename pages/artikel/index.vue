<script setup>
import { useWindowSize } from "@vueuse/core";
import { ref, computed, watch } from "vue";

definePageMeta({
  layout: "artikel",
});

// Responsive breakpoint
const { width } = useWindowSize();
const isMobile = computed(() => width.value < 600);

// Fetch articles
const { data } = await useAsyncData(
  "article-blog",
  () =>
    $fetch(`https://loomora-cdb63-default-rtdb.firebaseio.com/articles.json`),
  { server: false }
);

// Normalize data into array
const articles = computed(() => {
  const raw = data.value;
  if (!raw) return [];
  return Array.isArray(raw) ? raw : Object.values(raw);
});

// Shuffle helper (Fisher–Yates)
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Select 4 random featured articles reactively
const randomArticles = ref([]);
watch(
  articles,
  (val) => {
    if (val && val.length) {
      randomArticles.value = shuffle(val).slice(0, 4);
    }
  },
  { immediate: true }
);

// Pagination state
const currentPage = ref(1);
const itemsPerPage = 6;
const totalPages = computed(() =>
  Math.ceil(articles.value.length / itemsPerPage)
);
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return articles.value.slice(start, start + itemsPerPage);
});

// Navigation handlers
function nextPage() {
  currentPage.value = Math.min(currentPage.value + 1, totalPages.value);
}
function prevPage() {
  currentPage.value = Math.max(currentPage.value - 1, 1);
}

useSeoMeta({
  title: "Artikel | Karpet Custom Mewah dan Berkualitas Tinggi",
  ogTitle: "Artikel | Karpet Custom Mewah dan Berkualitas Tinggi",
  description:
    "Baca artikel-artikel terbaru tentang karpet custom berkualitas dan temukan inspirasi desain untuk ruang Anda dengan Loomora.",
  ogDescription:
    "Baca artikel-artikel terbaru tentang karpet custom berkualitas dan temukan inspirasi desain untuk ruang Anda dengan Loomora.",
  ogImage: "https://link-ke-gambar-thumbnail-article-loomora.com", // Ganti dengan URL gambar artikel yang sesuai
  twitterCard: "summary_large_image",
  robots: "index, follow",
});
</script>

<template>
  <a-row style="margin-top: 10rem">
    <!-- Featured Articles Large -->
    <a-col
      class="col col-md-7 col-sm-12"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <a-cards
        width="99%"
        class="image-container"
        :to="`/artikel/${randomArticles[0]?.slug}`"
        :elevation="0"
      >
        <img
          :src="randomArticles[0]?.image"
          class="custom-image-1"
          :alt="randomArticles[0]?.alttext || randomArticles[0]?.title"
        />
        <div class="bottom-overlay">
          <div class="overlay-text">
            {{ randomArticles[0]?.title }}
          </div>
        </div>
      </a-cards>
    </a-col>

    <!-- Featured Articles Small -->
    <a-col class="col col-md-5 col-sm-12">
      <a-cards
        width="100%"
        class="image-container"
        :to="`/artikel/${randomArticles[1]?.slug}`"
        :elevation="0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          :src="randomArticles[1]?.image"
          class="custom-image-2"
          :alt="randomArticles[1]?.alttext || randomArticles[1]?.title"
        />
        <div class="bottom-overlay">
          <div class="overlay-text">
            {{ randomArticles[1]?.title }}
          </div>
        </div>
      </a-cards>

      <a-row>
        <a-col
          class="col col-md-6 col-sm-12"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <a-cards
            width="99%"
            class="image-container"
            :to="`/artikel/${randomArticles[2]?.slug}`"
            :elevation="0"
          >
            <img
              :src="randomArticles[2]?.image + '/detail410'"
              class="custom-image-3"
              :alt="randomArticles[2]?.alttext || randomArticles[2]?.title"
            />
            <div class="bottom-overlay">
              <div class="overlay-text">
                {{ randomArticles[2]?.title }}
              </div>
            </div>
          </a-cards>
        </a-col>

        <a-col
          class="col col-md-6 col-sm-12"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <a-cards
            width="100%"
            class="image-container"
            :to="`/artikel/${randomArticles[3]?.slug}`"
            :elevation="0"
          >
            <img
              :src="randomArticles[3]?.image + '/detail410'"
              class="custom-image-3"
              :alt="randomArticles[3]?.alttext || randomArticles[3]?.title"
            />
            <div class="bottom-overlay">
              <div class="overlay-text">
                {{ randomArticles[3]?.title }}
              </div>
            </div>
          </a-cards>
        </a-col>
      </a-row>
    </a-col>
  </a-row>

  <a-container class="jarak">
    <!-- Pagination Header -->
    <a-row class="mt-8" data-aos="fade-right" data-aos-delay="500">
      <a-col>
        <div class="milestone-header">
          <span class="milestone-title">Artikel</span>
          <div class="milestone-nav">
            <button class="arrow-btn" @click="prevPage">&#10094;</button>
            <span class="page-info">
              Halaman {{ currentPage }} dari {{ totalPages }}
            </span>
            <button class="arrow-btn" @click="nextPage">&#10095;</button>
          </div>
        </div>
        <div class="milestone-line"></div>
      </a-col>
    </a-row>

    <!-- Blog Cards Grid -->
    <a-row>
      <a-col class="col-12 col-sm-6 col-md-8">
        <a-row>
          <a-col
            class="col-md-6 col-sm-12"
            v-for="(article, idx) in paginatedItems"
            :key="idx"
            data-aos="fade-up"
            :data-aos-delay="600 + idx * 100"
          >
            <a-cards
              class="custom-card"
              width="100%"
              :elevation="0"
              :to="`/artikel/${article.slug}`"
            >
              <img
                :src="article.image + '/detail410'"
                :alt="article.alttext || article.title"
                class="custom-image-blog"
              />
              <p class="blog-description">{{ article.published_at }}</p>
              <h4 class="blog-title">{{ article.title }}</h4>
            </a-cards>
          </a-col>
        </a-row>
      </a-col>

      <a-col class="col-12 col-sm-6 col-md-4">
        <LazyHydration when-visible>
          <sidebar />
        </LazyHydration>
      </a-col>
    </a-row>
  </a-container>
</template>

<style scoped lang="scss">
.custom-image-1,
.custom-image-2,
.custom-image-3 {
  transition: transform 0.3s ease-in-out;
}

.custom-image-1 {
  width: 100%;
  height: 33rem;
  object-fit: cover;
}

.custom-image-2 {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.custom-image-3 {
  width: 100%;
  height: 17.2rem;
  object-fit: cover;
}

.custom-image-1:hover,
.custom-image-2:hover,
.custom-image-3:hover {
  transform: scale(1.05);
}

.image-container {
  position: relative;
}

.bottom-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  padding: 20px;
}

.overlay-text {
  color: #fff;
  font-size: 1.4rem;
  line-height: 1.2;
}

.milestone-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.milestone-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #d4af37;
  white-space: nowrap;
}

.milestone-nav {
  display: flex;
  gap: 0.5rem;
}

.arrow-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}

.arrow-btn:hover {
  background: #f5f5f5;
}

.milestone-line {
  width: 100%;
  height: 2px;
  background-color: #d4af37;
  margin: 0;
}

.page-info {
  margin: 0 0.5rem;
  font-size: 0.9rem;
  color: #555;
  display: flex;
  align-items: center;
}

.custom-card {
  margin-top: 0.5rem;
  padding: 0.5rem;
}

.custom-image-blog {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 0.5rem;
}

.blog-title {
  margin-top: 0.7rem;
  font-size: 1rem;
}

.blog-description {
  font-size: 0.8rem;
  color: rgb(170, 170, 170);
}
</style>
