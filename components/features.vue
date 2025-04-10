<script setup>
import { mdiQualityHigh, mdiShape, mdiTruckDelivery } from "@mdi/js";

const features = [
  {
    icon: mdiQualityHigh,
    title: "Kualitas Premium",
    description:
      "Bahan berkualitas tinggi dengan material pilihan yang tahan lama.",
  },
  {
    icon: mdiShape,
    title: "Desain Pilihan",
    description:
      "Pilihan ukuran, desain, dan spesifikasi lainnya yang sesuai dengan kebutuhan",
  },
  {
    icon: mdiTruckDelivery,
    title: "Pengiriman Mudah",
    description: "Layanan pengiriman dan pemasangan ke seluruh Indonesia.",
  },
];
</script>

<template>
  <a-container class="my-5">
    <a-row class="feature-section">
      <div v-for="(item, index) in features" :key="index" class="feature-card">
        <svg class="feature-icon" viewBox="0 0 24 24">
          <path :d="item.icon" />
        </svg>
        
        <h3 class="feature-title">{{ item.title }}</h3>
        <p class="feature-description">{{ item.description }}</p>
      </div>
    </a-row>
  </a-container>
</template>

<style scoped lang="scss">
.feature-section {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 1rem;
}

.feature-card {
  position: relative;
  background: #fff;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 0 0 calc(33.33% - 2rem);
  max-width: calc(33.33% - 2rem);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, #d4af37, #e6c35c);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    flex: 0 0 calc(50% - 2rem);
    max-width: calc(50% - 2rem);
  }

  @media (max-width: 480px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.feature-icon {
  width: 80px;
  height: 80px;
  fill: #d4af37; /* Warna emas dominan */
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;

  /* Efek interaktif pada ikon saat card dihover */
  .feature-card:hover & {
    transform: scale(1.1);
  }
}

.feature-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.feature-description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.5;
}
</style>
