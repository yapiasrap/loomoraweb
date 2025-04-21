<script setup>
definePageMeta({
  layout: "privacy",
});

useHead({
  title: "Kebijakan Privasi | Loomora",
  meta: [
    {
      name: "description",
      content:
        "Bagaimana Loomora menjaga dan menghargai privasi Anda saat menggunakan layanan kami. Temukan informasi lengkap di halaman ini.",
    },
  ],
});

useSeoMeta({
  robots: "noindex, nofollow",
});
</script>

<template>
  <section class="privacy-policy" data-aos="fade-up">
    <h1 data-aos="fade-right">Privasi Anda, Prioritas Kami</h1>
    <p data-aos="fade-right">
      <strong>Terakhir diperbarui:</strong> 19 April 2025
    </p>

    <p data-aos="fade-up">
      Terima kasih telah mempercayai <strong>Loomora</strong>. Kami tahu betapa
      pentingnya menjaga informasi pribadi Anda, dan kami berkomitmen untuk
      melindunginya sebaik mungkin. Halaman ini menjelaskan dengan jujur dan
      sederhana bagaimana kami menggunakan dan menjaga data Anda.
    </p>

    <h2 data-aos="fade-up">1. Informasi yang Kami Kumpulkan</h2>
    <p data-aos="fade-up">
      Kami hanya mengumpulkan informasi yang memang dibutuhkan, seperti:
    </p>
    <ul data-aos="fade-up">
      <li>
        Nama, email, dan nomor HP jika Anda menghubungi kami atau melakukan
        pemesanan.
      </li>
      <li>
        Data teknis, seperti halaman yang Anda kunjungi dan perangkat yang
        digunakan.
      </li>
      <li>
        Cookie — untuk memahami kebiasaan Anda dan membuat pengalaman di situs
        kami lebih personal.
      </li>
    </ul>

    <h2 data-aos="fade-up">2. Untuk Apa Data Itu Digunakan?</h2>
    <p data-aos="fade-up">
      Tujuannya sederhana — agar kami bisa melayani Anda lebih baik:
    </p>
    <ul data-aos="fade-up">
      <li>Menjawab pertanyaan atau permintaan Anda dengan cepat.</li>
      <li>Meningkatkan kualitas layanan dan tampilan website kami.</li>
      <li>Mengirim info atau promo (jika Anda memilih untuk menerimanya).</li>
    </ul>

    <h2 data-aos="fade-up">3. Tentang Cookie 🍪</h2>
    <p data-aos="fade-up">
      Cookie membantu kami memahami preferensi Anda. Tapi jangan khawatir, Anda
      bisa memilih untuk menolaknya lewat pengaturan browser.
    </p>

    <h2 data-aos="fade-up">4. Keamanan Data Anda</h2>
    <p data-aos="fade-up">
      Kami menjaga data Anda dengan hati-hati. Meskipun tidak ada sistem yang
      100% aman, kami terus memperbarui teknologi dan sistem kami untuk menjaga
      data tetap terlindungi.
    </p>

    <h2 data-aos="fade-up">5. Apakah Data Anda Dibagikan?</h2>
    <p data-aos="fade-up">
      Tidak pernah tanpa izin Anda. Kami hanya membagikan data jika:
    </p>
    <ul data-aos="fade-up">
      <li>Anda memberikan izin secara langsung.</li>
      <li>Itu diwajibkan oleh hukum.</li>
      <li>
        Dengan mitra tepercaya yang membantu kami menjalankan layanan (dengan
        kontrak yang jelas).
      </li>
    </ul>

    <h2 data-aos="fade-up">6. Hak Anda</h2>
    <p data-aos="fade-up">Karena ini data Anda, maka hak Anda juga penting:</p>
    <ul data-aos="fade-up">
      <li>Anda bisa meminta data Anda kapan pun.</li>
      <li>Anda bisa minta untuk menghapus atau memperbarui data tersebut.</li>
      <li>
        Anda bisa bilang “tidak” jika tak ingin data digunakan untuk promosi.
      </li>
    </ul>
    <p data-aos="fade-up">Cukup kirim email ke kami, dan kami akan bantu.</p>

    <h2 data-aos="fade-up">7. Perubahan Kebijakan Ini</h2>
    <p data-aos="fade-up">
      Jika kami mengubah kebijakan ini, kami akan beri tahu Anda di halaman ini.
      Kami tidak akan menyembunyikannya.
    </p>

    <h2 data-aos="fade-up">8. Butuh Bantuan atau Bertanya?</h2>
    <p data-aos="fade-up">
      Kami di sini untuk membantu. Silakan hubungi kami kapan saja:
    </p>
    <p data-aos="fade-up">
      📧 <a href="mailto:marketing@loomora.co.id">marketing@loomora.co.id</a
      ><br />
      🏠 Jl. Kebagusan Raya, Mawar No. 54 Pasar Minggu - Jakarta Selatan,
      12520<br />
      🌐
      <a href="https://www.loomora.co.id" target="_blank">www.loomora.co.id</a>
    </p>
  </section>
</template>

<style scoped lang="scss">
.privacy-policy {
  max-width: 850px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #2e2e2e;
  font-family: "Inter", sans-serif;

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: #bfa145;
    margin-bottom: 1.2rem;
  }

  h2 {
    margin-top: 2rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: #8c6f1d;
  }

  ul {
    padding-left: 1.4rem;
    list-style: disc;
    margin: 1rem 0;
  }

  a {
    color: #bfa145;
    text-decoration: underline;

    &:hover {
      color: #e6d17c;
    }
  }

  p {
    margin-bottom: 1rem;
  }
}
</style>
