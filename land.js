import * as THREE from 'three';

function Land(){
    const geo = new THREE.BoxGeometry(100,0.1,30);
    const ground = new THREE.TextureLoader().load('./texture/land.jpg')
    const Mat = new THREE.MeshStandardMaterial({
        map:ground
    });
    const mesh = new THREE.Mesh(geo,Mat);
    mesh.position.set(0,-4,0);
    return mesh 
}

export default Land;