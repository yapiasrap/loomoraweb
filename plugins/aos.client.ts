import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(() => {
  onMounted(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  });
});
