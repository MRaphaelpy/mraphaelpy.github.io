'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"assets/assets/images/insta.svg": "c06f4e917187128efb2a7f5213226c33",
"assets/assets/images/glass.svg": "964618e0ffe0d0e5a38174979b801b5a",
"assets/assets/images/target.svg": "8d66b073812e9d08d83e46dbcc2af878",
"assets/assets/images/python.png": "64aeac68d191109b6041934d98b8847c",
"assets/assets/images/logo.png": "ba5245dbf8de2d4a488638bd59ce74ef",
"assets/assets/images/email.svg": "214c9e3da72f22a988612e3f97ee515d",
"assets/assets/images/linguagemc.svg": "1dfceb575e808d5ab23a87daf82d1cee",
"assets/assets/images/github.svg": "ef2abe0fadfa3c867beac121d3485d5b",
"assets/assets/images/masterlogo.png": "da11e80a810dcf33799592d3544b03c6",
"assets/assets/images/giticon.svg": "2f55debd98b4040009b3ab545969577d",
"assets/assets/images/github-alt.svg": "c0c3ffe1c0643952eeaeedc0348b5b05",
"assets/assets/images/wpp.svg": "9c0ec2e16b32b70b4d87c183452879cf",
"assets/assets/images/backend.png": "0ebc182c1d9edd588d260e8a19d50f42",
"assets/assets/images/profilepic.png": "7b979c8ca23d49c0a55e754500128637",
"assets/assets/images/person.svg": "ffec8d230f8e8a6f15c358ea55086420",
"assets/assets/images/google-logo.png": "d45480e1c7342b683bf97167b70de488",
"assets/assets/images/flutter.png": "6637b6c64481c76692760d0729b9c10a",
"assets/assets/images/iconmoon.svg": "ef7f77b6851e27da72ef81763876bc0f",
"assets/assets/images/java_circley.png": "cb18683cd0bb39f5ea863c4fe9ee2b2c",
"assets/assets/images/toy.svg": "83acf4fd931877e19997c219cb37586a",
"assets/assets/images/flutterlogo.svg": "084b23effb5d61aec2daf964e4d5e13c",
"assets/assets/images/flutter_circle.png": "59abe6cc666a648c33f9488e53663858",
"assets/assets/images/icons8-whatsapp%2520(1).svg": "9c0ec2e16b32b70b4d87c183452879cf",
"assets/assets/images/backend_iconj.png": "a9f40c5e289f8a24b377154ee3f61af9",
"assets/assets/images/python.svg": "c90769011d611cbbcada467367c3b263",
"assets/assets/images/logotop.png": "ee8382ba0d0f71e6dfadce414a367d98",
"assets/assets/images/linkedin.svg": "dd9fd4f8b86b4d3d07e183716f3271a6",
"assets/assets/images/linguagemcd.svg": "e9efda970269ddc0f3f60d172868c5f6",
"assets/assets/images/facebook-logo.png": "276c63e727a3a67df62ae98086047306",
"assets/assets/images/python_circle.png": "b85d209d9c34e721a8f420175edf1a04",
"assets/assets/images/facebook.svg": "7f8379b2fcb3842b6951db34f3a60e0d",
"assets/assets/images/instagram.svg": "79c8a6be59e187bf01b3189a1ed7928a",
"assets/assets/images/java.png": "8f7e4cc176298fd0724a1fe3b1c3f18e",
"assets/assets/images/dart_circle.png": "bb6686197cf7f4b03382569f2cbec5b8",
"assets/assets/images/dart.svg": "b5d6359deadb933b7a194131961f4f89",
"assets/assets/images/apple-logo.png": "4d2e8d2af1385eacc5e7849e93f2a828",
"assets/assets/images/whatsapp.svg": "73ce2aeeeb033211adf570c346020b13",
"assets/assets/images/darticon.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "05e7f9abe49eda22285c3bc0efe6a951",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/NOTICES": "90f720b1ae86fe56ee5b0054021acaec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.json": "86c9a786f6fc8fd5927d2ee59bae7c10",
"assets/fonts/MaterialIcons-Regular.otf": "9406d4449c41992e36428647af713f2b",
"assets/AssetManifest.bin": "0b32042e0ac0608614c26b14fe7a96eb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "9a8e11a039265685bddf5bc643d094b0",
"index.html": "109e93e334a345079d008d5c3825780f",
"/": "109e93e334a345079d008d5c3825780f",
"version.json": "009c9e65172e010890f7f65fde438006",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "6b83fd90c4a35cfdc50905ffbb6dfc34"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
