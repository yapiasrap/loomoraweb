<script setup>
import {
  mdiCheckboxMarkedCircleOutline,
  mdiCartOutline,
  mdiEmailOutline,
} from "@mdi/js";

const banner = { judul: "Karpet Roll Masjid" };
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
    <div class="lux-row mt-20">
      <div
        class="lux-col image"
        :style="{
          backgroundImage:
            'url(https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F7.jpeg?alt=media&token=4d6947be-b187-4882-b3d9-adeed2973443)',
        }"
      ></div>
      <div class="lux-col info">
        <div class="info-inner">
          <p class="category">KATEGORI</p>
          <h2 class="title">Grade Super Premium</h2>
          <div class="price">
            <span class="price-old">Rp. 9,3 Jt</span>
            <span class="price-new">Rp. 9.000.000</span>
          </div>
          <ul class="details">
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Bahan: Polypropylene</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Motif: Polos &amp; Full Motif</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Warna: Merah &amp; Hijau</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Ukuran: 120 x 600 cm</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Tebal: 24 mm</span>
            </li>
          </ul>
          <button class="btn-order">
            <svg class="icon" viewBox="0 0 24 24">
              <path :d="mdiCartOutline" />
            </svg>
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>

    <div class="lux-row">
      <div class="lux-col info">
        <div class="info-inner">
          <p class="category">KATEGORI</p>
          <h2 class="title">Grade Premium</h2>
          <div class="price">
            <span class="price-old">Rp. 6,1 Jt</span>
            <span class="price-new">Rp. 6.000.000</span>
          </div>
          <ul class="details">
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Bahan: Polypropylene</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Motif: Polos &amp; Bintik</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Warna: Merah &amp; Hijau</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Ukuran: 120 x 600 cm</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Tebal: 22 mm</span>
            </li>
          </ul>
          <button class="btn-order">
            <svg class="icon" viewBox="0 0 24 24">
              <path :d="mdiCartOutline" />
            </svg>
            Pesan Sekarang
          </button>
        </div>
      </div>
      <div
        class="lux-col image"
        :style="{
          backgroundImage:
            'url(https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F9.jpeg?alt=media&token=36b8f223-0d19-4e9f-a6bd-810d54b9112f)',
        }"
      ></div>
    </div>

    <div class="lux-row">
      <div
        class="lux-col image"
        :style="{
          backgroundImage:
            'url(https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F11.jpeg?alt=media&token=c3193dde-c0af-47f6-9516-047de30fee3a)',
        }"
      ></div>
      <div class="lux-col info">
        <div class="info-inner">
          <p class="category">KATEGORI</p>
          <h2 class="title">Grade Super</h2>
          <div class="price">
            <span class="price-old">Rp. 5,1 Jt</span>
            <span class="price-new">Rp. 5.000.000</span>
          </div>
          <ul class="details">
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Bahan: Polypropylene</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Motif: Polos, Bintik, Love, Minimalis &amp; Bunga</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Warna: Merah &amp; Hijau</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Ukuran: 120 x 600 cm</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Tebal: 17 mm</span>
            </li>
          </ul>
          <button class="btn-order">
            <svg class="icon" viewBox="0 0 24 24">
              <path :d="mdiCartOutline" />
            </svg>
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>

    <div class="lux-row">
      <div class="lux-col info">
        <div class="info-inner">
          <p class="category">KATEGORI</p>
          <h2 class="title">Grade A</h2>
          <div class="price">
            <span class="price-old">Rp. 6,1 Jt</span>
            <span class="price-new">Rp. 6.000.000</span>
          </div>
          <ul class="details">
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Bahan: Polypropylene</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Motif: Polos, Bintik &amp; Bunga</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Warna: Merah &amp; Hijau</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Ukuran: 120 x 600 cm</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Tebal: 22 mm</span>
            </li>
          </ul>
          <button class="btn-order">
            <svg class="icon" viewBox="0 0 24 24">
              <path :d="mdiCartOutline" />
            </svg>
            Pesan Sekarang
          </button>
        </div>
      </div>
      <div
        class="lux-col image"
        :style="{
          backgroundImage:
            'url(https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F3.jpeg?alt=media&token=8fd4a626-9cf6-4eac-9119-e6bdc9f75dca)',
        }"
      ></div>
    </div>

    <div class="lux-row">
      <div
        class="lux-col image"
        :style="{
          backgroundImage:
            'url(https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F4.jpeg?alt=media&token=568d0b1f-5f2d-40cb-a4be-e4101f10bc83)',
        }"
      ></div>
      <div class="lux-col info">
        <div class="info-inner">
          <p class="category">KATEGORI</p>
          <h2 class="title">Grade B</h2>
          <div class="price">
            <span class="price-old">Rp. 3,7 Jt</span>
            <span class="price-new">Rp. 3.500.000</span>
          </div>
          <ul class="details">
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Bahan: Polypropylene</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Motif: Polos</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Warna: Merah &amp; Hijau</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Ukuran: 120 x 600 cm</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Tebal: 13-14 mm</span>
            </li>
          </ul>
          <button class="btn-order">
            <svg class="icon" viewBox="0 0 24 24">
              <path :d="mdiCartOutline" />
            </svg>
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>

    <div class="lux-row">
      <div class="lux-col info">
        <div class="info-inner">
          <p class="category">KATEGORI</p>
          <h2 class="title">Grade C</h2>
          <div class="price">
            <span class="price-old">Rp. 2,2 Jt</span>
            <span class="price-new">Rp. 2.000.000</span>
          </div>
          <ul class="details">
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Bahan: Polypropylene</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Motif: Polos, Bintik, Love, Minimalis &amp; Bunga</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Warna: Merah &amp; Hijau</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Ukuran: 120 x 600 cm</span>
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24">
                <path :d="mdiCheckboxMarkedCircleOutline" />
              </svg>
              <span>Tebal: 11-12 mm</span>
            </li>
          </ul>
          <button class="btn-order">
            <svg class="icon" viewBox="0 0 24 24">
              <path :d="mdiCartOutline" />
            </svg>
            Pesan Sekarang
          </button>
        </div>
      </div>
      <div
        class="lux-col image"
        :style="{
          backgroundImage:
            'url(https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F5.jpeg?alt=media&token=99093ffe-47a1-40e1-bd50-b715c223914d)',
        }"
      ></div>
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
  /* Garis bawah menggunakan pseudo-element */
  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background: #d4af37;
    margin: 0.5rem auto 0;
  }
}

/* Layout dan style utama */
.luxury-grid {
  color: #444;
  background: #fafafa;
  padding: 2rem 1rem;

  .lux-row {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 0;
    align-items: stretch;
    /* Membuat jarak antar row */

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
        position: relative;
        /* Tidak ada efek hover, namun style gambarnya dibuat lebih bersih */
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

    .btn-order {
      background-color: #d4af37;
      color: #fff;
      border: none;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      transition: background 0.3s ease;
      svg.icon {
        width: 20px;
        height: 20px;
        fill: #fff;
        margin-right: 0.5rem;
      }
      &:hover {
        background-color: darken(#d4af37, 8%);
      }
    }
  }
}

/* Responsive Styles */
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
