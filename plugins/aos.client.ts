import AOS from "aos";
import "aos/dist/aos.css"; // pastikan ini ada

export default defineNuxtPlugin((nuxtApp) => {
  // Init sekali saat app di‑mounted
  nuxtApp.hook("app:mounted", () => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  });

  // Refresh setiap selesai navigasi
  nuxtApp.hook("page:finish", () => {
    AOS.refresh();
  });
});
