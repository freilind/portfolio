import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const distIndex = join(process.cwd(), 'dist', 'portfolio', 'browser', 'index.html');
const dist404 = join(process.cwd(), 'dist', 'portfolio', 'browser', '404.html');

const html = await readFile(distIndex, 'utf8');
await writeFile(dist404, html, 'utf8');

console.log('Generated dist/portfolio/browser/404.html');
