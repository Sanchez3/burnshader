function Layer(a, b, c, d, e) {
    this.imgPath = a,
        this.name = b,
        this.size = c,
        this.pos = xyViaPosz(d),
        this.scene = scene,
        this.progress = { value: 0.5 },
        this.isDepth = { value: 0 },
        this.burnEffect = { value: e ? 1 : 0 },
        this.isText = e,
        this.globalScale = .2,
        this.init = function() {
            var a = 0;
            this.rate = Math.abs(this.pos.pz - halfDepth) / Math.abs(a - halfDepth),
                this.size.sx *= this.rate * this.globalScale,
                this.size.sy *= this.rate * this.globalScale,
                this.geo = new THREE.PlaneBufferGeometry(this.size.sx, this.size.sy),
                this.map = textureLoader.load(this.imgPath + params, loadResCallBack),
                this.material = new THREE.ShaderMaterial({
                    uniforms: {
                        map: { value: this.map },
                        burnTex: { value: burnTex },
                        progress: this.progress,
                        burnEffect: this.burnEffect,
                        isDepth: this.isDepth,
                        cameraNear: { value: 100 },
                        cameraFar: { value: 400 }
                    },
                    vertexShader: document.getElementById("burnVertexShader").textContent,
                    fragmentShader: document.getElementById("burnFragmentShader").textContent
                }),
                this.material.transparent = !0,
                this.mesh = new THREE.Mesh(this.geo, this.material),
                this.mesh.position.set(this.pos.px, this.pos.py, this.pos.pz)
        },
        this.getMesh = function() { return this.mesh },
        this.updateProgress = function(a) {
            var b, c, d, e, f, g;
            this.isText && (b = Math.abs(a - this.pos.px),
                c = Math.abs(this.pos.pz - cameraPerspective.position.z),
                d = 2 * c * Math.tan(cameraPerspective.fov / 2 / 180 * Math.PI),
                e = d * cameraPerspective.aspect,
                f = Math.max(0, Math.min(1, 2 * (b / e))), g = 1 - f,
                this.progress.value = g)
        }, this.init()
}

function loadResCallBack() { hasLoadRes++ }

function SceneManager(a) {
    this.scene = a, this.imgPathPrefix = "https://yanxuan.nosdn.127.net/", this.layerInfos = [{ imgPath: "15060639110813917.png", name: "eveningDress", size: { sx: 704, sy: 684 }, pos: { px: 1010, py: 0, pz: 50 + bulletZ }, isText: !1 }, { imgPath: "15060639185193950.png", name: "text_eveningDress", size: { sx: 479, sy: 189 }, pos: { px: 1250, py: -180, pz: 51 + bulletZ }, isText: !0 }, { imgPath: "15060639150063936.png", name: "playerCigarettes", size: { sx: 276, sy: 232 }, pos: { px: 1450, py: -60, pz: -50 + bulletZ }, isText: !1 }, { imgPath: "15060639199313958.png", name: "text_playerCigarettes", size: { sx: 517, sy: 269 }, pos: { px: 1450, py: 200, pz: -49 + bulletZ }, isText: !0 }, { imgPath: "15060639091393905.png", name: "bible", size: { sx: 706, sy: 504 }, pos: { px: 1770, py: -300, pz: 10 + bulletZ }, isText: !1 }, { imgPath: "15060639172133945.png", name: "text_bible", size: { sx: 599, sy: 221 }, pos: { px: 2150, py: -200, pz: 11 + bulletZ }, isText: !0 }, { imgPath: "15060639124733924.png", name: "float", size: { sx: 349, sy: 336 }, pos: { px: 2150, py: 150, pz: 20 + bulletZ }, isText: !1 }, { imgPath: "15060639192913953.png", name: "text_float", size: { sx: 567, sy: 192 }, pos: { px: 2420, py: 150, pz: 21 + bulletZ }, isText: !0 }, { imgPath: "15060639170903944.png", name: "tag", size: { sx: 122, sy: 151 }, pos: { px: 2700, py: -100, pz: -30 + bulletZ }, isText: !1 }, { imgPath: "15060639203323959.png", name: "text_tag", size: { sx: 183, sy: 354 }, pos: { px: 2850, py: -150, pz: -29 + bulletZ }, isText: !0 }, { imgPath: "15060639107453915.png", name: "cookies", size: { sx: 391, sy: 395 }, pos: { px: 3200, py: 150, pz: 20 + bulletZ }, isText: !1 }, { imgPath: "15060639182403949.png", name: "text_cookies", size: { sx: 151, sy: 36 }, pos: { px: 3050, py: 120, pz: 21 + bulletZ }, isText: !0 }, { imgPath: "15060639105393913.png", name: "can", size: { sx: 631, sy: 734 }, pos: { px: 3500, py: 50, pz: 10 + bulletZ }, isText: !1 }, { imgPath: "15060639177403948.png", name: "text_can", size: { sx: 100, sy: 36 }, pos: { px: 3700, py: 100, pz: 11 + bulletZ }, isText: !0 }, { imgPath: "15060639138753931.png", name: "kittyChocolate", size: { sx: 238, sy: 161 }, pos: { px: 3200, py: -150, pz: -20 + bulletZ }, isText: !1 }, { imgPath: "15060639193893955.png", name: "text_kittyChocolate", size: { sx: 677, sy: 131 }, pos: { px: 3300, py: -230, pz: -19 + bulletZ }, isText: !0 }, { imgPath: "15060639147533935.png", name: "passport", size: { sx: 323, sy: 385 }, pos: { px: 4150, py: -200, pz: 20 + bulletZ }, isText: !1 }, { imgPath: "15060639196903957.png", name: "text_passport", size: { sx: 488, sy: 238 }, pos: { px: 3950, py: -210, pz: 21 + bulletZ }, isText: !0 }, { imgPath: "15060639209103961.png", name: "topSecretFile", size: { sx: 397, sy: 326 }, pos: { px: 3950, py: 170, pz: 20 + bulletZ }, isText: !1 }, { imgPath: "15060639203523960.png", name: "text_topSecretFile", size: { sx: 372, sy: 94 }, pos: { px: 4200, py: 200, pz: 21 + bulletZ }, isText: !0 }, { imgPath: "15060639101703912.png", name: "camera", size: { sx: 741, sy: 757 }, pos: { px: 4600, py: 50, pz: 40 + bulletZ }, isText: !1 }, { imgPath: "15060639174323947.png", name: "text_camera", size: { sx: 509, sy: 324 }, pos: { px: 4900, py: 150, pz: 41 + bulletZ }, isText: !0 }, { imgPath: "15060639112323919.png", name: "film1", size: { sx: 704, sy: 554 }, pos: { px: 4800, py: -150, pz: -20 + bulletZ }, isText: !1 }, { imgPath: "15060639190413951.png", name: "text_film1", size: { sx: 178, sy: 80 }, pos: { px: 4600, py: -200, pz: -19 + bulletZ }, isText: !0 }, { imgPath: "15060639129533926.png", name: "forkBag", size: { sx: 367, sy: 523 }, pos: { px: 5280, py: -100, pz: -20 + bulletZ }, isText: !1 }, { imgPath: "15060639193473954.png", name: "text_forkBag", size: { sx: 333, sy: 36 }, pos: { px: 5120, py: -200, pz: -19 + bulletZ }, isText: !0 }, { imgPath: "15060639140833932.png", name: "medicalPackage", size: { sx: 1175, sy: 1159 }, pos: { px: 5550, py: 200, pz: 15 + bulletZ }, isText: !1 }, { imgPath: "15060639196203956.png", name: "text_medicalPackage", size: { sx: 217, sy: 37 }, pos: { px: 5750, py: 200, pz: 16 + bulletZ }, isText: !0 }, { imgPath: "15060639122543923.png", name: "flagon", size: { sx: 614, sy: 782 }, pos: { px: 6100, py: -200, pz: 40 + bulletZ }, isText: !1 }, { imgPath: "15060639192183952.png", name: "text_flagon", size: { sx: 453, sy: 167 }, pos: { px: 5850, py: -200, pz: 41 + bulletZ }, isText: !0 }, { imgPath: "15060639092403906.png", name: "book", size: { sx: 617, sy: 613 }, pos: { px: 6450, py: 100, pz: -30 + bulletZ }, isText: !1 }, { imgPath: "15060639173823946.png", name: "text_book", size: { sx: 610, sy: 278 }, pos: { px: 6500, py: -185, pz: -29 + bulletZ }, isText: !0 }, { imgPath: "15060639118683921.png", name: "finalText1", size: { sx: 1174.8, sy: 438 }, pos: { px: 7e3, py: 0, pz: -4 + bulletZ }, isText: !0 }, { imgPath: "15060639120133922.png", name: "finalText2", size: { sx: 1012 * 1.2, sy: 438 }, pos: { px: 7500, py: 0, pz: -4 + bulletZ }, isText: !0 }], this.fadeOut = !1, this.layers = [], this.init = function() { this.initLayers() }, this.initLayers = function() { var b, c; for (b = 0; b < this.layerInfos.length; b++) c = this.layerInfos[b], this.layers[b] = new Layer(this.imgPathPrefix + c.imgPath, c.name, c.size, c.pos, c.isText), a.add(this.layers[b].getMesh()) }, this.update = function(a) {
            var b, c;
            if (!this.fadeOut)
                for (b = 0; b < this.layers.length; b++) c = this.layers[b], c.updateProgress(a)
        },
        this.fadeFinal = function(a) {
            var b, c, d;
            for (this.fadeOut = a, b = 0; b < this.layers.length; b++) c = this.layers[b], "finalText2" == c.name && (d = a ? 0 : 1, new TWEEN.Tween(c.progress).to({ value: d }, a ? 600 : 120).onUpdate(function() {}).start())
        }, this.init()
}

function initVideo() {
    video = $("#my_video"), video.width = window.innerWidth, video.height = window.innerHeight;
    var a = !1;
    video.get(0).addEventListener("timeupdate", function() { video.get(0).currentTime > 13 && (video.fadeOut(1500), a || (hasPlayVideo = !0, onWindowResize(), ion.sound.play(bgm), setTimeout(bulletIn, 500), a = !0)) })
}

function init() {
    var a, b;
    initMyAudio(), initVideo(), textureLoader = new THREE.TextureLoader, textureLoader.crossOrigin = "", jsonLoader = new THREE.JSONLoader, jsonLoader.crossOrigin = "", container = document.getElementById("canvas_wrapper"), cameraPerspective = new THREE.PerspectiveCamera(50, width / height, 1, 8e3), cameraPerspective.position.z = halfDepth - 20, scene = new THREE.Scene, directionalLight = new THREE.DirectionalLight(16777215), directionalLight.position.set(0, 1, -.7).normalize(), scene.add(directionalLight), directionalLight1 = new THREE.DirectionalLight(16777215), directionalLight1.position.set(0, -1, -.7).normalize(), scene.add(directionalLight1), directionalLight1 = new THREE.DirectionalLight(6710886), directionalLight1.position.set(0, 0, 1).normalize(), scene.add(directionalLight1), renderer = new THREE.WebGLRenderer({ antialias: !1 }), renderer.setClearColor(0), renderer.setPixelRatio(window.devicePixelRatio), renderer.setSize(width, height), renderer.autoClear = !1, renderer.gammaInput = !0, renderer.gammaOutput = !0, container.appendChild(renderer.domElement), stats = new Stats, a = THREE.VignetteShader, effectVignette = new THREE.ShaderPass(a), effectVignette.uniforms["offset"].value = .95, effectVignette.uniforms["darkness"].value = 1.6, effectFilmBW = new THREE.FilmPass(.35, .5, 1e3, !0), b = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: !0 }, renderBackground = new THREE.RenderPass(scene, cameraPerspective), renderBackground.renderToScreen = !0, composerScene = new THREE.EffectComposer(renderer, new THREE.WebGLRenderTarget(width, height, b)), composerScene.addPass(renderBackground), composerScene.addPass(effectFilmBW), composerScene.addPass(effectVignette), shareBulletMgr = new ShareBulletManager, initInteract(), initFinalPage(), initStartPage(), initOrient(),
        window.addEventListener("resize", onWindowResize, !1)
}

function loadWebglRes() {
    var a, b, c, d, e, f, g;
    burnTex = textureLoader.load("https://yanxuan.nosdn.127.net/15060639100893911.png" + params, loadResCallBack),
        jsonLoader.load("https://mailyxpublic.nosdn.127.net/bmmdkiomlc1506077623113.js" + params, function(a) {
            loadResCallBack(), createBullet(a, scene, .4)
        }),
        a = new THREE.ShaderMaterial({
            uniforms: {
                map: {
                    value: textureLoader.load("https://yanxuan.nosdn.127.net/15060713971824117.jpg" + params, loadResCallBack)
                },
                burnTex: { value: burnTex },
                progress: { value: 1 },
                isDepth: { value: 0 },
                cameraNear: { value: 100 },
                cameraFar: { value: 400 }
            },
            vertexShader: document.getElementById("burnVertexShader").textContent,
            fragmentShader: document.getElementById("burnFragmentShader").textContent
        }),
        quadBG1 = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), a),
        quadBG1.position.z = -halfDepth,
        b = Math.abs(cameraPerspective.position.z - quadBG1.position.z) + 10,
        c = Math.tan(cameraPerspective.fov / 2 / 180 * Math.PI), d = 2 * b * c,
        quadBG1.scale.set(d * quadBG1Width / quadBG1Height, d, 1),
        e = d * cameraPerspective.aspect,
        quadBG1.position.set(quadBG1.scale.x / 2, 0, quadBG1.position.z),
        cameraPerspective.position.x = e / 2,
        scene.add(quadBG1),
        f = new THREE.ShaderMaterial({
            uniforms: {
                map: {
                    value: textureLoader.load("https://yanxuan.nosdn.127.net/15060713974504118.jpg" + params, loadResCallBack)
                },
                burnTex: { value: burnTex },
                progress: { value: 1 },
                isDepth: { value: 0 },
                cameraNear: { value: 100 },
                cameraFar: { value: 400 }
            },
            vertexShader: document.getElementById("burnVertexShader").textContent,
            fragmentShader: document.getElementById("burnFragmentShader").textContent
        }),
        quadBG2 = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), f), quadBG2.position.z = -halfDepth, g = 2 * b * c, quadBG2.scale.set(g * quadBG2Width / quadBG2Height, g, 1), quadBG2.position.set(quadBG2.scale.x / 2 + quadBG1.scale.x, 0, quadBG1.position.z), scene.add(quadBG2),
        fragmentMgr = new FragmentManager, minCameraX = e / 2, maxCameraX = quadBG1.scale.x + quadBG2.scale.x - e / 2, bulletFadeX = 7e3 * (quadBG1.scale.x + quadBG2.scale.x) / (quadBG1Width + quadBG2Width),
        sceneMgr = new SceneManager(scene)
}

function ShareBulletManager() {
    this.fragments = [], this.fragmentGeometry = new THREE.ConeBufferGeometry(5, 20, 3), this.fragmentMaterial = new THREE.MeshPhongMaterial({ color: 10066329, shininess: 30, map: textureLoader.load("https://yanxuan.nosdn.127.net/15060639098893908.png" + params), normalMap: textureLoader.load("https://yanxuan.nosdn.127.net/15060639100163909.png" + params), normalScale: new THREE.Vector2(5, 5), specularMap: textureLoader.load("https://yanxuan.nosdn.127.net/15060639100423910.png" + params), specular: 16777215 }), this.fragmentMaterial.transparent = !0, this.init = function() {
        var a, b, c, d, e;
        for (this.bulletCamera = new THREE.PerspectiveCamera(50, 30 / 180, 1, 5e3), this.bulletCamera.position.z = 100, this.bulletScene = new THREE.Scene, a = new THREE.DirectionalLight(16777215), a.position.set(1, 0, -.2).normalize(), this.bulletScene.add(a), b = new THREE.DirectionalLight(16777215), b.position.set(-1, 0, -.2).normalize(), this.bulletScene.add(b), b = new THREE.DirectionalLight(6710886), b.position.set(0, 0, 1).normalize(), this.bulletScene.add(b), jsonLoader.load("https://mailyxpublic.nosdn.127.net/bmmdkiomlc1506077623113.js" + params, function(a) { this.createBullet2(a, .06) }.bind(this)), c = 0; 6 > c; c++) d = new THREE.Mesh(this.fragmentGeometry, this.fragmentMaterial), e = { px: 0, py: -200, pz: -100 }, d.position.set(e.px, e.py, e.pz), d.scale.set(Math.random() / 2, Math.random() / 5 + .1, Math.random() / 2), d.rotation.set(360 * Math.random(), 360 * Math.random(), 360 * Math.random()), d.data = { posSpeed: { x: 2 * (Math.random() - .05), y: 1 * -Math.random(), z: 2 * (Math.random() - .05) }, angleSpeed: { x: 5 * (Math.random() - .05), y: 5 * (Math.random() - .05), z: 5 * (Math.random() - .05) }, fadeSpeed: .05 }, this.bulletScene.add(d), this.fragments.push(d);
        this.bulletRenderer = new THREE.WebGLRenderer({ antialias: !1, alpha: !0 }), this.bulletContainer = document.getElementById("bullet_share_container"), this.bulletContainer.style.width = "" + 30 * window.innerHeight / 180 + "px", this.bulletContainer.style.height = "" + window.innerHeight + "px", this.bulletContainer.appendChild(this.bulletRenderer.domElement), this.bulletRenderer.setPixelRatio(window.devicePixelRatio), this.bulletRenderer.setSize(30 * window.innerHeight / 180, window.innerHeight)
    }, this.createBullet2 = function(a, b) {
        var c = new THREE.MeshPhongMaterial({ color: 10066329, shininess: 20, map: textureLoader.load("https://yanxuan.nosdn.127.net/15060639098893908.png" + params), normalMap: textureLoader.load("https://yanxuan.nosdn.127.net/15060639100163909.png" + params), normalScale: new THREE.Vector2(5, 5), specularMap: textureLoader.load("https://yanxuan.nosdn.127.net/15060639100423910.png" + params), specular: 16777215 });
        c.transparent = !0, this.bullet2 = new THREE.Mesh(a, c), this.bullet2.position.set(0, -100, 0), this.bullet2.rotation.set(0, 0, Math.PI / 2), this.bullet2.scale.set(b, b, b), this.bulletScene.add(this.bullet2)
    }, this.resize = function() { this.bulletContainer.style.width = "" + 30 * window.innerHeight / 180 + "px", this.bulletContainer.style.height = "" + window.innerHeight + "px", this.bulletRenderer.setSize(30 * window.innerHeight / 180, window.innerHeight) }, this.update = function() { var a, b; for (this.bullet2 && (this.bullet2.rotation.y += .1), a = 0; a < this.fragments.length; a++) b = this.fragments[a], b.position.x += b.data.posSpeed.x, b.position.y += b.data.posSpeed.y, b.position.z += b.data.posSpeed.z, b.rotation.x += b.data.posSpeed.x, b.rotation.y += b.data.posSpeed.y, b.rotation.z += b.data.posSpeed.z, b.data.posSpeed.x *= .95, b.data.posSpeed.y *= .95, b.data.posSpeed.z *= .95, b.data.angleSpeed.x *= .95, b.data.angleSpeed.y *= .95, b.data.angleSpeed.z *= .95, b.material.opacity -= b.data.fadeSpeed }, this.render = function() { this.bulletRenderer.render(this.bulletScene, this.bulletCamera) }, this.shoot = function() {
        var a = { value: -80 },
            b = !1;
        new TWEEN.Tween(a).to({ value: 80 }, 1200).easing(TWEEN.Easing.Quartic.Out).onUpdate(function() {
            var c, d, e;
            if (this.bullet2.position.y = a.value, a.value >= 50 && !b)
                for (b = !0, ion.sound.play(effect, { part: "shoot" }), c = 0; c < this.fragments.length; c++) d = this.fragments[c], e = { px: 0, py: 200 * Math.tan(50 / 180 * Math.PI / 2), pz: -100 }, d.position.set(e.px, e.py, e.pz), d.material.opacity = 1, d.data = { posSpeed: { x: 2 * (Math.random() - .5), y: 10 * -Math.random(), z: 2 * (Math.random() - .5) }, angleSpeed: { x: 5 * (Math.random() - .5), y: 5 * (Math.random() - .5), z: 5 * (Math.random() - .5) }, fadeSpeed: .005 }
        }.bind(this)).start()
    }, this.init()
}

function initStartPage() { $(".enter_wrapper").click(function() { ion.sound.play(effect, { part: "click" }), $(".enter_wrapper").fadeOut(300), $(".load_wrapper").fadeIn(300), video.get(0).play(), video.get(0).pause(), loadWebglRes() }) }

function initFinalPage() { $(".share_bt").click(function() { ion.sound.play(effect, { part: "click" }), shareBulletMgr.shoot() }), $(".restart_bt").click(function() { ion.sound.play(effect, { part: "click" }), window.location.reload() }), $(".slogan").click(function() { ion.sound.play(effect, { part: "click" }), window.location.href = "http://you.163.com/item/detail?id=1156006&from=web_out_bd_bd_202" }) }

function initMyAudio() { ion.sound({ sounds: [{ name: bgm, volume: .68, loop: !0, multiplay: !1 }, { name: effect, sprite: { click: [0, .5], bullet: [.5, 1.5], shoot: [2, 2] }, volume: 1 }], path: "https://yanxuan.nosdn.127.net/", preload: !0, multiplay: !0 }) }

function initInteract() {
    var a = renderer.domElement,
        b = document.getElementById("final_wrapper");
    $(".cnavas_tip_wrapper").bind("touchstart", function() {
            $(".cnavas_tip_wrapper").fadeOut(100)
        }),
        a.addEventListener("touchstart", function(b) {
            if (!lockInteract && b.target == a) {
                isInteract = !0;
                var c = b.touches[0];
                lastTouchX = c.pageX, lastTouchTime = Date.now(), renderBackground.renderToScreen = !1, effectVignette.renderToScreen = !0, ion.sound.play(effect, { part: "bullet" })
            }
        }, !1),
        a.addEventListener("touchmove", function(a) {
            if (isInteract) {
                if (Date.now() == lastTouchTime) return;
                var b = a.touches[0];
                acceleration = (b.pageX - lastTouchX) / (Date.now() - lastTouchTime) / 2, lastTouchX = b.pageX, lastTouchTime = Date.now()
            }
        }, !1),
        a.addEventListener("touchend", function() { isInteract = !1, acceleration = 0, renderBackground.renderToScreen = !0, effectVignette.renderToScreen = !1 }, !1), a.addEventListener("touchcancel", function() { isInteract = !1, acceleration = 0, renderBackground.renderToScreen = !0, effectVignette.renderToScreen = !1 }, !1), b.addEventListener("touchstart", function(a) {
            if (lockInteract) {
                isInteract = !0;
                var b = a.touches[0];
                lastTouchX = b.pageX, lastTouchTime = Date.now()
            }
        }, !1),
        b.addEventListener("touchmove", function(a) {
            if (isInteract) {
                if (Date.now() == lastTouchTime) return;
                var b = a.touches[0];
                acceleration = (b.pageX - lastTouchX) / (Date.now() - lastTouchTime) / 2, lastTouchX = b.pageX, lastTouchTime = Date.now()
            }
        }, !1),
        b.addEventListener("touchend", function() { isInteract = !1, acceleration = 0 }, !1),
        b.addEventListener("touchcancel", function() { isInteract = !1, acceleration = 0 }, !1),
        document.addEventListener("touchmove", function(a) { a.preventDefault() }, !1)
}

function onWindowResize() { width = window.innerWidth, height = window.innerHeight, halfWidth = window.innerWidth / 2, halfHeight = window.innerHeight / 2, cameraPerspective.aspect = window.innerWidth / window.innerHeight, cameraPerspective.updateProjectionMatrix(), renderer.setSize(window.innerWidth, window.innerHeight), composerScene.setSize(2 * halfWidth, 2 * halfHeight), resetObjSize(), shareBulletMgr.resize(), video.width = window.innerWidth, video.height = window.innerHeight }

function resetObjSize() {
    var d, a = Math.abs(cameraPerspective.position.z - quadBG1.position.z),
        b = Math.tan(cameraPerspective.fov / 2 / 180 * Math.PI),
        c = 2 * a * b;
    quadBG1.scale.set(c / quadBG1Height * quadBG1Width, c, 1), quadBG2.scale.set(c / quadBG2Height * quadBG2Width, c, 1), d = 2 * a * b * cameraPerspective.aspect, quadBG1.position.set(quadBG1.scale.x / 2, 0, quadBG1.position.z), quadBG2.position.set(quadBG2.scale.x / 2 + quadBG1.scale.x, 0, quadBG2.position.z), minCameraX = d / 2, maxCameraX = quadBG1.scale.x + quadBG2.scale.x - d / 2, console.log("resetObjSize")
}

function createBullet(a, b, c) {
    var d = new THREE.MeshPhongMaterial({ color: 10066329, shininess: 20, map: textureLoader.load("https://yanxuan.nosdn.127.net/15060639098893908.png" + params, loadResCallBack), normalMap: textureLoader.load("https://yanxuan.nosdn.127.net/15060639100163909.png" + params, loadResCallBack), normalScale: new THREE.Vector2(5, 5), specularMap: textureLoader.load("https://yanxuan.nosdn.127.net/15060639100423910.png" + params, loadResCallBack), specular: 16777215 });
    d.transparent = !0, bullet = new THREE.Mesh(a, d), bullet.position.set(-250, 0, bulletZ), bullet.scale.set(c, c, c), b.add(bullet)
}

function FragmentManager() {
    this.fragments = [], this.fragmentCount = 50,
        this.geometry = new THREE.ConeBufferGeometry(5, 20, 3),
        this.material = new THREE.MeshBasicMaterial({ color: 16776960 }),
        this.mat1 = new THREE.MeshPhongMaterial({
            color: 10066329,
            shininess: 20,
            map: textureLoader.load("https://yanxuan.nosdn.127.net/15060639098893908.png" + params),
            normalMap: textureLoader.load("https://yanxuan.nosdn.127.net/15060639100163909.png" + params),
            normalScale: new THREE.Vector2(5, 5),
            specularMap: textureLoader.load("https://yanxuan.nosdn.127.net/15060639100423910.png" + params),
            specular: 16777215
        }),
        this.init = function() {
            var a, b, c;
            for (a = 0; a < this.fragmentCount; a++) b = new THREE.Mesh(this.geometry, this.mat1), c = { px: Math.random() * (quadBG1Width + quadBG2Width), py: Math.random() * quadBG1Height - quadBG1Height / 2, pz: 200 * -Math.random() },
                c = xyViaPosz(c), b.position.set(c.px, c.py, c.pz), b.scale.set(Math.random(), Math.random() / 3 + .3, Math.random()), b.rotation.set(360 * Math.random(), 360 * Math.random(), 360 * Math.random()), scene.add(b), this.fragments.push(b)
        },
        this.update = function() {
            var a, b;
            for (a = 0; a < this.fragments.length; a++) b = this.fragments[a], b.rotation.x += .01, b.rotation.y += .01, b.rotation.z += .01
        }, this.init()
}

function bulletIn() {
    var a = { x: -100 };
    new TWEEN.Tween(a).to({ x: 0 }, 1e3).easing(TWEEN.Easing.Quartic.Out).onUpdate(function() { bullet.position.x = cameraPerspective.position.x + a.x, 0 == a.x && (lockInteract = !1) }).start()
}

function animate(a) {
    var b, c, d;
    requestAnimationFrame(animate), TWEEN.update(a),
        shareBulletMgr.update(), "number" == typeof speed && (Math.abs(cameraPerspective.position.x - maxCameraX) < 10 && 0 >= speed && !lockInteract && ($("#final_wrapper").fadeIn(1e3), speed = 0, lockInteract = !0, sceneMgr.fadeFinal(!0)), lockInteract && speed > 0 && ($("#final_wrapper").fadeOut(150), lockInteract = !1, sceneMgr.fadeFinal(!1)), lockInteract || (cameraPerspective.position.x = cameraPerspective.position.x - speed), cameraPerspective.position.x = cameraPerspective.position.x < minCameraX ? minCameraX : cameraPerspective.position.x, cameraPerspective.position.x = cameraPerspective.position.x > maxCameraX ? maxCameraX : cameraPerspective.position.x, cameraPerspective.position.x += Math.sin(a / 1e3) / 25, cameraPerspective.position.y += Math.cos(a / 1e3) / 25), speed += acceleration, speed *= damp, bullet && !lockInteract && (bullet.position.x = cameraPerspective.position.x), bullet && (b = 200, c = cameraPerspective.position.x - bulletFadeX, c = Math.min(Math.max(0, c), b), bullet.material.opacity = 1 - c / b),
        stats.begin(),
        render(),
        stats.end(),
        fragmentMgr && fragmentMgr.update(),
        sceneMgr && sceneMgr.update(cameraPerspective.position.x), hasLoadResAll || (d = Math.round(100 * (hasLoadRes / resNum)), $(".progress_done").css("width", d + "%"), 100 == d && (hasLoadResAll = !0, $(".start_page").fadeOut(500), onOrientationChange()))
}

function render() {
    4e-4 * Date.now(),
        bullet && (bullet.rotation.x = -cameraPerspective.position.x / 100), renderer.setViewport(0, 0, width, height),
        composerScene.render(delta),
        shareBulletMgr.render()
}

function toScreenPosition(a, b) {
    var c = window.innerWidth / 2,
        d = window.innerHeight / 2,
        e = a.position.clone();
    return e.project(b), e.x = e.x * c + c, e.y = -(e.y * d) + d, { x: e.x, y: e.y }
}

function initOrient() {
    var a = "onorientationchange" in window,
        b = a ? "orientationchange" : "resize";
    window.addEventListener(b, onOrientationChange, !1)
}

function onOrientationChange() { 180 == window.orientation || 0 == window.orientation ? (setTimeout("showHideCanvas(false, 100)", 100), hasPlayVideo || video.get(0).isPaused || video.get(0).pause()) : (90 == window.orientation || -90 == window.orientation) && (setTimeout("showHideCanvas(true, 500)", 700), hasPlayVideo || video.get(0).play()) }

function showHideCanvas(a, b) { a ? $(".rotate_page").fadeOut(b) : $(".rotate_page").fadeIn(b), onWindowResize() }

function xyViaPosz(a) {
    var b = 0,
        c = 0,
        d = Math.abs(cameraPerspective.position.z - quadBG1.position.z),
        e = Math.abs(cameraPerspective.position.z - a.pz),
        f = e / d,
        g = quadBG1.scale.y / quadBG1Height;
    return c = f * a.py * g, b = a.px * g, { px: b, py: c, pz: a.pz }
}

function(a) { "function" == typeof define && define.amd ? define([], function() { return TWEEN }) : "undefined" != typeof module && "object" == typeof exports ? module.exports = TWEEN : void 0 !== a && (a.TWEEN = TWEEN) }(this),
params = "?" + btoa(window.location.origin),
    Detector.webgl || Detector.addGetWebGLMessage(),
    hasPlayVideo = !1,
    width = window.innerWidth || 2,
    height = window.innerHeight || 2,
    halfWidth = width / 2,
    halfHeight = height / 2,
    delta = .01,
    quadBG1Width = 4215,
    quadBG1Height = 640,
    quadBG2Width = 4216,
    quadBG2Height = 640,
    halfDepth = 200,
    bulletZ = -100,
    resNum = 41,
    hasLoadRes = 0,
    hasLoadResAll = !1,
    bgm = "1506063843781VFAWCLE2G",
    effect = "1506063844064P684TKENS",
    init(),
    animate(),
    lockInteract = !0,
    isInteract = !1,
    speed = 0,
    acceleration = 0,
    damp = .97,
    lastTouchX = 0,
    lastTouchTime = 0;