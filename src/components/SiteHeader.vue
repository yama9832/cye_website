<template>
  <header class="site-header">
    <div class="top-bar"></div>
    <div class="main-header">
      <div class="main-header-content">
        <div class="logo-area">
          <router-link to="/">
            <img src="@/assets/logo.png" alt="やんまー帝国連邦 ロゴ" class="site-logo">
          </router-link>
        </div>

        <nav class="navigation">
          <ul>
            <li v-for="item in menuItems" :key="item.name" @mouseover="handleMouseOver(item)" @mouseleave="handleMouseLeave()">
              <span class="nav-item-name">{{ item.name }}</span>
              <transition :name="isSwitching ? '' : 'mega-menu-fade'">
                <div class="mega-menu" v-if="activeMenu === item.name && item.children" @mouseover="handleMouseOver(item)" @mouseleave="handleMouseLeave()">
                  <div class="mega-menu-content">
                    <div class="mega-menu-column" v-for="category in item.children" :key="category.title">
                      <h3>{{ category.title }}</h3>
                      <ul>
                        <li v-for="link in category.links" :key="link.name">
                          <router-link :to="link.to">{{ link.name }}</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </transition>
            </li>
          </ul>
        </nav>

        <div class="header-right">
          <SearchBar />
          <button class="hamburger-menu" @click="isMobileNavOpen = !isMobileNavOpen" aria-label="メニューを開く">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Overlay for mobile menu -->
    <transition name="overlay-fade">
      <div class="mobile-nav-overlay" v-if="isMobileNavOpen" @click="isMobileNavOpen = false"></div>
    </transition>
    
    <!-- Right-side slide menu -->
    <transition name="mobile-nav-slide">
      <div class="mobile-nav" v-if="isMobileNavOpen">
        <div class="mobile-nav-header">
          <button class="close-menu" @click="isMobileNavOpen = false" aria-label="メニューを閉じる">
            <span class="close-icon">×</span>
          </button>
        </div>
        <nav class="mobile-nav-content">
          <ul>
            <li v-for="item in mobileMenuItems" :key="item.name">
              <router-link :to="item.to" @click="isMobileNavOpen = false">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
  name: 'SiteHeader',
  components: {
    SearchBar
  },
  data() {
    return {
      activeMenu: null,
      isMobileNavOpen: false,
      isSwitching: false,
      // Desktop menu items with mega menu structure
      menuItems: [
        {
          name: '基本情報',
          children: [
            {
              title: '国の基本情報',
              links: [
                { name: '基本情報', to: '/about' },
                { name: '構成国', to: '/nations' },
                { name: '憲法', to: '/constitution' },
              ],
            },
            {
              title: '国の組織',
              links: [
                { name: '帝国議会', to: '/government/diet' },
                { name: '府省庁', to: '/government/ministries' },
                { name: '裁判所', to: '/government/courts' },
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
                { name: '政策', to: '/politics/policy' },
                { name: '予算', to: '/politics/budget' },
                { name: '広報', to: '/politics/pr' },
              ],
            },
            {
              title: '各種一覧',
              links: [
                { name: '国内法人', to: '/corporations' },
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
                { name: '建築ギャラリー', to: '/gallery' }, 
                { name: '観光案内', to: '/tourism/guide' },
                { name: '交通情報', to: '/tourism/transport' },
              ],
            },
            {
              title: 'イベント',
              links: [
                { name: 'イベント情報', to: '/events' },
                { name: 'ブログ', to: '/blog' }, 
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
                { name: '製作メンバーになる', to: '/join' },
                { name: 'サーバールール', to: '/rules' },
                { name: 'ロール', to: '/roles' },
              ],
            },
            {
              title: 'サポート',
              links: [
                { name: 'よくある質問', to: '/faq' },
                { name: 'お問い合わせ', to: '/contact' },
              ],
            },
          ]
        },
      ],
      // Simplified mobile menu items for hamburger menu
      mobileMenuItems: [
        { name: 'ホーム', to: '/' },
        { name: '基本情報', to: '/about' },
        { name: 'ニュース', to: '/blog' },
        { name: 'イベント', to: '/events' },
        { name: '参加方法', to: '/join' },
        { name: 'お問い合わせ', to: '/contact' },
      ],
      menuTimer: null,
    };
  },
  watch: {
    '$route'() {
      this.activeMenu = null;
      this.isMobileNavOpen = false; // [追加] ルート変更時にモバイルメニューを閉じる
    }
  },
  methods: {
    handleMouseOver(item) {
      if (this.menuTimer) {
        clearTimeout(this.menuTimer);
      }
      if (this.activeMenu && this.activeMenu !== item.name) {
        this.isSwitching = true;
      } else {
        this.isSwitching = false;
      }
      this.activeMenu = item.name;
    },
    handleMouseLeave() {
      this.menuTimer = setTimeout(() => {
        this.activeMenu = null;
        this.isSwitching = false;
      }, 150);
    },
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
  height: 5rem;
  background-color: #ffffff;
  border-bottom: 0.0625rem solid #e0e0e0;
  box-sizing: border-box;
}

.main-header-content {
  max-width: 80rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 2.5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-area {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.site-logo {
  height: 3.5rem;
  width: auto;
}
.navigation {
  display: none;
  margin: 0 auto;
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
.nav-item-name {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  transition: color 0.3s;
  cursor: default;
}
.navigation>ul>li:hover>.nav-item-name {
  color: #008037;
}
.mega-menu {
  position: absolute;
  top: 5.25rem;
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
.mega-menu-column ul li a:hover, .mega-menu-column ul li a.router-link-exact-active {
  text-decoration: underline;
  color: #008037;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
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

/* Mobile nav overlay */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* Mobile nav panel - slides from right */
.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  max-width: 80%;
  background-color: #fff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.mobile-nav-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
}

.close-menu {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-icon {
  font-size: 2rem;
  color: #333;
  font-weight: 300;
  line-height: 1;
}

.mobile-nav-content {
  flex: 1;
  overflow-y: auto;
}

.mobile-nav-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav-content li {
  border-bottom: 1px solid #f0f0f0;
}

.mobile-nav-content li:last-child {
  border-bottom: none;
}

.mobile-nav-content a {
  display: block;
  padding: 1.25rem 1.5rem;
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.mobile-nav-content a:hover,
.mobile-nav-content a.router-link-active {
  background-color: #f8f8f8;
  color: #008037;
}

/* Animations for overlay */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

/* Animations for mobile nav slide */
.mobile-nav-slide-enter-active,
.mobile-nav-slide-leave-active {
  transition: transform 0.3s ease;
}

.mobile-nav-slide-enter-from,
.mobile-nav-slide-leave-to {
  transform: translateX(100%);
}

/* Mega menu fade animation for desktop */
.mega-menu-fade-enter-active, 
.mega-menu-fade-leave-active {
  transition: opacity 0.3s ease;
}

.mega-menu-fade-enter-from, 
.mega-menu-fade-leave-to {
  opacity: 0;
}
@media (min-width: 992px) {
  .navigation {
    display: flex;
  }
  .hamburger-menu {
    display: none;
  }
}
@media (max-width: 991px) {
  .main-header-content {
    width: 100%;
    padding: 0 1.5rem;
    box-sizing: border-box;
  }
  .site-logo {
    height: 3rem;
  }
  .header-right > .search-box {
    display: none;
  }
}
</style>
