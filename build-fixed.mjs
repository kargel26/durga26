import fs from 'node:fs';
import './build.mjs';
setTimeout(()=>{const p='dist/index.html';if(fs.existsSync(p)){let h=fs.readFileSync(p,'utf8');h=h.replaceAll('poorartistt-singh-singh-vaahini-maa-bhajan-dedicated-to-maa-durga-565964.mp3','poorartistt-singh-vaahini-maa-bhajan-dedicated-to-maa-durga-565964.mp3');fs.writeFileSync(p,h)}},1000);
