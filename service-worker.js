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
    "revision": "e56391d623b0bb315a2486f65926fc30"
  },
  {
    "url": "another/aboutSelf.html",
    "revision": "9753e4badad1e9a8f49673870d147e3b"
  },
  {
    "url": "assets/css/0.styles.3e0c2541.css",
    "revision": "25d2412015b5995780139c12c0c82e08"
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
    "url": "assets/js/18.a7e3978a.js",
    "revision": "c2a0363d09bf6c865b7a2668af86d1f1"
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
    "url": "assets/js/20.83361afa.js",
    "revision": "671a5dd516aceb720e25baff521453dc"
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
    "url": "assets/js/23.35ea029d.js",
    "revision": "3142579518f7bd90f58b751909d8adec"
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
    "url": "assets/js/32.7615ffed.js",
    "revision": "4f0f639ac573fbbc6423badfd16ef08f"
  },
  {
    "url": "assets/js/33.e29da7d5.js",
    "revision": "8b3eaee4071a2f738b3015310c2f66e3"
  },
  {
    "url": "assets/js/34.3598d0da.js",
    "revision": "ec3bd9682b58d31b61809ae5ccc56845"
  },
  {
    "url": "assets/js/35.b4b0ce1b.js",
    "revision": "90b8fa0ce7395adf71641c5335834555"
  },
  {
    "url": "assets/js/36.31a3049d.js",
    "revision": "b9b3e5a618c68bfb488019132f03622d"
  },
  {
    "url": "assets/js/37.d66a3e13.js",
    "revision": "49bfd618286a6a5907ae4ad7ee009259"
  },
  {
    "url": "assets/js/38.953b165b.js",
    "revision": "460e352310366ea2e2ba56f4f4b95f7e"
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
    "url": "assets/js/40.1edc0645.js",
    "revision": "4f8e04e1c898ce2a89e1d9e2fb2d8c80"
  },
  {
    "url": "assets/js/41.46d21600.js",
    "revision": "47e5063ac4c501973fd8d37e45997928"
  },
  {
    "url": "assets/js/42.b4d3421c.js",
    "revision": "963d3be1a55bf037be926c45a6c051f4"
  },
  {
    "url": "assets/js/43.ab26a565.js",
    "revision": "57b9bf6ced7e0dcf85a1990eebf00106"
  },
  {
    "url": "assets/js/44.87130731.js",
    "revision": "8b2e60f45675cfab43bd90500ab6925f"
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
    "url": "assets/js/app.aa8109c1.js",
    "revision": "366d107d85d17d6c8d45b7b1b400aeb9"
  },
  {
    "url": "FAQ/content/question-1.html",
    "revision": "24e622a9d9a702ac8c7c45e5c5637daa"
  },
  {
    "url": "FAQ/content/question-2.html",
    "revision": "caed494cf60ca2e404fc697cd0642c01"
  },
  {
    "url": "FAQ/index.html",
    "revision": "e80fd0d9a170132b2f9cad3f77d6699f"
  },
  {
    "url": "guide/index.html",
    "revision": "91ec4cce7a06bfef92d44789db7b1068"
  },
  {
    "url": "index.html",
    "revision": "b0607bcc9b7aa1062d560564223e0043"
  },
  {
    "url": "links/wiki/index.html",
    "revision": "9dbd1fabd0b3001baf86da1134330d22"
  },
  {
    "url": "thought/css/index.html",
    "revision": "d41e6c91a4206e1b27046a36d7b3e1f6"
  },
  {
    "url": "thought/es6/index.html",
    "revision": "d324ec52137cb222a2b3ddcea72448ac"
  },
  {
    "url": "thought/git/index.html",
    "revision": "9b120a73fd0eef6914aa07e52acc463c"
  },
  {
    "url": "thought/index.html",
    "revision": "11371561785645d09ed370bf31f6d477"
  },
  {
    "url": "thought/js/2020-Recall.html",
    "revision": "9737de64f66695cfae6fb850efa4a539"
  },
  {
    "url": "thought/js/Array-Date-and-Catgory.html",
    "revision": "2535805ae7b31d0b4026ecf7ff542079"
  },
  {
    "url": "thought/js/Build-a-Blog-Using-VuePress.html",
    "revision": "c30a8c86dea1c8bdef33bcb8d2f97a01"
  },
  {
    "url": "thought/js/Build-a-Storage-Server-Using-Nextcloud.html",
    "revision": "d73d0d2f2d068d4032a06cb24ebb1880"
  },
  {
    "url": "thought/js/Bukkit-Object-Pool-Picking-And-Updating.html",
    "revision": "fc9f64b17e138430ae9942cd7a0e8e6c"
  },
  {
    "url": "thought/js/Hello-World.html",
    "revision": "7bf4a954870a8dd0e33707cbe4ca00b6"
  },
  {
    "url": "thought/js/index.html",
    "revision": "63282a2b7f57ce32e7c15eaee8ca04d1"
  },
  {
    "url": "thought/js/Minecraft-Sponge-Server-Tutorial.html",
    "revision": "60dd2e8a4aa2f218ef922abcc2144145"
  },
  {
    "url": "thought/js/My-ADD.html",
    "revision": "d6e2273bebe0df7b8d5c36fa072f9990"
  },
  {
    "url": "thought/js/Simple-Authenticating-System.html",
    "revision": "68f65850f17d0b54c85b9c5558ac9e4d"
  },
  {
    "url": "thought/js/Simple-Vote-Logic-1.html",
    "revision": "b48f563bb9e600d696daa40425532406"
  },
  {
    "url": "thought/js/Something-About-Something.html",
    "revision": "80f4bd9dd405009e15c0dbaf092820ff"
  },
  {
    "url": "thought/js/Terrible-Computer-Accident-Caused-by-HDR.html",
    "revision": "e2b16f9218351687055596a8385ecfd8"
  },
  {
    "url": "thought/js/The-Clown-Is-Myself.html",
    "revision": "24e742b496044fe8541183ac05f902de"
  },
  {
    "url": "thought/js/The-Overinterpretation.html",
    "revision": "8abaf9d3ad3b53cfb7453ac5e7d0ee73"
  },
  {
    "url": "thought/js/Thoughts-About-Minecraft-Server.html",
    "revision": "b9b1e7c6c4beadbc6c02430a6d8a8959"
  },
  {
    "url": "thought/js/Unknown-MySQL-Issue.html",
    "revision": "4b861f19893d304625454281e1305eab"
  },
  {
    "url": "thought/node/index.html",
    "revision": "6d79fd33284860e620ef931923c4cc1e"
  },
  {
    "url": "thought/other/index.html",
    "revision": "4fc076fa8c53c25a6b5040a5dae24777"
  },
  {
    "url": "thought/react&mobx/index.html",
    "revision": "35a129d962f3a52d659ab76bcae9283c"
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
