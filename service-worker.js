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
    "revision": "cd52ed69ccf9856d3bb582082f33dc09"
  },
  {
    "url": "another/aboutSelf.html",
    "revision": "c9f3df7500607bf91af22e08711a720e"
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
    "url": "assets/js/14.43e0c178.js",
    "revision": "e83b76435bb38fcaabff118615e221c8"
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
    "url": "assets/js/2.70d6758f.js",
    "revision": "5fc1e12e85fe8094b212d514d3a113c7"
  },
  {
    "url": "assets/js/20.e99b31a9.js",
    "revision": "a550692d6cb4787eb1366a40ed8ea921"
  },
  {
    "url": "assets/js/21.49fd11b5.js",
    "revision": "3c59bdcbfad86bb3a716ac5b9716c4ae"
  },
  {
    "url": "assets/js/22.003458f8.js",
    "revision": "401d793fdaae81e4347dbcb5079ca03d"
  },
  {
    "url": "assets/js/23.526f8d49.js",
    "revision": "eb91960962515fbe6c19fd93b3fc43ac"
  },
  {
    "url": "assets/js/24.b4e824e1.js",
    "revision": "aa936d0773e9a10f4e5e55d4453b0651"
  },
  {
    "url": "assets/js/25.f9201e4f.js",
    "revision": "793e0ef147315e53e26a93b75c291a48"
  },
  {
    "url": "assets/js/26.d1d2d509.js",
    "revision": "05b69ff19f20792db53ebaef69cc0396"
  },
  {
    "url": "assets/js/27.f4e90918.js",
    "revision": "514bd6cc4e5c36b9270790a8261c5832"
  },
  {
    "url": "assets/js/28.2183adee.js",
    "revision": "da5aa49441e746cea82ecdd65e23a2f7"
  },
  {
    "url": "assets/js/29.f1904805.js",
    "revision": "4ba77a286dab0fecf40553dad7c59781"
  },
  {
    "url": "assets/js/3.d63df9ff.js",
    "revision": "7344bb6b3b966e9d9d08a283cec364ec"
  },
  {
    "url": "assets/js/30.55d8c058.js",
    "revision": "be4bcce858f94098ad92fef58d93ad74"
  },
  {
    "url": "assets/js/31.423bc20b.js",
    "revision": "81dff909f297722224af09a61ef752e0"
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
    "url": "assets/js/34.4bfe6317.js",
    "revision": "ad4f41260194db615f5e5f56f123988e"
  },
  {
    "url": "assets/js/35.b4b0ce1b.js",
    "revision": "90b8fa0ce7395adf71641c5335834555"
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
    "url": "assets/js/4.080c088e.js",
    "revision": "25bff7824aa079102e3116b9c1d713aa"
  },
  {
    "url": "assets/js/40.1edc0645.js",
    "revision": "4f8e04e1c898ce2a89e1d9e2fb2d8c80"
  },
  {
    "url": "assets/js/41.2f2c5f88.js",
    "revision": "0fc8e059b40a53f36ea95139c60a92ce"
  },
  {
    "url": "assets/js/42.43c220ea.js",
    "revision": "49dec3a39846d455ad3e0a9874039c7b"
  },
  {
    "url": "assets/js/43.6ecc4db0.js",
    "revision": "923cf3cb303dcf6e4d971e7fc487f059"
  },
  {
    "url": "assets/js/44.1c8def69.js",
    "revision": "359d4f3b998abd5a39f621f1be3a98c1"
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
    "url": "assets/js/5.30a9c197.js",
    "revision": "bbe48970a7c6ef3c74c604e9d7de9b9a"
  },
  {
    "url": "assets/js/6.eb55fb5c.js",
    "revision": "6fdfc0741603a73b490b1e5982d92a09"
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
    "url": "assets/js/app.e0e544c6.js",
    "revision": "fbfb0ef24054007cf54147d3d405f6ad"
  },
  {
    "url": "FAQ/content/question-1.html",
    "revision": "dafc6b8c7b5a0a8952cbfca315d518ef"
  },
  {
    "url": "FAQ/content/question-2.html",
    "revision": "812a9a798923bd014e6b3f6a778f9b34"
  },
  {
    "url": "FAQ/index.html",
    "revision": "d19d068d6ff62fd6261fbdeb9aae3118"
  },
  {
    "url": "guide/index.html",
    "revision": "17d59412401c88a820bd1e082ac14123"
  },
  {
    "url": "index.html",
    "revision": "1b4cf81024142f3bcce0621be339896d"
  },
  {
    "url": "links/wiki/index.html",
    "revision": "cd3a11f39ee27e86eb02d6b102409b42"
  },
  {
    "url": "thought/css/index.html",
    "revision": "542440580207104e0ad6244da863fe59"
  },
  {
    "url": "thought/es6/index.html",
    "revision": "6fedfb61f1af1bfe8a41d2151c79ce56"
  },
  {
    "url": "thought/git/index.html",
    "revision": "b42f042e11919810522c7181c0693a91"
  },
  {
    "url": "thought/index.html",
    "revision": "af104f96c610f041585b3da2e5ca073c"
  },
  {
    "url": "thought/js/2020-Recall.html",
    "revision": "3e0e99b7d44b056d1c025d61b369547c"
  },
  {
    "url": "thought/js/Array-Date-and-Catgory.html",
    "revision": "d9670627222f7234d29019195a1e16cc"
  },
  {
    "url": "thought/js/Build-a-Blog-Using-VuePress.html",
    "revision": "c1eb36d2a0561c7843ed35eba337f90d"
  },
  {
    "url": "thought/js/Build-a-Storage-Server-Using-Nextcloud.html",
    "revision": "cd7c2d138afb3f31f086beb78f4749bd"
  },
  {
    "url": "thought/js/Bukkit-Object-Pool-Picking-And-Updating.html",
    "revision": "25770ac9147727fa7d51f5d1a436b27f"
  },
  {
    "url": "thought/js/Hello-World.html",
    "revision": "406adf2db4da76393773a8669a9f3579"
  },
  {
    "url": "thought/js/index.html",
    "revision": "d77b76b841197ead78dd66788e8cfa06"
  },
  {
    "url": "thought/js/Minecraft-Sponge-Server-Tutorial.html",
    "revision": "94f5fc47584c154b6f82eb51f3d56f94"
  },
  {
    "url": "thought/js/My-ADD.html",
    "revision": "a19965c4e0e0b9f2719062434d23f3f5"
  },
  {
    "url": "thought/js/Simple-Authenticating-System.html",
    "revision": "93eb520c07b5afa8581a0de7dbcac935"
  },
  {
    "url": "thought/js/Simple-Vote-Logic-1.html",
    "revision": "cf6998cf535c85ca0fd18bd97a6bd128"
  },
  {
    "url": "thought/js/Something-About-Something.html",
    "revision": "f21899082c436ef0d6adfb4433bc7a40"
  },
  {
    "url": "thought/js/Terrible-Computer-Accident-Caused-by-HDR.html",
    "revision": "d224984db7d48a29d1b5b3f04b292ac6"
  },
  {
    "url": "thought/js/The-Clown-Is-Myself.html",
    "revision": "a398b1b7156d7e720fdb9e5042f9b9c8"
  },
  {
    "url": "thought/js/The-Overinterpretation.html",
    "revision": "1e0b627e77f0deac730ea6c99644b300"
  },
  {
    "url": "thought/js/Thoughts-About-Minecraft-Server.html",
    "revision": "12bf55ad0a198261930ecbc1504ff59f"
  },
  {
    "url": "thought/js/Unknown-MySQL-Issue.html",
    "revision": "a64acdfbcc07a2175ff05368ecd061d3"
  },
  {
    "url": "thought/node/index.html",
    "revision": "d32b3296a7773f5ad8fe46b38e9b407d"
  },
  {
    "url": "thought/other/index.html",
    "revision": "06ad4767da9d7ece335f283f5ca22cae"
  },
  {
    "url": "thought/react&mobx/index.html",
    "revision": "f9150447e38127cbb50e3af88885d272"
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
