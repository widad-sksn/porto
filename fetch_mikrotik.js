import https from 'https';
import fs from 'fs';

https.get('https://cdn.worldvectorlogo.com/logos/mikrotik.svg', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Wrap it in a skillicons style rounded box
    const finalSvg = `<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="256" height="256" rx="60" fill="#242938"/>
  <g transform="translate(48, 48) scale(0.6)">
    ${data.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '')}
  </g>
</svg>`;
    fs.writeFileSync('d:/porto/Portofolio_V5/public/mikrotik.svg', finalSvg);
    console.log('Saved mikrotik.svg');
  });
});
