<script setup>
const projects = [
  {
    title: "Ballroom - Hotel Mulia, Jakarta",
    subtitle: "Karpet Ballroom",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/21c2cd2f-16c2-43c5-8b1a-6f4b4d6a5700/kotak300",
    alt: "Karpet Ballroom dengan desain elegan",
  },

  {
    title: "Kantor - Menara Astra, Jakarta",
    subtitle: "Karpet Kantor",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/841a560e-bd9b-4b50-9dd3-9594d3ed2100/kotak300",
    alt: "Karpet kantor dengan desain modern",
  },

  {
    title: "Aula Kampus - UIN Jakarta",
    subtitle: "Karpet Ruang Kuliah",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/78468be4-c4fa-4aef-ed59-b9036cf57a00/kotak300",
    alt: "Karpet ruang kuliah di UIN Jakarta",
  },
];
</script>

<template>
  <a-container class="last-projects">
    <!-- Title Section -->
    <a-row class="title-section justify-center mb-8">
      <a-col class="col text-center">
        <h1 class="section-title">Last Project</h1>
        <div class="divider">
          <span class="line"></span>
          <span class="dot"></span>
          <span class="line"></span>
        </div>
      </a-col>
    </a-row>

    <!-- Grid Project -->
    <a-row class="project-grid">
      <a-col
        v-for="(project, index) in projects"
        :key="index"
        class="col-12 col-sm-6 col-md-4 p-1"
      >
        <a-cards class="project-card" width="100%">
          <div
            class="image with-overlay"
            :style="{ backgroundImage: 'url(' + project.image + ')' }"
          >
            <div class="text-content">
              <p class="subtitle">{{ project.subtitle }}</p>
              <p class="title">{{ project.title }}</p>
            </div>
          </div>
        </a-cards>
      </a-col>
    </a-row>
  </a-container>
</template>

<style scoped lang="scss">
/* Container khusus Last Projects */
.last-projects {
  padding: 2rem 0;

  .title-section {
    margin-bottom: 2rem;

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

    .divider {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.5rem;

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
  }

  .project-grid {
    .project-card {
      border: none;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      overflow: hidden;
      transition: box-shadow 0.3s ease;
      margin-bottom: 1.5rem;

      &:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      }
    }
  }
}

/* Styling gambar, overlay, dan teks */
.image {
  position: relative;
  background-size: cover;
  background-position: center;
  height: 400px;
  transition: transform 0.3s ease-in-out;

  // Responsif untuk layar lebih kecil
  @media (max-width: 576px) {
    height: 250px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 350px;
  }
}

/* Gradient overlay untuk memberikan kesan dramatis */
.with-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
}

.image:hover {
  transform: scale(1.05);
}

.text-content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  color: #fff;
  z-index: 2;
  transition: transform 0.3s ease, opacity 0.3s ease;

  .subtitle {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
  }

  .title {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 5px 0 0;
  }
}

.image:hover .text-content {
  transform: translateY(-10px);
}
</style>
