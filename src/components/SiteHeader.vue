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

    <transition name="mobile-nav-fade">
      <div class="mobile-nav" v-if="isMobileNavOpen">
        <ul>
          <li v-for="item in menuItems" :key="item.name">
            <details v-if="item.children">
              <summary>{{ item.name }}</summary>
              <div class="mobile-submenu">
                <div class="mobile-menu-column" v-for="category in item.children" :key="category.title">
                  <h4>{{ category.title }}</h4>
                  <ul>
                    <li v-for="link in category.links" :key="link.name">
                      <router-link :to="link.to" @click="isMobileNavOpen = false">{{ link.name }}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </details>
            <router-link v-else :to="item.to" class="mobile-nav-link" @click="isMobileNavOpen = false">{{ item.name }}</router-link>
          </li>
        </ul>
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
      menuItems: [
        {
          name: '基本情報', // 名称を「基本情報」に戻す
          // to プロパティを削除
          children: [
            {
              title: '国の基本情報',
              links: [
                { name: '基本情報', to: '/about' }, // 名称を「基本情報」に戻す
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
          // to プロパティを削除
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
          // to プロパティを削除
          children: [
            {
              title: '観光案内',
              links: [
                { name: '観光案内', to: '/tourism/guide' },
                { name: '国外からのアクセス', to: '/tourism/access' },
                { name: '交通情報', to: '/tourism/transport' },
              ],
            },
            {
              title: 'イベント',
              links: [
                { name: 'イベント情報', to: '/events' },
              ],
            },
          ],
        },
        {
          name: '参加・お問い合わせ',
          // to プロパティを削除
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
      menuTimer: null,
    };
  },
  watch: {
    '$route'() {
      this.activeMenu = null;
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
.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  border-top: 0.0625rem solid #e0e0e0;
  max-height: calc(100vh - 5.25rem);
  overflow-y: auto;
}
.mobile-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.mobile-nav details {
  border-bottom: 1px solid #f0f0f0;
}
.mobile-nav details:last-child, .mobile-nav-link:last-of-type {
  border-bottom: none;
}
.mobile-nav summary {
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  list-style: none;
}
.mobile-nav summary::-webkit-details-marker {
  display: none;
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
.mobile-nav-link {
  display: block;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
}
.mega-menu-fade-enter-active, .mega-menu-fade-leave-active {
  transition: opacity 0.3s ease;
}
.mega-menu-fade-enter-from, .mega-menu-fade-leave-to {
  opacity: 0;
}
.mobile-nav-fade-enter-active, .mobile-nav-fade-leave-active {
  transition: opacity 0.3s ease;
}
.mobile-nav-fade-enter-from, .mobile-nav-fade-leave-to {
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