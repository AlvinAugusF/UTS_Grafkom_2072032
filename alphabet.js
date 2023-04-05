import * as THREE from 'three';

class Alphabet{
    constructor(){ 

    const helperTexture = new THREE.TextureLoader().load('./texture/UV3.jpg')
    const bumpTexture = new THREE.TextureLoader().load('./texture/UP3.jpg')
    const normalTexture = new THREE.TextureLoader().load('./texture/UX3.jpg')
    const geo_saya = new THREE.BufferGeometry ();
    const mat_saya = new THREE.MeshPhongMaterial ({map:helperTexture,normalMap:normalTexture,bumpMap:bumpTexture});

    let vertices = new Float32Array ([
        -1, -4, 1, //0
        -3, -4, 1, //1
        -1, 4, 1, //2
        1, 4, 1,//3
        
        1, -4, 1, //4
        3, -4, 1, //5
        
        0 ,0 ,1,  //6
        
        -1, -4, -1, //7
        -3, -4, -1, //8
        -1, 4, -1, //9
        1, 4, -1,//10
        
        1, -4, -1, //11
        3, -4, -1, //12
        
        0 ,0 ,-1,  //13
        
        ]);
        let uvs = new Float32Array ([ 
            0.4,0,
            0,0,
            0.25,1,
            0.75,1,
            0.6,0,
            1,0,
            0.5,0.5,
        
            0.4,0,
            0,0,
            0.25,1,
            0.75,1,
            0.6,0,
            1,0,
            0.5,0.5
        
        ]);

        geo_saya.setIndex([

            6,1,0,
            6,2,1,
            6,3,2,
            6,5,3,
            6,4,5,
            
            8,13,7,
            8,9,13,
            9,10,13,
            10,12,13,
            12,11,13,
            
            1,2,8,
            2,9,8,
            5,12,3,
            3,12,10,
            
            2,10,9,
            2,3,10,
            
            1,8,7,
            1,7,0,
            4,11,12,
            4,12,5,
            
            0,7,13,
            0,13,6,
            4,13,11,
            4,6,13
            
            ]);
            geo_saya.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
            geo_saya.setAttribute('uv', new THREE.BufferAttribute(uvs, 2)) ;
            geo_saya.computeVertexNormals();
            let mesh_saya = new THREE.Mesh(geo_saya, mat_saya);
            return mesh_saya
    }
}

export default Alphabet;