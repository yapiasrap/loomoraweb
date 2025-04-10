<template>
  <section class="parallax">
    <div class="overlay"></div>

    <a-container class="konten">
      <div class="content align-center">
        <div class="left">
          <h2 class="title">Keunggulan Layanan Kustom Karpet</h2>
        </div>

        <div class="right">
          <div class="stats">
            <div class="stat">
              <div class="divider"></div>

              <div class="info">
                <h3 class="number">164 +</h3>
                <p class="desc">Implementasi Proyek Pemerintah</p>
              </div>
            </div>

            <div class="stat">
              <div class="divider"></div>

              <div class="info">
                <h3 class="number">378 +</h3>
                <p class="desc">Kolaborasi Proyek Swasta</p>
              </div>
            </div>

            <div class="stat">
              <div class="divider"></div>

              <div class="info">
                <h3 class="number">532 +</h3>
                <p class="desc">Desain Karpet Masjid</p>
              </div>
            </div>
          </div>

          <p class="subtext">
            Optimalkan ruang Anda dengan karpet kustom berkualitas tinggi –
            hubungi tim profesional kami untuk konsultasi.
          </p>
          <a-button text="Send Message" />
        </div>
      </div>
    </a-container>
  </section>
</template>

<style scoped lang="scss">
.parallax {
  position: relative;
  height: 400px;
  background: url("/images/project/8.jpeg") center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow: hidden;

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.3)
    );
    z-index: 1;
  }

  .konten {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    width: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
  }

  .content {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .left {
    flex: 1;
    text-align: left;

    .title {
      color: #fff;
      font-size: 2.5rem;
      margin: 0;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 768px) {
      text-align: center;
      .title {
        font-size: 2rem;
      }
    }
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
      align-items: center;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      width: 100%;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }

      .stat {
        background: rgba(0, 0, 0, 0.4);
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        transition: transform 0.3s, box-shadow 0.3s;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .divider {
          width: 50px;
          height: 4px;
          background: #d4af37;
          margin: 0 auto 0.5rem;
          border-radius: 2px;
        }

        .info {
          .number {
            color: #d4af37;
            font-size: 2rem;
            margin: 0;
          }
          .desc {
            color: #fff;
            font-size: 0.9rem;
            margin: 0;
            opacity: 0.9;
          }
        }
      }
    }

    .subtext {
      color: #fff;
      font-size: 1rem;
      margin-bottom: 1rem;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
