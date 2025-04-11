<script setup>
import { ref, computed } from "vue";

const categories = ["All", "Karpet Masjid", "Karpet Ballroom", "Karpet Kantor"];
const selectedCategory = ref("All");

const banner = { judul: "PROYEK KAMI" };

const images = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F3.jpeg?alt=media&token=8fd4a626-9cf6-4eac-9119-e6bdc9f75dca",
    text: "Ballroom Timor Leste",
    category: "Karpet Ballroom",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F4.jpeg?alt=media&token=568d0b1f-5f2d-40cb-a4be-e4101f10bc83",
    text: "Ballroom Sucofindo - Jakarta",
    category: "Karpet Ballroom",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F5.jpeg?alt=media&token=99093ffe-47a1-40e1-bd50-b715c223914d",
    text: "PX Pavillion (Lippo Mall Puri)",
    category: "Karpet Ballroom",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F20.jpeg?alt=media&token=5b2525f4-1815-40f0-a600-8af92e307896",
    text: "Sentuhan Modern",
    category: "Karpet Kantor",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F2.jpeg?alt=media&token=75eab2cf-d47e-4156-8117-ef0190bbe6de",
    text: "Masjid Seskoal - Jakarta",
    category: "Karpet Masjid",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F6.jpeg?alt=media&token=f0aa2e24-dc1f-4a05-98d9-3227f4d84c5f",
    text: "Kantor Mabes Polri - Jakarta",
    category: "Karpet Kantor",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F7.jpeg?alt=media&token=4d6947be-b187-4882-b3d9-adeed2973443",
    text: "Istana Negara Yogyakarta",
    category: "Karpet Ballroom",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F13.jpeg?alt=media&token=c8f12ba2-61d4-41c5-afbc-3604753a8247",
    text: "DPRD Pamekasan Jawa Timur",
    category: "Karpet Kantor",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F9.jpeg?alt=media&token=36b8f223-0d19-4e9f-a6bd-810d54b9112f",
    text: "Universitas Islam Indonesia",
    category: "Karpet Kantor",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F12.jpeg?alt=media&token=8fb2d24d-c37f-418a-b50c-06f7b2b632b8",
    text: "Masjid Raya Kota Harapan Indah - Bekasi",
    category: "Karpet Masjid",
  },
];

const filteredImages = computed(() => {
  if (selectedCategory.value === "All") return images;
  return images.filter((img) => img.category === selectedCategory.value);
});
</script>

<template>
  <!-- Komponen Banner Top -->
  <Top :operandata="banner" />

  <a-container class="mb-5">
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
        v-for="(image, index) in filteredImages"
        :key="image.src"
        class="project-card"
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
  </a-container>
</template>

<style scoped lang="scss">
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
</style>
