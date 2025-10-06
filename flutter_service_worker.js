'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "59f14e18863f483f8fcb540d789cfbae",
"version.json": "35dd39c6d92465621df27ddaa3032507",
"index.html": "8389b5812d801dd907d83fdae73e1578",
"/": "8389b5812d801dd907d83fdae73e1578",
"main.dart.js": "aef59b790b3e9bd65fb68f5141c3d69a",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "612fe9da6ca513d5834f20e6df961fc7",
".git/config": "b21d1ab43fe4374e17f30eaeaaf42aa1",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "7a45402238decbda5a1817c517e1f276",
".git/objects/9b/ce33d09dbc60135ff5f31cc4920546ad46fac5": "9f380a854d1e3afb78367578f569443a",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "7fef652fbe034911f76c4da9e817e225",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "5f22e4867814a2022aa2a916bbf3efef",
".git/objects/6a/bb34fa74175236194b3d37a285d1377ab97010": "3041c9009d847d5e21cfba8ba502b8b3",
".git/objects/32/fa711c89c178861582d35397352606d09f1b00": "e40760a38ba8b76ea97aaa8899b203fe",
".git/objects/32/854fc7f1e109a3460cabbd07c5b6e15033d560": "538723dfa574cbae7334bb64ff23e9c5",
".git/objects/69/3ea4a7c45fe00496ac97b90601f3e2c4ec279c": "8a8aed0de1c4e53e51e264e83aeb06d8",
".git/objects/51/308ff6fb6cfcba2562ebeeeb01339c9d2acdb9": "29fd2f8f77bb8dc6bffd202515dd7130",
".git/objects/67/65ca433ac04a39ada2ed2795fe411685890661": "7cbd0bff921c4d62416213030b7a3c3e",
".git/objects/0b/548a6fba6dcdd1b221d60e7379cc3b7f59815d": "a6c7f71b32c601ec464af6ad5cdc444b",
".git/objects/60/9d61cfc2df3195e1f5831fafa7d76d0e3dcc3a": "609451aa19981f1f912da6a67cb213ed",
".git/objects/05/a9c09613574de9b77071261d4429ad6457f4f3": "ac4627b63d6bbc4a63e59c613b45193e",
".git/objects/9d/c12e9b07bd8068cbbe506923a0e46d1071a32c": "f5834940c7d8268eb3104a8694de03d6",
".git/objects/9d/808d44f6fd9148a2d4bebbbc2033df0f9fd513": "fe8feb5eedab067f3c7fcfccde03f0d3",
".git/objects/9c/f165260e764ad78ff9f2b20de30d93b514029b": "5c83cf49b0b048f8821adf1f85d53a6b",
".git/objects/a3/92be2eeea09d9b1d121b12dd3d3ef9e62e646d": "053950a130aaf9a6cb1647f275331a8d",
".git/objects/a3/f978f831f4cd16c761371746dc4631d34a7e87": "225496edddd8246a59d7122e49b53a95",
".git/objects/d9/03b0a2f4fcccfe11ae4003d1231ea192a65e8b": "890caf4a444aeeb0d381b5a385d29009",
".git/objects/d9/96627701ac0c13d6bc7e46776bd9ef543554d3": "0ad95b0afe1c093348fdbd0ad07b452e",
".git/objects/ac/d2c6893d02505f4a1e94d1469a1eae7ed1f5cf": "314fa7e4d094537faffd45c64611d0eb",
".git/objects/ad/335ba2da2b8ffbfddf1f844b5ab0eda0052c63": "854cf1fe48d10c0333ac00c47bae4b94",
".git/objects/d7/424aae784768ce0ab38c00ad4bbf0dadc6cbca": "f5ac0f372c892279bf23d966f8623141",
".git/objects/d7/30407d69ea9d2479502b225777191b1144c3c5": "a33ff97984259ea24fdf0c6fbc10140a",
".git/objects/be/3c24867f98e6e5b753fc8a590ec2a8b922b31d": "a0603fc87d37777269e7efa5c14d01c2",
".git/objects/be/fce6af890a4edf6d3c858878b30c1c2e2cd803": "a6c70daafc28408c562234b3d09e0578",
".git/objects/b3/ae67c044a0df362c182975b5e2786c8a1c6e02": "4772729a85dfa133a167078a7aaea110",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "f06d3f21945ea72565c84c740cbd7fd8",
".git/objects/bd/80745a33d802fb24bd1231c506f67d33319f6c": "5c37e0759019df9595b40ba4dbed7905",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/bc/e5e63ef68f374ae218ffb283f99684cd7d60fb": "00f11f069b1b60e81e512f587e3f9791",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "c887a57ff0eafa2df6b6f3fb5d630526",
".git/objects/e5/ac4d614f9e5d7a9c40ec884f576ce867b0568d": "188edcdaf30eb48fefbf0f7926dce773",
".git/objects/e2/2ec1f153e93a92c7d21b32b7e9f3e543013135": "a3ec36c617e3b437222797f79f9c41ad",
".git/objects/f4/f1c582ba61a4490d977008f3a68be1ad591e82": "220efa66d195cf5fa1cf9a1489210d29",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "26e88664696468ae8d5ce0608760da7a",
".git/objects/ee/7c735e9510cb72e38f5d93602c807a4b9512c0": "4e3092b07f15318878677cb2ad1d1c68",
".git/objects/c9/189029be949f51823aa7c0802b11b243bd20bd": "6656220d9faaae76f6550e1d985bdaa1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/c9ebab0d53e1f95e6b4943880321d0dc187ade": "88908e835f3a41103cb8bf0c6848b093",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/e3/347086af3a590fc084b58b17c13339148c73db": "db5c1193598864f3085853eee82a99f2",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "b8a36c8cfabd566efa7afcbb37489693",
".git/objects/e4/34b7c17dcee30bae1f44abfd47f2ba164c1d96": "976219ef6408a1f32aca23b914c8b2f1",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "8758ec0601c68cfa14e5aa0bd1db956b",
".git/objects/fe/ef09b635e13007ef4f68f76f8608bcea16c859": "262aa35037792cc3bec7860142f1acf1",
".git/objects/c8/fc02413a96e065f8036c7680c8cfb018da18ac": "7eae7eaa2a55153859e05a42b7adb221",
".git/objects/c8/f6d1603c838c252c51b272145d5e3f30abf9c3": "ebc45d0b58a26dc22e8df05e2b7872d7",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "9c41d2761da53894e11f717877b1707a",
".git/objects/c1/da6041bcb135de17cfe8698b1f9196b4f801c6": "1330a5924ec11293952faf4b27aed75b",
".git/objects/c1/dbac95b1c131e18be41f7bcd95305111782259": "e673811e843949cecea1de45fccfa83f",
".git/objects/4e/d7f290dd82d3e53a587d57d79a2d550a6ef298": "93e85b3bc914dd2bd8c853b5df308995",
".git/objects/4e/0860a917060455d3441f0362aa76c911daa6c0": "60c72615e9e589ff3b6399569527f4b4",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "1eaf6fbe076294c3f0daf90d55e4254a",
".git/objects/20/03dbcf7c07db7a5a3da946c37f497ef01ea38e": "189683af0766406d50cad6d94cdb6245",
".git/objects/18/03b59c9b696ffe35a99ec71a151b0891dce059": "8e100b5922743d94f0a4f5b65006fcd9",
".git/objects/4b/963eb5daf96467b02e57ae07d98bd36bf949df": "712a33cdb8ce83f6fb5da9cf7fa637f0",
".git/objects/11/2988122a5e73f29ee1461d3f5d2aaee34982f8": "4b4a88c8d273beea2cc4fef33fc4ecb3",
".git/objects/7d/889f61961ae94724d5a74cb157edf2536df471": "41b7e9cfe7f45a39538a31950d2b7ffe",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "fea60a4487346b57a5566c176c3edf3d",
".git/objects/29/7e2dd86a04f6c3e6adf649b17832c5972eeb82": "92ea19b08d81890800778ac6dd7293bf",
".git/objects/16/d40e3de6e3be629787beb87724ec8c6e583de2": "de6fc8a678f4f6832698a760efd41e64",
".git/objects/45/913862223d7b6a6da2df658bc94222385bc075": "40c0fa2cbe28f466d71d91d365ca422e",
".git/objects/73/5fe05d2d9072b1c725a7c5304bd56445371b1e": "60897b768b1848dede52743f3835bccd",
".git/objects/74/91ca030295bf5832c450826ce46204f4eea856": "b443a2d6a4e0fbaa21e8657da4525cd1",
".git/objects/28/4bd47863ab0541b52ffc3b750db067e42575dc": "50c256244cc8a931586dbeec79117923",
".git/objects/28/6a48c5a453d73fb5ce555f9a0656a923e22e96": "f13379dccbe2138a188cfc578d9efd31",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/10/d02a56fccccbf86206da53352b978e0ed3a0cf": "eeb8b5986b644df2175b050adcb70058",
".git/objects/19/67b549fc0ae8b81649b6ec379ce610d80fe49b": "c5c91f535daf1dfe8f37095bd5d1af65",
".git/objects/19/6de26c97e8da1cac391bc3c4b62b03eccf0f78": "fee3373423310054736bf4d98e448679",
".git/objects/19/eec60fe9ba32aac067921ce433233e8aad6be1": "0a1c641027816603d55baea208f29922",
".git/objects/4c/76134f4deb4ea099c2f19a63e020a8ffb7d4bc": "7f040078be2a30e7c3d20088747a725f",
".git/objects/4c/4f62f288c37e4021771d9935e59d5742d4c425": "525ccf0b728554f28e3572c5034e3d12",
".git/objects/21/9607d20c10904d6169e4512d53640155982d6b": "95e64b80e450cdc7b087d0d66faf99d6",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "889bc03fb6a15e508732478b9100196e",
".git/objects/4d/6ac18bd10064d9f7c5b78e3afecf0e2f7bd7a9": "8ec2b8e494720311f39ee12e56d534f9",
".git/objects/86/5e3584e05fc57622c5c875c1f25d703e51ccb3": "b44d3dd7b7484cfb8b5542556e824542",
".git/objects/86/34a97c911ebed728ca5d3ca1ecbd526e7e6533": "a19c71a985a50a082c95d30c9c7ade17",
".git/objects/72/c415b66e5243d7c575f9e33854a359c2c6858b": "db0974d79ce7c240c15fd2fda2f77da5",
".git/objects/72/70607e9a86fcf6171b3240a9508db1b44c2e2e": "74bca9158affafa6c30cfa2fe115aa01",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/88/615d5f93d9f48fd56d40f36065e12a66efb74b": "068678fd5e4336cd20b1363e75708cde",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/6b/917d9d2803b5ded3a429d0309b7c10576d0114": "85c6fccabb8db17a59866fb2cd6fa6cb",
".git/objects/31/685d6dbc4ee2e69841e0f2c733f00a0025f0c5": "7553360b91fbe40c3fcc2475ffd693aa",
".git/objects/65/581d3e54ec2f13181f0a6a81910e49e54ed272": "81f5fcf8c90700ac1074ed952806b719",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "673571ee0bcce7e10d7ca6c90f04f5d6",
".git/objects/53/0ad12c937014e6ab7756f4140c4e22eb0439d2": "3b275d320a07e70f1aaa6ee2d809e5e1",
".git/objects/53/e225ee8f69609dab29dc01fdcc9547dc2fa2e4": "27318afb8b3fa87dff16489932ee69a4",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "79d0ca2706eaa2c3b4da470e9db526a2",
".git/objects/5e/8448cfdd8ff56e1090bdec7886e124dc40e632": "1a0595353171d27e680e78c625539486",
".git/objects/5e/c9f08458f46dadb627f3d5832a8ca4922431af": "da7d8fb73cd7b54a4bb125fa55ca983b",
".git/objects/37/6d24a3134f5e78ce6c95d90def25092f788a7c": "73aecd0dc0df2500bed6862e0dab9989",
".git/objects/08/d8887c691f127cade885360e96c0cac8b1108b": "aab8913d673c73fe2278e33e79f24955",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "dae8dffe1b57334304dbe76d315d71ee",
".git/objects/01/59d4d7e18a137003b706ffb88f390274f28391": "268246681f34237fe64c0c74dee8d161",
".git/objects/01/def69f2b99bce7ba34e73b4c1f6febe83b6a78": "b2abcd0377613ae8e40ea5b8f6fd37ef",
".git/objects/01/1842b856d2844c35f671e492a3793c1dea487f": "4531f3dee36c45af5608d10f59b19249",
".git/objects/01/287b260e18bcac76ab9d464da577df094497b5": "94447d1e7fd5a5b1895f05d5d1de8f3d",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "9a2741a9017f3e943ec0b7f327c2c020",
".git/objects/39/4ea94d25a0f1593a5af34fe9c711ad5962bd80": "ab05867d86f92c12d7889d0a1069d6a0",
".git/objects/52/798265502f3d889c96b7f4b8259ead3c725129": "bdccb7831ba70ea4d224402ee1ef4072",
".git/objects/63/06bc66d34fd9918c91dffe2f42df92ad35a75f": "0b2e0e7c35b95c63ccf3722810b53da6",
".git/objects/0f/cbb1996053d2f5cd63ce1f22ba5b2039c873ad": "33f9374ad4e357d9070485884b493215",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/8584f0cd53053fd1b101555cb1dea02b26ed15": "c0954b0d53fb8eff305e3595fa9c16be",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b11768e6a8ca60bad07211a36372d59f",
".git/objects/b6/180f9a11c9d43fe5be79bb94c8320002d172fb": "1bdaea2335758a80528ca8be8d20a32c",
".git/objects/a9/85a5938257571ae9729cdcf8e0cae76a6ac355": "1f6c6ab38e414a60d4a63ef5e527cecf",
".git/objects/d5/0c2772148ad7cb65ca7aa77f80629e0c436fb0": "4b30cac11284b517d2ea35e276884b2b",
".git/objects/aa/c54a55dab5c9e275b2f678495454cbbb776881": "961b1c0568af1a37fc04e16fc9acffb0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/db/9266553a22aed7e5172369c1f96a3ae4cb6dc8": "6661ff0283959b72bc216a659869932f",
".git/objects/db/ed8ef176261c0f5a7f3932b9f4b4a7a8fc9386": "6c823916fba53978681b0c5d4ed43a0c",
".git/objects/a8/95a67c3e23ac675926d598b7accba5a3d8ff4d": "d7fe596d801442df3aa21f004b461cab",
".git/objects/a8/c3372c51ca1cb61bbc2ccfe6a0a97f13475cb6": "aa815fed7c67d1015aef5e2c64f54f23",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/6aeea4c14b5bc5d25c4cd6ca2af30de19479de": "06c658b49a580d1bd95939e25cb0e150",
".git/objects/c3/13bbd4ecdf22e4b4e5acbfe8cb0f18df7f79f2": "5b0d56611c3be109f6d85f08d10d4238",
".git/objects/c4/d9928060ef685a39bb99f79f84bd2bea7d9722": "05e31beb58f58a6c0ba34f463aaca0bb",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "34d9bb262a1db8360a1db06f4cea5edc",
".git/objects/c4/1231dafeb1a39a03ffcd151650473edd31e93c": "c2b984caa8862010a1eae2cf2b560e66",
".git/objects/ea/da3721e607570347137313173bb3c550d74581": "0157b9fc0d4c54e61f76ed9811b980ad",
".git/objects/e6/2450a1f2c465ee824ddda3c2c92188128c9cce": "7c11de59fc6b99c62b1c1af596fff0ee",
".git/objects/e6/b6a63e3d4ee99fba3c71301345a051b4e7f419": "091288e17cc0bdac82f7321c4f6a4a3e",
".git/objects/f6/65d7aab9d2fd8b4b54a898b8b1ab2bf9700ca4": "f6757bf4fbe22db56b8ba1a06ea929ba",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/e9/8ce57732b6a12402b72c39578234a8b8c9095a": "ce82a48fc87e3fea0efa8084156ae37b",
".git/objects/79/e39c4c8230c4a784d3a59ba71eb5530d4220a3": "ce35dccfa9a26f10e4376651df3746cf",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "733ddcf1f8467729f0dab00912add93d",
".git/objects/41/ceb30e2062b19bc17b65b55e7d0e7dff8d33a1": "9af5a4c423870ab1251f023f0c58a649",
".git/objects/1b/d3ea8ecf2ab91f08e99b31b7d7960da7bb6b05": "b9038f0ed8e543c80eeb1589eac80129",
".git/objects/1e/54a86f80eec9b3da9d72d436cef5639fa8dc66": "f871db978d9bfb90ad61ec9097a315ba",
".git/objects/84/2702036e7f7aec5d8a8f4e7d73af9fe5283b68": "361459130096568e9af00fe2988af43d",
".git/objects/23/76c7f210961aad2e17cadbdd63a704210bd040": "5fb06e6715b5b306d46453d2fdab7447",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "cfcbae98ed59ea0e225d141b40bcf512",
".git/objects/4f/217d3a804475e2210770df80fe50528be2adf9": "08488b4a32f902dd54fcac71503d3947",
".git/objects/8d/b95ccafc7de4153616b796b540e9878abc65a2": "2d6fec12135285273d35385b3f25fae9",
".git/objects/8c/25d4a9b56ad8931a9dfcb81e45e17cc99ab0c1": "3d36a1081b92c5bed0e3de6343ec9481",
".git/objects/49/f7d4b3c7f11575c18da76baf6126af5dc50fd4": "e743af42b5e148e4a01b357244195d7f",
".git/objects/49/7ce6ac84dd22ba6929e5010a5714bd8b372640": "67fffbe254dd02b7f1ac154e0f65ff9c",
".git/objects/78/6d78f0fbd042d7e5949a100b339c0a7739b033": "1b53960f09f7424a3dd797e4b5480ad5",
".git/objects/8b/ed1df0716abcd02d7f8235ee413e9a2afc0678": "3f2f0e65b0abeaf118661b1f74d019b8",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "2e52b2703dcf92f5b2f87b4661347cc3",
".git/objects/14/12a0a15c3ce2fba2dee274ed7660f7d31c9cd7": "f1bc2f6714dda18c6cfbccd623898dd2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb762fe04942a40cd3bf81edd4ea203e",
".git/logs/refs/heads/main": "eb762fe04942a40cd3bf81edd4ea203e",
".git/logs/refs/remotes/origin/master": "efe6d042d3f00cccffd32fe5fe9eb642",
".git/logs/refs/remotes/origin/main": "928363b18d056b692017f3c0608a6b99",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d2c5efbcdd70d6a0bf2def89d1b78f71",
".git/refs/remotes/origin/master": "4f2c5d84c5070893353f1430dcfd5c8a",
".git/refs/remotes/origin/main": "25544d429675a676d556bdf08209b109",
".git/index": "3ed24c32ba91000b8fd378b2207f46b6",
".git/COMMIT_EDITMSG": "cd4f2427f27ebf7135f53b19ff00c65b",
".git/FETCH_HEAD": "bcad380db8444169040ed92fd4385983",
"assets/AssetManifest.json": "0d46c4c57c5742b9097e6ef62b2d9df0",
"assets/NOTICES": "b266600723e2959831789ecf22e13b5d",
"assets/FontManifest.json": "3e36c826f0b86368c172c5f7b45f61ce",
"assets/AssetManifest.bin.json": "1fea8d8d816bed686e7496ceb6e0b3d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/pdfrx/assets/pdfium.wasm": "e45b1bd7c49fb3c1b265367302856ed6",
"assets/packages/pdfrx/assets/pdfium_client.js": "9ef7c314155dc36c966ef89df070dfd2",
"assets/packages/pdfrx/assets/pdfium_worker.js": "a8bea966b1311bc80d5bc9c559e7d3e0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/hugeicons/lib/fonts/hugeicons-stroke-rounded.ttf": "ed1746fbad500fea94f6e5c5eb97ed7d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d4080a594fdd247e3c8a86891bcae08b",
"assets/fonts/MaterialIcons-Regular.otf": "757b4cb4a55a0461b030da9afe7b0bf8",
"assets/assets/images/bkash.png": "eb4f97fffb362e2825e17b1bbb2b2528",
"assets/assets/images/chat2.png": "f0b6a28fdb242fb9057051555b12d199",
"assets/assets/images/logo1.png": "59f0256a9cdd219070cdb6c9f17063b6",
"assets/assets/images/logo.png": "4b74346a6100069f2e9d942a7daaa893",
"assets/assets/images/call.png": "5468231597f2f1f6bbe0e96cfdbbe3a4",
"assets/assets/images/logo.jpeg": "b4dffeb60b21878021c254c6fcc8acbd",
"assets/assets/images/chat.png": "2b4093eccaa87229b5b18f463e514c5a",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
