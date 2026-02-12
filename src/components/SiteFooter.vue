<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-content">
        <div class="page-links">
          <div v-for="category in footerLinks" :key="category.title" class="link-category">
            <h3>
              <router-link v-if="category.to" :to="category.to">{{ category.title }}</router-link>
              <span v-else>{{ category.title }}</span>
            </h3>
            <ul>
              <li v-for="link in category.links" :key="link.name">
                <router-link :to="link.to">{{ link.name }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="social-links">
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
    </div>
    <div class="footer-bottom">
      <div class="footer-content">
        <p class="copyright">&copy; 2022-2026 Commonwealth of Yanmar Empire. All Rights Reserved.</p>
        <div class="legal-links">
          <router-link to="/disclaimer">免責事項</router-link>
          <router-link to="/privacy">個人情報保護方針</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SiteFooter',
  data() {
    return {
      footerLinks: [
        {
          title: '基本情報',
          to: '/about',
          links: [
            { name: '憲法', to: '/about/constitution' },
            { name: '帝国議会', to: '/about/diet' },
            { name: '府省庁', to: '/about/ministries' },
            { name: '国内法人', to: '/about/corporations' },
          ]
        },
        {
          title: 'ニュース',
          to: '/news',
          links: [
            { name: 'お知らせ', to: { path: '/news', query: { tag: 'お知らせ' } } },
            { name: 'ニュース', to: { path: '/news', query: { tag: 'ニュース' } } },
            { name: '動画投稿', to: { path: '/news', query: { tag: '動画投稿' } } },
            { name: 'そのほか', to: { path: '/news', query: { tag: 'そのほか' } } },
          ]
        },
        {
          title: 'イベント',
          to: '/events',
          links: [
            { name: '開催中', to: { path: '/events', query: { tag: '開催中' } } },
            { name: '開催予定', to: { path: '/events', query: { tag: '開催予定' } } },
            { name: '終了', to: { path: '/events', query: { tag: '終了' } } },
          ]
        },
        {
          title: '参加方法',
          to: '/participation',
          links: [
            { name: 'ルール', to: '/participation/rules' },
            { name: 'ロール', to: '/participation/roles' },
            { name: 'よくある質問', to: '/participation/faq' },
          ]
        },
        {
          title: 'お問い合わせ',
          to: '/contact',
          links: [
            { name: 'お問い合わせ', to: '/contact' },
          ]
        }
      ]
    };
  }
});
</script>

<style scoped>
.site-footer {
  color: #6c757d;
  font-size: 0.875rem;
}

.footer-top {
  background-color: #f1f1f1;
  padding: 2.5rem 0;
}
.footer-bottom {
  background-color: #e9ecef;
  padding: 1.5rem 0;
}

.footer-content {
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2.5rem;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-bottom > .footer-content {
  align-items: center;
  gap: 1rem;
}
.page-links {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  flex-grow: 1;
}
.link-category h3 {
  font-size: 1rem;
  color: #343a40;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 700;
}
.link-category h3 a {
  color: inherit;
  text-decoration: none;
}
.link-category h3 a:hover {
  color: #008037;
  text-decoration: underline;
}
.link-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.link-category ul li {
  margin-bottom: 0.5rem;
}
.link-category a {
  text-decoration: none;
  color: #6c757d;
  transition: color 0.3s ease;
}
.link-category a:hover {
  color: #008037;
  text-decoration: underline;
}
.social-links {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.social-links img {
  height: 1.5rem;
  width: auto;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}
.social-links a:hover img {
  opacity: 1;
}
.copyright {
  margin: 0;
  font-size: 0.8125rem;
}
.legal-links {
  display: flex;
  gap: 1.5rem;
}
.legal-links a {
  text-decoration: none;
  color: #6c757d;
  font-size: 0.8125rem;
  transition: color 0.3s ease;
}
.legal-links a:hover {
  color: #008037;
  text-decoration: underline;
}

/* --- レスポンシブ対応 --- */
@media (max-width: 992px) {
  .page-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    width: 100%;
  }
  .footer-content {
    padding: 0 1.5rem;
  }
}
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  .footer-bottom > .footer-content {
    align-items: flex-start;
  }
}
@media (max-width: 480px) {
  .page-links {
    grid-template-columns: 1fr;
  }
  .legal-links {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
}
</style>
