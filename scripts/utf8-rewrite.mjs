import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';
import { join, extname } from 'path';

const ROOT = process.cwd();
const ALLOWED = new Set(['.ts', '.tsx', '.js', '.jsx', '.css', '.html', '.md', '.json', '.toml']);
const EXCLUDE_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.next', '.vite']);

const changed = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (EXCLUDE_DIRS.has(entry.name)) continue;
      walk(join(dir, entry.name));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (!ALLOWED.has(ext)) continue;
      const p = join(dir, entry.name);
      try {
        const buf = readFileSync(p);
        let text = buf.toString('utf8');
        // Heuristic fix for mojibake (latin1-utf8 double-encoding)
        if (/[Ãâ€œâ€â€™]/.test(text)) {
          const fixed = Buffer.from(text, 'latin1').toString('utf8');
          // If fix reduces the count of Ã significantly, accept it
          const before = (text.match(/Ã/g) || []).length;
          const after = (fixed.match(/Ã/g) || []).length;
          if (after < before) {
            text = fixed;
          }
        }
        // Always rewrite using UTF-8 (no BOM)
        writeFileSync(p, text, { encoding: 'utf8' });
        changed.push(p.replace(ROOT + '/', ''));
      } catch (e) {
        // ignore
      }
    }
  }
}

walk(ROOT);
console.log(`Rewrote ${changed.length} files to UTF-8.`);

