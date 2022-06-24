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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "65b4aa7a8a7040a93fae90d654519646"
  },
  {
    "url": "assets/css/0.styles.cfc0c72b.css",
    "revision": "5a60c1a9440d3859f89d35b14adaae61"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.82a5bbdf.js",
    "revision": "a5ccc1ee114b38d98965cf28f7c8a4f0"
  },
  {
    "url": "assets/js/10.33f76f26.js",
    "revision": "220f65ea638281da19c0b0a7cdd4a305"
  },
  {
    "url": "assets/js/11.25089477.js",
    "revision": "4ef4bceb3f3fbc91dbae4f1f03563e71"
  },
  {
    "url": "assets/js/12.f46f2fdb.js",
    "revision": "d8aafd5718580ee9b969bf33b4cb4200"
  },
  {
    "url": "assets/js/13.9422b4fc.js",
    "revision": "db1d989744ef17f4d6e062658e9f4508"
  },
  {
    "url": "assets/js/14.795a1ecc.js",
    "revision": "fadbf5bb18a68e25d3e4ad57655eb146"
  },
  {
    "url": "assets/js/15.29fd8e02.js",
    "revision": "b98287091e3aaeae82f3eacfb0eb736f"
  },
  {
    "url": "assets/js/16.5b71f383.js",
    "revision": "b9dc0fb5627928ecc7ccbdfefc45bb98"
  },
  {
    "url": "assets/js/17.1599297a.js",
    "revision": "556d08a9d287faf83986287d858a5a23"
  },
  {
    "url": "assets/js/18.0dcebe79.js",
    "revision": "5d3da8e42f8901487960079e1f92d613"
  },
  {
    "url": "assets/js/4.de9c354f.js",
    "revision": "c026ea6cc971d554f4321bf7de725e62"
  },
  {
    "url": "assets/js/5.add2c993.js",
    "revision": "9b9cb82a6d53d3683a2ebbff85546d54"
  },
  {
    "url": "assets/js/6.ef500abf.js",
    "revision": "f18fd80e5f56592edbe12939cb258275"
  },
  {
    "url": "assets/js/7.d51dfeed.js",
    "revision": "0c87ed99af5b16be211472c8f40f98cd"
  },
  {
    "url": "assets/js/8.c32581b2.js",
    "revision": "75bbb0b04f31e38bddf06c1e7f804ec4"
  },
  {
    "url": "assets/js/9.e3ab4b27.js",
    "revision": "191efa8a41a08a4cb0bcebed53f83171"
  },
  {
    "url": "assets/js/app.e763d6bf.js",
    "revision": "f1d83318292acfef3107c99290772d80"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.c6937b0c.js",
    "revision": "81ef84d370addbda5a2e08aa6861f5f8"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "6847a3c104e23d7f1d67210fea613ce8"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b89e2787545b2a657b023da38bc7c9de"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b2f530e6d6fca5d8e1ccbaa7e6f339f3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9d7eeec6174eb97ade9dcb2b818badcd"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "592f8371758121dc79fe9dd4b2a17e5a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "8b4f492d8a9095caf2b17ee49df1fb23"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "42ca9b451f95d3e00bd28898b6658065"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "cfe907c8eaf4b6a831901abedfb557c6"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "f157f9e6ed9337c005c53aefaab52d6f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "97242b343642034d975358052f403dfe"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8dabb99b2f2b30bcb70ed24a56acac86"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "e2ab5a208e3b0c5fd1b8ce7c4a5f6372"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "74ac42ec9e5ab9d273407c1f38f67167"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d0863834d5c7788ea085fd03efabb1c7"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "55db27268455d70abe81af9b436d9f59"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "a6b6141f75b554bcadac83859af0e749"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d6ea0c16f376b89092c4bb892899684a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "9447a5bfb0444bf2f3e997098ede1049"
  },
  {
    "url": "timeline/index.html",
    "revision": "dc810a37345c9fe3b151c2ec59fba706"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "7132f5d485496798e7337cec29caa23d"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "ac186b7c410d6f548da05d7051abbc36"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "d21d8f3a44a1f77b551077cf1b9bb0f4"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "75fe9a100d9cadac7947fb6d95a660b3"
  },
  {
    "url": "生活分享/life.html",
    "revision": "9cc651c7d652106777e96588a2f971b2"
  }
].concat(self.__precacheManifest || []);
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
