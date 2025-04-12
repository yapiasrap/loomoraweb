<script setup lang="ts">
import { mdiCheckCircleOutline } from "@mdi/js";

interface FeaturesM {
  images: string;
  judul: string;
  deskripsi: string;
  keunggulan: string;
  list_1: string;
  list_2: string;
  list_3: string;
  list_4: string;
  info: { title: string; desc: string }[];
}

const props = defineProps<{ operandata: FeaturesM }>();
</script>

<template>
  <a-container>
    <!-- TEXT SECTION -->
    <section class="text-section">
      <div class="inner-content animate-on-scroll" v-observe>
        <p class="feature-label">FEATURES PRODUCT</p>
        <h2 class="title">{{ operandata.judul }}</h2>
        <p class="description">{{ operandata.deskripsi }}</p>
        <p class="advantage-title">{{ operandata.keunggulan }}</p>
        <ul class="advantage-list">
          <li
            v-for="(item, idx) in [
              operandata.list_1,
              operandata.list_2,
              operandata.list_3,
              operandata.list_4,
            ]"
            :key="idx"
            class="animate-on-scroll"
            v-observe
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              style="color: #c59d5f; margin-right: 0.75rem"
            >
              <path :d="mdiCheckCircleOutline" />
            </svg>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="section-divider mt-7 animate-on-scroll" v-observe></div>
    </section>

    <!-- IMAGE SECTION -->
    <div class="image-section animate-on-scroll" v-observe>
      <img :src="operandata.images" alt="Featured Product" />
    </div>

    <!-- INFO SECTION -->
    <section class="info-section">
      <div class="info-grid">
        <div
          class="info-card animate-on-scroll"
          v-for="(item, idx) in operandata.info"
          :key="idx"
          v-observe
        >
          <h3 class="info-title">{{ item.title }}</h3>
          <p class="info-description">{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <LastProject />
  </a-container>
</template>

<style scoped lang="scss">
/* Pembatas antar section */
.section-divider {
  height: 2px;
  background: #f0f0f0;
  max-width: 100%;
}

/* Bagian Gambar Full Width (Tidak diubah banyak) */
.image-section {
  img {
    width: 100%;
    height: 500px; /* Atur tinggi gambar sesuai kebutuhan */
    object-fit: cover;
    display: block;
    border-radius: 2rem;
  }
}

/* Bagian Info Tiga Kolom */
.info-section {
  padding: 6rem 2rem;
  backdrop-filter: blur(6px);

  .info-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .info-card {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 1.5rem;
    padding: 2.5rem 2rem;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    border: 1px solid rgba(255, 255, 255, 0.18);
    position: relative;

    &:hover {
      transform: translateY(-12px);
      box-shadow: 0 30px 70px rgba(197, 157, 95, 0.25);
    }

    .info-title {
      font-size: 1.4rem;
      font-weight: 700;
      color: #2a2a2a;
      margin-bottom: 1rem;
      font-family: "Montserrat", sans-serif;
      position: relative;
    }

    .info-description {
      font-size: 1rem;
      color: #4a4a4a;
      line-height: 1.6;
      font-family: "Lato", sans-serif;
    }
  }
}

/* Responsif */
@media (max-width: 992px) {
  .info-cards {
    flex-direction: column;
    gap: 1.5rem;
  }
}

.text-section {
  padding: 4rem 2rem;
  text-align: left;

  .inner-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .feature-label {
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #8e8e8e;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
  }

  .title {
    font-size: 3rem;
    font-weight: 700;
    color: #2a2a2a;
    margin-bottom: 1.5rem;
    position: relative;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.08);

    &::after {
      content: "";
      width: 70px;
      height: 4px;
      background-color: #c59d5f;
      position: absolute;
      left: 0;
      bottom: -12px;
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100px;
    }
  }

  .description {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #4a4a4a;
    margin-bottom: 2rem;
    padding-right: 1rem;
  }

  .advantage-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2a2a2a;
    margin-bottom: 1rem;
    padding-left: 1rem;
    border-left: 4px solid #c59d5f;
  }

  .advantage-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      font-size: 1.125rem;
      color: #2a2a2a;
      margin-bottom: 0.75rem;
      transition: all 0.3s ease;

      i {
        font-size: 1.5rem;
        color: #c59d5f;
        margin-right: 0.75rem;
        transition: transform 0.3s ease;
      }

      &:hover {
        transform: translateX(6px);

        i {
          transform: scale(1.1);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .text-section {
    padding: 2.5rem 1.5rem;
    text-align: center;

    .title {
      font-size: 2.5rem;

      &::after {
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
      }
    }

    .description {
      font-size: 1.05rem;
    }

    .advantage-title {
      font-size: 1.3rem;
      border-left: none;
      border-bottom: 2px solid #c59d5f;
      padding: 0 0 0.5rem;
      margin-bottom: 1rem;
    }

    .advantage-list li {
      justify-content: center;
      font-size: 1.05rem;
    }
  }
}
</style>
