'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js": "9f4dea010074e58a307633f3d86c85c6",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin": "5c522777fa823665997e085aa23730e0",
"assets/fonts/MaterialIcons-Regular.otf": "2457bba49c76fc9a948d28ada7c4d2e3",
"assets/assets/images/pill_bottle.png": "aa279c5d266fe3950b7a8e4c80fb935e",
"assets/assets/images/phone.svg": "30ea740ba6204a7e2accd3141d563467",
"assets/assets/images/chair.svg": "6ff156b24adc06ab3d5fe71967b23e92",
"assets/assets/images/door.svg": "8cb0d0aab70520f6cdbe965a45f6af38",
"assets/assets/images/desk_drawer.svg": "827bdcaf9a536efb3f4d1144ae401b06",
"assets/assets/images/floor.svg": "bbbb35c6c8ee4a43a7eaf32505393933",
"assets/assets/images/poster.svg": "5ef1c214eadd1bdb2b1f43709506eb27",
"assets/assets/images/books.svg": "9a1282bdd3d872a6af02c25d0747130e",
"assets/assets/images/drawer.svg": "c5c7c90e65ec0ee10d14f764499e76cf",
"assets/assets/images/pen_stand.svg": "c1b63e035d97ed1a920c113076ad37b0",
"assets/assets/images/bed.svg": "633d96ab11eabf58b93fb4aa0f83d704",
"assets/assets/images/dustbin.svg": "52a41b516629862490ae0ad5c40a1bfc",
"assets/assets/images/cursor.svg": "d5612f359ba90989ebf6ccfdd44f1ecf",
"assets/assets/images/sample.svg": "e595a046152e83965e7076dc67f89bb3",
"assets/assets/images/desk.svg": "09182bb02c9eb7fd732a3096cb4c0698",
"assets/assets/images/desk_chair.svg": "a1d411850814600c001fad77260f72d5",
"assets/assets/images/characters/old_person/4.svg": "dc62c18ed27d5b36bb087bd17503c6ff",
"assets/assets/images/characters/old_person/1.svg": "885bf7cf7f4cdbbcb4ca84050eb1cffb",
"assets/assets/images/characters/old_person/2.svg": "0ba8a42a39eebf2cea7fb5454ca71f58",
"assets/assets/images/characters/old_person/3.svg": "ae3ac2b7be0a22a0a808ce1da13f556a",
"assets/assets/images/characters/old_person/0.svg": "73317a32ad2401fdea80f59eb2bce55f",
"assets/assets/images/keyboard.svg": "d79b07950da31cd96775774d90cf3376",
"assets/assets/images/monitor.svg": "052d5722754e8f69c85fe875f5222fbe",
"assets/assets/images/computer_report.svg": "9eac7d1c22885dce06812cbab69a071b",
"assets/NOTICES": "0229687ea3b2750fe55509864d0341ae",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "d68b19cc607e0412b32a85cd78b4e324",
"assets/AssetManifest.bin.json": "7634603724c2714007c62430092919aa",
"index.html": "9421abef0d393fc1b51b3c1f329d77b3",
"/": "9421abef0d393fc1b51b3c1f329d77b3",
"manifest.json": "2488301c646356a94f9b6bd3f5a0c191",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "8864f93a96f5b7496b3179b8c9f3771d",
"flutter_bootstrap.js": "50cb1a91d1fe1cfa313afe41e89f1c88"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
