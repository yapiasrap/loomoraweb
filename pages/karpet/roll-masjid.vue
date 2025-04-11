<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="overlay">
        <h1>Kustom Karpet</h1>
        <p>
          Elegansi di setiap langkah. Temukan karpet berkualitas sesuai
          keinginan Anda!
        </p>
      </div>
    </section>

    <!-- Produk Section -->
    <section class="products-section">
      <div class="product-grid">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="product-card"
        >
          <div class="image-wrapper">
            <img :src="product.gambar" :alt="product.grade" />
            <div class="price-tag">
              <span class="original">{{ product.hargaAsli }}</span>
              <span class="diskon">{{ product.hargaDiskon }}</span>
            </div>
          </div>
          <div class="card-content">
            <h2>{{ product.grade }}</h2>
            <ul class="details">
              <li><strong>Bahan:</strong> {{ product.bahan }}</li>
              <li><strong>Motif:</strong> {{ product.motif }}</li>
              <li><strong>Warna:</strong> {{ product.warna }}</li>
              <li><strong>Ukuran:</strong> {{ product.ukuran }}</li>
              <li><strong>Tebal:</strong> {{ product.tebal }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
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
    gambar:
      "https://images.perkasaracking.co.id/images/bfde99e0-d554-4509-416c-6881e792d600/heromobile",
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
    gambar:
      "https://images.perkasaracking.co.id/images/bfde99e0-d554-4509-416c-6881e792d600/heromobile",
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
    gambar:
      "https://images.perkasaracking.co.id/images/bfde99e0-d554-4509-416c-6881e792d600/heromobile",
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
    gambar:
      "https://images.perkasaracking.co.id/images/bfde99e0-d554-4509-416c-6881e792d600/heromobile",
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
    gambar:
      "https://images.perkasaracking.co.id/images/bfde99e0-d554-4509-416c-6881e792d600/heromobile",
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
    gambar:
      "https://images.perkasaracking.co.id/images/bfde99e0-d554-4509-416c-6881e792d600/heromobile",
  },
];
</script>

<style scoped lang="scss">
$primary-color: #d4af37;
$secondary-color: #333;
$bg-color: #fff;
$overlay-color: rgba(0, 0, 0, 0.5);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

/* HERO SECTION */
.hero-section {
  position: relative;
  background: url("https://images.unsplash.com/photo-1505576391880-c6a325c3c015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI2ODZ8MHwxfHNlYXJjaHwxfHxydWZ8ZW58MHx8fHwxNjg2NDY4NTUy&ixlib=rb-1.2.1&q=80&w=1080")
    center/cover no-repeat;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    background: $overlay-color;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;

    h1 {
      color: $bg-color;
      font-size: 2.8rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    p {
      color: lighten($bg-color, 20%);
      font-size: 1.2rem;
    }
  }
}

/* PRODUCTS SECTION */
.products-section {
  padding: 3rem 2rem;
  background: #f9f9f9;

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .product-card {
    background: $bg-color;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }

    .image-wrapper {
      position: relative;

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .price-tag {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background: rgba(255, 255, 255, 0.9);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .original {
          text-decoration: line-through;
          color: darken($secondary-color, 10%);
          font-size: 0.9rem;
        }

        .diskon {
          color: $primary-color;
          font-size: 1rem;
          font-weight: 700;
        }
      }
    }

    .card-content {
      padding: 1.5rem;
      text-align: center;

      h2 {
        font-size: 1.5rem;
        color: $primary-color;
        margin-bottom: 1rem;
      }

      .details {
        list-style: none;
        padding: 0;

        li {
          font-size: 0.9rem;
          color: $secondary-color;
          margin-bottom: 0.5rem;

          strong {
            color: $primary-color;
          }
        }
      }
    }
  }
}

/* RESPONSIVE ADJUSTMENTS */
@media (max-width: 768px) {
  .hero-section {
    height: 300px;

    .overlay {
      padding: 1.5rem;

      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  .products-section {
    padding: 2rem 1rem;

    .product-grid {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }

    .product-card {
      .image-wrapper {
        img {
          height: 180px;
        }
      }

      .card-content {
        padding: 1rem;

        h2 {
          font-size: 1.3rem;
        }

        .details {
          li {
            font-size: 0.85rem;
          }
        }
      }
    }
  }
}
</style>
