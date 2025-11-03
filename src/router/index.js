import { createRouter, createWebHistory } from 'vue-router';
import { nextTick } from 'vue';
import { sitePages, sitePagesByName, blogPostsBySlug, keywordString } from '@/utils/siteData';

const viewComponentMap = {
  HomeView: () => import('@/views/HomeView.vue'),
  SearchView: () => import('@/views/SearchView.vue'),
  AboutView: () => import('@/views/AboutView.vue'),
  DietView: () => import('@/views/DietView.vue'),
  MinistriesView: () => import('@/views/MinistriesView.vue'),
  CorporationsView: () => import('@/views/CorporationsView.vue'),
  GalleryView: () => import('@/views/GalleryView.vue'),
  EventsView: () => import('@/views/EventsView.vue'),
  BlogView: () => import('@/views/BlogView.vue'),
  JoinView: () => import('@/views/JoinView.vue'),
  RulesView: () => import('@/views/RulesView.vue'),
  RolesView: () => import('@/views/RolesView.vue'),
  ContactView: () => import('@/views/ContactView.vue'),
  DisclaimerView: () => import('@/views/DisclaimerView.vue'),
  PrivacyView: () => import('@/views/PrivacyView.vue'),
  BlogPostView: () => import('@/views/BlogPostView.vue'),
  NotFoundView: () => import('@/views/NotFoundView.vue'),
};

function resolveComponent(viewName) {
  const loader = viewComponentMap[viewName];
  if (!loader) {
    throw new Error(`View component loader is not registered for ${viewName}`);
  }
  return loader;
}

const staticRoutes = sitePages.map((page) => ({
  path: page.path,
  name: page.name,
  component: resolveComponent(page.view),
  meta: {
    ...page.meta,
    keywords: keywordString(page.meta.keywords),
  },
}));

const routes = [
  ...staticRoutes,
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: resolveComponent('BlogPostView'),
    meta: {
      title: 'ブログ記事',
      description: 'ブログ記事の詳細を表示します。',
      breadcrumb: [
        { text: 'ブログ', to: sitePagesByName.blog?.path || '/blog' },
        { text: '記事' },
      ],
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: resolveComponent('NotFoundView'),
    meta: {
      title: '404 - ページが見つかりません',
      description: '指定されたページは存在しません。',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: 'smooth' };
  },
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === 'blog-post') {
    const slug = String(to.params.slug || '');
    const post = blogPostsBySlug[slug];
    if (post) {
      to.meta.title = post.title;
      to.meta.description = post.excerpt;
      to.meta.keywords = keywordString([post.category]);
      to.meta.breadcrumb = [
        { text: 'ブログ', to: sitePagesByName.blog?.path || '/blog' },
        { text: post.title },
      ];
    } else {
      to.meta.title = 'ブログ記事が見つかりません';
      to.meta.description = '指定された記事は存在しません。';
      to.meta.keywords = keywordString([]);
      to.meta.breadcrumb = [
        { text: 'ブログ', to: sitePagesByName.blog?.path || '/blog' },
        { text: '記事' },
      ];
    }
  }
  next();
});

router.afterEach((to) => {
  nextTick(() => {
    const siteName = 'やんまー帝国連邦';
    const defaultDescription = 'Minecraft(マインクラフト)で架空国家を運営するプロジェクト「やんまー帝国連邦」の公式サイト。現代都市開発やマルチプレイに興味がある方はぜひご覧ください。';
    const baseUrl = 'https://yanma-empire.net';

    const pageTitle = to.meta.fullTitle || (to.meta.title ? `${to.meta.title} | ${siteName}` : siteName);
    document.title = pageTitle;

    const metaDescription = document.querySelector('#meta-description');
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description || defaultDescription);
    }

    const metaKeywords = document.querySelector('#meta-keywords');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', to.meta.keywords || '');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', to.meta.description || defaultDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [],
    };

    structuredData['@graph'].push({
      '@type': 'WebSite',
      url: baseUrl,
      name: 'やんまー帝国連邦公式サイト',
      description: 'Minecraftの架空国家プロジェクト「やんまー帝国連邦」の公式サイトです。',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    });

    if (to.meta.breadcrumb && to.meta.breadcrumb.length > 0) {
      const breadcrumbItems = [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'トップ',
          item: `${baseUrl}/`,
        },
        ...to.meta.breadcrumb.map((crumb, index) => {
          const isLast = index === to.meta.breadcrumb.length - 1;
          const itemUrl = crumb.to ? new URL(crumb.to, baseUrl).href : window.location.href;
          const listItem = {
            '@type': 'ListItem',
            position: index + 2,
            name: crumb.text,
          };
          if (!isLast || crumb.to) {
            listItem.item = itemUrl;
          }
          return listItem;
        }),
      ];

      structuredData['@graph'].push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems,
      });
    }

    const scriptTag = document.querySelector('#structured-data');
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(structuredData, null, 2);
    }
  });
});

export default router;
