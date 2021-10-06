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
    "revision": "3ba9fd8baf6b12ca3e8397cb1e474092"
  },
  {
    "url": "another/aboutSelf.html",
    "revision": "07e6e984745420d96afc04bb068b09d5"
  },
  {
    "url": "assets/css/0.styles.9af884c0.css",
    "revision": "79dd877d46cc2a4c1a4779977310b533"
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
    "url": "assets/js/20.6bcf3a41.js",
    "revision": "a191696b1df423e29587eba5f2df2075"
  },
  {
    "url": "assets/js/21.9f4a00b3.js",
    "revision": "349ba2a4c9153afa9d9cdedec6635eef"
  },
  {
    "url": "assets/js/22.75fab51e.js",
    "revision": "773b9d613af3af21fd2237ca4f92ba25"
  },
  {
    "url": "assets/js/23.22e402ce.js",
    "revision": "e0b30d6dbbd09bec1303e3c9048f7902"
  },
  {
    "url": "assets/js/24.e10b95fe.js",
    "revision": "94f45279b97141dcdf3360bf16fddc20"
  },
  {
    "url": "assets/js/25.8ccbba07.js",
    "revision": "fc399f52aaa83a066846bfa7cd2232b8"
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
    "url": "assets/js/29.f1904805.js",
    "revision": "4ba77a286dab0fecf40553dad7c59781"
  },
  {
    "url": "assets/js/3.d63df9ff.js",
    "revision": "7344bb6b3b966e9d9d08a283cec364ec"
  },
  {
    "url": "assets/js/30.f6065a81.js",
    "revision": "b90283a85c42e2165a3610ac17338f54"
  },
  {
    "url": "assets/js/31.423bc20b.js",
    "revision": "81dff909f297722224af09a61ef752e0"
  },
  {
    "url": "assets/js/32.0a221599.js",
    "revision": "1b74d3e36b9d918873b1bce0cbe0a502"
  },
  {
    "url": "assets/js/33.aab35d55.js",
    "revision": "bdaef4158094088ac4104b39df38eb27"
  },
  {
    "url": "assets/js/34.4bfe6317.js",
    "revision": "ad4f41260194db615f5e5f56f123988e"
  },
  {
    "url": "assets/js/35.5fff7760.js",
    "revision": "fc783c2d3c18feb075616cf2065178ed"
  },
  {
    "url": "assets/js/36.5cdc7040.js",
    "revision": "e5bbea90f775c2f3788ed67e3d044568"
  },
  {
    "url": "assets/js/37.b2040a5d.js",
    "revision": "a15ed7ea81253a3714b2f817f6fc4646"
  },
  {
    "url": "assets/js/38.e70b182b.js",
    "revision": "362db45778bfffeb60ccde317fc78711"
  },
  {
    "url": "assets/js/39.2787a96a.js",
    "revision": "74fd3e78960359ee5c6c7d7f5747a526"
  },
  {
    "url": "assets/js/4.080c088e.js",
    "revision": "25bff7824aa079102e3116b9c1d713aa"
  },
  {
    "url": "assets/js/40.0510d097.js",
    "revision": "fd817e50704eadd4d82c01af995cd190"
  },
  {
    "url": "assets/js/41.2f2c5f88.js",
    "revision": "0fc8e059b40a53f36ea95139c60a92ce"
  },
  {
    "url": "assets/js/42.e6e3878c.js",
    "revision": "94b899b6d98e7ec6dce2bc3bdb9d5dd4"
  },
  {
    "url": "assets/js/43.b0fb62d6.js",
    "revision": "ed764535f5ffcc136e4b72649fa7c244"
  },
  {
    "url": "assets/js/44.87130731.js",
    "revision": "8b2e60f45675cfab43bd90500ab6925f"
  },
  {
    "url": "assets/js/45.ab6138fb.js",
    "revision": "cbe65cd2f3e24be4473ed8619c565edf"
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
    "url": "assets/js/app.2ac85014.js",
    "revision": "76ba73363a09e07fa704938b97bc60f0"
  },
  {
    "url": "FAQ/content/question-1.html",
    "revision": "ad890779bb8e43178640e7d1576b4f78"
  },
  {
    "url": "FAQ/content/question-2.html",
    "revision": "521df622433729e0584c4dbe83e46abd"
  },
  {
    "url": "FAQ/index.html",
    "revision": "ea0d5155d314d972543cebd061cf1524"
  },
  {
    "url": "guide/index.html",
    "revision": "62d037fa0fa00ea7f10cc685439547f0"
  },
  {
    "url": "index.html",
    "revision": "402c26019ffc5b63596a87c2b20c1b7d"
  },
  {
    "url": "links/wiki/index.html",
    "revision": "1b3ef59205bb032d45026c379f9093d3"
  },
  {
    "url": "thought/css/index.html",
    "revision": "39e368d86fdafad4b1398b40ba7eef50"
  },
  {
    "url": "thought/es6/index.html",
    "revision": "f381e8a5dc5e40482612a1a0126853b0"
  },
  {
    "url": "thought/git/index.html",
    "revision": "861e7a862c41d02bf5600b9dd9d34770"
  },
  {
    "url": "thought/index.html",
    "revision": "415031b3c3a5a2397436954defe2b590"
  },
  {
    "url": "thought/js/2020-Recall.html",
    "revision": "08e0578bed858d443409e9f6dd4abb23"
  },
  {
    "url": "thought/js/Array-Date-and-Catgory.html",
    "revision": "43ea3cd136cdaa45ca7875c996a8f627"
  },
  {
    "url": "thought/js/Build-a-Blog-Using-VuePress.html",
    "revision": "e11ab69885dfdc75d579b782119965a1"
  },
  {
    "url": "thought/js/Build-a-Storage-Server-Using-Nextcloud.html",
    "revision": "05e62d3e92fababbbdbb23d591454c06"
  },
  {
    "url": "thought/js/Bukkit-Object-Pool-Picking-And-Updating.html",
    "revision": "5874fa44cbab4438c2257c626e4f1d7e"
  },
  {
    "url": "thought/js/Hello-World.html",
    "revision": "a545018cbe7d1192b625f24726278173"
  },
  {
    "url": "thought/js/index.html",
    "revision": "6f21d5b0dd0ebd2714df9217347e095d"
  },
  {
    "url": "thought/js/Minecraft-Sponge-Server-Tutorial.html",
    "revision": "f33152a1879e10be35b92f5397662bbe"
  },
  {
    "url": "thought/js/My-ADD.html",
    "revision": "9d416e8c244fc170a420ba6ad4792968"
  },
  {
    "url": "thought/js/Simple-Authenticating-System.html",
    "revision": "11d30413b528bfc2c615bf73c74460b7"
  },
  {
    "url": "thought/js/Simple-Vote-Logic-1.html",
    "revision": "ccdfdf71b124f0b9a6b776ba588a83b8"
  },
  {
    "url": "thought/js/Something-About-Something.html",
    "revision": "766d4d4c61946355365906d89401bc98"
  },
  {
    "url": "thought/js/Terrible-Computer-Accident-Caused-by-HDR.html",
    "revision": "3bdcdee8616100d04eaa3796f58f6769"
  },
  {
    "url": "thought/js/The-Clown-Is-Myself.html",
    "revision": "04f44be89c064a4286fc83cfc35e5ad7"
  },
  {
    "url": "thought/js/The-Overinterpretation.html",
    "revision": "303574612bead9aa2ce39355502e6f2a"
  },
  {
    "url": "thought/js/Thoughts-About-Minecraft-Server.html",
    "revision": "87ff67687767e71004a12f1a45ff9af1"
  },
  {
    "url": "thought/js/Unknown-MySQL-Issue.html",
    "revision": "065aa696bf86aed3d355a759556b2cbb"
  },
  {
    "url": "thought/node/index.html",
    "revision": "f0b7bc88654f58905d0f95dbc21a6613"
  },
  {
    "url": "thought/other/index.html",
    "revision": "23723c92d3511bbf8fafb9bfd642a345"
  },
  {
    "url": "thought/react&mobx/index.html",
    "revision": "8911d2b3f7ed93f3e82193de481d801b"
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
