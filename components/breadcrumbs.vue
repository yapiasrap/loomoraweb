<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const breadcrumbs = computed(() => {
  const pathSegments = route.path.split("/").filter(Boolean);
  let path = "";

  return pathSegments.map((segment, index) => {
    path += `/${segment}`;
    return {
      text: segment.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      href: path,
      disabled: index == pathSegments.length - 1,
    };
  });
});
</script>

<template>
  <nav aria-label="breadcrumb" class="breadcrumbs mt-3">
    <ul class="breadcrumb-list">
      <li class="breadcrumb-item">
        <a
          href="/"
          class="breadcrumb-link font-weight-bold"
          style="text-decoration: underline; margin-top: -5%"
        >
          Beranda
        </a>
      </li>

      <li class="breadcrumb-divider">/</li>

      <template v-for="(item, index) in breadcrumbs" :key="index">
        <li class="breadcrumb-item" :class="{ disabled: item.disabled }">
          <template v-if="!item.disabled">
            <a :href="item.href" class="breadcrumb-link">{{ item.text }}</a>
          </template>

          <template v-else>
            <span class="breadcrumb-text">{{ item.text }}</span>
          </template>
        </li>

        <li v-if="index < breadcrumbs.length - 1" class="breadcrumb-divider">
          /
        </li>
      </template>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  display: block;
}

.breadcrumb-list {
  list-style: none;
  margin-top: 3%;
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 576px) {
  .breadcrumb-list {
    margin-left: -15px;
  }
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-divider {
  margin: 0 8px;
  color: #000;
}

.breadcrumb-link {
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
}



.breadcrumb-text {
  font-size: 1rem;
}

.disabled {
  .breadcrumb-link,
  .breadcrumb-text {
    pointer-events: none;
    opacity: 0.6;
  }
}

@media (max-width: 576px) {
  .breadcrumb-link,
  .breadcrumb-text {
    font-size: 0.9rem;
  }
  .breadcrumb-divider {
    margin: 0 4px;
  }
}
</style>
