/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fa18ad0cab2a43891ae92a06c3dac842"
  },
  {
    "url": "accumulate/index.html",
    "revision": "233e98615d9090ca29b9502e65e0c2b1"
  },
  {
    "url": "algorithm/index.html",
    "revision": "17456bb675062aeb6a3794a983066dd9"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.57674b58.js",
    "revision": "199578e8d700c7aec21097d965ce4ea9"
  },
  {
    "url": "assets/js/4.069ecb7c.js",
    "revision": "2993a67b37af1f737cd902239a015e19"
  },
  {
    "url": "assets/js/5.2710f488.js",
    "revision": "79a5721e20eb1c34d93f1d1e4bd61b66"
  },
  {
    "url": "assets/js/6.7dd99e78.js",
    "revision": "7c43ab830d11adf49a4785ca279d121a"
  },
  {
    "url": "assets/js/7.892179f7.js",
    "revision": "6a8f3addb6e0b6359f7ef29ee85242d8"
  },
  {
    "url": "assets/js/8.12f716cf.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.c1ed8efc.js",
    "revision": "7a6cfede3d860b185429356ded141be3"
  },
  {
    "url": "guide.html",
    "revision": "75a964b22723bb98a0a677d6d7286698"
  },
  {
    "url": "images/photo.jpg",
    "revision": "6c80221a6e8fa48758c29d6794c2c4cd"
  },
  {
    "url": "index.html",
    "revision": "7567187c93154a4f4a5906bc6ff1b98a"
  },
  {
    "url": "Java/index.html",
    "revision": "1a7f739a1fbcc98bed9ff31a918f26fc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
