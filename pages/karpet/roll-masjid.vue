<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Karpet Roll Masjid</h1>
        <p>
          Kualitas unggul untuk memperindah setiap masjid. Temukan karpet roll yang
          elegan dan berkualitas untuk menunjang keindahan ruang ibadah Anda.
        </p>
        <button class="btn-order">Pesan Sekarang</button>
      </div>
    </section>

    <!-- Karpet Section -->
    <section class="karpet-section">
      <div class="section-header">
        <h2>Pilihan Karpet Roll Masjid</h2>
        <p>
          Pilih dari ragam karpet roll yang telah dikurasi secara khusus untuk masjid,
          dengan bahan dan kualitas terbaik.
        </p>
      </div>
      <div class="karpet-grid">
        <div 
          v-for="(product, index) in products" 
          :key="index" 
          class="karpet-card"
        >
          <div class="card-image">
            <img :src="product.gambar" :alt="product.grade" />
            <div class="price-tag">
              <span class="original">{{ product.hargaAsli }}</span>
              <span class="diskon">{{ product.hargaDiskon }}</span>
            </div>
          </div>
          <div class="card-body">
            <h3>{{ product.grade }}</h3>
            <ul class="product-details">
              <li><strong>Bahan:</strong> {{ product.bahan }}</li>
              <li><strong>Motif:</strong> {{ product.motif }}</li>
              <li><strong>Warna:</strong> {{ product.warna }}</li>
              <li><strong>Ukuran:</strong> {{ product.ukuran }}</li>
              <li><strong>Tebal:</strong> {{ product.tebal }}</li>
            </ul>
            <button class="btn-order">Pesan Sekarang</button>
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
/* Variabel Warna */
$primary-color: #d4af37;  // aksen emas
$secondary-color: #333;
$bg-color: #fff;
$accent-color: #f5f5f5;
$btn-bg: $primary-color;
$btn-hover: darken($btn-bg, 10%);

/* Global Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Helvetica Neue", Arial, sans-serif;
  background: $accent-color;
  color: $secondary-color;
}

/* HERO SECTION */
.hero-section {
  position: relative;
  height: 500px;
  background: linear-gradient(
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    url("https://images.unsplash.com/photo-1594737625785-2c0e7d023f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI2ODZ8MHwxfHNlYXJjaHwzfHxNYXNpZHN8ZW58MHx8fHwxNjg2ODg4NDkz&ixlib=rb-1.2.1&q=80&w=1080")
      center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;

  .hero-content {
    color: $bg-color;
    max-width: 800px;
    
    h1 {
      font-size: 3.2rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    
    p {
      font-size: 1.4rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .btn-order {
      background: $btn-bg;
      color: $bg-color;
      border: none;
      border-radius: 30px;
      padding: 0.8rem 1.8rem;
      font-size: 1.1rem;
      cursor: pointer;
      transition: background 0.3s ease, transform 0.3s ease;
      
      &:hover {
        background: $btn-hover;
        transform: scale(1.03);
      }
    }
  }
}

/* KARPET SECTION */
.karpet-section {
  padding: 4rem 2rem;
  background: $bg-color;
  
  .section-header {
    text-align: center;
    margin-bottom: 2.5rem;
    
    h2 {
      font-size: 2.8rem;
      color: $primary-color;
      margin-bottom: 0.5rem;
    }
    
    p {
      font-size: 1.1rem;
      color: $secondary-color;
    }
  }
  
  .karpet-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .karpet-card {
    background: $accent-color;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
    
    .card-image {
      position: relative;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 220px;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
      
      &:hover img {
        transform: scale(1.05);
      }
      
      .price-tag {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background: rgba(255, 255, 255, 0.95);
        padding: 0.4rem 0.8rem;
        border-radius: 20px;
        text-align: right;
        
        .original {
          text-decoration: line-through;
          font-size: 0.8rem;
          color: $secondary-color;
        }
        
        .diskon {
          font-size: 1rem;
          font-weight: bold;
          color: $primary-color;
        }
      }
    }
    
    .card-body {
      padding: 1.2rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      h3 {
        font-size: 1.5rem;
        color: $primary-color;
        margin-bottom: 1rem;
      }
      
      .product-details {
        list-style: none;
        width: 100%;
        margin-bottom: 1.5rem;
        
        li {
          font-size: 0.9rem;
          color: $secondary-color;
          margin-bottom: 0.5rem;
          
          strong {
            color: $primary-color;
          }
        }
      }
      
      .btn-order {
        background: $btn-bg;
        color: $bg-color;
        border: none;
        border-radius: 30px;
        padding: 0.7rem 1.5rem;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.3s ease;
        width: 100%;
        text-align: center;
        
        &:hover {
          background: $btn-hover;
          transform: scale(1.02);
        }
      }
    }
  }
}

/* RESPONSIVE ADJUSTMENTS */
@media (max-width: 768px) {
  .hero-section {
    height: 380px;
    .hero-content {
      h1 {
        font-size: 2.6rem;
      }
      p {
        font-size: 1.2rem;
      }
      .btn-order {
        font-size: 1rem;
        padding: 0.7rem 1.5rem;
      }
    }
  }
  
  .karpet-section {
    padding: 3rem 1rem;
    .section-header {
      h2 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1rem;
      }
    }
    
    .karpet-grid {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
    
    .karpet-card {
      .card-image {
        img {
          height: 200px;
        }
      }
      .card-body {
        h3 {
          font-size: 1.3rem;
        }
        .product-details {
          li {
            font-size: 0.85rem;
          }
        }
        .btn-order {
          font-size: 0.95rem;
          padding: 0.6rem 1.2rem;
        }
      }
    }
  }
}
</style>
