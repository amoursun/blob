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
    "revision": "53992ffb073ebff33107d340dcad2569"
  },
  {
    "url": "another/aboutSelf.html",
    "revision": "2f381206cba1cd1aa9742fb5770d0bc7"
  },
  {
    "url": "assets/css/0.styles.ab7baa04.css",
    "revision": "6b0050108aa96aa3127236ecb25f2708"
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
    "url": "assets/js/11.6e8cb717.js",
    "revision": "71fe4d689e1880bc16441b83996100d1"
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
    "url": "assets/js/21.68165134.js",
    "revision": "708444f6d36d4e081460e4190aecf721"
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
    "url": "assets/js/24.bbdcf99a.js",
    "revision": "74b59a8e97e58bad6a87c03a2d331c33"
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
    "url": "assets/js/28.1fdaa173.js",
    "revision": "e7b3ae25be340cb931ea1469ca321403"
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
    "url": "assets/js/30.f98cf3df.js",
    "revision": "77072d932b14bb07624b5933005f5f61"
  },
  {
    "url": "assets/js/31.745ffac3.js",
    "revision": "1a1cdc114f5899eb678c42901a2c657a"
  },
  {
    "url": "assets/js/32.32933fb0.js",
    "revision": "050343c90173103904cc8528f2e0891e"
  },
  {
    "url": "assets/js/33.e29da7d5.js",
    "revision": "8b3eaee4071a2f738b3015310c2f66e3"
  },
  {
    "url": "assets/js/34.d95ad3d3.js",
    "revision": "cda5ee88f7363219e77a6b482547712a"
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
    "url": "assets/js/37.225a0d23.js",
    "revision": "050db91004b4def9f4ca2fb938557083"
  },
  {
    "url": "assets/js/38.6f1a1162.js",
    "revision": "3ca4c9499a56f4c9eac61fc5411070ea"
  },
  {
    "url": "assets/js/39.30f66fae.js",
    "revision": "1e4352ebb0e1a745fabe4027db51424b"
  },
  {
    "url": "assets/js/4.080c088e.js",
    "revision": "25bff7824aa079102e3116b9c1d713aa"
  },
  {
    "url": "assets/js/40.f6576a9d.js",
    "revision": "8862991268012f46834a0cd1c0dd31fa"
  },
  {
    "url": "assets/js/41.bf02ce3c.js",
    "revision": "22b43752c76bb1d7990c8b23297c0f86"
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
    "url": "assets/js/45.2beffe53.js",
    "revision": "dc60015f24af87cf26c0f3c71d77ff8c"
  },
  {
    "url": "assets/js/46.5dfd80e3.js",
    "revision": "19c302f6af469c2ab45c25715a8066d1"
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
    "url": "assets/js/5.ebfcc1ae.js",
    "revision": "25822022e9dd6027c7875fd7293bf616"
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
    "url": "assets/js/app.e8af7dfe.js",
    "revision": "c9dcbb4af55fd65839ff177f0b888a5b"
  },
  {
    "url": "FAQ/content/question-1.html",
    "revision": "36bea182a832ec1787ec0a9a8a6f6255"
  },
  {
    "url": "FAQ/content/question-2.html",
    "revision": "df5093fbd305b40f8a4e2f79d667d7ca"
  },
  {
    "url": "FAQ/index.html",
    "revision": "103f13256278acdf47f0945b5b8a54f1"
  },
  {
    "url": "guide/index.html",
    "revision": "b3a9034dc68c04e9427f1ce47223cddb"
  },
  {
    "url": "index.html",
    "revision": "f67081ca98c74e3cf03ddbd7854b3214"
  },
  {
    "url": "links/wiki/index.html",
    "revision": "d138f6915ca03e22fa962f7156377799"
  },
  {
    "url": "thought/css/index.html",
    "revision": "e63114122c6aa88ad19519f78a106313"
  },
  {
    "url": "thought/es6/index.html",
    "revision": "e33b68a5087ac48dffdd8302a1cd31c5"
  },
  {
    "url": "thought/git/index.html",
    "revision": "00ea5ca99c084e3d68a3048415bb329d"
  },
  {
    "url": "thought/index.html",
    "revision": "216b9584b7cffba11c81f29c378e0ccd"
  },
  {
    "url": "thought/js/2020-Recall.html",
    "revision": "24a8972f4400f836e74f1b2dee79078a"
  },
  {
    "url": "thought/js/Array-Date-and-Catgory.html",
    "revision": "c7dd557f902ba9f7d671c176183aab14"
  },
  {
    "url": "thought/js/Build-a-Blog-Using-VuePress.html",
    "revision": "02933b1463f371a601b9f9af59bcd601"
  },
  {
    "url": "thought/js/Build-a-Storage-Server-Using-Nextcloud.html",
    "revision": "2b3becf804a04cb6d9057857d80e9655"
  },
  {
    "url": "thought/js/Bukkit-Object-Pool-Picking-And-Updating.html",
    "revision": "7ff8bd6eb5c0bd489436fcabb89180cf"
  },
  {
    "url": "thought/js/Hello-World.html",
    "revision": "f4e66102ea08a859ff1197d547914996"
  },
  {
    "url": "thought/js/index.html",
    "revision": "369a29a737a5d88967b11ab10ddaf6e7"
  },
  {
    "url": "thought/js/Minecraft-Sponge-Server-Tutorial.html",
    "revision": "8affc8b80a1e68f43d3ac303b43fec86"
  },
  {
    "url": "thought/js/My-ADD.html",
    "revision": "d46a5bb28ca092acda806438bd5065a1"
  },
  {
    "url": "thought/js/Simple-Authenticating-System.html",
    "revision": "ac65cd553f193db5a601d3985c224af6"
  },
  {
    "url": "thought/js/Simple-Vote-Logic-1.html",
    "revision": "4946c79da6e4649b141d89183f5cffa2"
  },
  {
    "url": "thought/js/Something-About-Something.html",
    "revision": "b107823afb88ef9b846e1389f30c6330"
  },
  {
    "url": "thought/js/Terrible-Computer-Accident-Caused-by-HDR.html",
    "revision": "6e23cb1492097db1f6bf39f59c358cda"
  },
  {
    "url": "thought/js/The-Clown-Is-Myself.html",
    "revision": "72d7503917cadcf1ab34d09f95637725"
  },
  {
    "url": "thought/js/The-Overinterpretation.html",
    "revision": "4b979c08d68edd8cc4fc044cde7a3791"
  },
  {
    "url": "thought/js/Thoughts-About-Minecraft-Server.html",
    "revision": "fa3f783f2b986213ed6c01d4ec08b5cf"
  },
  {
    "url": "thought/js/Unknown-MySQL-Issue.html",
    "revision": "12ca481d570fb4a5e5d46f9b133b603f"
  },
  {
    "url": "thought/node/index.html",
    "revision": "2c78e97f4e9357fc53a1dad212e04f1a"
  },
  {
    "url": "thought/other/index.html",
    "revision": "ac6438e3f854d0a97a83792635c7de5e"
  },
  {
    "url": "thought/react&mobx/index.html",
    "revision": "432945cf8b26b1f897d5214025b0c35d"
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
