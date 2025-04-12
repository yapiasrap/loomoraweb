<script setup>
import { mdiCheckboxMarkedCircleOutline } from "@mdi/js";

const banner = { judul: "Karpet Roll Masjid" };

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
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F7.jpeg?alt=media&token=4d6947be-b187-4882-b3d9-adeed2973443",
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
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F9.jpeg?alt=media&token=36b8f223-0d19-4e9f-a6bd-810d54b9112f",
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
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F11.jpeg?alt=media&token=c3193dde-c0af-47f6-9516-047de30fee3a",
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
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F3.jpeg?alt=media&token=8fd4a626-9cf6-4eac-9119-e6bdc9f75dca",
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
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F4.jpeg?alt=media&token=568d0b1f-5f2d-40cb-a4be-e4101f10bc83",
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
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F5.jpeg?alt=media&token=99093ffe-47a1-40e1-bd50-b715c223914d",
  },
];
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
    <div v-for="(product, index) in products" :key="product.id" class="lux-row">
      <!-- Alternatif tampilan: baris genap tampilkan gambar di kiri, baris ganjil di kanan -->
      <template v-if="index % 2 === 0">
        <div
          class="lux-col image"
          :style="{ backgroundImage: `url(${product.image})` }"
        ></div>
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
            <a-button id="pesan_sekarang" text="Pesan Sekarang" />
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

            <a-button id="pesan_sekarang" text="Pesan Sekarang" />
          </div>
        </div>
        <div
          class="lux-col image"
          :style="{ backgroundImage: `url(${product.image})` }"
        ></div>
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
