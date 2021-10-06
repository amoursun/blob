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
    "revision": "b5db1173bb25be95652926c582635b8d"
  },
  {
    "url": "another/aboutSelf.html",
    "revision": "50db097f8cf0b91e0b7cd11c875972c8"
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
    "url": "assets/js/20.6566333c.js",
    "revision": "def917bf4d5c09d652b6f260dd6534a5"
  },
  {
    "url": "assets/js/21.0f09e7a3.js",
    "revision": "d8f21152f3f7f95828b2ec7b9c5678a0"
  },
  {
    "url": "assets/js/22.a8ac6ea5.js",
    "revision": "a7834f0cd32116e67aebed35647eefd0"
  },
  {
    "url": "assets/js/23.912b102f.js",
    "revision": "64fb8819990a7aede70bdede75bd72c3"
  },
  {
    "url": "assets/js/24.f60b0f2c.js",
    "revision": "3f880855d8245be07300e8d1bfb9704d"
  },
  {
    "url": "assets/js/25.c1118ae9.js",
    "revision": "b0775350e1299076e8aaf82fb12ab337"
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
    "url": "assets/js/32.0a221599.js",
    "revision": "1b74d3e36b9d918873b1bce0cbe0a502"
  },
  {
    "url": "assets/js/33.17adae6d.js",
    "revision": "44d3fae69f92794985294b1e5b2aee38"
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
    "url": "assets/js/36.caf78726.js",
    "revision": "8b71a9fa63a70b08d0fb1b0f8108e142"
  },
  {
    "url": "assets/js/37.225a0d23.js",
    "revision": "050db91004b4def9f4ca2fb938557083"
  },
  {
    "url": "assets/js/38.998cd0b5.js",
    "revision": "4d661990dc8c663dd60bfacc43348b56"
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
    "url": "assets/js/40.e3d58b76.js",
    "revision": "45928e33385efe9dc02a9b89cdabee57"
  },
  {
    "url": "assets/js/41.bf02ce3c.js",
    "revision": "22b43752c76bb1d7990c8b23297c0f86"
  },
  {
    "url": "assets/js/42.cbfc9fc9.js",
    "revision": "e2de177a75470b7ce8f00be29b0264e6"
  },
  {
    "url": "assets/js/43.78c69d61.js",
    "revision": "6ceaec466c9b49cd395ab45108bb3aae"
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
    "url": "assets/js/app.89be34ed.js",
    "revision": "34ddc5cc3b8e7dc5c124abee2ba53088"
  },
  {
    "url": "FAQ/content/question-1.html",
    "revision": "12d39c3005d5eff3bd9b75f75e8a8d61"
  },
  {
    "url": "FAQ/content/question-2.html",
    "revision": "c2e0a1a3cbe06461513b616e2e24a322"
  },
  {
    "url": "FAQ/index.html",
    "revision": "b379c07046ca2ebee12f5e5e13ef1562"
  },
  {
    "url": "guide/index.html",
    "revision": "a606103090a554a2bf4721e36afa8cbc"
  },
  {
    "url": "index.html",
    "revision": "8dd54bd8e223fed36e452fd003f7b01f"
  },
  {
    "url": "links/wiki/index.html",
    "revision": "e89bacdba8efe70beed0f714267e4301"
  },
  {
    "url": "thought/css/index.html",
    "revision": "c87c07bfdd0e55f55e420e2f0736306c"
  },
  {
    "url": "thought/es6/index.html",
    "revision": "edc3358056d98bbf84613303afb85396"
  },
  {
    "url": "thought/git/index.html",
    "revision": "86f0424d1a5476c9bb0c233438199337"
  },
  {
    "url": "thought/index.html",
    "revision": "97a4def2bc2437a4e92ffa4d06b021b4"
  },
  {
    "url": "thought/js/2020-Recall.html",
    "revision": "827cb0e117a50d71a30eeb1cf2ded7c3"
  },
  {
    "url": "thought/js/Array-Date-and-Catgory.html",
    "revision": "80f44a5735587150990d414b7945bcc9"
  },
  {
    "url": "thought/js/Build-a-Blog-Using-VuePress.html",
    "revision": "40642d96591e4e9140fe0a6ed0c2feae"
  },
  {
    "url": "thought/js/Build-a-Storage-Server-Using-Nextcloud.html",
    "revision": "7f41e7b3cd2d729284d9eaa970f73d4a"
  },
  {
    "url": "thought/js/Bukkit-Object-Pool-Picking-And-Updating.html",
    "revision": "a32a745f7440e30ce17abab3c2ecd2e5"
  },
  {
    "url": "thought/js/Hello-World.html",
    "revision": "a52741f0d2fdc21bfb90d1bdf65dda59"
  },
  {
    "url": "thought/js/index.html",
    "revision": "9f145c9d0a7e9523c579b0cf4a1cc6f4"
  },
  {
    "url": "thought/js/Minecraft-Sponge-Server-Tutorial.html",
    "revision": "0f5164da90bec94b6b8e96f1e8cff793"
  },
  {
    "url": "thought/js/My-ADD.html",
    "revision": "dcaa10272f7fdf14c9aafaaae77d897b"
  },
  {
    "url": "thought/js/Simple-Authenticating-System.html",
    "revision": "dfcb4a885662d122059965a4713756ef"
  },
  {
    "url": "thought/js/Simple-Vote-Logic-1.html",
    "revision": "f5f0676fc7da107e1a0a2c162484bb5b"
  },
  {
    "url": "thought/js/Something-About-Something.html",
    "revision": "5b270166cf02df5d4fb98131559ccc53"
  },
  {
    "url": "thought/js/Terrible-Computer-Accident-Caused-by-HDR.html",
    "revision": "d3ef87a4b25b6552a53b3e0d6232b99e"
  },
  {
    "url": "thought/js/The-Clown-Is-Myself.html",
    "revision": "642d554d9a381b3c897c8bcb49496780"
  },
  {
    "url": "thought/js/The-Overinterpretation.html",
    "revision": "a228c11aae2ca4774684a09dfe897530"
  },
  {
    "url": "thought/js/Thoughts-About-Minecraft-Server.html",
    "revision": "150ff6156a67205626a1b448069efdad"
  },
  {
    "url": "thought/js/Unknown-MySQL-Issue.html",
    "revision": "7e6946e9222931d0a2a36d677db56966"
  },
  {
    "url": "thought/node/index.html",
    "revision": "7984eb46b8bae2130eade94c179146ed"
  },
  {
    "url": "thought/other/index.html",
    "revision": "9088721214cf934bc69083b56687b4b6"
  },
  {
    "url": "thought/react&mobx/index.html",
    "revision": "8bee7ac430e6c49fb21c07bb10ee56e9"
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
