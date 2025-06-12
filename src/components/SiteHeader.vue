<template>
  <header class="site-header">
    <div class="top-bar"></div>
    <div class="main-header">
      <div class="logo-area">
        <img src="../assets/logo.png" alt="やんまー帝国連邦 ロゴ" class="site-logo">
      </div>

      <!-- Desktop Navigation -->
      <nav class="navigation">
        <ul @mouseleave="activeMenu = null">
          <li v-for="item in menuItems" :key="item.name" @mouseover="activeMenu = item.name">
            <a href="#">{{ item.name }}</a>
            <transition name="mega-menu-fade">
              <div class="mega-menu" v-if="activeMenu === item.name">
                <div class="mega-menu-content">
                  <div class="mega-menu-column" v-for="category in item.children" :key="category.title">
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

      <!-- Hamburger Menu Button -->
      <button class="hamburger-menu" @click="isMobileNavOpen = !isMobileNavOpen" aria-label="メニューを開く">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

    </div>

    <!-- Mobile Navigation -->
    <transition name="mobile-nav-fade">
      <div class="mobile-nav" v-if="isMobileNavOpen">
        <ul>
          <li v-for="item in menuItems" :key="item.name">
            <details>
              <summary>{{ item.name }}</summary>
              <div class="mobile-submenu">
                <div class="mobile-menu-column" v-for="category in item.children" :key="category.title">
                  <h4>{{ category.title }}</h4>
                  <ul>
                    <li v-for="link in category.links" :key="link.name">
                      <a :href="link.url" @click="isMobileNavOpen = false">{{ link.name }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </details>
          </li>
        </ul>
      </div>
    </transition>

  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      activeMenu: null,
      isMobileNavOpen: false,
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
                { name: 'サーバールール', url: '#' },
                { name: 'ロール', url: '#' },
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
  position: relative;
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

.navigation {
  display: none;
}

.navigation ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navigation>ul>li {
  padding: 1.25rem;
}

.navigation>ul>li>a {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  transition: color 0.3s;
}

.navigation>ul>li:hover>a {
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

.hamburger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 110;
}

.hamburger-line {
  width: 2rem;
  height: 0.25rem;
  background: #333;
  border-radius: 0.625rem;
}

.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  border-top: 0.0625rem solid #e0e0e0;
}

.mobile-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav details {
  border-bottom: 1px solid #f0f0f0;
}
.mobile-nav details:last-child {
  border-bottom: none;
}

.mobile-nav summary {
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  list-style: none; /* Hide default arrow */
}

.mobile-nav summary::-webkit-details-marker {
  display: none; /* Hide default arrow for Chrome/Safari */
}

.mobile-submenu {
  padding: 0 1.5rem 1rem 1.5rem;
  background-color: #f8f8f8;
}

.mobile-menu-column {
  padding-top: 1rem;
}
.mobile-menu-column:first-child {
  padding-top: 0;
}

.mobile-menu-column h4 {
  font-size: 1rem;
  color: #008037;
  margin: 0 0 0.5rem 0;
}

.mobile-menu-column ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-menu-column a {
  display: block;
  padding: 0.5rem 0;
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
}

.mobile-nav-fade-enter-active,
.mobile-nav-fade-leave-active,
.mega-menu-fade-enter-active,
.mega-menu-fade-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-nav-fade-enter,
.mobile-nav-fade-leave-to,
.mega-menu-fade-enter,
.mega-menu-fade-leave-to {
  opacity: 0;
}

/* Tablet and Desktop Styles */
@media (min-width: 992px) {
  .navigation {
    display: flex;
  }
  .hamburger-menu {
    display: none;
  }
  .mobile-nav {
    display: none;
  }
}

/* Mobile specific adjustments */
@media (max-width: 991px) {
  .main-header {
    padding: 0 1.5rem;
  }
  .site-logo {
    height: 3rem;
  }
}
</style>