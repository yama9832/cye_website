const DEFAULT_NEWS_API_BASE = 'https://news-api.yamamoto-200517.workers.dev/api/news';

const normalizedBase = (process.env.VUE_APP_NEWS_API_BASE || DEFAULT_NEWS_API_BASE).replace(/\/+$/, '');

export const NEWS_API_BASE = normalizedBase;
