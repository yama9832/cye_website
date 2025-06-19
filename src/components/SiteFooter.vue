<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-content">
        <div class="page-links">
          <div v-for="category in footerLinks" :key="category.title" class="link-category">
            <h3>{{ category.title }}</h3>
            <ul>
              <li v-for="link in category.links" :key="link.name">
                <router-link :to="link.to">{{ link.name }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="social-links">
          <a href="https://www.youtube.com/@yanma-empire" target="_blank" aria-label="YouTube">
            <img src="@/assets/youtube_logo.png" alt="YouTube">
          </a>
          <a href="https://x.com/Yanma_Empire" target="_blank" aria-label="X (formerly Twitter)">
            <img src="@/assets/x_logo.png" alt="X (formerly Twitter)">
          </a>
          <a href="https://www.instagram.com/yanma_empire" target="_blank" aria-label="Instagram">
            <img src="@/assets/instagram_logo.png" alt="Instagram">
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-content">
        <p class="copyright">&copy; 2022-2025 Commonwealth of Yanmar Empire. All Rights Reserved.</p>
        <div class="legal-links">
          <router-link to="/disclaimer">免責事項</router-link>
          <router-link to="/privacy">個人情報保護方針</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  data() {
    return {
      footerLinks: [
        {
          title: '基本情報',
          links: [
            { name: '基本情報', to: '/about' },
            { name: '構成国', to: '/nations' },
            { name: '憲法', to: '/constitution' },
            { name: '帝国議会', to: '/government/diet' },
            { name: '府省庁', to: '/government/ministries' },
            { name: '裁判所', to: '/government/courts' },
          ]
        },
        {
          title: '国政情報',
          links: [
            { name: '政策', to: '/politics/policy' },
            { name: '予算', to: '/politics/budget' },
            { name: '広報', to: '/politics/pr' },
            { name: '国内法人', to: '/corporations' },
          ]
        },
        {
          title: '観光・イベント',
          links: [
            { name: '建築ギャラリー', to: '/gallery' }, 
            { name: '観光案内', to: '/tourism/guide' },
            { name: '交通情報', to: '/tourism/transport' },
            { name: 'イベント情報', to: '/events' },
            { name: 'ブログ', to: '/blog' },
          ]
        },
        {
          title: '参加・お問い合わせ',
          links: [
            { name: '製作メンバーになる', to: '/join' },
            { name: 'サーバールール', to: '/rules' },
            { name: 'ロール', to: '/roles' },
            { name: 'よくある質問', to: '/faq' },
            { name: 'お問い合わせ', to: '/contact' },
          ]
        }
      ]
    }
  }
}
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
