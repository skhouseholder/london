// Saves the trip site on the phone so it opens without a connection.
// publish.py fills in VERSION and ASSETS; a new VERSION makes the browser install a fresh copy.
const VERSION = "3ccf8327e3b0";
const ASSETS = ["./", "favicon.svg", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "manifest.webmanifest", "img/01e78d9bbd50216f88c73fca.webp", "img/09543997b103b0a32c32d0eb.webp", "img/0a724b111ade2cfb199e7206.webp", "img/0b4739e37a66d80cf66ca799.webp", "img/0de7360959fbd062e3ab4eb5.webp", "img/0edb9e6a75ed8569a9a2633e.webp", "img/0f6b94c1029f18784e3ca95e.webp", "img/1024e107aa05d4fb5bac096f.webp", "img/16b03b722b1458d061e079d8.webp", "img/1b3f63544241690587f30a80.webp", "img/1c3c2813bd9f68a83cfa6e33.webp", "img/1dabe42e16e8debe5d55f43c.webp", "img/2183cfc7cc63058bddde7cf7.webp", "img/2303eec8a8d94ae63501783a.webp", "img/25c63516261ff75cebe4d3ac.webp", "img/2e9eccee370cac80e35e7da7.webp", "img/30445e81a11ddade25fd5602.webp", "img/30a89f86716bc884daa3be44.webp", "img/37f5297e9777ceb9f28bdd1b.webp", "img/3b91e8a2c6963861ed627bc4.webp", "img/3e22fd716b55761f5a2e512e.webp", "img/44ea946a36533a3c9ba202da.webp", "img/459e6c11a831c78e07c6854b.webp", "img/460819e2e234b1e527a533ba.webp", "img/46e4315f3249ac3dc6cc47c3.webp", "img/4e3f80d7950c07b30c3c0b1a.webp", "img/52bbbfe1625bf1089f5042cf.webp", "img/54cdd2eff7dc9d41472b95bc.webp", "img/56097cbba928230bd16365d9.webp", "img/5aa81ef00a2d4646c76be1db.webp", "img/5d86841bd7a8cfb2f8e59281.webp", "img/62d9fb9603ca37cff11ba682.webp", "img/666aff69a6b80b6cb08a4674.webp", "img/6d5e9dcf7c70123e766cde84.webp", "img/6e3ab01836a5be6f1384d5ed.webp", "img/6ead4a3143d74120ee588f5b.webp", "img/70ad611c5108600c4e2c6a2e.webp", "img/72a7f2e5316c80af34d24159.webp", "img/77f5e61e784db48f985aa450.webp", "img/782960b6d420a2e2703ff459.webp", "img/7904cd0502372c88ea1c10cb.webp", "img/792f39d596aba0f0543d8751.webp", "img/7be93f451782dddc1eddbad5.webp", "img/7d8fd966e7655ec61c649cd6.webp", "img/7dcdd5306c76e9a41c2f6fd9.webp", "img/7ec9d22979c79364fa6b436e.webp", "img/81eb30b6915cc7e4e9270432.webp", "img/85461f13c907c9f845b46ddb.webp", "img/88ccea6b71428db775c3c1b8.webp", "img/8954ce23241efb01b59d8f87.webp", "img/89912d80981f7003801be990.webp", "img/8f8bc469be2c83abb07e6f23.webp", "img/8fc894dc5ca14baee4320612.webp", "img/90731b7c58a2da14e21a25de.webp", "img/92ad503d6c4289acb32effaa.webp", "img/9518aa08e90d97274ff4eaf4.webp", "img/960557f898be12bf4161a250.webp", "img/96205d06c1440017ab1e6316.webp", "img/97161e86bcb1312b7935b273.webp", "img/a04ff105ae79c938fa38f9c6.webp", "img/a7274661711ddb73f833ef35.webp", "img/a7c5d74d157a16e7017f2e6f.webp", "img/a880c0650b242b3627274540.webp", "img/b00bfc25c821feea4a9581a3.webp", "img/b0c0a181830d133dfdc752fc.webp", "img/b20d904c7eecd745d25ba518.webp", "img/b45ac5ac02aaf5aa979675e0.webp", "img/b6744c59c90974dfd5ac7a19.webp", "img/bab4507d5e07bffc13385812.webp", "img/bcca36bd1da5707e710cec74.webp", "img/bcedf8d46ee53ca174e1dc92.webp", "img/bdb1b69f6be914d0d7bb56e5.webp", "img/c035752f856ed73ca722ea2f.webp", "img/c28136185cdaa58a65862b6f.webp", "img/c64098a5365d1e958943af3f.webp", "img/c77274ca1ccf37bdf19bc065.webp", "img/c9f16effe7f187086f468821.webp", "img/d8db4b9641d5a466b8d4320f.webp", "img/dcc2392ba62eca7a56730a19.webp", "img/e0447ff1a51b385c85bfcb8c.webp", "img/e5dcc0f4ce3a911683357958.webp", "img/e86505763d9c536287631ed5.webp", "img/e90385820ce43024596d37a8.webp", "img/ea80505ade7198735e2aa028.webp", "img/f0bacc9dae0750cb9571a152.webp", "img/f2e310d7aabf76d361a1a8d7.webp", "img/f3b8c492893b0deb58776a43.webp"];
const CACHE = "london-" + VERSION, FONTS = "london-fonts";

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    for (const url of ASSETS) {
      // maps are named by content hash, so an unchanged one can come from the old copy
      const old = url.startsWith("img/") && await caches.match(url);
      if (old) { await c.put(url, old); continue; }
      const r = await fetch(url, { cache: "no-cache" });
      if (!r.ok) throw new Error("couldn't save " + url);
      await c.put(url, r);
    }
    self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith("london-") && k !== CACHE && k !== FONTS) await caches.delete(k);
    await self.clients.claim();
    for (const cl of await self.clients.matchAll()) cl.postMessage({ type: "saved", version: VERSION });
  })());
});

const timeout = (p, ms) => Promise.race([p, new Promise((_, no) => setTimeout(() => no(new Error("slow")), ms))]);

self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET") return;
  // the page itself: try the network briefly (so fixes show up), otherwise use the saved copy
  if (req.mode === "navigate" && url.origin === location.origin) {
    e.respondWith((async () => {
      try {
        const r = await timeout(fetch(req, { cache: "no-cache" }), 4000);
        if (r.ok) return r;
        throw new Error(r.status);
      } catch { return (await caches.match("./", { ignoreSearch: true })) || Response.error(); }
    })());
    return;
  }
  if (url.pathname.endsWith("/version.json")) return; // always ask the network
  // fonts: keep a copy the first time they load
  if (url.host === "fonts.googleapis.com" || url.host === "fonts.gstatic.com") {
    e.respondWith((async () => {
      const hit = await caches.match(req); if (hit) return hit;
      const r = await fetch(req); if (r.ok || r.type === "opaque") (await caches.open(FONTS)).put(req, r.clone());
      return r;
    })());
    return;
  }
  if (url.origin === location.origin) {
    e.respondWith((async () => {
      const hit = await caches.match(req, { ignoreSearch: true }); if (hit) return hit;
      return fetch(req);
    })());
  }
});
