//***** IMPLEMENTED USING
//                Three.js 105 Library
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(-350, 500, -350);
camera.lookAt(0, 250, 0);

const geometry = new THREE.Geometry();
const vertices = [
    new THREE.Vector3(27.5, 0, 27.5),
    new THREE.Vector3(27.5, 0, -27.5),
    new THREE.Vector3(-27.5, 0, -27.5),
    new THREE.Vector3(-27.5, 0, 27.5),
    new THREE.Vector3(17, 500, 17),
    new THREE.Vector3(17, 500, -17),
    new THREE.Vector3(-17, 500, -17),
    new THREE.Vector3(-17, 500, 17),
    new THREE.Vector3(0, 555, 0),
];

geometry.vertices = vertices;
9
const materials = [
    new THREE.MeshBasicMaterial({
        color: 0xff0000,
        side: THREE.DoubleSide
    }), // Red
    new THREE.MeshBasicMaterial({
        color: 0x715AFF,
        side: THREE.DoubleSide
    }), // medium slate blue
    new THREE.MeshBasicMaterial({
        color: 0x5887FF,
        side: THREE.DoubleSide
    }), // cornflower blue
    new THREE.MeshBasicMaterial({
        color: 0xA682FF,
        side: THREE.DoubleSide
    }), // tropical indego
    new THREE.MeshBasicMaterial({
        color: 0x55C1FF,
        side: THREE.DoubleSide
    }), // maya blue
    new THREE.MeshBasicMaterial({
        color: 0x102E4A,
        side: THREE.DoubleSide
    }) // prussian blue
];
//bottom
//geometry.faces.push(new THREE.Face3(0, 1, 2));
//geometry.faces.push(new THREE.Face3(2, 3, 0));
//right
geometry.faces.push(new THREE.Face3(1, 0, 4));
geometry.faces.push(new THREE.Face3(4, 5, 1));
//front
geometry.faces.push(new THREE.Face3(2, 1, 5));
geometry.faces.push(new THREE.Face3(5, 6, 2));
//left
geometry.faces.push(new THREE.Face3(2, 3, 7));
geometry.faces.push(new THREE.Face3(7, 6, 2));
//back
geometry.faces.push(new THREE.Face3(3, 0, 4));
geometry.faces.push(new THREE.Face3(4, 7, 3));
//top
geometry.faces.push(new THREE.Face3(4, 8, 5));
geometry.faces.push(new THREE.Face3(5, 8, 6));
geometry.faces.push(new THREE.Face3(6, 8, 7));
geometry.faces.push(new THREE.Face3(7, 8, 4));

// Assign materials to faces
//geometry.faces[0].materialIndex = 0;
//geometry.faces[1].materialIndex = 0;
geometry.faces[0].materialIndex = 1;
geometry.faces[1].materialIndex = 1;
geometry.faces[2].materialIndex = 2;
geometry.faces[3].materialIndex = 2;
geometry.faces[4].materialIndex = 3;
geometry.faces[5].materialIndex = 3;
geometry.faces[6].materialIndex = 4;
geometry.faces[7].materialIndex = 4;
geometry.faces[8].materialIndex = 5;
geometry.faces[9].materialIndex = 5;
geometry.faces[10].materialIndex = 5;
geometry.faces[11].materialIndex = 5;


// Create a mesh using the geometry and materials
const monument = new THREE.Mesh(geometry, materials);

scene.add(monument);
renderer.render(scene, camera);

const animate = () => {
    requestAnimationFrame(animate);
    monument.rotation.y -= 0.01;


    renderer.render(scene, camera);
};
var controls = new OrbitControls(camera, renderer.domElement);
camera.lookAt(0, 250, 0);
animate();
