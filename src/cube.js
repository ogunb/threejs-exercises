import * as THREE from 'three';

let geometry = new THREE.BoxGeometry(1, 1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: 0xf54281 });
let cube = new THREE.Mesh(geometry, material);

export default cube;

export const scaleCube = (function scaleCube() {
    let shouldScaleDown = false;

    return () => {
        if (cube.scale.z > 2) { shouldScaleDown = true }
        else if (cube.scale.z <= 1 ) { shouldScaleDown = false }

        const scaleSize = shouldScaleDown ? -0.01 : 0.01;
        cube.scale.x += scaleSize;
        cube.scale.y += scaleSize;
        cube.scale.z += scaleSize;
    }
})();

export function rotateCube() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
