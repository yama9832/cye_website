const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const NEWS_DIR = path.join(__dirname, '../src/data/news');

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

function resolveYearMonthFromDate(value) {
  if (value == null) {
    return null;
  }

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
  }

  const dateText = String(value).trim();
  const match = dateText.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    return null;
  }

  const year = match[1];
  const month = Number(match[2]);
  const day = Number(match[3]);

  if (!Number.isInteger(month) || month < 1 || month > 12) {
    return null;
  }

  if (!Number.isInteger(day) || day < 1 || day > 31) {
    return null;
  }

  return `${year}-${String(month).padStart(2, '0')}`;
}

function splitNewsByYearMonth() {
  if (!fs.existsSync(NEWS_DIR)) {
    console.error(`ニュースフォルダが見つかりません: ${NEWS_DIR}`);
    process.exit(1);
  }

  const files = getMarkdownFilesRecursively(NEWS_DIR);
  let movedCount = 0;

  for (const filePath of files) {
    const fileName = path.basename(filePath);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(raw);

    const yearMonth = resolveYearMonthFromDate(data.date);
    if (yearMonth == null) {
      console.warn(`dateを解析できないためスキップ: ${fileName}`);
      continue;
    }

    const targetDir = path.join(NEWS_DIR, yearMonth);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const destination = path.join(targetDir, fileName);
    if (path.resolve(filePath) === path.resolve(destination)) {
      continue;
    }

    fs.renameSync(filePath, destination);
    movedCount += 1;
    console.log(`移動: ${fileName} -> ${yearMonth}/`);
  }

  console.log(`完了: ${movedCount}件を年月フォルダに分割しました。`);
}

splitNewsByYearMonth();
