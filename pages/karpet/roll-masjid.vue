<script setup>
import { mdiCheckboxMarkedCircleOutline } from "@mdi/js";

const banner = {
  judul: "Karpet Roll Masjid",
};

const products = [
  {
    id: 1,
    title: "Grade Super Premium",
    priceOld: "Rp. 9,3 Jt",
    priceNew: "Rp. 9.000.000",
    details: [
      "Bahan: Polypropylene",
      "Motif: Polos & Full Motif",
      "Warna: Merah & Hijau",
      "Ukuran: 120 x 600 cm",
      "Tebal: 24 mm",
    ],
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/7bf4f0bb-5815-4611-d3e5-e0112e7ef300/herotablet",
  },

  {
    id: 2,
    title: "Grade Premium",
    priceOld: "Rp. 6,1 Jt",
    priceNew: "Rp. 6.000.000",
    details: [
      "Bahan: Polypropylene",
      "Motif: Polos & Bintik",
      "Warna: Merah & Hijau",
      "Ukuran: 120 x 600 cm",
      "Tebal: 22 mm",
    ],
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/0e75b034-fbef-4420-6591-4fa41008a900/herotablet",
  },

  {
    id: 3,
    title: "Grade Super",
    priceOld: "Rp. 5,1 Jt",
    priceNew: "Rp. 5.000.000",
    details: [
      "Bahan: Polypropylene",
      "Motif: Polos, Bintik, Love, Minimalis & Bunga",
      "Warna: Merah & Hijau",
      "Ukuran: 120 x 600 cm",
      "Tebal: 17 mm",
    ],
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/e26d0d5d-2c0b-4226-0044-3e52b1f1e100/herotablet",
  },

  {
    id: 4,
    title: "Grade A",
    priceOld: "Rp. 6,1 Jt",
    priceNew: "Rp. 6.000.000",
    details: [
      "Bahan: Polypropylene",
      "Motif: Polos, Bintik & Bunga",
      "Warna: Merah & Hijau",
      "Ukuran: 120 x 600 cm",
      "Tebal: 22 mm",
    ],
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/bfde99e0-d554-4509-416c-6881e792d600/herotablet",
  },

  {
    id: 5,
    title: "Grade B",
    priceOld: "Rp. 3,7 Jt",
    priceNew: "Rp. 3.500.000",
    details: [
      "Bahan: Polypropylene",
      "Motif: Polos",
      "Warna: Merah & Hijau",
      "Ukuran: 120 x 600 cm",
      "Tebal: 13-14 mm",
    ],
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/5c4d0cf5-f34d-425e-3d86-2144a0c9af00/herotablet",
  },

  {
    id: 6,
    title: "Grade C",
    priceOld: "Rp. 2,2 Jt",
    priceNew: "Rp. 2.000.000",
    details: [
      "Bahan: Polypropylene",
      "Motif: Polos, Bintik, Love, Minimalis & Bunga",
      "Warna: Merah & Hijau",
      "Ukuran: 120 x 600 cm",
      "Tebal: 11-12 mm",
    ],
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/78468be4-c4fa-4aef-ed59-b9036cf57a00/herotablet",
  },
];

function openWhatsapp() {
  window.open(
    `https://api.whatsapp.com/send?phone=6281121902309&text=Hallo, saya mau bertanya lebih lanjut.`
  );
}

useSeoMeta({
  title: "Karpet Roll Masjid",
  ogTitle: "Karpet Roll Masjid",
  description:
    "Temukan berbagai pilihan karpet roll masjid berkualitas dengan harga terbaik. Tersedia berbagai grade: Super Premium, Premium, hingga Grade C. Estetis, nyaman, dan tahan lama untuk ruang ibadah Anda.",
  ogDescription:
    "Pilihan karpet roll masjid terbaik dari Loomora. Tersedia berbagai grade, warna, dan motif. Estetis dan nyaman untuk ruang ibadah Anda.",
  ogImage:
    "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/7bf4f0bb-5815-4611-d3e5-e0112e7ef300/ogimage",
  twitterCard: "summary_large_image",
  robots: "index, follow",
});
</script>

<template>
  <Top :operandata="banner" />

  <!-- Header -->
  <div class="contact-header">
    <h1 class="section-title">Pilihan Karpet Roll Masjid Anda</h1>
    <div class="divider">
      <span class="line"></span>
      <span class="dot"></span>
      <span class="line"></span>
    </div>

    <p>
      Kami siap membantu menghadirkan karpet roll masjid yang nyaman, estetis,
      <br />
      dan sesuai dengan kebutuhan ibadah di ruang suci Anda.
    </p>
  </div>

  <div class="luxury-grid">
    <div
      v-for="(product, index) in products"
      :key="product.id"
      class="lux-row"
      :data-aos="i % 2 === 0 ? 'slide-right' : 'slide-left'"
    >
      <!-- Alternatif tampilan: baris genap tampilkan gambar di kiri, baris ganjil di kanan -->
      <template v-if="index % 2 === 0">
        <div
          class="lux-col image"
          :style="{ backgroundImage: `url(${product.image})` }"
        />

        <div class="lux-col info">
          <div class="info-inner" data-aos="fade-up">
            <p class="category">KATEGORI</p>
            <h2 class="title">{{ product.title }}</h2>
            <div class="price">
              <span class="price-old">{{ product.priceOld }}</span>
              <span class="price-new">{{ product.priceNew }}</span>
            </div>

            <ul class="details">
              <li v-for="(detail, i) in product.details" :key="i">
                <svg class="icon" viewBox="0 0 24 24">
                  <path :d="mdiCheckboxMarkedCircleOutline" />
                </svg>
                <span>{{ detail }}</span>
              </li>
            </ul>

            <a-button
              id="pesan_sekarang"
              text="Pesan Sekarang"
              @click="openWhatsapp"
            />
          </div>
        </div>
      </template>

      <template v-else>
        <div class="lux-col info">
          <div class="info-inner">
            <p class="category">KATEGORI</p>
            <h2 class="title">{{ product.title }}</h2>
            <div class="price">
              <span class="price-old">{{ product.priceOld }}</span>
              <span class="price-new">{{ product.priceNew }}</span>
            </div>

            <ul class="details">
              <li v-for="(detail, i) in product.details" :key="i">
                <svg class="icon" viewBox="0 0 24 24">
                  <path :d="mdiCheckboxMarkedCircleOutline" />
                </svg>
                <span>{{ detail }}</span>
              </li>
            </ul>

            <a-button
              id="pesan_sekarang"
              text="Pesan Sekarang"
              @click="openWhatsapp"
            />
          </div>
        </div>

        <div
          class="lux-col image"
          :style="{ backgroundImage: `url(${product.image})` }"
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-header {
  text-align: center;
  margin-bottom: 40px;
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;

  .line {
    width: 50px;
    height: 2px;
    background: #ccc;
    margin: 0 0.5rem;
  }
  .dot {
    width: 8px;
    height: 8px;
    background: #d4af37;
    border-radius: 50%;
  }
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background: #d4af37;
    margin: 0.5rem auto 0;
  }
}

.luxury-grid {
  color: #444;
  background: #fafafa;
  padding: 2rem 1rem;

  .lux-row {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 0;
    align-items: stretch;

    .lux-col {
      width: 100%;
      height: 550px;
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.98);

      &.image {
        background-size: cover;
        background-position: center;
        filter: brightness(0.95);
      }

      &.info {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.98), #fefefe);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .info-inner {
    max-width: 90%;
    text-align: left;

    .category {
      font-weight: 600;
      font-size: 0.85rem;
      letter-spacing: 1px;
      margin-bottom: 0.5rem;
      color: #d4af37;
      text-transform: uppercase;
    }

    .title {
      font-size: 1.8rem;
      font-weight: 700;
      margin: 0.3rem 0 1rem;
      color: #333;
    }

    .price {
      margin-bottom: 1.2rem;
      .price-old {
        font-size: 1.2rem;
        color: #999;
        text-decoration: line-through;
      }
      .price-new {
        font-size: 1.4rem;
        font-weight: bold;
        color: #d4af37;
        margin-left: 0.75rem;
      }
    }

    .details {
      list-style: none;
      padding: 0;
      margin: 1rem 0;
      li {
        display: flex;
        align-items: center;
        font-size: 0.95rem;
        margin-bottom: 0.65rem;
        svg.icon {
          width: 20px;
          height: 20px;
          fill: #d4af37;
          margin-right: 0.5rem;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .luxury-grid {
    padding: 2rem 3rem;
    .lux-row .lux-col {
      width: 48%;
      margin: 1%;
    }
  }
}
</style>
