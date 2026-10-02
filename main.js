import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

camera.position.set(0, 0, 300);


// Adicionando a planeta Terra
const terra = new THREE.SphereGeometry(4);
const textureLoader = new THREE.TextureLoader();
const terraTexture = textureLoader.load("imagens2/terra.png");
const terraMaterial = new THREE.MeshBasicMaterial({ map: terraTexture });
const sphere1 = new THREE.Mesh(terra, terraMaterial);
sphere1.position.x = 0;
scene.add(sphere1);

// Adicionando o planeta Sol

const sol = new THREE.SphereGeometry(10);
const solTexture = textureLoader.load("imagens2/sol.png");
const solMaterial = new THREE.MeshBasicMaterial({ map: solTexture });
const solMesh = new THREE.Mesh(sol, solMaterial);
solMesh.position.x = -50;
scene.add(solMesh);

// Adicionando o planeta Mercúrio
const mercurio = new THREE.SphereGeometry(2);
const mercurioTexture = textureLoader.load("imagens2/mercurio.png");
const mercurioMaterial = new THREE.MeshBasicMaterial({ map: mercurioTexture });
const mercurioMesh = new THREE.Mesh(mercurio, mercurioMaterial);
mercurioMesh.position.x = -20;
scene.add(mercurioMesh);

// Adicionando o planeta Vênus
const venus = new THREE.SphereGeometry(3);
const venusTexture = textureLoader.load("imagens2/venus.png");
const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
const venusMesh = new THREE.Mesh(venus, venusMaterial);
venusMesh.position.x = -10;
scene.add(venusMesh);

// Adicionando o planeta Marte
const marte = new THREE.SphereGeometry(2);
const marteTexture = textureLoader.load("imagens2/marte.png");
const marteMaterial = new THREE.MeshBasicMaterial({ map: marteTexture });
const marteMesh = new THREE.Mesh(marte, marteMaterial);
marteMesh.position.x = 10;
scene.add(marteMesh);

// Adicionando o planeta Júpiter
const jupiter = new THREE.SphereGeometry(6);
const jupiterTexture = textureLoader.load("imagens2/jupiter.png");
const jupiterMaterial = new THREE.MeshBasicMaterial({ map: jupiterTexture });
const jupiterMesh = new THREE.Mesh(jupiter, jupiterMaterial);
jupiterMesh.position.x = 25;
scene.add(jupiterMesh);

// Adicionando o planeta Saturno
const saturno = new THREE.SphereGeometry(5);
const saturnoAnel = new THREE.TorusGeometry(10, 2, 2, 100);
const saturnoTexture = textureLoader.load("imagens2/saturno.png");
const saturnoMaterial = new THREE.MeshBasicMaterial({ map: saturnoTexture });
const saturnoMesh = new THREE.Mesh(saturno, saturnoMaterial);
scene.add(saturnoMesh);

// Adicionando o anel de Saturno
const saturnoAnelTexture = textureLoader.load("imagens2/saturnoAnel.png");
const saturnoAnelMaterial = new THREE.MeshBasicMaterial({ map: saturnoAnelTexture });
const saturnoAnelMesh = new THREE.Mesh(saturnoAnel, saturnoAnelMaterial);
saturnoMesh.position.x = 60;
saturnoAnelMesh.position.x = 60;
scene.add(saturnoAnelMesh);

// Adicionando o planeta Urano
const urano = new THREE.SphereGeometry(4);
const uranoTexture = textureLoader.load("imagens2/urano.png");
const uranoMaterial = new THREE.MeshBasicMaterial({ map: uranoTexture });
const uranoMesh = new THREE.Mesh(urano, uranoMaterial);
uranoMesh.position.x = 90;
scene.add(uranoMesh);

// Adicionando o planeta Netuno
const netuno = new THREE.SphereGeometry(4);
const netunoTexture = textureLoader.load("imagens2/netuno.png");
const netunoMaterial = new THREE.MeshBasicMaterial({ map: netunoTexture });
const netunoMesh = new THREE.Mesh(netuno, netunoMaterial);
netunoMesh.position.x = 110;
scene.add(netunoMesh);


// Adicionando os planetas como filhos da esfera1




const angulo = {
  terra: 0,
  marte: 0,
  venus: 0,
  jupiter: 0,
  saturno: 0,
  urano: 0,
  netuno: 0,
  mercurio: 0,
  saturnoAnel: 0,
}

const raios = {
  mercurio: 35,
  venus: 50,
  terra: 70,
  marte: 100,
  jupiter: 150,
  saturno: 200,
  urano: 250,
  netuno: 300,
  saturnoAnel: 200,
};

const velocidades = {
  terra: 0.01,
  marte: 0.008,
  venus: 0.015,
  jupiter: 0.005,
  saturno: 0.003,
  urano: 0.002,
  netuno: 0.0015,
  mercurio: 0.02,
};


const teclas = {}
window.addEventListener("keydown", (e) => {
  teclas[e.code] = true;
});

window.addEventListener("keyup", (e) => {
  teclas[e.code] = false;
});


function animate() {

  const velocidade = 1;
  const velocidadeRotacao = 0.02;

  // Movimentação da câmera com as teclas de seta

  if (teclas["ArrowUp"]) {
    camera.rotation.x += velocidadeRotacao;
  }
  
  if (teclas["ArrowDown"]) {
    camera.rotation.x -= velocidadeRotacao;
  }

  if (teclas["ArrowLeft"]) {
    camera.rotation.y += velocidadeRotacao;
  }

  if (teclas["ArrowRight"]) {
    camera.rotation.y -= velocidadeRotacao;
  }

  // Movimentação da câmera com as teclas W, A, S, D

  if (teclas["KeyW"]) {
    camera.translateZ(-velocidade);
  }
  if (teclas["KeyS"]) {
    camera.translateZ(velocidade);
  }
  if (teclas["KeyA"]) {
    camera.translateX(-velocidade);
  }
  if (teclas["KeyD"]) {
    camera.translateX(velocidade);
  }

  


  // Atualização dos ângulos de cada planeta para a movimentação em torno do sol
  angulo.terra += velocidades.terra;
  angulo.marte += velocidades.marte;
  angulo.venus += velocidades.venus;
  angulo.mercurio += velocidades.mercurio;
  angulo.jupiter += velocidades.jupiter;
  angulo.saturno += velocidades.saturno;
  angulo.urano += velocidades.urano;
  angulo.netuno += velocidades.netuno;
  angulo.saturnoAnel += velocidades.saturnoAnel;
 

  // Movimentação dos planetas em torno do sol  
  
  sphere1.position.x = solMesh.position.x + Math.cos(angulo.terra) * raios.terra;
  sphere1.position.z = solMesh.position.z + Math.sin(angulo.terra) * raios.terra;

  marteMesh.position.x = solMesh.position.x + Math.cos(angulo.marte) * raios.marte;
  marteMesh.position.z = solMesh.position.z + Math.sin(angulo.marte) * raios.marte;

  venusMesh.position.x = solMesh.position.x + Math.cos(angulo.venus) * raios.venus;
  venusMesh.position.z = solMesh.position.z + Math.sin(angulo.venus) * raios.venus;

  mercurioMesh.position.x = solMesh.position.x + Math.cos(angulo.mercurio) * raios.mercurio;
  mercurioMesh.position.z = solMesh.position.z + Math.sin(angulo.mercurio) * raios.mercurio;

  jupiterMesh.position.x = solMesh.position.x + Math.cos(angulo.jupiter) * raios.jupiter;
  jupiterMesh.position.z = solMesh.position.z + Math.sin(angulo.jupiter) * raios.jupiter;

  saturnoMesh.position.x = solMesh.position.x + Math.cos(angulo.saturno) * raios.saturno; 
  saturnoMesh.position.z = solMesh.position.z + Math.sin(angulo.saturno) * raios.saturno;

  saturnoAnelMesh.position.x = solMesh.position.x + Math.cos(angulo.saturno) * raios.saturno;
  saturnoAnelMesh.position.z = solMesh.position.z + Math.sin(angulo.saturno) * raios.saturno;

  uranoMesh.position.x = solMesh.position.x + Math.cos(angulo.urano) * raios.urano;
  uranoMesh.position.z = solMesh.position.z + Math.sin(angulo.urano) * raios.urano;

  netunoMesh.position.x = solMesh.position.x + Math.cos(angulo.netuno) * raios.netuno;
  netunoMesh.position.z = solMesh.position.z + Math.sin(angulo.netuno) * raios.netuno;

  // Rotação dos planetas em torno do sol

  solMesh.rotation.y += 0.01;
  sphere1.rotation.y += 0.01;
  marteMesh.rotation.y += 0.01;
  jupiterMesh.rotation.y += 0.01;
  saturnoMesh.rotation.y += 0.01;
  saturnoAnelMesh.rotation.z += 0.01;
  saturnoAnelMesh.rotation.x += 0.005;
  mercurioMesh.rotation.y += 0.01;
  venusMesh.rotation.y += 0.01;
  uranoMesh.rotation.y += 0.01;
  netunoMesh.rotation.y += 0.01;
  renderer.render( scene, camera );
}