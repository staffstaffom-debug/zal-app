const C="vf-v19";const A=["./", "index.html", "manifest.json", "fk-180.png", "fk-192.png", "fk-512.png", "img/bench_0.jpg", "img/bentrow_0.jpg", "img/bulgarian_0.jpg", "img/cablerow_0.jpg", "img/calf_0.jpg", "img/chestrow_0.jpg", "img/chin_0.jpg", "img/crunch_0.jpg", "img/dbbench_0.jpg", "img/dbpress_0.jpg", "img/dbrow_0.jpg", "img/dead_0.jpg", "img/dip_0.jpg", "img/facepull_0.jpg", "img/goblet_0.jpg", "img/hack_0.jpg", "img/hammer_0.jpg", "img/hanging_0.jpg", "img/hip_0.jpg", "img/incline_0.jpg", "img/inclinecurl_0.jpg", "img/lateral_0.jpg", "img/latpull_0.jpg", "img/legcurl_0.jpg", "img/legpress_0.jpg", "img/ohext_0.jpg", "img/ohp_0.jpg", "img/pullup_0.jpg", "img/pushdown_0.jpg", "img/pushup_0.jpg", "img/rdl_0.jpg", "img/rearfly_0.jpg", "img/roll_0.jpg", "img/sideplank_0.jpg", "img/squat_0.jpg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
 const u=new URL(e.request.url);
 if(u.pathname.endsWith("version.txt")||u.pathname.endsWith("sw.js"))return; // всегда сеть
 const html=e.request.mode==="navigate"||u.pathname.endsWith(".html")||u.pathname.endsWith("/");
 if(html){e.respondWith(fetch(e.request).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put("index.html",cp));return res}).catch(()=>caches.match("index.html")));return}
 e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{if(res.ok||res.type==="opaque"){const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp))}return res})))});
