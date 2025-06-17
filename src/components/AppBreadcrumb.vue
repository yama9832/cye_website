<template>
  <nav v-if="breadcrumbs.length > 1" aria-label="breadcrumb" class="breadcrumb-container">
    <ol class="breadcrumb-list">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="breadcrumb-item"
        :class="{ 'active': index === breadcrumbs.length - 1 }"
      >
        <router-link v-if="index < breadcrumbs.length - 1" :to="crumb.to">
          {{ crumb.text }}
        </router-link>
        <span v-else>
          {{ crumb.text }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
  computed: {
    breadcrumbs() {
      const crumbs = [];

      crumbs.push({ text: 'トップ', to: '/' });

      if (this.$route.meta.breadcrumb) {
        crumbs.push({
          text: this.$route.meta.breadcrumb,
          to: this.$route.fullPath,
        });
      }

      return crumbs;
    },
  },
};
</script>

<style scoped>
.breadcrumb-container {
  margin-bottom: 1.5rem;
}
.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
}
.breadcrumb-item a {
  color: #008037;
  text-decoration: none;
}
.breadcrumb-item a:hover {
  text-decoration: underline;
}
.breadcrumb-item.active {
  color: #6c757d;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: '/';
  display: inline-block;
  padding: 0 0.5rem;
  color: #6c757d;
}
</style>