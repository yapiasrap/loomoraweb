<script setup>
import { useWindowSize } from "@vueuse/core";
import { computed, ref, watch } from "vue";

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 600);

// Fetch data
const { data, error } = await useAsyncData(
  `article-blog`,
  () => $fetch(`https://api.perkasaracking.co.id/data?key=articles`),
  { server: false }
);

const item = computed(() => data.value);

const articleArray = computed(() => {
  const raw = item.value?.data;
  if (!raw) return [];
  return Array.isArray(raw) ? raw : Object.values(raw);
});

// Fungsi shuffle
function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

// Simpan artikel acak hanya sekali saat pertama load
const randomArticles = ref([]);

watch(articleArray, () => {
  if (articleArray.value.length && randomArticles.value.length === 0) {
    randomArticles.value = shuffleArray(articleArray.value).slice(0, 4);
  }
});

// Pagination
const currentPage = ref(1);
const itemsPerPage = 6;

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return articleArray.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(articleArray.value.length / itemsPerPage)
);

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}

const banner = {
  judul: "BLOG",
  alttext: "Blog Rak Gudang TAP",
};

// SEO
useSeoMeta({
  title: "Rak Gudang Berkualitas - Solusi Penyimpanan Terbaik",
  ogTitle: "Rak Gudang Berkualitas - Solusi Penyimpanan Terbaik",
  description:
    "Temukan berbagai jenis rak gudang berkualitas untuk kebutuhan industri dan penyimpanan dengan harga terbaik.",
  ogDescription:
    "Temukan berbagai jenis rak gudang berkualitas untuk kebutuhan industri dan penyimpanan dengan harga terbaik.",
  ogImage:
    "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/21c2cd2f-16c2-43c5-8b1a-6f4b4d6a5700/ogimage",
  twitterCard: "summary_large_image",
  robots: "index, follow",
});
</script>

<template>
  <a-container class="jarak">
    <a-row style="margin-top: 170px">
      <a-col>
        <a-row>
          <!-- Gambar 1 (artikel ke-0) -->
          <a-col class="col col-md-6 col-sm-12">
            <a-cards
              width="99%"
              class="image-container"
              :to="`${randomArticles[0]?.slug}`"
              style="transform: none"
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

          <!-- Gambar 2 + 3 + 4 di sebelah kanan -->
          <a-col class="col col-md-6 col-sm-12">
            <!-- Gambar 2 -->
            <a-cards
              width="100%"
              class="image-container"
              :to="`${randomArticles[0]?.slug}`"
              style="transform: none"
              :elevation="0"
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
              <!-- Gambar 3 -->
              <a-col class="col col-md-6 col-sm-12">
                <a-cards
                  width="99%"
                  height="99%"
                  :to="`${randomArticles[0]?.slug}`"
                  style="transform: none"
                  class="image-container"
                  :elevation="0"
                >
                  <img
                    :src="randomArticles[2]?.image + '/detail410'"
                    class="custom-image-3"
                    :alt="
                      randomArticles[2]?.alttext || randomArticles[2]?.title
                    "
                  />
                  <div class="bottom-overlay">
                    <div class="overlay-text">
                      {{ randomArticles[2]?.title }}
                    </div>
                  </div>
                </a-cards>
              </a-col>

              <!-- Gambar 4 -->
              <a-col class="col col-md-6 col-sm-12">
                <a-cards
                  width="100%"
                  class="image-container"
                  :to="`${randomArticles[0]?.slug}`"
                  style="transform: none"
                  :elevation="0"
                >
                  <img
                    :src="randomArticles[3]?.image + '/detail410'"
                    class="custom-image-3"
                    :alt="
                      randomArticles[3]?.alttext || randomArticles[3]?.title
                    "
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

        <a-row class="mt-8">
          <a-col>
            <div class="steam-press-milestone">
              <!-- Label kiri "Steam Press" -->
              <div class="label-steam-press">Artikel</div>

              <!-- Garis horizontal full (posisi absolute) -->
              <div class="line"></div>

              <!-- Label "Milestone" ditempatkan di atas garis -->
              <div class="label-milestone">Milestone</div>
            </div>
          </a-col>
        </a-row>

        <!-- Tampilan Blog Card -->
        <a-row>
          <!-- Contoh menampilkan 3 card blog -->
          <a-col
            class="col-md-4 col-sm-12"
            v-for="(article, index) in paginatedItems"
            :key="index"
          >
            <a-cards
              class="custom-card"
              width="100%"
              :elevation="0"
              :to="article.slug"
            >
              <!-- Gambar Blog -->
              <img
                :src="article.image + '/detail410'"
                :alt="article.alttext"
                class="custom-image-blog"
              />

              <h4 class="blog-title">{{ article.title }}</h4>
              <p class="blog-description">{{ article.published_at }}</p>
            </a-cards>
          </a-col>
        </a-row>
        <div class="pagination-controls text-center">
          <a-button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="mr-2"
            text="Sebelumnya"
          >
            Sebelumnya
          </a-button>

          <span>Halaman {{ currentPage }} dari {{ totalPages }}</span>

          <a-button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="ml-2"
            text="Selanjutnya"
          >
            Selanjutnya
          </a-button>
        </div>
      </a-col>
    </a-row>
  </a-container>
</template>

<style scoped lang="scss">
.jarak {
  margin-bottom: 40px;
}

@media (max-width: 576px) {
  .jarak {
    margin-top: -170px;
  }
}

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

.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 30px;
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

/* Styling teks overlay */
.overlay-text {
  color: #fff;
  font-size: 1.4rem;
  line-height: 1.2;
}

.steam-press-milestone {
  position: relative; // Agar elemen anak yang absolute dapat diposisikan relatif terhadap sini
  width: 100%;
  height: 40px; // Atur tinggi sesuai kebutuhan

  // Agar "Steam Press" menempel di bawah (sama dengan garis)
  display: flex;
  align-items: flex-end;
}

.label-steam-press {
  display: inline-flex;
  align-items: center;
  padding: 0 16px;
  background-color: #f70c0c; // Warna hijau
  color: #ffffff; // Teks putih
  font-weight: 600;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  height: 100%;
  z-index: 2; // Pastikan berada di atas garis bila terjadi tumpang tindih
}

.line {
  position: absolute;
  bottom: 0; // Garis menempel tepat di bagian bawah kontainer
  // Mulai garis dari ujung kanan label-steam-press.
  // Cara termudah adalah memulai garis dari titik 0 dan menutupinya oleh label,
  // sehingga secara visual tampak menyatu dengan label.
  left: 0;
  right: 0;
  height: 2px; // Ketebalan garis
  background-color: #f70c0c; // Warna sama dengan label untuk efek menyatu
  z-index: 1;
}

.label-milestone {
  position: absolute;
  // Posisi di atas garis, misalnya sedikit naik dari garis
  bottom: 4px; // Geser ke atas dari garis (2px garis + 2px margin)
  right: 16px; // Jarak dari sisi kanan, bisa disesuaikan
  background: #fff; // Background putih agar teks tampil jelas dan menutupi garis di bawahnya
  padding: 0 4px; // Ruang antar teks dan background
  color: #929292;
  z-index: 3; // Pastikan berada di atas garis
}
.custom-card {
  margin-top: 0.5rem;
  padding: 0.5rem;
  // Agar card nampak rapi, silakan menyesuaikan styling di sini
}

.custom-image-blog {
  width: 100%;
  height: 13rem;
  object-fit: cover;
  border-radius: 0.5rem;
}

.blog-title {
  margin-top: 0.7rem;
  font-size: 1rem;
}

.blog-description {
  font-size: 0.8rem;
  margin-top: -1rem;
  color: rgb(170, 170, 170);
}
</style>
