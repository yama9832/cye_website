<template>
  <nav aria-label="breadcrumb" class="breadcrumb-container">
    <ol class="breadcrumb-list">
      <li class="breadcrumb-item"><a href="#">トップ</a></li>
      <li class="breadcrumb-item active" aria-current="page">新着情報</li>
    </ol>
  </nav>
</template>
<script>
export default {
  name: 'AppBreadcrumb'
}
</script>
<style scoped>
.breadcrumb-container { margin-bottom: 1.5rem; }
.breadcrumb-list { display: flex; flex-wrap: wrap; list-style: none; margin: 0; padding: 0; font-size: 0.875rem; }
.breadcrumb-item a { color: #008037; text-decoration: none; }
.breadcrumb-item a:hover { text-decoration: underline; }
.breadcrumb-item.active { color: #6c757d; }
.breadcrumb-item+.breadcrumb-item::before { content: '/'; display: inline-block; padding: 0 0.5rem; color: #6c757d; }
</style>