<script setup lang="ts">
import { mdiCheckCircleOutline } from "@mdi/js";

interface FeatureInfo {
  title: string;
  desc: string;
}

interface FeaturesM {
  images: string;
  judul: string;
  deskripsi: string;
  keunggulan: string;
  list_1: string;
  list_2: string;
  list_3: string;
  list_4: string;
  info: FeatureInfo[];
}

const props = defineProps<{ operandata: FeaturesM }>();

// Buat array daftar keuntungan
const advantageList = [
  props.operandata.list_1,
  props.operandata.list_2,
  props.operandata.list_3,
  props.operandata.list_4,
];
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
            v-for="(item, idx) in advantageList"
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
          v-for="(item, idx) in operandata.info"
          :key="idx"
          class="info-card animate-on-scroll"
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
  width: 100%;
}

/* IMAGE SECTION */
.image-section img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  display: block;
  border-radius: 2rem;
}

/* INFO SECTION */
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

    &:hover {
      transform: translateY(-12px);
      box-shadow: 0 30px 70px rgba(197, 157, 95, 0.25);
    }

    .info-title {
      font: 700 1.4rem "Montserrat", sans-serif;
      color: #2a2a2a;
      margin-bottom: 1rem;
      position: relative;
    }

    .info-description {
      font: 1rem/1.6 "Lato", sans-serif;
      color: #4a4a4a;
    }
  }
}

/* TEXT SECTION */
.text-section {
  padding: 4rem 2rem;
  text-align: left;

  .inner-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .feature-label {
    font: 600 0.9rem sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #8e8e8e;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
  }

  .title {
    font: 700 3rem sans-serif;
    color: #2a2a2a;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.08);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -12px;
      left: 0;
      width: 70px;
      height: 4px;
      background: #c59d5f;
      border-radius: 2px;
      transition: width 0.3s;
    }
    &:hover::after {
      width: 100px;
    }
  }

  .description {
    font: 1.2rem/1.8 sans-serif;
    color: #4a4a4a;
    margin-bottom: 2rem;
    padding-right: 1rem;
  }

  .advantage-title {
    font: 600 1.5rem sans-serif;
    color: #2a2a2a;
    margin-bottom: 1rem;
    padding-left: 1rem;
    border-left: 4px solid #c59d5f;
  }

  .advantage-list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      font-size: 1.125rem;
      color: #2a2a2a;
      margin-bottom: 0.75rem;
      transition: transform 0.3s;

      svg {
        margin-right: 0.75rem;
        transition: transform 0.3s;
      }

      &:hover {
        transform: translateX(6px);
        svg {
          transform: scale(1.1);
        }
      }
    }
  }
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .info-grid {
    grid-template-columns: 1fr;
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
      border-left: none;
      border-bottom: 2px solid #c59d5f;
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    .advantage-list li {
      justify-content: center;
      font-size: 1.05rem;
    }
  }
}
</style>
