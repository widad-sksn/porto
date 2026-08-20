const fs = require('fs');
const path = require('path');
const dir = 'd:/porto/Portofolio_V5/src';

const colorMap = {
  'indigo-100': 'emerald-100',
  'indigo-200': 'emerald-200',
  'indigo-300': 'emerald-300',
  'indigo-400': 'emerald-400',
  'indigo-500': 'emerald-500',
  'indigo-600': 'emerald-600',
  'indigo-700': 'emerald-700',
  'indigo-900': 'emerald-900',
  
  'purple-100': 'cyan-100',
  'purple-200': 'cyan-200',
  'purple-300': 'cyan-300',
  'purple-400': 'cyan-400',
  'purple-500': 'cyan-500',
  'purple-600': 'cyan-600',
  'purple-700': 'cyan-700',
  'purple-900': 'cyan-900',
  
  'violet-600': 'teal-600',
  'pink-200': 'cyan-200',
  'pink-600': 'cyan-600',
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
          // split and join to replace all instances
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
