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
    "revision": "3603af6a16c9a5c06aea6a322fe62297"
  },
  {
    "url": "another/aboutSelf.html",
    "revision": "21845b1b2514b4f319c5dcd78785d386"
  },
  {
    "url": "assets/css/0.styles.427a784e.css",
    "revision": "8c54ce2c924c1cad5dbe45c61d23d61d"
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
    "url": "assets/js/18.de62397c.js",
    "revision": "31efb5efe02693d75945971f22ab2612"
  },
  {
    "url": "assets/js/19.053279b9.js",
    "revision": "9d4605f1afd3132a83f0b90b830887b0"
  },
  {
    "url": "assets/js/2.70d6758f.js",
    "revision": "5fc1e12e85fe8094b212d514d3a113c7"
  },
  {
    "url": "assets/js/20.6bcf3a41.js",
    "revision": "a191696b1df423e29587eba5f2df2075"
  },
  {
    "url": "assets/js/21.0f09e7a3.js",
    "revision": "d8f21152f3f7f95828b2ec7b9c5678a0"
  },
  {
    "url": "assets/js/22.75fab51e.js",
    "revision": "773b9d613af3af21fd2237ca4f92ba25"
  },
  {
    "url": "assets/js/23.fc564a40.js",
    "revision": "1962e57ffcdccebd1f6c898b14045a2b"
  },
  {
    "url": "assets/js/24.e10b95fe.js",
    "revision": "94f45279b97141dcdf3360bf16fddc20"
  },
  {
    "url": "assets/js/25.11e51cf7.js",
    "revision": "76bd1bc8a15b9a72ec720b1c1c02086e"
  },
  {
    "url": "assets/js/26.c247b793.js",
    "revision": "7236bb7d4260737dcded713a57a1ca5b"
  },
  {
    "url": "assets/js/27.83501403.js",
    "revision": "fd62d097c9f74e6a9d2705250c6fd0fa"
  },
  {
    "url": "assets/js/28.1fdaa173.js",
    "revision": "e7b3ae25be340cb931ea1469ca321403"
  },
  {
    "url": "assets/js/29.3284c9ac.js",
    "revision": "616512b1dceddfc18f82087f71434edc"
  },
  {
    "url": "assets/js/3.d63df9ff.js",
    "revision": "7344bb6b3b966e9d9d08a283cec364ec"
  },
  {
    "url": "assets/js/30.84acca6e.js",
    "revision": "53bef958faff7dcaf815b7a643a58926"
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
    "url": "assets/js/38.34e15d0c.js",
    "revision": "46a79a306eec505373e2dc166c8b8621"
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
    "url": "assets/js/41.a6a84252.js",
    "revision": "8a6a692b38422605ff4a91a55d10d675"
  },
  {
    "url": "assets/js/42.43c220ea.js",
    "revision": "49dec3a39846d455ad3e0a9874039c7b"
  },
  {
    "url": "assets/js/43.ba3f69e7.js",
    "revision": "d35b31ab3a3b9de93552c5e0f4fd8a8a"
  },
  {
    "url": "assets/js/44.1c8def69.js",
    "revision": "359d4f3b998abd5a39f621f1be3a98c1"
  },
  {
    "url": "assets/js/45.85c2954e.js",
    "revision": "b351ccda19e64434ed202791f6edea8f"
  },
  {
    "url": "assets/js/46.59b8a9a2.js",
    "revision": "41b3dcdd1d8d5b763bfcfb9a825620db"
  },
  {
    "url": "assets/js/47.b901c349.js",
    "revision": "dc06ad4b68b5284315cba877b47ad9cc"
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
    "url": "assets/js/app.fe06c262.js",
    "revision": "5aac4eaad158ae52305a23a563d66be0"
  },
  {
    "url": "FAQ/content/question-1.html",
    "revision": "9447b832659c63172f5d08ab0db5a0f6"
  },
  {
    "url": "FAQ/content/question-2.html",
    "revision": "23336112753c6832f77fb71ca69612e6"
  },
  {
    "url": "FAQ/index.html",
    "revision": "ec12a7de66067c5bab4e9086b3c84a9b"
  },
  {
    "url": "guide/index.html",
    "revision": "3f08be086ff2ff048325e8e3ffdc1677"
  },
  {
    "url": "index.html",
    "revision": "69a2d7c01d2b115a4415c8f2c35ee444"
  },
  {
    "url": "links/wiki/index.html",
    "revision": "f32a232b33d21d14902ff30ea981ef9f"
  },
  {
    "url": "thought/css/index.html",
    "revision": "13bf49fed9bf941fe8c8387a04323dff"
  },
  {
    "url": "thought/es6/index.html",
    "revision": "38db8c4b025b4d5e44b27087cadd5f2f"
  },
  {
    "url": "thought/git/index.html",
    "revision": "d01a4c32530a1a3b3dd81c8ff18e6b8d"
  },
  {
    "url": "thought/index.html",
    "revision": "14f2de28845d9c1f1c57e6ac3af786e4"
  },
  {
    "url": "thought/js/2020-Recall.html",
    "revision": "7323ba8937f5be8503b0066e849d426a"
  },
  {
    "url": "thought/js/Array-Date-and-Catgory.html",
    "revision": "aa0e1fbda1810541baee3ac1fd006302"
  },
  {
    "url": "thought/js/Build-a-Blog-Using-VuePress.html",
    "revision": "584ed2ce454c637c5fd96ec61ab8569b"
  },
  {
    "url": "thought/js/Build-a-Storage-Server-Using-Nextcloud.html",
    "revision": "966d97a1b36b1167cab680c150cf1db3"
  },
  {
    "url": "thought/js/Bukkit-Object-Pool-Picking-And-Updating.html",
    "revision": "7aa80e5e2a38b5afe23c83cefe3c34de"
  },
  {
    "url": "thought/js/Hello-World.html",
    "revision": "f2f18fecd4db664969aace4b658efa0d"
  },
  {
    "url": "thought/js/index.html",
    "revision": "1a223caf9e2671e69079e7b83cda1210"
  },
  {
    "url": "thought/js/Minecraft-Sponge-Server-Tutorial.html",
    "revision": "59d63bdfea25794dc1001ab59c11b0e5"
  },
  {
    "url": "thought/js/My-ADD.html",
    "revision": "14ebddd45e3f5c0ae853567f461d30d6"
  },
  {
    "url": "thought/js/Simple-Authenticating-System.html",
    "revision": "24d6e666a49b82633f7a30dae2884594"
  },
  {
    "url": "thought/js/Simple-Vote-Logic-1.html",
    "revision": "6cbff2e536bae5542bd2c6a0726acca6"
  },
  {
    "url": "thought/js/Something-About-Something.html",
    "revision": "77e1f15310bdf56599bca951b2c9dff4"
  },
  {
    "url": "thought/js/Terrible-Computer-Accident-Caused-by-HDR.html",
    "revision": "08698de26d6d95e2e18ab34b12fa1fb8"
  },
  {
    "url": "thought/js/The-Clown-Is-Myself.html",
    "revision": "e2942aef565a8f28a9a172bb907b1e45"
  },
  {
    "url": "thought/js/The-Overinterpretation.html",
    "revision": "d4ee7888da26523ca26cfa5f16912479"
  },
  {
    "url": "thought/js/Thoughts-About-Minecraft-Server.html",
    "revision": "31f9283b48a82603d4c0d8bccdc24ad2"
  },
  {
    "url": "thought/js/Unknown-MySQL-Issue.html",
    "revision": "19e17e13995bb0a410c3de3d524071ef"
  },
  {
    "url": "thought/node/index.html",
    "revision": "9866e198516990893e4693d8f1d85b1b"
  },
  {
    "url": "thought/other/index.html",
    "revision": "dde1a714de44b07049358f1b74fccac1"
  },
  {
    "url": "thought/react&mobx/index.html",
    "revision": "3c8fb81a5af59cb2b908c138bc8a4aac"
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
