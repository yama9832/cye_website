<template>
  <header class="site-header">
    <div class="announcement-bar" role="status" aria-live="polite">
      <span class="material-icons" aria-hidden="true">campaign</span>
      <span class="announcement-text">現在、新規メンバーの受付は一時停止中です。</span>
      <router-link class="announcement-link" to="/join">詳しく見る</router-link>
    </div>

    <div class="main-header">
      <div class="main-header-content">
        <router-link to="/" class="brand" aria-label="やんまー帝国連邦 ホーム">
          <img src="@/assets/logo.png" alt="やんまー帝国連邦 ロゴ" class="site-logo">
          <div class="brand-copy">
            <span class="brand-title">やんまー帝国連邦</span>
            <span class="brand-tagline">Minecraftで築く仮想国家プロジェクト</span>
          </div>
        </router-link>

        <nav class="primary-navigation" aria-label="主要メニュー">
          <ul class="nav-list">
            <li
              v-for="section in menuSections"
              :key="section.label"
              class="nav-item"
              @mouseenter="openSection(section.label)"
              @mouseleave="closeSectionWithDelay()"
            >
              <button
                class="nav-trigger"
                type="button"
                aria-haspopup="true"
                :aria-expanded="activeMenu === section.label"
                @click="toggleSection(section.label)"
                @keydown.escape.prevent="closeSection()"
              >
                <span>{{ section.label }}</span>
                <span class="material-icons" aria-hidden="true">expand_more</span>
              </button>
              <transition name="mega-menu-fade">
                <div
                  v-if="activeMenu === section.label"
                  class="mega-menu"
                  tabindex="-1"
                  @mouseenter="cancelClose()"
                  @mouseleave="closeSectionWithDelay()"
                  @keydown.escape.prevent="closeSection()"
                >
                  <div class="mega-menu-content">
                    <div v-for="group in section.groups" :key="group.label" class="mega-menu-column">
                      <h3>{{ group.label }}</h3>
                      <ul>
                        <li v-for="page in group.pages" :key="page.id">
                          <router-link :to="page.path" @click="closeSection()">{{ page.label }}</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </transition>
            </li>
          </ul>
        </nav>

        <div class="header-actions">
          <SearchBar />
          <button
            class="hamburger-menu"
            @click="toggleMobileNav"
            aria-label="メニューを開く"
            :aria-expanded="isMobileNavOpen"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </div>
    </div>

    <transition name="mobile-nav-fade">
      <div class="mobile-nav" v-if="isMobileNavOpen">
        <div class="mobile-announcement">
          <span class="material-icons" aria-hidden="true">campaign</span>
          <div>
            <p>現在、新規メンバーの受付は停止しています。</p>
            <router-link to="/join" @click="isMobileNavOpen = false">詳しく見る</router-link>
          </div>
        </div>
        <ul>
          <li v-for="section in menuSections" :key="section.label" class="mobile-section">
            <details>
              <summary>{{ section.label }}</summary>
              <div class="mobile-submenu">
                <div class="mobile-menu-column" v-for="group in section.groups" :key="group.label">
                  <h4>{{ group.label }}</h4>
                  <ul>
                    <li v-for="page in group.pages" :key="page.id">
                      <router-link :to="page.path" @click="isMobileNavOpen = false">{{ page.label }}</router-link>
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

<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import SearchBar from './SearchBar.vue';
import { navigationConfig } from '@/utils/siteData';

const route = useRoute();
const isMobileNavOpen = ref(false);
const activeMenu = ref(null);
const menuTimer = ref(null);

const menuSections = computed(() =>
  navigationConfig.primary
    .map((section) => ({
      label: section.label,
      groups: section.groups.filter((group) => group.pages.length > 0),
    }))
    .filter((section) => section.groups.length > 0)
);

const clearTimer = () => {
  if (menuTimer.value) {
    clearTimeout(menuTimer.value);
    menuTimer.value = null;
  }
};

const openSection = (label) => {
  clearTimer();
  activeMenu.value = label;
};

const toggleSection = (label) => {
  activeMenu.value = activeMenu.value === label ? null : label;
};

const closeSection = () => {
  clearTimer();
  activeMenu.value = null;
};

const closeSectionWithDelay = () => {
  clearTimer();
  menuTimer.value = setTimeout(() => {
    activeMenu.value = null;
  }, 150);
};

const cancelClose = () => {
  clearTimer();
};

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
};

watch(
  () => route.fullPath,
  () => {
    closeSection();
    isMobileNavOpen.value = false;
  }
);

onBeforeUnmount(() => {
  clearTimer();
});
</script>

<style scoped>
.site-header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.announcement-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(90deg, #008037 0%, #00a859 100%);
  color: #ffffff;
  font-size: 0.95rem;
}

.announcement-text {
  flex: 1;
}

.announcement-link {
  color: #ffffff;
  font-weight: 700;
  text-decoration: underline;
}

.announcement-link:hover,
.announcement-link:focus {
  text-decoration: none;
}

.main-header {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid #e0e0e0;
}

.main-header-content {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
}

.site-logo {
  width: 3rem;
  height: 3rem;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-title {
  font-size: 1.1rem;
  font-weight: 700;
}

.brand-tagline {
  font-size: 0.75rem;
  color: #6c757d;
}

.primary-navigation {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  position: relative;
}

.nav-trigger {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  border: none;
  background: transparent;
  font-size: 0.95rem;
  font-weight: 600;
  color: #2b2b2b;
  cursor: pointer;
  border-radius: 999px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.nav-trigger:hover,
.nav-trigger:focus {
  background-color: rgba(0, 128, 55, 0.1);
  color: #006a2a;
  outline: none;
}

.mega-menu {
  position: absolute;
  left: 0;
  top: calc(100% + 0.5rem);
  min-width: 18rem;
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 1rem 2.5rem rgba(15, 23, 42, 0.12);
  padding: 1.5rem;
}

.mega-menu-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1.5rem;
}

.mega-menu-column h3 {
  margin: 0 0 0.75rem 0;
  font-size: 0.9rem;
  font-weight: 700;
  color: #008037;
}

.mega-menu-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
}

.mega-menu-column a {
  color: #2f2f2f;
  text-decoration: none;
  font-size: 0.9rem;
}

.mega-menu-column a:hover,
.mega-menu-column a:focus {
  color: #008037;
  text-decoration: underline;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.hamburger-menu {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  border: 1px solid #d0d0d0;
  background-color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.hamburger-menu:hover,
.hamburger-menu:focus {
  background-color: rgba(0, 128, 55, 0.08);
  border-color: #008037;
}

.hamburger-line {
  width: 1.25rem;
  height: 0.125rem;
  background-color: #2b2b2b;
  border-radius: 999px;
}

.mobile-nav {
  position: fixed;
  inset: 0;
  background-color: rgba(10, 13, 20, 0.65);
  display: flex;
  flex-direction: column;
  padding: 5rem 1.5rem 2rem;
  backdrop-filter: blur(4px);
}

.mobile-nav > ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
  overflow-y: auto;
}

.mobile-section details {
  background-color: #ffffff;
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  box-shadow: 0 0.5rem 1.5rem rgba(15, 23, 42, 0.15);
}

.mobile-section summary {
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  list-style: none;
}

.mobile-submenu {
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
}

.mobile-menu-column h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #008037;
}

.mobile-menu-column ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.mobile-menu-column a {
  color: #2f2f2f;
  text-decoration: none;
  font-size: 0.95rem;
}

.mobile-menu-column a:hover,
.mobile-menu-column a:focus {
  text-decoration: underline;
}

.mobile-announcement {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(15, 23, 42, 0.15);
}

.mobile-announcement p {
  margin: 0 0 0.5rem 0;
}

.mega-menu-fade-enter-active,
.mega-menu-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.mega-menu-fade-enter-from,
.mega-menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.mobile-nav-fade-enter-active,
.mobile-nav-fade-leave-active {
  transition: opacity 0.2s ease;
}

.mobile-nav-fade-enter-from,
.mobile-nav-fade-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .primary-navigation {
    display: none;
  }

  .hamburger-menu {
    display: flex;
  }

  .header-actions {
    margin-left: auto;
  }
}

@media (max-width: 640px) {
  .announcement-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .announcement-text {
    width: 100%;
  }

  .main-header-content {
    flex-wrap: wrap;
    height: auto;
    padding: 1rem 1.25rem;
  }

  .brand {
    width: 100%;
  }

  .header-actions {
    width: 100%;
    justify-content: flex-end;
  }
}
</style>
