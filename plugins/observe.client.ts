import { type Directive } from "vue";

const observe: Directive = {
  mounted(el) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("observe", observe);
});
