<script setup>
import { ref, computed, watch } from "vue";

useSeoMeta({
  robots: "noindex, nofollow",
});

const categories = ["All", "Karpet Masjid", "Karpet Ballroom", "Karpet Kantor"];
const selectedCategory = ref("All");

const banner = { judul: "PROYEK KAMI" };

const images = [
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/c08d618c-1fa4-482e-37b8-2098e6680200/kotak300",
    text: "Ballroom Timor Leste",
    category: "Karpet Ballroom",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/21c2cd2f-16c2-43c5-8b1a-6f4b4d6a5700/kotak300",
    text: "Ballroom Sucofindo - Jakarta",
    category: "Karpet Ballroom",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/08dc9ff1-811a-4ee2-fd70-3ebea4ceea00/kotak300",
    text: "PX Pavillion (Lippo Mall Puri)",
    category: "Karpet Ballroom",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/1f4be2de-8156-4d29-df51-82443d8e3e00/kotak300",
    text: "Sentuhan Modern",
    category: "Karpet Kantor",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/4876d410-bbb9-4bbe-a543-bd3034b77b00/kotak300",
    text: "Masjid Seskoal - Jakarta",
    category: "Karpet Masjid",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/f11622bf-c08d-456a-789e-12c4af916a00/kotak300",
    text: "Kantor Mabes Polri - Jakarta",
    category: "Karpet Kantor",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/a73f434a-e444-4af4-41db-fe9fd3828f00/kotak300",
    text: "Istana Negara Yogyakarta",
    category: "Karpet Ballroom",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/78468be4-c4fa-4aef-ed59-b9036cf57a00/kotak300",
    text: "DPRD Pamekasan Jawa Timur",
    category: "Karpet Kantor",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/ce24d606-aa84-45a7-8306-461a79106c00/kotak300",
    text: "Universitas Islam Indonesia",
    category: "Karpet Kantor",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/5c4d0cf5-f34d-425e-3d86-2144a0c9af00/kotak300",
    text: "Masjid Raya Kota Harapan Indah - Bekasi",
    category: "Karpet Masjid",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/e980db61-8d4d-452f-817e-bb8ce74be700/kotak300",
    text: "Masjid Agung Manado",
    category: "Karpet Masjid",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/5f5c1903-37d7-46d4-777f-f2a9bdc58b00/kotak300",
    text: "Ballroom Hotel Aryaduta Palembang",
    category: "Karpet Ballroom",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/0e75b034-fbef-4420-6591-4fa41008a900/kotak300",
    text: "Kantor Dinas Pariwisata Bali",
    category: "Karpet Kantor",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/1d2dd6cc-8136-4f53-d2db-34bccb694800/kotak300",
    text: "Masjid Agung Kendari",
    category: "Karpet Masjid",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/7bf4f0bb-5815-4611-d3e5-e0112e7ef300/kotak300",
    text: "Gedung Serbaguna Kalimantan Barat",
    category: "Karpet Ballroom",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/e26d0d5d-2c0b-4226-0044-3e52b1f1e100/kotak300",
    text: "Kantor Gubernur Sulawesi Utara",
    category: "Karpet Kantor",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/37e67931-014a-4bbd-c9ea-fa8acf07bf00/kotak300",
    text: "Masjid Al-Akbar Surabaya",
    category: "Karpet Masjid",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/eeb4e4cb-94e2-4ba0-b980-68f342816100/kotak300",
    text: "Gedung Pertemuan Aceh",
    category: "Karpet Ballroom",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/f09b8dbb-e9e6-4fb0-40cc-e8e33029a300/kotak300",
    text: "Kantor Pajak Bandung",
    category: "Karpet Kantor",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/f62ed0b5-4c4d-4432-75f4-72194134a100/kotak300",
    text: "Masjid Raya Medan",
    category: "Karpet Masjid",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/99ac339c-81c1-4202-b5f1-b7d9ddc38000/kotak300",
    text: "Universitas Negeri Makassar",
    category: "Karpet Kantor",
  },
  {
    src: "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/bfde99e0-d554-4509-416c-6881e792d600/kotak300",
    text: "Hotel Horison Jayapura",
    category: "Karpet Ballroom",
  },
];

// Compute filtered list based on category
const filteredImages = computed(() => {
  if (selectedCategory.value === "All") return images;
  return images.filter((img) => img.category === selectedCategory.value);
});

// Controls for "load more"
const defaultLimits = { All: 6, other: 3 };
const limit = ref(defaultLimits.All);
const showAll = ref(false);

// Reset when category changes
watch(selectedCategory, (newCat) => {
  showAll.value = false;
  limit.value = newCat === "All" ? defaultLimits.All : defaultLimits.other;
});

const visibleImages = computed(() => {
  return filteredImages.value.slice(0, limit.value);
});

const hasMore = computed(() => {
  return limit.value < filteredImages.value.length;
});

function loadMore() {
  limit.value = filteredImages.value.length;
  showAll.value = true;
}

const selectedImage = ref(null);
const showModal = ref(false);

function openImageModal(image) {
  selectedImage.value = image;
  showModal.value = true;
}

function closeImageModal() {
  showModal.value = false;
}
</script>

<template>
  <!-- Komponen Banner Top -->
  <Top :operandata="banner" />

  <a-container class="mb-5 project-page">
    <header class="project-header">
      <h1 class="main-title">Karpet Eksklusif</h1>

      <div class="divider">
        <span class="line"></span>
        <span class="dot"></span>
        <span class="line"></span>
      </div>

      <p class="description">
        Kami menghadirkan karpet eksklusif kustom yang dirancang khusus untuk
        memberikan sentuhan berbeda — lebih personal, lebih mewah, dan lebih
        indah untuk setiap ruang pilihan Anda.
      </p>

      <div class="filter-menu">
        <button
          v-for="(cat, index) in categories"
          :key="index"
          :class="{ active: selectedCategory === cat }"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </header>

    <!-- Gallery Grid dengan Transisi pada Perpindahan Kategori -->
    <transition-group name="fade" tag="div" class="project-gallery">
      <div
        v-for="(image, index) in visibleImages"
        :key="image.src"
        class="project-card"
        :data-aos="'flip-up'"
        :data-aos-delay="index * 100"
        :data-aos-duration="'1000'"
        :data-aos-once="true"
        @click="openImageModal(image)"
      >
        <img
          :src="image.src"
          alt="Gambar Proyek Karpet"
          class="project-image"
        />

        <div class="card-overlay">
          <div class="card-text">{{ image.text }}</div>
        </div>
      </div>
    </transition-group>

    <!-- Modal Preview -->
    <div v-if="showModal" class="image-modal" @click.self="closeImageModal">
      <div class="image-modal-content">
        <img :src="selectedImage?.src.replace('/kotak300', '')" alt="Preview" />
        <p class="modal-caption">{{ selectedImage?.text }}</p>
        <button class="modal-close" @click="closeImageModal">×</button>
      </div>
    </div>

    <!-- Button Lihat Lainnya -->
    <div v-if="hasMore" class="button-wrapper">
      <a-button text="Lihat Lainnya" @click="loadMore" />
    </div>
  </a-container>
</template>

<style scoped lang="scss">
.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

/* Container Umum */
.project-page {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue", Arial, sans-serif;
  background-color: #ffffff;
  color: #121212;
}

/* Header & Filter Section */
.project-header {
  text-align: center;
  margin-bottom: 2rem;

  .main-title {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .divider {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;

    .line {
      width: 40px;
      height: 2px;
      background: #d4af37;
    }
    .dot {
      width: 8px;
      height: 8px;
      background: #d4af37;
      border-radius: 50%;
      margin: 0 0.5rem;
    }
  }

  .description {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .filter-menu {
    display: inline-flex;
    gap: 1rem;
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: 1px solid #d4af37;
      border-radius: 4px;
      background: transparent;
      color: #121212;
      cursor: pointer;
      transition: background 0.3s ease, color 0.3s ease;
      &:hover,
      &.active {
        background: #d4af37;
        color: #ffffff;
      }
    }
  }
}

/* Gallery Grid */
.project-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Project Card */
.project-card {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
  }

  .project-image {
    width: 100%;
    height: 350px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover .project-image {
    transform: scale(1.03);
  }

  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(18, 18, 18, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    .card-text {
      font-size: 1.1rem;
      font-weight: 600;
      text-align: center;
      padding: 0 1rem;
      color: #ffffff;
    }
  }

  &:hover .card-overlay {
    opacity: 1;
  }
}

/* Transition for Category Change */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 18, 18, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;

  .image-modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    text-align: center;

    img {
      max-width: 100%;
      max-height: 80vh;
      border-radius: 10px;
      box-shadow: 0 0 20px #000;
    }

    .modal-caption {
      margin-top: 1rem;
      color: #fff;
      font-size: 1rem;
      font-weight: 500;
    }

    .modal-close {
      position: absolute;
      top: -10px;
      right: -10px;
      background: #fff;
      color: #121212;
      border: none;
      font-size: 1.5rem;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
