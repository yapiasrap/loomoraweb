<script setup>
import { ref } from "vue";

const products = [
  {
    name: "Sentuhan Beludru",
    series: "Koleksi Premium",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/bfde99e0-d554-4509-416c-6881e792d600/herotablet",
  },
  {
    name: "Pasir Sahara",
    series: "Seri Alam",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/21c2cd2f-16c2-43c5-8b1a-6f4b4d6a5700/herotablet",
  },
  {
    name: "Cahaya Keemasan",
    series: "Lini Eksklusif",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/a73f434a-e444-4af4-41db-fe9fd3828f00/herotablet",
  },
  {
    name: "Putih Nordik",
    series: "Nuansa Skandinavia",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/ce24d606-aa84-45a7-8306-461a79106c00/herotablet",
  },
  {
    name: "Kabut Perkotaan",
    series: "Seri Modern",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/7bf4f0bb-5815-4611-d3e5-e0112e7ef300/herotablet",
  },
  {
    name: "Hutan Zamrud",
    series: "Seri Alam",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/f09b8dbb-e9e6-4fb0-40cc-e8e33029a300/herotablet",
  },
];

const showModal = ref(false);
const selectedProduct = ref(null);

function openModal(index) {
  selectedProduct.value = products[index];
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  selectedProduct.value = null;
}
</script>

<template>
  <a-container class="mt-5">
    <p class="heading text-center mb-5">
      Realisasikan Inspirasi Anda <br />
      Bersama Kami
    </p>

    <a-row>
      <a-col
        v-for="(product, index) in products"
        :key="index"
        class="col-6 col-sm-6 col-md-4 p-1"
      >
        <div class="image-wrapper">
          <img :src="product.image" :alt="product.name" />

          <div class="hover-overlay">
            <a-button text="Detail" @click="openModal(index)" />
          </div>
        </div>

        <p class="product-name">{{ product.name }}</p>
        <p class="product-series mb-5">{{ product.series }}</p>
      </a-col>
    </a-row>

    <!-- Modal ala Vuetify VDialog -->
    <div v-if="showModal" class="v-dialog-overlay" @click.self="closeModal">
      <div class="v-dialog-content">
        <img
          :src="selectedProduct.image"
          :alt="selectedProduct.name"
          class="dialog-image"
        />
        <button class="v-dialog-close" @click="closeModal">✕</button>
      </div>
    </div>
  </a-container>
</template>

<style lang="scss" scoped>
.heading {
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 1.2;
}

.image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hover-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    opacity: 0;
    transition: background-color 0.3s ease, opacity 0.3s ease;
  }

  &:hover .hover-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;

    .btn-detail {
      transform: scale(1.1);
    }
  }
}

.product-name {
  font-weight: bold;
  font-size: 1.25rem;
}

.product-series {
  font-size: 1rem;
  margin-top: -1rem;
}

.v-dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(2px);
  padding: 2rem;
}

.v-dialog-content {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-image {
  width: 100%;
  height: auto;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 8px;
}

.v-dialog-close {
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  z-index: 10000;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
}
</style>
