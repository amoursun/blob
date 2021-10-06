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
    "revision": "842d42fe91866ce240e1f76f5f257187"
  },
  {
    "url": "another/aboutSelf.html",
    "revision": "feac7aea409deab1b195d93942521cec"
  },
  {
    "url": "assets/css/0.styles.5aea80a1.css",
    "revision": "686b1c17818e9a91183ea1db540ad6f8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d0d8e419.js",
    "revision": "fcd2061fecb5dbaa115f72851973efc7"
  },
  {
    "url": "assets/js/11.5bd38ef6.js",
    "revision": "5b760665a888906ac74107ab14cfcc8b"
  },
  {
    "url": "assets/js/12.f4c5c49f.js",
    "revision": "f588bf938c493f17d9b5ce522f583333"
  },
  {
    "url": "assets/js/13.ca1459b3.js",
    "revision": "6d38c93ce537b7bc68617f3c58a325f7"
  },
  {
    "url": "assets/js/14.08c14f24.js",
    "revision": "58d6366984dbb4980e84d6ffcf41311d"
  },
  {
    "url": "assets/js/15.0da05c48.js",
    "revision": "29fc3d305182568e7f0e3d7741c96458"
  },
  {
    "url": "assets/js/16.62bc81fc.js",
    "revision": "ed783354f44ba123235cff301f766df4"
  },
  {
    "url": "assets/js/17.032fff81.js",
    "revision": "5b0de822b2bff5a43262dc2d1e434f78"
  },
  {
    "url": "assets/js/18.a71d4de7.js",
    "revision": "6c0fdafda1a53e8b2794f0828177e481"
  },
  {
    "url": "assets/js/19.12f74002.js",
    "revision": "378fb068787678116e29373ac748f78b"
  },
  {
    "url": "assets/js/2.93370592.js",
    "revision": "19ce6bb10245d5e44a3177f6db299e80"
  },
  {
    "url": "assets/js/20.6bcf3a41.js",
    "revision": "a191696b1df423e29587eba5f2df2075"
  },
  {
    "url": "assets/js/21.6f5a9cc7.js",
    "revision": "8725eb5946d0ef4c9d95c7caa07dccf0"
  },
  {
    "url": "assets/js/22.75fab51e.js",
    "revision": "773b9d613af3af21fd2237ca4f92ba25"
  },
  {
    "url": "assets/js/23.526f8d49.js",
    "revision": "eb91960962515fbe6c19fd93b3fc43ac"
  },
  {
    "url": "assets/js/24.3b43d08b.js",
    "revision": "3f32e493596dd61e043fd363dd104f21"
  },
  {
    "url": "assets/js/25.8ccbba07.js",
    "revision": "fc399f52aaa83a066846bfa7cd2232b8"
  },
  {
    "url": "assets/js/26.d1d2d509.js",
    "revision": "05b69ff19f20792db53ebaef69cc0396"
  },
  {
    "url": "assets/js/27.a9200947.js",
    "revision": "f23bddd691d2f506bf401255fc2cb5d3"
  },
  {
    "url": "assets/js/28.2559b161.js",
    "revision": "c7b1a9cfefece11625746e98876451f0"
  },
  {
    "url": "assets/js/29.328cac50.js",
    "revision": "c7e0558f4727fdd96896b52616ab099a"
  },
  {
    "url": "assets/js/3.26d14025.js",
    "revision": "56c2f51a4063d7464c6229d99fc0c472"
  },
  {
    "url": "assets/js/30.55d8c058.js",
    "revision": "be4bcce858f94098ad92fef58d93ad74"
  },
  {
    "url": "assets/js/31.cc090a9b.js",
    "revision": "07923f1bf70d37ccb73bcffec8ba4441"
  },
  {
    "url": "assets/js/32.7615ffed.js",
    "revision": "4f0f639ac573fbbc6423badfd16ef08f"
  },
  {
    "url": "assets/js/33.e29da7d5.js",
    "revision": "8b3eaee4071a2f738b3015310c2f66e3"
  },
  {
    "url": "assets/js/34.b64a148d.js",
    "revision": "f82305f922378255de2f31b9171a784f"
  },
  {
    "url": "assets/js/35.22628cd6.js",
    "revision": "29f67a6913ce9fe975a30c77e6634d7f"
  },
  {
    "url": "assets/js/36.8cb3bb91.js",
    "revision": "0cb2610ccd5ca1f840b852ab7750e554"
  },
  {
    "url": "assets/js/37.d66a3e13.js",
    "revision": "49bfd618286a6a5907ae4ad7ee009259"
  },
  {
    "url": "assets/js/38.e70b182b.js",
    "revision": "362db45778bfffeb60ccde317fc78711"
  },
  {
    "url": "assets/js/39.f5b7d468.js",
    "revision": "798eff92777399e1890c6607a87eb1c3"
  },
  {
    "url": "assets/js/4.4ca03409.js",
    "revision": "931f403a5bb5982a83c8322ffc064290"
  },
  {
    "url": "assets/js/40.4855da95.js",
    "revision": "cb6427629826a275c8cff97fa64e5aea"
  },
  {
    "url": "assets/js/41.bf02ce3c.js",
    "revision": "22b43752c76bb1d7990c8b23297c0f86"
  },
  {
    "url": "assets/js/42.b4d3421c.js",
    "revision": "963d3be1a55bf037be926c45a6c051f4"
  },
  {
    "url": "assets/js/43.b0fb62d6.js",
    "revision": "ed764535f5ffcc136e4b72649fa7c244"
  },
  {
    "url": "assets/js/44.3f2965c6.js",
    "revision": "eba9bbd55b0d4d4da4cd1f12662730c9"
  },
  {
    "url": "assets/js/45.ef1f7a61.js",
    "revision": "378731e9554e24f17b0e80c6ed817036"
  },
  {
    "url": "assets/js/46.3e685d61.js",
    "revision": "9fab82423b044e2b353e5106834b79ff"
  },
  {
    "url": "assets/js/47.2aba3caa.js",
    "revision": "3c451db7b31f246ef9e25e1bed5a14c3"
  },
  {
    "url": "assets/js/48.00bbbe64.js",
    "revision": "bb073db93c09c59ac7758c94617ac266"
  },
  {
    "url": "assets/js/5.3b91eca8.js",
    "revision": "fb582a34122ca2924fd46f6739c8b6d2"
  },
  {
    "url": "assets/js/6.eeb8e4ca.js",
    "revision": "89578c7db81a045ff51bc21901a8dd46"
  },
  {
    "url": "assets/js/7.f6698711.js",
    "revision": "53f6613ba4de6f3e8f3b73065c3f3af0"
  },
  {
    "url": "assets/js/8.e03b7769.js",
    "revision": "20ee85169cfe1e0743dc0e700768a515"
  },
  {
    "url": "assets/js/9.03071b23.js",
    "revision": "2d98aaae85c932cc61e9e455cf65ad3f"
  },
  {
    "url": "assets/js/app.345919d0.js",
    "revision": "91ed701ddbb4804c285a2f8703c30397"
  },
  {
    "url": "FAQ/content/question-1.html",
    "revision": "eeb6359661b51de4f7120bb7d26f1a11"
  },
  {
    "url": "FAQ/content/question-2.html",
    "revision": "f237f0ed669d14370505ad5ddb5d7f27"
  },
  {
    "url": "FAQ/index.html",
    "revision": "fb7736948e68a61bb9ee296ea387fb5f"
  },
  {
    "url": "guide/index.html",
    "revision": "bfe334c388f0148957d0b4c11922f581"
  },
  {
    "url": "index.html",
    "revision": "8c9207e5a74eadc52476f6b680343637"
  },
  {
    "url": "links/wiki/index.html",
    "revision": "9f3bc0598db29256d6f808540bb58b7a"
  },
  {
    "url": "thought/css/index.html",
    "revision": "88291b6193a96acf89d3ba3b4b15fc15"
  },
  {
    "url": "thought/es6/index.html",
    "revision": "86644426d08341da5f6ea3fa5efdf956"
  },
  {
    "url": "thought/git/index.html",
    "revision": "7dc853115fa701da446397a8159e5006"
  },
  {
    "url": "thought/index.html",
    "revision": "4f4888689a499771a7145b093933fb0f"
  },
  {
    "url": "thought/js/2020-Recall.html",
    "revision": "efe53757e84029dcb3afd60958264fab"
  },
  {
    "url": "thought/js/Array-Date-and-Catgory.html",
    "revision": "47cc05e8163c9858fa39ea711a872153"
  },
  {
    "url": "thought/js/Build-a-Blog-Using-VuePress.html",
    "revision": "38c2e7bdd5b53c254f5f9b2aa09fca70"
  },
  {
    "url": "thought/js/Build-a-Storage-Server-Using-Nextcloud.html",
    "revision": "05a6995f26a902fb25a54b2de9f3d03a"
  },
  {
    "url": "thought/js/Bukkit-Object-Pool-Picking-And-Updating.html",
    "revision": "2c8ed877a6fba6afe6b7064633cafe10"
  },
  {
    "url": "thought/js/Hello-World.html",
    "revision": "7917fb5b38fc54fbb1bca587aa8adda2"
  },
  {
    "url": "thought/js/index.html",
    "revision": "dd760eacee9dd944ffe92e0556debb1c"
  },
  {
    "url": "thought/js/Minecraft-Sponge-Server-Tutorial.html",
    "revision": "a0e0458eb6a06dd77cbb98815cb4e4f2"
  },
  {
    "url": "thought/js/My-ADD.html",
    "revision": "f3dee327a9a16f97b05bc249bc01f7ef"
  },
  {
    "url": "thought/js/Simple-Authenticating-System.html",
    "revision": "79920748c7eb2c7dffffba1a55d08af6"
  },
  {
    "url": "thought/js/Simple-Vote-Logic-1.html",
    "revision": "b2a88e2d2eb6f5031df8f90c389339b1"
  },
  {
    "url": "thought/js/Something-About-Something.html",
    "revision": "4815b54141c00d6b56ddbb0e10e733ab"
  },
  {
    "url": "thought/js/Terrible-Computer-Accident-Caused-by-HDR.html",
    "revision": "032d679005743c4cb6da61f1de1cf6cd"
  },
  {
    "url": "thought/js/The-Clown-Is-Myself.html",
    "revision": "5fd21914262252c0f0c11f2dcaec40f9"
  },
  {
    "url": "thought/js/The-Overinterpretation.html",
    "revision": "1a5c5587c7f63a44d45c7f4fc7794d44"
  },
  {
    "url": "thought/js/Thoughts-About-Minecraft-Server.html",
    "revision": "1bda68ec235719af81f55188abe71c3a"
  },
  {
    "url": "thought/js/Unknown-MySQL-Issue.html",
    "revision": "08a2ea7156c84723f44ee591edda8bb8"
  },
  {
    "url": "thought/node/index.html",
    "revision": "747ce6417c91d404c8d71e2245e455ed"
  },
  {
    "url": "thought/other/index.html",
    "revision": "48d0341dd0a479590b5874b24f287c59"
  },
  {
    "url": "thought/react&mobx/index.html",
    "revision": "a4555e3697d9e47a8595ddf4337b9991"
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
