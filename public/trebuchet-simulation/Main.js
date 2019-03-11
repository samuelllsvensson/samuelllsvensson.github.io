/**
 * Main 
 */

// Global variables
var startPressed = false,
    resetPressed = false,
    rings = [], 
    oneRing,
    twoRing,
    index = 0;

// GUI --------------------------------------------------------------------------------------------
var guiControls = new function(){
    this.projectileMass = 7.5;
    this.counterMass = 170;
    this.throwingArmLength = 5.0;
    this.airResistance = 0.1;
    this.followProjectile = false;
    this.start = function() {startPressed = true; resetPressed = false;}
    this.reset = function() {resetPressed = true; startPressed = false; i = 0; index++;}   
}

var datGUI = new dat.GUI({autoplace: false, width: 350});
datGUI.domElement.id = "gui";
datGUI.add(guiControls, "projectileMass", 4, 10).name("Projectile mass (kg)");
datGUI.add(guiControls, "counterMass", 130, 200).name("Counter-weight mass (kg)");  
datGUI.add(guiControls, "throwingArmLength", 4, 6).name("Throwing arm length (m)");
datGUI.add(guiControls,"airResistance",0.09,0.15).name("Air resistance");
datGUI.add(guiControls, "followProjectile").name("Follow projectile?");
datGUI.add(guiControls,"start").name("Launch");
datGUI.add(guiControls,"reset").name("Reset");

// Stats
var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

// Scene -----------------------------------------------------------------------------------------
var scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xf2f2f2, 1, 700);


var renderer = new THREE.WebGLRenderer({ antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor (0xb3e0ff,1);
renderer.gammaOutput = true;
renderer.gammaInput = true;
renderer.gammaFactor = 2;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

// Create Camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 2, 1000 );
camera.position.set(25,20,25);

// Mouse Control
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI/2.6;
controls.enableDamping = true;
controls.dampingFactor = 0.5;
controls.screenSpacePanning = false;
controls.maxDistance = 100;
controls.minDistance = 10;

// DEBUG ONLY (World Axis)
//var axesHelper = new THREE.AxesHelper( 20);
//axesHelper.position.set(0,0,0);
//scene.add(axesHelper);

// Textures --------------------------------------------------------------------------------------------
var trebuchetTexture = new THREE.TextureLoader().load('textures/Trebuchet_D.png');
var stone = new THREE.TextureLoader().load('textures/stone.jpg');
trebuchetTexture.flipY=false
canyon.flipY=false

// Sounds --------------------------------------------------------------------------------------------

// create an AudioListener and add it to the camera
var launchListener = new THREE.AudioListener();
camera.add( launchListener );

// create a global audio source
var launchSound = new THREE.Audio( launchListener );

// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'sounds/trebuchetsound.mp3', function( buffer ) {
    launchSound.setBuffer( buffer );
    launchSound.setLoop( false );
    launchSound.setVolume( 0.5 );
});
// create an AudioListener and add it to the camera
var impactListener = new THREE.AudioListener();
camera.add( impactListener );

// create a global audio source
var impactSound = new THREE.Audio( impactListener );

// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'sounds/impact.mp3', function( buffer ) {
    impactSound.setBuffer( buffer );
    impactSound.setLoop( false );
    impactSound.setVolume( 0.5 );
});

// create an AudioListener and add it to the camera
var ambientListener = new THREE.AudioListener();
camera.add( ambientListener );

// create a global audio source
var ambientSound = new THREE.Audio( ambientListener );

// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'sounds/ambient.mp3', function( buffer ) {
    ambientSound.setBuffer( buffer );
    ambientSound.setLoop( true );
    ambientSound.setVolume( 0.1 );
    ambientSound.play();
    
});
camera.lookAt(projectile.position);
// Functions --------------------------------------------------------------------------------------------

// Load Models
loadModels();
// Render
render();

counter = 0; 
//Render loop
function render(){
    if(guiControls.followProjectile == false){
        camera.lookAt(projectile.position);
    }
    else if(guiControls.followProjectile == true && startPressed == true){
        projectile.add(camera);
        if(counter == 0){
            launchSound.play(); 
            counter = 1;
        }
    }

    // GUI Updates
    if(startPressed == false){
        updateGUI();
    }

    if(resetPressed == true){

        counter = 0;
        projectile.position.set(0,0,0);
        group.rotation.z = Math.PI/7;
        counterWeight.position.set(0,0,0);
        counterWeight.rotation.z = 0;
        scene.remove(secondRing);
        projectile.remove(camera);
        camera.lookAt(projectile.position);

        updateGUI();
        controls.update();

    }

    stats.begin();    

    if(startPressed == true){
        camera.lookAt(projectile.position);
        if(counter == 0){
            launchSound.play(); 
            counter = 1;
        }
        animate();
    }

    stats.end();
    requestAnimationFrame(render);
    
 	renderer.render(scene, camera);

}

