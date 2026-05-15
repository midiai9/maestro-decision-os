#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

const portArg = process.argv.indexOf('--port');
const port = portArg !== -1 ? parseInt(process.argv[portArg + 1], 10) : 8080;
const root = __dirname;

const mime = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.ttf': 'font/ttf', '.webp': 'image/webp', '.mp4': 'video/mp4',
};

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(root, urlPath);
  if (!filePath.startsWith(root)) { res.writeHead(403); return res.end(); }
  fs.stat(filePath, (err, stat) => {
    if (err || stat.isDirectory()) filePath = path.join(root, 'index.html');
    fs.readFile(filePath, (e, data) => {
      if (e) { res.writeHead(404); return res.end('Not found'); }
      res.writeHead(200, { 'Content-Type': mime[path.extname(filePath)] || 'application/octet-stream' });
      res.end(data);
    });
  });
}).listen(port, '0.0.0.0', () => console.log(`Serving on ${port}`));
