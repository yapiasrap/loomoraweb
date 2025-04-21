<script setup>
const banner = { judul: "Butuh Bantuan?" };

useSeoMeta({
  robots: "noindex, nofollow",
});
</script>

<template>
  <Top :operandata="banner" />

  <section class="contact-wrapper">
    <!-- Header -->
    <div class="contact-header" data-aos="fade-up">
      <h1 class="section-title">Konsultasi Karpet</h1>
      <div class="divider">
        <span class="line"></span>
        <span class="dot"></span>
        <span class="line"></span>
      </div>

      <p>
        Kami siap bantu wujudkan karpet yang sesuai dengan gaya, fungsi, dan
        karakter ruang Anda.
      </p>
    </div>

    <!-- Content -->
    <div class="contact-content">
      <!-- Left Image & Info -->
      <div class="contact-image" data-aos="fade-right">
        <img
          src="https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/52b89b5a-b42a-48eb-216a-83019f0c3800/mobile"
          alt="Contact Loomora Kustom Karpet"
        />

        <div class="overlay">
          <h2>Live Chat 24 Jam</h2>
          <p>Konsultasi langsung via Chat / WA</p>

          <div class="button-group">
            <a-button id="submit" text="Whatsapp" />
          </div>

          <div class="social-icons">
            <a href="#"><i class="mdi mdi-instagram"></i></a>
            <a href="#"><i class="mdi mdi-facebook"></i></a>
            <a href="#"><i class="mdi mdi-email-outline"></i></a>
          </div>
        </div>
      </div>

      <!-- Right Form -->
      <form class="contact-form" data-aos="fade-left">
        <div class="input-group">
          <input type="text" placeholder="Nama Lengkap" required />
          <input type="email" placeholder="Email" required />
        </div>
        <textarea placeholder="Pesan Anda" required></textarea>
        <a-button id="submit" text="Kirim Pesan" class="p-1" />
      </form>
    </div>

    <!-- Google Maps -->
    <div class="maps" data-aos="fade-up">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.9821937782347!2d106.82266091609638!3d-6.175392462288733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d061b74083%3A0x90d8409c07d31b8c!2sMonas!5e0!3m2!1sen!2sid!4v1612929627787!5m2!1sen!2sid"
        width="100%"
        height="300"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
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

.contact-wrapper {
  padding: 60px 20px;
  max-width: 1200px;
  margin: auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 40px;
}

.contact-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.contact-image {
  flex: 1;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.contact-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 75px;
  text-align: center;
}

.button-group {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
}

.btn-wa,
.btn-call {
  background: #d4af37;
  color: #121212;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.social-icons {
  margin-top: 15px;
}

.social-icons a {
  color: #d4af37;
  font-size: 24px;
  margin: 0 8px;
}

.contact-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.input-group input,
textarea {
  flex: 1 1 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

textarea {
  min-height: 120px;
}

button[type="submit"] {
  background: #121212;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

button[type="submit"]:hover {
  background: #d4af37;
  color: #121212;
}

.maps {
  margin-top: 40px;
  border-radius: 10px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
  }

  .input-group {
    flex-direction: column;
  }
}
</style>
