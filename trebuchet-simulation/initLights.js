/**
 * Initializing lights in scene
 */
var d = window.innerWidth;
function initLights(){

	hemiLight = new THREE.HemisphereLight( 0x87cefa, 0x87cefa, 0.6 );
	hemiLight.color.setHSL( 0.6, 1, 0.6 );
	hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
	hemiLight.position.set( 0, 120, 0 );
	scene.add( hemiLight );


    dirLight = new THREE.DirectionalLight( 0x87cefa, 1 );
	dirLight.color.setHSL( 0.1, 1, 0.95 );
	dirLight.position.set( - 1, 1.25, 0.2 );
	dirLight.position.multiplyScalar( 10 );
	scene.add( dirLight );

	dirLight.castShadow = true;
	dirLight.shadow.mapSize.width = 2048;
	dirLight.shadow.mapSize.height = 2048;
	dirLight.shadow.camera.left = - d;
	dirLight.shadow.camera.right = d;
	dirLight.shadow.camera.top = d;
	dirLight.shadow.camera.bottom = - d;
	dirLight.shadow.camera.far = 1000;
	dirLight.shadow.bias =  0.001;

	//dirLightHeper = new THREE.DirectionalLightHelper( dirLight, 10 );
	//scene.add( dirLightHeper );

	
    var light = new THREE.PointLight(0xffffff, 1, 70);
    light.position.set(-10,30,15);
    scene.add(light);

    light.castShadow = true;  
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.shadow.camera.left = -d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = -d;
    light.shadow.camera.far = 1000;
}