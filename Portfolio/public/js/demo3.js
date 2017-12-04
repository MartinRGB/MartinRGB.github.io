
var canvas = document.querySelector('#scene');
var width = canvas.offsetWidth,
    height = canvas.offsetHeight;

var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.setSize(width, height);
renderer.setClearColor(0x000000,0);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000);
camera.position.set(0, 0, 220);


// Glow & Shadow
var light0 = new THREE.HemisphereLight(0x275EA8, 0xDF36A6, 0.4);
light0.color.setHSL( 0.6, 1, 0.6 );
light0.groundColor.setHSL( 0.095, 1, 0.75 );
light0.position.set( -50, -50, 0 );
scene.add(light0);

// Color Trending
var light1 = new THREE.DirectionalLight(0x68C9DA, 0.5);
light1.position.set(200, 300, -200); 
scene.add(light1);
var light2 = light1.clone();
light2.position.set(-200, 300, 200); 
scene.add(light2);



var geometry = new THREE.IcosahedronGeometry(120, 4);
for(var i = 0; i < geometry.vertices.length; i++) {
    var vector = geometry.vertices[i];
    vector._o = vector.clone();  
}
var material = new THREE.MeshPhongMaterial({
    emissive: 0xDF36A6, 
    emissiveIntensity: 0.4,
    shininess: 0
});
var shape = new THREE.Mesh(geometry, material);
scene.add(shape);

function updateVertices (a) {
    for(var i = 0; i < geometry.vertices.length; i++) {
        var vector = geometry.vertices[i];
        vector.copy(vector._o);
        var perlin = noise.simplex3(
            (vector.x * 0.006) + (a * 0.0002),
            (vector.y * 0.006) + (a * 0.0003),
            (vector.z * 0.006)
        );
        var ratio = ((perlin*0.2 * (mouse.y+0.1)) + 0.8);
        vector.multiplyScalar(ratio);
    }
    geometry.verticesNeedUpdate = true;
    camera.position.set(Math.sin(a/2000)*perlin*20, Math.sin(a/2000)*perlin*10, (220 + Math.cos(a/2000)*perlin*20));
    light0.position.set( -50, -50, (Math.sin(a/1000) + 1)*500 );
    light1.position.set(Math.sin(a/1000)*(-200), Math.cos(a/1000)*400, Math.sin(a/1000)*400); 
    light1.position.set( Math.cos(a/1000)*(300), Math.cos(a/1000)*(-300), Math.sin(a/1000)*(-200)); 

}

function render(a) {
    requestAnimationFrame(render);
    updateVertices(a);
    renderer.render(scene, camera);
}

function onResize() {
    canvas.style.width = '';
    canvas.style.height = '';
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();  
    renderer.setSize(width, height);
}

// Mouse Interaction
var mouse = new THREE.Vector2(0.8, 0.5);
function onMouseMove(e) {
    TweenMax.to(mouse, 0.8, {
        y: (e.clientY / height),
        x : (e.clientX / width),
        ease: Power1.easeOut
    });
}

// Final Main Loop
requestAnimationFrame(render);
window.addEventListener("mousemove", onMouseMove);
var resizeTm;
window.addEventListener("resize", function(){
    resizeTm = clearTimeout(resizeTm);
    resizeTm = setTimeout(onResize, 200);
});