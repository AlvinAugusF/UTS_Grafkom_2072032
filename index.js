import * as THREE from 'three';
import Land from './land.js';
import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import Alphabet from './alphabet.js';
import KeyboardInput from './keyboard.js';
import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'
// import {ArcballControls} from './node_modules/three/examples/jsm/controls/ArcballControls.js';
// import {DragControls} from './node_modules/three/examples/jsm/controls/DragControls.js';

const scene = new THREE.Scene();
const canva = document.querySelector("#mycanvas");
const cam = new THREE.PerspectiveCamera(45,
    window.innerWidth/window.innerHeight,1,100);

const backgroundTexture = new THREE.TextureLoader().load('./texture/UI3.jpg');
scene.background = backgroundTexture

const renderer = new THREE.WebGLRenderer({canvas:canva});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;

// const controls = new ArcballControls( cam, renderer.domElement, scene );

// controls.addEventListener( 'change', function () {

// 	renderer.render( scene, camera );

// } );
cam.position.set(0,0,23);
let control = new OrbitControls(cam, renderer.domElement);
document.body.appendChild(renderer.domElement);

// const controls = new DragControls( canva, cam, renderer.domElement );

// // add event listener to highlight dragged objects

// controls.addEventListener( 'dragstart', function ( event ) {

// 	event.object.material.emissive.set( 0xaaaaaa );

// } );

// controls.addEventListener( 'dragend', function ( event ) {

// 	event.object.material.emissive.set( 0x000000 );

// } );

const loader = new GLTFLoader().load('model/fletchinder.glb',(result) => {
  console.log(result);
  let model = result.scene.children[0];
  scene.add(result.scene.children[0]);

  model.position.set(-12.7,4,-3);
  model.scale.set(0.06,0.06,0.06);
});

const keyboard = new KeyboardInput();
const alphabet = new Alphabet();
alphabet.receiveShadow = true;
alphabet.position.set(-13,0,0);
scene.add(alphabet);

const land = Land();
land.receiveShadow = true;
// scene.add(land);

const light01 = new THREE.SpotLight();
light01.castShadow = true;
light01.position.set(6,0,1);
scene.add(light01);

const light02 = new THREE.PointLight();
light02.position.set(-15,8,3);
scene.add(light02);

const light03 = new THREE.PointLight();
light03.position.set(-7,0,1);
scene.add(light03);

// const light04 = new THREE.PointLight();
// light04.position.set(0,9,3);
// scene.add(light04);

// scene.add (mesh_saya);


const draw = ()=>{   
    control.update();
    alphabet.rotation.y += 0.01;
    // mesh_saya.rotation.x += 0.01;
    if(keyboard.key['a']){
      cam.position.x -= 0.01;
  }
  if(keyboard.key['d']){
      cam.position.x += 0.01;
  }
  if(keyboard.key['x']){
      cam.position.y -= 0.01;
  }
  if(keyboard.key['z']){
      cam.position.y += 0.01;
  }
  if(keyboard.key['w']){
      cam.position.z -= 0.01;
  }
  if(keyboard.key['s']){
      cam.position.z += 0.01;
  }
    renderer.render(scene,cam); //function gambar ulang
    requestAnimationFrame(draw); // mengulang scene secara terus menerus
}
draw();

var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

  var textWrapper = document.querySelector('.ml16');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml16 .letter',
      translateY: [-200,0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 30 * i
    }).add({
      targets: '.ml16',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
