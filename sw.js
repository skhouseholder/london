// Saves the trip site on the phone so it opens without a connection.
// publish.py fills in VERSION and ASSETS; a new VERSION makes the browser install a fresh copy.
const VERSION = "e472f7c65da4";
const ASSETS = ["./", "favicon.svg", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "manifest.webmanifest", "img/01e78d9bbd50216f88c73fca.webp", "img/09543997b103b0a32c32d0eb.webp", "img/0a724b111ade2cfb199e7206.webp", "img/0b4739e37a66d80cf66ca799.webp", "img/0de7360959fbd062e3ab4eb5.webp", "img/0edb9e6a75ed8569a9a2633e.webp", "img/0f2a760e0cf267d1e9b08d33.webp", "img/1024e107aa05d4fb5bac096f.webp", "img/1067ae3dd05296d2a3d4b000.webp", "img/14f5bcd389b870725552b3a1.webp", "img/15e164cdaada592c70e957d5.webp", "img/191fa84255da6c7f616c245e.webp", "img/1b3f63544241690587f30a80.webp", "img/1c3c2813bd9f68a83cfa6e33.webp", "img/1dabe42e16e8debe5d55f43c.webp", "img/2183cfc7cc63058bddde7cf7.webp", "img/2303eec8a8d94ae63501783a.webp", "img/273d0865c5c9d453754666c1.webp", "img/2e9eccee370cac80e35e7da7.webp", "img/30445e81a11ddade25fd5602.webp", "img/30a89f86716bc884daa3be44.webp", "img/3b91e8a2c6963861ed627bc4.webp", "img/3cfeadaa0cb8ce86acf656a3.webp", "img/3e22fd716b55761f5a2e512e.webp", "img/3e724a940c1fb17063816beb.webp", "img/3ef90c50614b8984ff1c55f5.webp", "img/3efd521d74ef3038e140e5a6.webp", "img/3f4de3466a910c5eb6e6b124.webp", "img/408c269861b21fb76dec3a19.webp", "img/43d1615f6545caf198bd00db.webp", "img/44ea946a36533a3c9ba202da.webp", "img/459e6c11a831c78e07c6854b.webp", "img/460819e2e234b1e527a533ba.webp", "img/46e4315f3249ac3dc6cc47c3.webp", "img/48eb1defac3fb2e9b00f7b36.webp", "img/4dc6ff7b7b142e7daec5b13f.webp", "img/4e3f80d7950c07b30c3c0b1a.webp", "img/4f340c3d7e9451edf2a18380.webp", "img/51186cd18261d65d27f09c0e.webp", "img/51efdf21b6c17a2a147e494c.webp", "img/52bbbfe1625bf1089f5042cf.webp", "img/56097cbba928230bd16365d9.webp", "img/593188c6330d65a4b3f6e1c5.webp", "img/5aa81ef00a2d4646c76be1db.webp", "img/5bb9cf18eb4a05a1b901fe01.webp", "img/5c83cbb85e7e718f83f71fd9.webp", "img/6153e46522b19d3def01c902.webp", "img/62d9fb9603ca37cff11ba682.webp", "img/64b03156f2e7ff7e1f172235.webp", "img/666aff69a6b80b6cb08a4674.webp", "img/67336fdf4ed12675a5f01ae1.webp", "img/687bef664ebc6ec942ba791d.webp", "img/6d5e9dcf7c70123e766cde84.webp", "img/6e3ab01836a5be6f1384d5ed.webp", "img/70ad611c5108600c4e2c6a2e.webp", "img/71af0ab4ecc86ec9af16bb4f.webp", "img/72a7f2e5316c80af34d24159.webp", "img/77f5e61e784db48f985aa450.webp", "img/782960b6d420a2e2703ff459.webp", "img/792f39d596aba0f0543d8751.webp", "img/7be93f451782dddc1eddbad5.webp", "img/7d8fd966e7655ec61c649cd6.webp", "img/7dcdd5306c76e9a41c2f6fd9.webp", "img/7e191bb2d7d769a546be7f3f.webp", "img/7ec9d22979c79364fa6b436e.webp", "img/8175eaf1565e752e5e88c20c.webp", "img/81eb30b6915cc7e4e9270432.webp", "img/824260cb3c380fabaf890563.webp", "img/82bea9dc1d11ffcf40e04dca.webp", "img/83e62b3696ede179f4852769.webp", "img/8523af774c51db689efca8e2.webp", "img/85461f13c907c9f845b46ddb.webp", "img/861e2fcb5650200bff024b0a.webp", "img/88ccea6b71428db775c3c1b8.webp", "img/8954ce23241efb01b59d8f87.webp", "img/89912d80981f7003801be990.webp", "img/8b203b99526d1342d8f10a7a.webp", "img/8dd4ffc0762624a7febfc701.webp", "img/8e9efb71335ae3673f784686.webp", "img/8f8bc469be2c83abb07e6f23.webp", "img/8fc894dc5ca14baee4320612.webp", "img/92ad503d6c4289acb32effaa.webp", "img/94184c2c6de2ca8dd1ab9e22.webp", "img/9518aa08e90d97274ff4eaf4.webp", "img/960557f898be12bf4161a250.webp", "img/96205d06c1440017ab1e6316.webp", "img/97161e86bcb1312b7935b273.webp", "img/9a19beb2ba2be7cb4ca2beba.webp", "img/a04ff105ae79c938fa38f9c6.webp", "img/a09424e5727d935b1174d397.webp", "img/a1a282aefbf93e0490110531.webp", "img/a3404132bb28d265e733dbf6.webp", "img/a67cf5a45d46542b7ca2b56b.webp", "img/a70074483af61b6ede608456.webp", "img/a7274661711ddb73f833ef35.webp", "img/a7c5d74d157a16e7017f2e6f.webp", "img/aa28916fd6c776b67198cce3.webp", "img/aa7365efa968399231accfa4.webp", "img/ae178e79f748bd39dd829c39.webp", "img/afa83b84969b2d8a19220dc2.webp", "img/b00bfc25c821feea4a9581a3.webp", "img/b0c0a181830d133dfdc752fc.webp", "img/b2eb312d236c035de66d70ac.webp", "img/b41064e42774704989cf6a20.webp", "img/b45ac5ac02aaf5aa979675e0.webp", "img/b4bb076bf48318358942eaee.webp", "img/b6744c59c90974dfd5ac7a19.webp", "img/bab4507d5e07bffc13385812.webp", "img/baded0efb92d0adbf061b640.webp", "img/bb69ec7080f5a80b788764b2.webp", "img/bcca36bd1da5707e710cec74.webp", "img/bcedf8d46ee53ca174e1dc92.webp", "img/bdb1b69f6be914d0d7bb56e5.webp", "img/bf988b275de2c6acf79747e7.webp", "img/c09ed6267d7280fee9c87829.webp", "img/c1f622fb4415f64be593f173.webp", "img/c28136185cdaa58a65862b6f.webp", "img/c68eb8df5bdc71512eed52bf.webp", "img/c7247c73c41f66d9c7a6f2d3.webp", "img/c85d96886974e49ece67069c.webp", "img/c9f16effe7f187086f468821.webp", "img/cc29faae96372f8f1f315877.webp", "img/cf72ffd53e5ce804c22a6521.webp", "img/d0c35d0d2de82cf6a0a498f3.webp", "img/d3a45b68e1c7e64a900cb8b5.webp", "img/d8db4b9641d5a466b8d4320f.webp", "img/da21951006a065e82a07a8dd.webp", "img/db0e80e23db51200ece026dc.webp", "img/dcc2392ba62eca7a56730a19.webp", "img/ddc9366564d03381343a4c03.webp", "img/e0447ff1a51b385c85bfcb8c.webp", "img/e4e0b38cbddff647b7f5b676.webp", "img/e5182ef154d1fad8c5368d89.webp", "img/e5b95432022067a77f7b6d2c.webp", "img/e70d6c6efa8275b61ae138ef.webp", "img/e86505763d9c536287631ed5.webp", "img/e90385820ce43024596d37a8.webp", "img/ea80505ade7198735e2aa028.webp", "img/eb342150f7e3635598454a50.webp", "img/efa8e9688a19aca8c90b30f5.webp", "img/f0bacc9dae0750cb9571a152.webp", "img/f1defb1bcd1b3267cfdd5f23.webp", "img/f2de2f6ef2604da609ea7394.webp", "img/f2e310d7aabf76d361a1a8d7.webp", "img/f3859d08ddb3bcdafe70780a.webp", "img/f3b8c492893b0deb58776a43.webp", "img/f60a3e72fd82d1d8b9c29073.webp", "img/f8713a810c6773b1d10fb96c.webp", "img/ffff2d8c0cf7147a758601c8.webp"];
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
  // the page itself: open the saved copy straight away, so a slow connection never holds it up. The page checks
  // for a newer version once it's open, and this file changing makes the browser download it in the background.
  if (req.mode === "navigate" && url.origin === location.origin) {
    e.respondWith((async () => {
      const saved = await caches.match("./", { ignoreSearch: true });
      if (saved) return saved;
      try { return await fetch(req, { cache: "no-cache" }); } catch { return Response.error(); }
    })());
    return;
  }
  if (url.pathname.endsWith("/version.json")) return; // always ask the network
  // fonts: keep a copy the first time they load
  if (url.host === "fonts.googleapis.com" || url.host === "fonts.gstatic.com") {
    e.respondWith((async () => {
      const hit = await caches.match(req); if (hit) return hit;
      const r = await timeout(fetch(req), 5000); if (r.ok || r.type === "opaque") (await caches.open(FONTS)).put(req, r.clone());
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
