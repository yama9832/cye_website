<template>
  <nav v-if="breadcrumbs.length > 0" aria-label="breadcrumb" class="breadcrumb-container">
    <ol class="breadcrumb-list">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="breadcrumb-item"
      >
        <!-- 最後の項目は現在のページなのでリンクにしない -->
        <span v-if="index === breadcrumbs.length - 1">{{ crumb.text }}</span>
        
        <!-- 'to'プロパティがあればリンクにする（主にトップページ用） -->
        <router-link v-else-if="crumb.to" :to="crumb.to">{{ crumb.text }}</router-link>
        
        <!-- 'to'がなければただのテキスト（階層カテゴリ用） -->
        <span v-else>{{ crumb.text }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
  computed: {
    breadcrumbs() {
      // ルートのmeta情報に breadcrumb がなければ何も表示しない
      if (!this.$route.meta.breadcrumb || this.$route.meta.breadcrumb.length === 0) {
        return [];
      }
      
      // 先頭に「トップ」を追加
      const crumbs = [{ text: 'トップ', to: '/' }];
      
      // ルーターで定義したパンくずリストを追加
      crumbs.push(...this.$route.meta.breadcrumb);
      
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
/* クリックできないテキストの色 */
.breadcrumb-item span {
  color: #6c757d;
}
/* 区切り文字 */
.breadcrumb-item + .breadcrumb-item::before {
  content: '>';
  display: inline-block;
  padding: 0 0.5rem;
  color: #6c757d;
}
</style>
