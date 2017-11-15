/**
 * Created by sanchez 
 */
'use strict';
// import CSS
// import animate_css from 'animate.css/animate.min.css';
import css from '../css/css.css';
// import scss from '../css/sass.scss';



// import Js Plugins/Entities

//ES6 Module
// import Bar1 from './entities/Bar1';
// import Howler from 'howler';
//CommonJS
// var Bar2=require('./entities/Bar2');

// if (!Detector.webgl) Detector.addGetWebGLMessage();
var container, stats;
var camera, scene, renderer;
var shaderMaterial;
var manager;
var burningTexture1, burningTexture2;
var params = {
    burnTexture: 'burningTexture1',
    burnProgress: 0,
    burnEffect: { value: 1 },
    isDepth: { value: 0 },
    map: { value: null }
};
var burnTextures;


function initLoad() {
    manager = new THREE.LoadingManager();
    manager.onStart = function(url, itemsLoaded, itemsTotal) {
        console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
    };

    manager.onLoad = function() {
        console.log('Loading complete!');
        loadResCallBack();
    };


    manager.onProgress = function(url, itemsLoaded, itemsTotal) {

        console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');

    };

    manager.onError = function(url) {
        console.log('There was an error loading ' + url);
    };
}

function loadResCallBack() {
    console.log('init');

    params.burnTexture = burningTexture1;

    var geo = new THREE.PlaneBufferGeometry(40, 40);
    shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
            map: params.map,
            burnTex: {
                value: params.burnTexture
            },
            burnEffect: params.burnEffect,
            progress: {
                value: params.burnProgress
            },
            isDepth: params.isDepth,
            cameraNear: { value: 100 },
            cameraFar: { value: 400 }
        },
        vertexShader: document.getElementById("burnVertexShader").textContent,
        fragmentShader: document.getElementById("burnFragmentShader").textContent
    });
    shaderMaterial.transparent = !0;
    var paper = new THREE.Mesh(geo, shaderMaterial);
    paper.position.set(0, 0, 0);
    scene.add(paper);
}

function initThree() {

    // CAMERAS

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 80;

    // SCENE

    scene = new THREE.Scene();

    // uniform float progress;
    // uniform float burnEffect;

    // uniform float isDepth;
    // uniform float cameraNear;
    // uniform float cameraFar;

    // Textures

    var textureLoader = new THREE.TextureLoader(manager);
    params.map.value = textureLoader.load('./assets/img/cat.png');
    burningTexture1 = textureLoader.load('./assets/img/burningtexture1.png');
    burningTexture2 = textureLoader.load('./assets/img/burningtexture2.png');





    //renderer
    var container = document.getElementById('container');
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

}

function initEvent() {
    document.addEventListener('touchstart', function(e) {}, false);
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);
    window.addEventListener('resize', onWindowResize, false);
}

function initGui() {
    var gui = new dat.GUI();
    var folderShaderMaterial = gui.addFolder('ShaderMaterial');
    var burnTextures = {
        burningTexture1: burningTexture1,
        burningTexture2: burningTexture2
    };
    folderShaderMaterial.add(params, 'burnTexture', Object.keys(burnTextures)).onChange(function(value) {
        shaderMaterial.uniforms['burnTex'].value = burnTextures[value];
    });
    folderShaderMaterial.add(params, 'burnProgress', 0, 1).step(0.01).onChange(function(value) {
        shaderMaterial.uniforms['progress'].value  = value;

    });
    gui.open();
}

function init() {
    //loadingManager
    initLoad();

    //init Three
    initThree();
    //event
    initEvent();
    //GUI
    initGui();

    animate();

}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    renderer.render(scene, camera);
}


window.onload = function() {
    init();

};





function showStats() {
    var stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    var fs = document.createElement('div');
    fs.style.position = 'absolute';
    fs.style.left = 0;
    fs.style.top = 0;
    fs.style.zIndex = 999;
    fs.appendChild(stats.domElement);
    document.body.appendChild(fs);

    function animate() {
        stats.begin();
        // monitored code goes here
        stats.end();
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}
showStats();