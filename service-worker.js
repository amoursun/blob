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
    "revision": "9ec86a8e65bd9b4c9156391333ad214e"
  },
  {
    "url": "another/aboutSelf.html",
    "revision": "5a528bc09b5f442535d2f3edbe18456c"
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
    "url": "assets/js/17.07ee0d58.js",
    "revision": "7c3be8c724acbedfb00bae08ef847bda"
  },
  {
    "url": "assets/js/18.f03fe6d9.js",
    "revision": "eb9da9bd8736f8c1c758f48f267c225f"
  },
  {
    "url": "assets/js/19.0ed8ee8f.js",
    "revision": "2dc038694dad06c8e272338af0a0edfe"
  },
  {
    "url": "assets/js/2.93370592.js",
    "revision": "19ce6bb10245d5e44a3177f6db299e80"
  },
  {
    "url": "assets/js/20.83361afa.js",
    "revision": "671a5dd516aceb720e25baff521453dc"
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
    "url": "assets/js/23.fc564a40.js",
    "revision": "1962e57ffcdccebd1f6c898b14045a2b"
  },
  {
    "url": "assets/js/24.f60b0f2c.js",
    "revision": "3f880855d8245be07300e8d1bfb9704d"
  },
  {
    "url": "assets/js/25.11e51cf7.js",
    "revision": "76bd1bc8a15b9a72ec720b1c1c02086e"
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
    "url": "assets/js/29.d55128c9.js",
    "revision": "ae73543f13872c16881e9746dfe8519e"
  },
  {
    "url": "assets/js/3.26d14025.js",
    "revision": "56c2f51a4063d7464c6229d99fc0c472"
  },
  {
    "url": "assets/js/30.f98cf3df.js",
    "revision": "77072d932b14bb07624b5933005f5f61"
  },
  {
    "url": "assets/js/31.bcd93159.js",
    "revision": "4c440c69c7ebbc79c2c6c257b83a4ec8"
  },
  {
    "url": "assets/js/32.a94bf95a.js",
    "revision": "7da7063a891f392660c43805afe05659"
  },
  {
    "url": "assets/js/33.17adae6d.js",
    "revision": "44d3fae69f92794985294b1e5b2aee38"
  },
  {
    "url": "assets/js/34.b64a148d.js",
    "revision": "f82305f922378255de2f31b9171a784f"
  },
  {
    "url": "assets/js/35.6a967ba6.js",
    "revision": "d3f5ee4cd3f08622cc88501f3550e890"
  },
  {
    "url": "assets/js/36.caf78726.js",
    "revision": "8b71a9fa63a70b08d0fb1b0f8108e142"
  },
  {
    "url": "assets/js/37.9bea33aa.js",
    "revision": "de6b8f9dbd7cc55eaf124318e6f0458d"
  },
  {
    "url": "assets/js/38.953b165b.js",
    "revision": "460e352310366ea2e2ba56f4f4b95f7e"
  },
  {
    "url": "assets/js/39.248c2974.js",
    "revision": "32fc8542d700f89f416b7fc9c2e35e1c"
  },
  {
    "url": "assets/js/4.4ca03409.js",
    "revision": "931f403a5bb5982a83c8322ffc064290"
  },
  {
    "url": "assets/js/40.19d232cb.js",
    "revision": "3badc15b48b6160a08d3be838776c600"
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
    "url": "assets/js/43.ab26a565.js",
    "revision": "57b9bf6ced7e0dcf85a1990eebf00106"
  },
  {
    "url": "assets/js/44.1a538ee3.js",
    "revision": "60a91d282754560c23aa92fd997d372d"
  },
  {
    "url": "assets/js/45.ef1f7a61.js",
    "revision": "378731e9554e24f17b0e80c6ed817036"
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
    "url": "assets/js/app.73dafc2c.js",
    "revision": "ce236b5e16ccd33fdd5159b1c2ffa36a"
  },
  {
    "url": "FAQ/content/question-1.html",
    "revision": "9d4e05c04ed1b1a56858a39d6cefd78a"
  },
  {
    "url": "FAQ/content/question-2.html",
    "revision": "21597905c0e393c07770187b58f1daa8"
  },
  {
    "url": "FAQ/index.html",
    "revision": "f3b39a7296432b8c6d6229105aa44c76"
  },
  {
    "url": "guide/index.html",
    "revision": "861f7e78e13016da6d466f2d415251d8"
  },
  {
    "url": "index.html",
    "revision": "e166a94ae668969b9b2ba14f814191c1"
  },
  {
    "url": "links/wiki/index.html",
    "revision": "1d59df74d924f256577f26938ef6c031"
  },
  {
    "url": "thought/css/index.html",
    "revision": "c4af8b5e334bfab9a484a6bc3d05c72f"
  },
  {
    "url": "thought/es6/index.html",
    "revision": "a42aabbe3da916a261dab0994fd84acc"
  },
  {
    "url": "thought/git/index.html",
    "revision": "edfbfbe74183ae7a50390821d9bb3518"
  },
  {
    "url": "thought/index.html",
    "revision": "e605a0b51ad37f73cb8a20cf7c6b624e"
  },
  {
    "url": "thought/js/2020-Recall.html",
    "revision": "474a64c7a10f3869096f35aee76399f0"
  },
  {
    "url": "thought/js/Array-Date-and-Catgory.html",
    "revision": "0260eca85714ab9fc211154a06b41612"
  },
  {
    "url": "thought/js/Build-a-Blog-Using-VuePress.html",
    "revision": "347f73ff9fbbed3e1f4ff499035027c5"
  },
  {
    "url": "thought/js/Build-a-Storage-Server-Using-Nextcloud.html",
    "revision": "d44a50858de3644283a2e86e7405f1a0"
  },
  {
    "url": "thought/js/Bukkit-Object-Pool-Picking-And-Updating.html",
    "revision": "7480907d986b45852b6639ee27a2f54c"
  },
  {
    "url": "thought/js/Hello-World.html",
    "revision": "5d962ab7871943ff2786e31d185fd243"
  },
  {
    "url": "thought/js/index.html",
    "revision": "17490ccb454031347f4c4304d9c9b94a"
  },
  {
    "url": "thought/js/Minecraft-Sponge-Server-Tutorial.html",
    "revision": "080bac26aebbcc114e182595a8a81a5e"
  },
  {
    "url": "thought/js/My-ADD.html",
    "revision": "5afb5a1b3b37be7634a1889a84d52924"
  },
  {
    "url": "thought/js/Simple-Authenticating-System.html",
    "revision": "a00fba8d042ae9ed96d28cd421d86e0c"
  },
  {
    "url": "thought/js/Simple-Vote-Logic-1.html",
    "revision": "47d19a2939788535ef9343c580ae85e6"
  },
  {
    "url": "thought/js/Something-About-Something.html",
    "revision": "15004309790d32c12d7f1f01d7c5e52d"
  },
  {
    "url": "thought/js/Terrible-Computer-Accident-Caused-by-HDR.html",
    "revision": "4e1f6ce09954bbb200b8301fc2fe81dc"
  },
  {
    "url": "thought/js/The-Clown-Is-Myself.html",
    "revision": "aee4be095bae50536b9ec3d8ae592822"
  },
  {
    "url": "thought/js/The-Overinterpretation.html",
    "revision": "01ef02c8cc55304903bf0bf304b40617"
  },
  {
    "url": "thought/js/Thoughts-About-Minecraft-Server.html",
    "revision": "73f0dadc83b071ab99f83cba38e24944"
  },
  {
    "url": "thought/js/Unknown-MySQL-Issue.html",
    "revision": "609accaf875414782d81c8e1fc7a2d6f"
  },
  {
    "url": "thought/node/index.html",
    "revision": "433b0fd3dc6c8c070361bbeb11aac88c"
  },
  {
    "url": "thought/other/index.html",
    "revision": "ce37e9abeb8d40ef270972eb2b8cfd09"
  },
  {
    "url": "thought/react&mobx/index.html",
    "revision": "96132f05229ed5f7c5914f71a65e40bc"
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
