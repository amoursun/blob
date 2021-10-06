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
    "revision": "cc77a3f1f199831186b91a8c4f200716"
  },
  {
    "url": "another/aboutSelf.html",
    "revision": "10349dd4a44b3b05a6e3c1c3924e87e4"
  },
  {
    "url": "assets/css/0.styles.106b3727.css",
    "revision": "2e538a4c1e25672615ace92ad5cdecc7"
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
    "url": "assets/js/17.0f1b7845.js",
    "revision": "eb14c7b4ee5357a4a57857d9e8af2292"
  },
  {
    "url": "assets/js/18.141e56ac.js",
    "revision": "0f77d1ff95205b756d8a32b7124af687"
  },
  {
    "url": "assets/js/19.0ed8ee8f.js",
    "revision": "2dc038694dad06c8e272338af0a0edfe"
  },
  {
    "url": "assets/js/2.70d6758f.js",
    "revision": "5fc1e12e85fe8094b212d514d3a113c7"
  },
  {
    "url": "assets/js/20.d63c70d0.js",
    "revision": "9cca923138285a71d666c26ea4d94f8f"
  },
  {
    "url": "assets/js/21.68165134.js",
    "revision": "708444f6d36d4e081460e4190aecf721"
  },
  {
    "url": "assets/js/22.03134436.js",
    "revision": "b8b3fb50e329e34c37e234146b07be9f"
  },
  {
    "url": "assets/js/23.0e9f2919.js",
    "revision": "9fff7cd942c5737b6f57724a14883cc3"
  },
  {
    "url": "assets/js/24.bbdcf99a.js",
    "revision": "74b59a8e97e58bad6a87c03a2d331c33"
  },
  {
    "url": "assets/js/25.a55c5272.js",
    "revision": "5ccc812b5e070736bacd6dbb84fdd192"
  },
  {
    "url": "assets/js/26.d1d2d509.js",
    "revision": "05b69ff19f20792db53ebaef69cc0396"
  },
  {
    "url": "assets/js/27.a1863244.js",
    "revision": "bc61b6b201b498a7d77effe78e01f342"
  },
  {
    "url": "assets/js/28.52429f7b.js",
    "revision": "c46947c2ca5f7cc0fd301959bf920da6"
  },
  {
    "url": "assets/js/29.4d8265dc.js",
    "revision": "e3ea9cee7ead387a7cd61a4be081ca5f"
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
    "url": "assets/js/31.745ffac3.js",
    "revision": "1a1cdc114f5899eb678c42901a2c657a"
  },
  {
    "url": "assets/js/32.50953fd9.js",
    "revision": "9b03ef8b09c953773d3f8f0dff520c65"
  },
  {
    "url": "assets/js/33.f9e494ee.js",
    "revision": "a024e6e7fce888a57fce52d1e79cb8c1"
  },
  {
    "url": "assets/js/34.d95ad3d3.js",
    "revision": "cda5ee88f7363219e77a6b482547712a"
  },
  {
    "url": "assets/js/35.b10adca2.js",
    "revision": "3f98d19d25674ab54d3f9587b83fd10b"
  },
  {
    "url": "assets/js/36.5cdc7040.js",
    "revision": "e5bbea90f775c2f3788ed67e3d044568"
  },
  {
    "url": "assets/js/37.9bea33aa.js",
    "revision": "de6b8f9dbd7cc55eaf124318e6f0458d"
  },
  {
    "url": "assets/js/38.5ed2714f.js",
    "revision": "b367259769d3f478be85f29dcea099de"
  },
  {
    "url": "assets/js/39.14dccae9.js",
    "revision": "0c4e687b2cc83604d13f847b6a74d9a1"
  },
  {
    "url": "assets/js/4.080c088e.js",
    "revision": "25bff7824aa079102e3116b9c1d713aa"
  },
  {
    "url": "assets/js/40.42494f4a.js",
    "revision": "24f8c035532fbd33780104c589e939c7"
  },
  {
    "url": "assets/js/41.bf02ce3c.js",
    "revision": "22b43752c76bb1d7990c8b23297c0f86"
  },
  {
    "url": "assets/js/42.4add134d.js",
    "revision": "e65cbc0ee4cf65d81e8fdc483091a545"
  },
  {
    "url": "assets/js/43.81bbef57.js",
    "revision": "5e71e777df31e02e0223a497d9088d28"
  },
  {
    "url": "assets/js/44.09466b60.js",
    "revision": "bdfe2a329478fc73a921e178cdf0d6ce"
  },
  {
    "url": "assets/js/45.49726d66.js",
    "revision": "fd3375f6009eb3278ca2efbc36ecca7e"
  },
  {
    "url": "assets/js/46.c522f2dc.js",
    "revision": "b1cb6dca9326e80debb1d48fc8f52955"
  },
  {
    "url": "assets/js/47.ca840773.js",
    "revision": "56f7dc42b4f9c79fd758e1ad1e73be80"
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
    "url": "assets/js/app.2be36dd0.js",
    "revision": "f30d5591b04e1782cad2b692cfa0fd6e"
  },
  {
    "url": "FAQ/content/question-1.html",
    "revision": "951084aa35012ba576d727549005e441"
  },
  {
    "url": "FAQ/content/question-2.html",
    "revision": "0c3b1560a7ab316abd44f40e5de05a4b"
  },
  {
    "url": "FAQ/index.html",
    "revision": "190a6cc010264955f790e7a4c19bdbc2"
  },
  {
    "url": "guide/index.html",
    "revision": "3b24ef4bed1327ec40a9892a6d378f1e"
  },
  {
    "url": "index.html",
    "revision": "fa6a6fd498e31db571aafa5743d3a40d"
  },
  {
    "url": "links/wiki/index.html",
    "revision": "a5e39e53feb7833c4787ce80a81c989b"
  },
  {
    "url": "thought/css/index.html",
    "revision": "b27cd8ad838dfa5429f3bc56bfa16b4a"
  },
  {
    "url": "thought/es6/index.html",
    "revision": "5bbd3f7a3c46eddfbdc90f4317a25f3d"
  },
  {
    "url": "thought/git/index.html",
    "revision": "cc1077bef090eda5f2f8d13cceae27ab"
  },
  {
    "url": "thought/index.html",
    "revision": "db9b34e33d40562c3170b42cffb0de69"
  },
  {
    "url": "thought/js/2020-Recall.html",
    "revision": "843f16d3cf6d5e21f07f9bef43add4d1"
  },
  {
    "url": "thought/js/Array-Date-and-Catgory.html",
    "revision": "33be04751f7cdb729173260a4b3384c3"
  },
  {
    "url": "thought/js/Build-a-Blog-Using-VuePress.html",
    "revision": "b1086e0adc1ccb09e09ad0af2e941563"
  },
  {
    "url": "thought/js/Build-a-Storage-Server-Using-Nextcloud.html",
    "revision": "5a27ffdde5ae26fb167851ae76e72ce9"
  },
  {
    "url": "thought/js/Bukkit-Object-Pool-Picking-And-Updating.html",
    "revision": "a1e7feb5151ca0904222aa1ae4d4fa2f"
  },
  {
    "url": "thought/js/Hello-World.html",
    "revision": "e11563017898657e16013a61e2a365a6"
  },
  {
    "url": "thought/js/index.html",
    "revision": "ebc4da75d6ed5ea3bb73743f97147292"
  },
  {
    "url": "thought/js/Minecraft-Sponge-Server-Tutorial.html",
    "revision": "d2fe061bbb3f442b589a9f4d8ca6bfaf"
  },
  {
    "url": "thought/js/My-ADD.html",
    "revision": "9d47f0ae7641e4f75fb964c1f574f91b"
  },
  {
    "url": "thought/js/Simple-Authenticating-System.html",
    "revision": "dbe36d36b56be501be68df60c30cb2c1"
  },
  {
    "url": "thought/js/Simple-Vote-Logic-1.html",
    "revision": "ef2c3545f847c97ed5ce32a7e8d85a26"
  },
  {
    "url": "thought/js/Something-About-Something.html",
    "revision": "6aebc1920eb7b97ff7498ec2e086ca87"
  },
  {
    "url": "thought/js/Terrible-Computer-Accident-Caused-by-HDR.html",
    "revision": "8c88b5c32069872f6f87755c550d2928"
  },
  {
    "url": "thought/js/The-Clown-Is-Myself.html",
    "revision": "edf11aec183f17e4f17b790ad810a9ab"
  },
  {
    "url": "thought/js/The-Overinterpretation.html",
    "revision": "3e7ed12207a755e5f82b3d0852a7872a"
  },
  {
    "url": "thought/js/Thoughts-About-Minecraft-Server.html",
    "revision": "d852eecfc1066956427a714b7c20bc3d"
  },
  {
    "url": "thought/js/Unknown-MySQL-Issue.html",
    "revision": "a6e472bc0206702a6f99e18b2ccb5eda"
  },
  {
    "url": "thought/node/index.html",
    "revision": "9b2c77b04aff85c3c48b0a7a9e840ffd"
  },
  {
    "url": "thought/other/index.html",
    "revision": "58418f4e00bc67d18d912c54fb59985f"
  },
  {
    "url": "thought/react&mobx/index.html",
    "revision": "e1eab89b68e71cf1e83edcf9559bfd76"
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
