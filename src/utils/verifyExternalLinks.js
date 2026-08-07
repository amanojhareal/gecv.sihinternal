// src/utils/verifyExternalLinks.js
// Run once during testing — logs a pass/fail table for all external links.
import { SIH_PORTAL_URL, REGISTER_FORM_URL, UPLOAD_PPT_FORM_URL } from '../config/links';

export function verifyExternalLinks() {
  const links = {
    'SIH Portal': SIH_PORTAL_URL,
    'Register Form': REGISTER_FORM_URL,
    'Upload PPT Form': UPLOAD_PPT_FORM_URL,
  };

  const results = Object.entries(links).map(([name, url]) => {
    const issues = [];
    if (!url) issues.push('MISSING — env var not set or not read correctly');
    if (url && !url.startsWith('https://')) issues.push('Not HTTPS');
    if (url && url.includes('xxxxx')) issues.push('Placeholder URL still in use!');
    if (url && url.includes('yyyyy')) issues.push('Placeholder URL still in use!');

    return {
      link: name,
      url: url || '(empty)',
      status: issues.length ? '❌ FAIL' : '✅ OK',
      issues: issues.join(', ') || '—',
    };
  });

  console.table(results);
  return results.every(r => r.status === '✅ OK');
}