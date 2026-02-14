const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const NEWS_DIR = path.join(__dirname, '../src/data/news');
const BUCKETS = [
  { name: '1-7', min: 1, max: 7 },
  { name: '8-14', min: 8, max: 14 },
  { name: '15-21', min: 15, max: 21 },
  { name: '22-31', min: 22, max: 31 }
];

function getMarkdownFilesRecursively(targetDir) {
  const entries = fs.readdirSync(targetDir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(targetDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getMarkdownFilesRecursively(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

function parseDayFromDate(value) {
  if (value == null) {
    return null;
  }

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.getDate();
  }

  const dateText = String(value).trim();
  const parts = dateText.split('-');
  if (parts.length !== 3) {
    return null;
  }

  const day = Number(parts[2]);
  if (!Number.isInteger(day) || day < 1 || day > 31) {
    return null;
  }

  return day;
}

function resolveBucket(day) {
  return BUCKETS.find((bucket) => day >= bucket.min && day <= bucket.max) || null;
}

function ensureBucketDirs() {
  for (const bucket of BUCKETS) {
    const dirPath = path.join(NEWS_DIR, bucket.name);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }
}

function splitNewsByDayRange() {
  if (!fs.existsSync(NEWS_DIR)) {
    console.error(`ニュースフォルダが見つかりません: ${NEWS_DIR}`);
    process.exit(1);
  }

  ensureBucketDirs();

  const files = getMarkdownFilesRecursively(NEWS_DIR);
  let movedCount = 0;

  for (const filePath of files) {
    const fileName = path.basename(filePath);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(raw);

    const day = parseDayFromDate(data.date);
    if (day == null) {
      console.warn(`dateを解析できないためスキップ: ${fileName}`);
      continue;
    }

    const bucket = resolveBucket(day);
    if (!bucket) {
      console.warn(`日付範囲外のためスキップ: ${fileName}`);
      continue;
    }

    const destination = path.join(NEWS_DIR, bucket.name, fileName);
    if (path.resolve(filePath) === path.resolve(destination)) {
      continue;
    }

    fs.renameSync(filePath, destination);
    movedCount += 1;
    console.log(`移動: ${fileName} -> ${bucket.name}/`);
  }

  console.log(`完了: ${movedCount}件を7日区切りに分割しました。`);
}

splitNewsByDayRange();
