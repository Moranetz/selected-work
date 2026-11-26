// Every external link on the page must answer 200. A repo that goes private
// shows up here as a 404 before a visitor finds it. Node 20+, no dependencies.
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const links = [...new Set([...html.matchAll(/href="(https?:[^"#]+)"/g)].map(m => m[1]))];
let bad = 0;
for (const url of links) {
  let status;
  try { status = (await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'selected-work-link-check' } })).status; }
  catch (e) { status = 'error ' + e.message; }
  const ok = status === 200;
  if (!ok) bad++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${status} ${url}`);
}
console.log(`${links.length} links, ${bad} broken`);
process.exit(bad ? 1 : 0);
