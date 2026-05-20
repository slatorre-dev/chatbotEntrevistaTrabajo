#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname);
const dist = path.join(root, 'dist');
const filesToCopy = ['index.html','styles.css','README.md','memoria_claude.md','version.txt','main.js','sw.js'];

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir,{recursive:true}); }
function copyFile(src, dest) { ensureDir(path.dirname(dest)); fs.copyFileSync(src,dest); }

ensureDir(dist);
filesToCopy.forEach(f => {
  const src = path.join(root, f);
  if (fs.existsSync(src)) {
    const dest = path.join(dist, f);
    copyFile(src,dest);
    console.log('copied', f);
  }
});

console.log('Build complete.');
