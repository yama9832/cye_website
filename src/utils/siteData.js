import rawPages from '@/data/pages.json';
import rawNavigation from '@/data/navigation.json';
import rawBlogPosts from '@/data/blog/posts.json';

function assert(condition, message) {
  if (!condition) {
    throw new Error(`[siteData] ${message}`);
  }
}

function normalizeBreadcrumbs(breadcrumbs = []) {
  return breadcrumbs.map((crumb) => {
    assert(typeof crumb.text === 'string' && crumb.text.length > 0, 'Breadcrumb text must be a non-empty string.');
    const normalized = { text: crumb.text };
    if (crumb.to) {
      assert(typeof crumb.to === 'string', 'Breadcrumb to must be a string when provided.');
      normalized.to = crumb.to;
    }
    return normalized;
  });
}

function normalizeKeywords(keywords = []) {
  assert(Array.isArray(keywords), 'Keywords must be an array.');
  return keywords.filter(Boolean).map((keyword) => {
    assert(typeof keyword === 'string', 'Keyword must be a string.');
    return keyword;
  });
}

const pages = rawPages.map((page) => {
  assert(page && typeof page === 'object', 'Page entry must be an object.');
  const { id, name, path, view, label, meta, section, search = {} } = page;
  assert(typeof id === 'string' && id.length > 0, 'Page id is required.');
  assert(typeof name === 'string' && name.length > 0, 'Page name is required.');
  assert(typeof path === 'string' && path.length > 0, 'Page path is required.');
  assert(typeof view === 'string' && view.length > 0, 'Page view is required.');
  assert(typeof label === 'string' && label.length > 0, 'Page label is required.');
  assert(meta && typeof meta === 'object', 'Page meta is required.');
  assert(typeof meta.title === 'string' && meta.title.length > 0, 'Page meta.title is required.');
  assert(typeof meta.description === 'string' && meta.description.length > 0, 'Page meta.description is required.');

  return {
    id,
    name,
    path,
    view,
    label,
    section: section || 'general',
    meta: {
      ...meta,
      keywords: normalizeKeywords(meta.keywords || []),
      breadcrumb: normalizeBreadcrumbs(meta.breadcrumb || []),
    },
    search: {
      type: typeof search.type === 'string' ? search.type : 'ページ',
      searchable: search.searchable !== false,
    },
  };
});

export const sitePages = pages;
export const sitePagesById = Object.fromEntries(pages.map((page) => [page.id, page]));
export const sitePagesByName = Object.fromEntries(pages.map((page) => [page.name, page]));

function resolvePage(id) {
  const page = sitePagesById[id];
  assert(page, `Navigation refers to unknown page id: ${id}`);
  return page;
}

const navigation = {
  primary: (rawNavigation.primary || []).map((section) => {
    assert(typeof section.label === 'string' && section.label.length > 0, 'Navigation section label is required.');
    return {
      label: section.label,
      groups: (section.groups || []).map((group) => {
        assert(typeof group.label === 'string' && group.label.length > 0, 'Navigation group label is required.');
        return {
          label: group.label,
          pages: (group.pages || []).map((pageId) => resolvePage(pageId)),
        };
      }).filter((group) => group.pages.length > 0),
    };
  }).filter((section) => section.groups.length > 0),
  footer: (rawNavigation.footer || []).map((group) => {
    assert(typeof group.label === 'string' && group.label.length > 0, 'Footer group label is required.');
    const pages = (group.pages || []).map((pageId) => resolvePage(pageId));
    return {
      label: group.label,
      pages,
    };
  }),
};

export const navigationConfig = navigation;

const blogPosts = rawBlogPosts.map((post) => {
  assert(post && typeof post === 'object', 'Blog post must be an object.');
  const { slug, title, date, category, excerpt, images = [], body = [] } = post;
  assert(typeof slug === 'string' && slug.length > 0, 'Blog post slug is required.');
  assert(typeof title === 'string' && title.length > 0, 'Blog post title is required.');
  assert(typeof date === 'string' && date.length > 0, 'Blog post date is required.');
  assert(typeof category === 'string' && category.length > 0, 'Blog post category is required.');
  assert(typeof excerpt === 'string' && excerpt.length > 0, 'Blog post excerpt is required.');
  assert(Array.isArray(images), 'Blog post images must be an array.');
  assert(Array.isArray(body), 'Blog post body must be an array.');

  const normalizedBody = body.map((block) => {
    assert(block && typeof block === 'object', 'Blog post block must be an object.');
    assert(typeof block.type === 'string', 'Blog post block type must be a string.');
    const normalized = { type: block.type };
    if (block.level) {
      normalized.level = block.level;
    }
    if (block.text) {
      assert(typeof block.text === 'string', 'Blog post block text must be a string.');
      normalized.text = block.text;
    }
    return normalized;
  });

  return {
    slug,
    title,
    date,
    category,
    excerpt,
    images: images.filter(Boolean),
    body: normalizedBody,
  };
});

export const blogPostsData = blogPosts;
export const blogPostsBySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post]));

export function createSearchIndex() {
  const entries = [];
  sitePages.forEach((page) => {
    if (page.search.searchable) {
      entries.push({
        type: page.search.type,
        title: page.meta.title,
        description: page.meta.description,
        to: page.path,
      });
    }
  });

  blogPosts.forEach((post) => {
    entries.push({
      type: 'ブログ',
      title: post.title,
      description: post.excerpt,
      date: post.date,
      to: `/blog/${post.slug}`,
    });
  });

  return entries;
}

export function keywordString(keywords) {
  return normalizeKeywords(keywords).join(', ');
}
