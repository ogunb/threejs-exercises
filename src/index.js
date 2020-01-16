import * as THREE from 'three';
import cube, { rotateCube, scaleCube } from './cube';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

scene.add(cube);
camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    rotateCube();
    scaleCube();
	renderer.render( scene, camera );
}
animate();

document.body.appendChild(renderer.domElement);
