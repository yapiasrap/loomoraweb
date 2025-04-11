<template>
  <section class="karpet-page">
    <h1>Karpet Roll Masjid - Kustom Karpet</h1>
    <div class="product-grid">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
      >
        <h2 class="grade">{{ product.grade }}</h2>
        <p class="harga">
          <span class="original">{{ product.hargaAsli }}</span>
          <span class="diskon">{{ product.hargaDiskon }}</span>
        </p>
        <ul class="details">
          <li><strong>Bahan:</strong> {{ product.bahan }}</li>
          <li><strong>Motif:</strong> {{ product.motif }}</li>
          <li><strong>Warna:</strong> {{ product.warna }}</li>
          <li><strong>Ukuran:</strong> {{ product.ukuran }}</li>
          <li><strong>Tebal:</strong> {{ product.tebal }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    grade: "Grade Super Premium",
    hargaAsli: "Rp. 9,3 Jt",
    hargaDiskon: "Rp. 9.000.000",
    bahan: "Polypropylene",
    motif: "Polos & Full Motif",
    warna: "Merah & Hijau",
    ukuran: "120 x 600 cm",
    tebal: "24 mm",
  },
  {
    grade: "Grade Premium",
    hargaAsli: "Rp. 6,1 Jt",
    hargaDiskon: "Rp. 6.000.000",
    bahan: "Polypropylene",
    motif: "Polos & Bintik",
    warna: "Merah & Hijau",
    ukuran: "120 x 600 cm",
    tebal: "22 mm",
  },
  {
    grade: "Grade Super",
    hargaAsli: "Rp. 5,1 Jt",
    hargaDiskon: "Rp. 5.000.000",
    bahan: "Polypropylene",
    motif: "Polos, Bintik, Love, Minimalis & Bunga",
    warna: "Merah & Hijau",
    ukuran: "120 x 600 cm",
    tebal: "17 mm",
  },
  {
    grade: "Grade A",
    hargaAsli: "Rp. 4.7 Jt",
    hargaDiskon: "Rp. 4.500.000",
    bahan: "Polypropylene",
    motif: "Polos, Bintik & Bunga",
    warna: "Merah & Hijau",
    ukuran: "120 x 600 cm",
    tebal: "14-15 mm",
  },
  {
    grade: "Grade B",
    hargaAsli: "Rp. 3,7 Jt",
    hargaDiskon: "Rp. 3.500.000",
    bahan: "Polypropylene",
    motif: "Polos",
    warna: "Merah & Hijau",
    ukuran: "120 x 600 cm",
    tebal: "13-14 mm",
  },
  {
    grade: "Grade C",
    hargaAsli: "Rp. 2,2 Jt",
    hargaDiskon: "Rp. 2.000.000",
    bahan: "Polypropylene",
    motif: "Polos & Bintik",
    warna: "Merah & Hijau",
    ukuran: "120 x 600 cm",
    tebal: "11-12 mm",
  },
];
</script>

<style scoped lang="scss">
.karpet-page {
  padding: 2rem;
  background: #f4f4f4;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #333;
  }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  .product-card {
    background: #fff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: translateY(-5px);
    }
    .grade {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: #005a9c;
    }
    .harga {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      .original {
        text-decoration: line-through;
        color: #a8a8a8;
        margin-right: 0.5rem;
      }
      .diskon {
        color: #ff5722;
        font-weight: bold;
      }
    }
    .details {
      list-style: none;
      padding: 0;
      li {
        margin-bottom: 0.5rem;
        strong {
          color: #333;
        }
      }
    }
  }
}
</style>
