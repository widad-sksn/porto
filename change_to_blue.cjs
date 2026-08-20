const fs = require('fs');
const path = require('path');
const dir = 'd:/porto/Portofolio_V5/src';

const colorMap = {
  // Replace Tailwind classes
  'emerald-50': 'blue-50',
  'emerald-100': 'blue-100',
  'emerald-200': 'blue-200',
  'emerald-300': 'blue-300',
  'emerald-400': 'blue-400',
  'emerald-500': 'blue-500',
  'emerald-600': 'blue-600',
  'emerald-700': 'blue-700',
  'emerald-800': 'blue-800',
  'emerald-900': 'blue-900',
  'emerald-950': 'blue-950',

  // Replace Hex Codes (The original hardcoded ones I changed)
  '#10b981': '#3b82f6', // emerald-500 -> blue-500
  '#047857': '#1d4ed8', // emerald-700 -> blue-700
  '#059669': '#2563eb', // emerald-600 -> blue-600
  '#065f46': '#1e40af', // emerald-800 -> blue-800
  '#34d399': '#60a5fa', // emerald-400 -> blue-400
  
  // Uppercase hex
  '#10B981': '#3B82F6',
  '#047857': '#1D4ED8',
  '#059669': '#2563EB',
  '#065F46': '#1E40AF',
  '#34D399': '#60A5FA',
};

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [key, value] of Object.entries(colorMap)) {
        if (content.includes(key)) {
          content = content.split(key).join(value);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated: ' + fullPath);
      }
    }
  }
}
processDir(dir);
