import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create constrols with mouse
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();


const geometryTorusKnot = new THREE.TorusKnotGeometry( 10, 3, 100, 16  ); 
// const materialTorusKnot = new THREE.MeshNormalMaterial(); 
const materialTorusKnot = new THREE.WireframeGeometry( geometryTorusKnot ); 
// const torusKnot = new THREE.Mesh( geometryTorusKnot, materialTorusKnot ); 
// scene.add( torusKnot );
const line = new THREE.LineSegments( materialTorusKnot );
line.material.depthTest = false;
// line.material.opacity = 0.25;
line.material.transparent = true;
scene.add( line );

// // Create cube geometry
// const geometry = new THREE.BoxGeometry(2, 2, 2 );
// // Create material
// const material = new THREE.MeshNormalMaterial();
// // Create cube with geometry and material
// const cube = new THREE.Mesh( geometry, material );
// // Add cube at scene
// scene.add( cube );

camera.position.z = 30;

function animate() {
	requestAnimationFrame( animate );

	line.rotation.x += 0.001;
	line.rotation.y += 0.001;
	controls.update();
	renderer.render( scene, camera );
}

animate();