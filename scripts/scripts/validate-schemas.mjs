import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
let errors = 0;

if (!fs.existsSync(distDir)) {
  console.warn('⚠️  dist/ not found. Run `npm run build` first.');
  process.exit(0);
}

function scanFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /<script type="application\/ld\+json">(.*?)<\/script>/gs;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    try {
      JSON.parse(match[1].trim());
    } catch (e) {
      console.error(`❌ Invalid JSON-LD in ${file.replace(distDir, '')}: ${e.message}`);
      errors++;
    }
  }
}

const walk = (dir) => {
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) walk(fullPath);
    else if (file.endsWith('.html')) scanFile(fullPath);
  }
};

walk(distDir);

if (errors === 0) console.log('✅ All JSON-LD schemas are valid.');
else {
  console.error(`❌ ${errors} schema(s) failed validation.`);
  process.exit(1);
}