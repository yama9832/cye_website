<template>
  <header class="site-header">
    <div class="top-bar"></div>
    <div class="main-header">
      <div class="logo-area">
        <img src="../assets/logo.png" alt="やんまー帝国連邦 ロゴ" class="site-logo">
      </div>
      <nav class="navigation">
        <ul @mouseleave="activeMenu = null">
          <li
            v-for="item in menuItems"
            :key="item.name"
            @mouseover="activeMenu = item.name"
          >
            <a href="#">{{ item.name }}</a>
            <transition name="mega-menu-fade">
              <div class="mega-menu" v-if="activeMenu === item.name">
                <div class="mega-menu-content">
                  <div
                    class="mega-menu-column"
                    v-for="category in item.children"
                    :key="category.title"
                  >
                    <h3>{{ category.title }}</h3>
                    <ul>
                      <li v-for="link in category.links" :key="link.name">
                        <a :href="link.url">{{ link.name }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      activeMenu: null,
      menuItems: [
        {
          name: '帝国連邦について',
          children: [
            {
              title: '国の基本情報',
              links: [
                { name: '基本情報', url: '#' },
                { name: '構成国', url: '#' },
                { name: '憲法', url: '#' },
                { name: '国王陛下あいさつ', url: '#' },
              ],
            },
            {
              title: '国の組織',
              links: [
                { name: '帝国議会', url: '#' },
                { name: '内閣', url: '#' },
                { name: '府省庁', url: '#' },
                { name: '裁判所', url: '#' },
              ],
            },
          ],
        },
        {
          name: '国政情報',
          children: [
            {
              title: '政策・広報',
              links: [
                { name: '政策', url: '#' },
                { name: '予算', url: '#' },
                { name: '広報', url: '#' },
              ],
            },
            {
              title: '各種一覧',
              links: [
                { name: '国内法人', url: '#' },
                { name: 'ロール', url: '#' },
              ],
            },
          ],
        },
        {
          name: '観光・イベント',
          children: [
            {
              title: '観光案内',
              links: [
                { name: '観光案内', url: '#' },
                { name: '国外からのアクセス', url: '#' },
                { name: '交通情報', url: '#' },
              ],
            },
            {
              title: 'イベント',
              links: [
                { name: 'イベント情報', url: '#' },
              ],
            },
          ],
        },
        {
          name: '参加・お問い合わせ',
          children: [
            {
              title: '連邦に参加',
              links: [
                { name: '製作メンバーになる', url: '#' },
                { name: 'サーバーのルール', url: '#' },
              ],
            },
            {
              title: 'サポート',
              links: [
                { name: 'よくある質問', url: '#' },
                { name: 'お問い合わせ', url: '#' },
              ],
            },
          ]
        },
      ],
    };
  },
};
</script>

<style scoped>
.site-header {
  width: 100%;
  z-index: 100;
}

.top-bar {
  width: 100%;
  height: 0.25rem;
  background-color: #008037;
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0 2.5rem;
  background-color: #ffffff;
  border-bottom: 0.0625rem solid #e0e0e0;
  position: relative;
  box-sizing: border-box;
}

.logo-area {
  display: flex;
  align-items: center;
}

.site-logo {
  height: 3.5rem;
  width: auto;
}

.navigation ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navigation > ul > li {
  padding: 1.25rem;
}

.navigation > ul > li > a {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  transition: color 0.3s;
}

.navigation > ul > li:hover > a {
  color: #008037;
}

.mega-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  border-top: 0.1875rem solid #008037;
  padding: 1.25rem 2.5rem;
  box-sizing: border-box;
}

.mega-menu-content {
  display: flex;
  gap: 2.5rem;
  max-width: 75rem;
  margin: 0 auto;
}

.mega-menu-column {
  min-width: 11.25rem;
}

.mega-menu-column h3 {
  font-size: 1rem;
  color: #008037;
  margin-top: 0;
  margin-bottom: 0.9375rem;
  padding-bottom: 0.625rem;
  border-bottom: 0.0625rem solid #e0e0e0;
  font-weight: 700;
}

.mega-menu-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mega-menu-column ul li a {
  text-decoration: none;
  color: #333;
  font-size: 0.875rem;
}

.mega-menu-column ul li a:hover {
  text-decoration: underline;
}

.mega-menu-fade-enter-active,
.mega-menu-fade-leave-active {
  transition: opacity 0.2s ease;
}

.mega-menu-fade-enter,
.mega-menu-fade-leave-to {
  opacity: 0;
}
</style>