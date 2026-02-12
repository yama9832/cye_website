<template>
  <header class="site-header">
    <div class="top-bar"></div>
    <div class="main-header">
      <div class="main-header-content">
        <div class="logo-area">
          <router-link to="/">
            <img
              src="@/assets/optimized/logo-224.png"
              srcset="@/assets/optimized/logo-224.png 1x, @/assets/optimized/logo-448.png 2x"
              alt="やんまー帝国連邦 ロゴ"
              class="site-logo"
              width="224"
              height="56"
              decoding="async"
            >
          </router-link>
        </div>

        <nav class="navigation">
          <ul>
            <li v-for="item in menuItems" :key="item.name">
              <router-link
                :to="item.to"
                class="nav-item-name nav-link"
                :class="{ 'is-active': isMenuActive(item) }"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="header-actions">
          <button
            class="header-icon-button"
            @click="openSearchMenu"
            aria-label="サイト内検索を開く"
            :aria-expanded="isMobileNavOpen.toString()"
          >
            <span class="material-icons">search</span>
            <span class="header-icon-label">サイト内検索</span>
          </button>
          <button
            class="header-icon-button"
            @click="toggleMobileNav"
            aria-label="メニューを開く"
            :aria-expanded="isMobileNavOpen.toString()"
            aria-controls="site-mobile-nav"
          >
            <span class="hamburger-icon">
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
            </span>
            <span class="header-icon-label">メニュー</span>
          </button>
        </div>
      </div>
    </div>

    <div v-if="activeSubmenu" class="subnav">
      <div class="subnav-inner">
        <button class="subnav-toggle" @click="toggleSubnav" type="button">
          {{ activeSubmenu.name }}のカテゴリを選択する
        </button>
        <div
          class="subnav-links"
          :class="{ 'is-open': isSubnavOpen, 'is-three': activeSubmenu && activeSubmenu.name === '参加方法' }"
        >
          <router-link
            v-for="link in flattenLinks(activeSubmenu.children)"
            :key="link.name"
            :to="link.to"
            class="subnav-link"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>

    <transition name="mobile-nav-fade">
      <div class="mobile-nav-overlay" v-if="isMobileNavOpen" @click="closeMobileNav"></div>
    </transition>
    <transition name="mobile-nav-slide">
      <div class="mobile-nav" v-if="isMobileNavOpen" id="site-mobile-nav">
        <div class="mobile-nav-header">
          <span class="mobile-nav-title">メニュー</span>
          <button class="mobile-nav-close" @click="closeMobileNav" aria-label="メニューを閉じる">
            ×
          </button>
        </div>
        <div class="mobile-nav-search">
          <SearchBar />
        </div>
        <ul>
          <li v-for="item in menuItems" :key="item.name">
            <router-link :to="item.to" class="mobile-nav-link" @click="closeMobileNav">
              <span class="mobile-nav-text">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
        <div class="mobile-social-links">
          <a href="https://www.youtube.com/@yanma-empire" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <img
              src="@/assets/optimized/youtube-24.png"
              srcset="@/assets/optimized/youtube-24.png 1x, @/assets/optimized/youtube-48.png 2x"
              alt="YouTube"
              width="24"
              height="24"
              loading="lazy"
              decoding="async"
            >
          </a>
          <a href="https://x.com/Yanma_Empire" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
            <img
              src="@/assets/optimized/x-24.png"
              srcset="@/assets/optimized/x-24.png 1x, @/assets/optimized/x-48.png 2x"
              alt="X (formerly Twitter)"
              width="24"
              height="24"
              loading="lazy"
              decoding="async"
            >
          </a>
          <a href="https://www.instagram.com/yanma_empire" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img
              src="@/assets/optimized/instagram-24.png"
              srcset="@/assets/optimized/instagram-24.png 1x, @/assets/optimized/instagram-48.png 2x"
              alt="Instagram"
              width="24"
              height="24"
              loading="lazy"
              decoding="async"
            >
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from './SearchBar.vue';

export default defineComponent({
  name: 'SiteHeader',
  components: {
    SearchBar
  },
  data() {
    return {
      isMobileNavOpen: false,
      isSubnavOpen: false,
      menuItems: [
        {
          name: 'トップ',
          to: '/',
        },
        {
          name: '基本情報',
          to: '/about',
          children: [
            {
              title: '基本情報',
              links: [
                { name: '憲法', to: '/about/constitution' },
                { name: '帝国議会', to: '/about/diet' },
                { name: '府省庁', to: '/about/ministries' },
                { name: '国内法人', to: '/about/corporations' },
              ],
            }
          ],
        },
        {
          name: 'ニュース',
          to: '/news',
          showSubnav: false,
          children: [
            {
              title: 'ニュース',
              links: [
                { name: 'お知らせ', to: '/news/announcements' },
                { name: 'ニュース', to: '/news' },
                { name: '動画投稿', to: '/news/videos' },
                { name: 'そのほか', to: '/news/others' },
              ],
            }
          ],
        },
        {
          name: 'イベント',
          to: '/events',
          showSubnav: false,
          children: [
            {
              title: 'イベント',
              links: [
                { name: '開催中', to: '/events' },
                { name: '開催予定', to: '/events/upcoming' },
                { name: '終了', to: '/events/past' },
              ],
            }
          ],
        },
        {
          name: '参加方法',
          to: '/participation',
          children: [
            {
              title: '参加方法',
              links: [
                { name: 'ルール', to: '/participation/rules' },
                { name: 'ロール', to: '/participation/roles' },
                { name: 'よくある質問', to: '/participation/faq' },
              ],
            }
          ]
        },
        {
          name: 'お問い合わせ',
          to: '/contact'
        },
      ],
      menuTimer: null as number | null,
    };
  },
  watch: {
    '$route'() {
      this.isMobileNavOpen = false; // [追加] ルート変更時にモバイルメニューを閉じる
      this.isSubnavOpen = false;
    }
  },
  computed: {
    activeSubmenu() {
      const currentPath = this.$route.path;
      return this.menuItems.find((item) => {
        if (!item.children || item.showSubnav === false) {
          return false;
        }
        if (item.to && (currentPath === item.to || currentPath.startsWith(`${item.to}/`))) {
          return true;
        }
        return item.children.some((category) =>
          (category.links || []).some((link) => currentPath === link.to || currentPath.startsWith(`${link.to}/`))
        );
      }) || null;
    }
  },
  methods: {
    flattenLinks(children) {
      return children.flatMap((category) => category.links || []);
    },
    isMenuActive(item) {
      const currentPath = this.$route.path;
      if (item.to && (currentPath === item.to || currentPath.startsWith(`${item.to}/`))) {
        return true;
      }
      if (item.children) {
        return item.children.some((category) =>
          (category.links || []).some((link) => currentPath === link.to || currentPath.startsWith(`${link.to}/`))
        );
      }
      return false;
    },
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen;
    },
    closeMobileNav() {
      this.isMobileNavOpen = false;
    },
    openSearchMenu() {
      this.isMobileNavOpen = true;
      this.$nextTick(() => {
        const input = this.$el.querySelector('.mobile-nav .search-box input');
        if (input) {
          input.focus();
          input.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
      });
    },
    toggleSubnav() {
      this.isSubnavOpen = !this.isSubnavOpen;
    },
  },
});
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
  max-width: 100%;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 2.5rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
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
  width: 100%;
}
.navigation ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  width: 100%;
}
.navigation>ul>li {
  padding: 1.25rem 0.75rem;
}
.nav-item-name {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  transition: color 0.3s;
  cursor: default;
  position: relative;
  padding-bottom: 0.4rem;
}
.nav-item-name::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 0.15rem;
  background-color: #008037;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  transition: transform 0.25s ease;
}
.nav-link {
  cursor: pointer;
}
.navigation>ul>li:hover>.nav-item-name {
  color: #008037;
}
.navigation>ul>li:hover>.nav-item-name::after {
  transform: translateX(-50%) scaleX(1);
}
.nav-item-name.is-active::after {
  transform: translateX(-50%) scaleX(1);
}
.mega-menu {
  position: absolute;
  top: 5.25rem;
  left: 0;
  right: 0;
  background-color: #f1f1f1;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  border-top: 0.1875rem solid #008037;
  padding: 1.25rem 2.5rem;
  box-sizing: border-box;
}
.mega-menu-content {
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.mega-menu-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.mega-menu-link {
  text-decoration: none;
  color: #333;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
}
.mega-menu-link:hover, .mega-menu-link.router-link-exact-active {
  text-decoration: underline;
  color: #008037;
}
.header-actions {
  display: flex;
  align-items: stretch;
  gap: 1.25rem;
}
.header-icon-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #333;
  padding: 0.25rem 0.5rem;
  width: 4.25rem;
  height: 4.25rem;
  justify-content: center;
}
.header-icon-button .material-icons {
  font-size: 1.5rem;
  line-height: 1;
}
.header-icon-label {
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  white-space: nowrap;
}
.hamburger-icon {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  height: 1.5rem;
  justify-content: center;
}
.hamburger-line {
  width: 1.5rem;
  height: 0.18rem;
  background: #333;
  border-radius: 0.625rem;
}
.mobile-nav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 120;
}
.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 22rem;
  max-width: 90vw;
  background-color: #fff;
  box-shadow: -0.25rem 0 0.75rem rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0 1rem 0;
  border-left: 0.0625rem solid #e0e0e0;
  overflow-y: auto;
  z-index: 130;
}
.mobile-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem 1rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
}
.mobile-nav-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
}
.mobile-nav-close {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  line-height: 1;
}
.mobile-nav-search {
  padding: 1rem 1.5rem;
}
.mobile-nav-search :deep(.search-box) {
  width: 100%;
  border-radius: 999px;
  border-color: #e0e0e0;
}
.mobile-nav-search :deep(.search-box input) {
  font-size: 0.95rem;
  padding: 0.65rem 0.9rem;
}
.mobile-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.mobile-nav-link {
  display: block;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
}
.mobile-nav-link:last-of-type {
  border-bottom: none;
}
.mobile-social-links {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1.25rem 1.5rem 0.75rem 1.5rem;
}
.mobile-social-links img {
  height: 1.5rem;
  width: auto;
  opacity: 0.75;
  transition: opacity 0.3s ease;
}
.mobile-social-links a:hover img {
  opacity: 1;
}
.mobile-nav-text {
  position: relative;
  display: inline-block;
  padding-bottom: 0.35rem;
}
.mobile-nav-link.router-link-active .mobile-nav-text::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.15rem;
  background-color: #008037;
}
.subnav {
  width: 100%;
  background-color: #f1f1f1;
  border-top: 0.0625rem solid #008037;
  border-bottom: 0.0625rem solid #e0e0e0;
}
.subnav-inner {
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0.75rem 2.5rem;
  box-sizing: border-box;
}
.subnav-toggle {
  display: none;
  width: 100%;
  background: transparent;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  padding: 0.5rem 0;
  text-align: center;
  cursor: pointer;
}
.subnav-links {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
}
.subnav-links.is-three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.subnav-link {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: 400;
  position: relative;
  padding: 0.6rem 0;
  text-align: center;
  display: block;
}
.subnav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 0.15rem;
  background-color: #008037;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  transition: transform 0.25s ease;
}
.subnav-link:hover::after, .subnav-link.router-link-active::after {
  transform: translateX(-50%) scaleX(1);
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
.mobile-nav-slide-enter-active, .mobile-nav-slide-leave-active {
  transition: transform 0.3s ease;
}
.mobile-nav-slide-enter-from, .mobile-nav-slide-leave-to {
  transform: translateX(100%);
}
@media (min-width: 992px) {
  .navigation {
    display: flex;
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
  .header-icon-label {
    display: none;
  }
  .subnav-inner {
    padding: 0.5rem 1.5rem 1rem 1.5rem;
  }
  .subnav-toggle {
    display: block;
  }
  .subnav-links {
    grid-template-columns: 1fr;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  .subnav-links.is-open {
    max-height: 20rem;
  }
  .subnav-link {
    padding: 0.75rem 0;
  }
}
</style>
