'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.ico": "bd3b7accdfca59288f6af8eb887169d3",
"version.json": "8864f93a96f5b7496b3179b8c9f3771d",
"flutter_bootstrap.js": "4e207934958f15798f6562264a117d75",
"manifest.json": "2488301c646356a94f9b6bd3f5a0c191",
"main.dart.js": "fb70c9ab782e5361ff0cf6b73796a625",
"index.html": "6440ff3531a8c00ab2da93ab906153ce",
"/": "6440ff3531a8c00ab2da93ab906153ce",
"assets/AssetManifest.json": "71fa5e2fd7ccb4b2c00ffaf9010ea161",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "02bce1193944acc05311c8eae02f7fbb",
"assets/AssetManifest.bin": "c13089eb34ee487af0adceb9d18e5c4e",
"assets/FontManifest.json": "2e48d04efe798040d74a7107c5a0e115",
"assets/AssetManifest.bin.json": "735d1f8614b3f8d42c8597dcc6c43440",
"assets/NOTICES": "7e2de2fd902251e315c3677977a13972",
"assets/assets/audio/click.mp3": "02db1c17236a6663edd29670ecb86593",
"assets/assets/audio/notification.mp3": "35fef3c0782b93e0c4bf33248376d973",
"assets/assets/audio/typing.mp3": "0a3e6470e218435dde4e2e6415084d2d",
"assets/assets/audio/lose.mp3": "fd1ffc1fac9be3ea6cf8ab186b6f353d",
"assets/assets/audio/puzzle_solve.mp3": "7a3389aa036b9739d6a74dcba348c76e",
"assets/assets/audio/win.mp3": "bb5f2a7623f3e607520488e48895df64",
"assets/assets/audio/bg_loop.mp3": "37773a6ef444e8372963e04e55a383d1",
"assets/assets/audio/puzzle.mp3": "44080cd46e2b9231896ed08623264ab9",
"assets/assets/audio/open_drawer.mp3": "fed9f99671a41a16378dfa65f4e7f139",
"assets/assets/anim/congo.json": "07db4f6e1194e035ba3a7b3c34bd4dea",
"assets/assets/images/monitor.svg": "052d5722754e8f69c85fe875f5222fbe",
"assets/assets/images/pen_stand.svg": "c1b63e035d97ed1a920c113076ad37b0",
"assets/assets/images/sample.svg": "a8f02052b7fe061a7b9035754f8ba751",
"assets/assets/images/table.jpg": "7188b9d8edef8285a10aaaa5637b6e0e",
"assets/assets/images/drawer_outside.png": "a194320dae02372c9ccc0ee64bc953e4",
"assets/assets/images/dgp_2.jpg": "39d249fb010c03aaf42898d9c03b8e17",
"assets/assets/images/chair.svg": "6ff156b24adc06ab3d5fe71967b23e92",
"assets/assets/images/characters/old_person/2.svg": "0ba8a42a39eebf2cea7fb5454ca71f58",
"assets/assets/images/characters/old_person/1.svg": "885bf7cf7f4cdbbcb4ca84050eb1cffb",
"assets/assets/images/characters/old_person/0.svg": "73317a32ad2401fdea80f59eb2bce55f",
"assets/assets/images/characters/old_person/3.svg": "ae3ac2b7be0a22a0a808ce1da13f556a",
"assets/assets/images/characters/old_person/4.svg": "dc62c18ed27d5b36bb087bd17503c6ff",
"assets/assets/images/poster.svg": "5ef1c214eadd1bdb2b1f43709506eb27",
"assets/assets/images/desk_drawer.svg": "827bdcaf9a536efb3f4d1144ae401b06",
"assets/assets/images/drawer_inside.png": "0fea836fda86e040e42d5892e8499168",
"assets/assets/images/drawer.svg": "c5c7c90e65ec0ee10d14f764499e76cf",
"assets/assets/images/injection_1.svg": "2d55ed63d0d27e5a0af068b60d2051ee",
"assets/assets/images/phone.svg": "30ea740ba6204a7e2accd3141d563467",
"assets/assets/images/dgp_1.jpg": "706c53d6e87bb176bfa9ddd1a7b5389a",
"assets/assets/images/door.svg": "2927b4245002463f6e698a6d8f37cefc",
"assets/assets/images/books.svg": "9a1282bdd3d872a6af02c25d0747130e",
"assets/assets/images/dustbin.svg": "52a41b516629862490ae0ad5c40a1bfc",
"assets/assets/images/puzzle.jpg": "b2875b928d207ffd09190b2ebd884328",
"assets/assets/images/bed.svg": "633d96ab11eabf58b93fb4aa0f83d704",
"assets/assets/images/pill_bottle.svg": "e74f8807d9af26c80a39d5bcc20e5ed0",
"assets/assets/images/desk_chair.svg": "a1d411850814600c001fad77260f72d5",
"assets/assets/images/desk.svg": "09182bb02c9eb7fd732a3096cb4c0698",
"assets/assets/images/floor.svg": "bbbb35c6c8ee4a43a7eaf32505393933",
"assets/assets/images/keyboard.svg": "d79b07950da31cd96775774d90cf3376",
"assets/assets/images/cursor.svg": "d5612f359ba90989ebf6ccfdd44f1ecf",
"assets/assets/images/injection_2.svg": "900e694fe02834a66c9dd6a497533d15",
"assets/assets/images/pan.png": "3471633cb5a2b6551c10dcd5ced9772f",
"assets/assets/images/clipboard.svg": "cab5862cdbeef3a809101c1d96993ffb",
"assets/assets/images/range.png": "2a63629245f243b7d2b47d2dc26288ab",
"assets/assets/images/agp.png": "bcb6ee9694066209215ae0512bf2817c",
"assets/assets/images/computer_report.svg": "9eac7d1c22885dce06812cbab69a071b",
"assets/assets/fonts/digital.ttf": "1e670d88b23c7ab956f1829e3828a210",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c"};
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
