import fs from 'node:fs';

const SOURCE='https://raw.githubusercontent.com/kargel26/durga26/ed5663e7545d943c8d232f1c73dc2cc670536b12/index.html';

try {
  const response=await fetch(SOURCE);
  if(!response.ok) throw new Error(`Source fetch failed: ${response.status}`);
  const html=await response.text();
  fs.rmSync('dist',{recursive:true,force:true});
  fs.mkdirSync('dist',{recursive:true});
  fs.writeFileSync('dist/index.html',html,'utf8');
} catch(error) {
  console.error(error);
  process.exit(1);
}
