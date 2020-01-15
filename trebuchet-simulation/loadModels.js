/**
 * Loading .glb-files, mapping textures, creating geometries 
*/
var bodyModel = new THREE.Object3D();
var throwingArm = new THREE.Object3D();
var counterWeight = new THREE.Object3D();
var mapModel = new THREE.Object3D();
var projectile = new THREE.Object3D();
	

function loadModels(){

	var loader = new THREE.GLTFLoader();

	// Map
	scene.add(mapModel);
	loader.load( 'models/map.glb', function ( gltf ) {
	    
	    mapModel.scale.x = 30;
	    mapModel.scale.y = 30;
	    mapModel.scale.z = 30;
	    mapModel.position.x = 118;
	    mapModel.position.z = 3;
	    mapModel.position.y = 7.1;
	    mapModel.rotation.y = Math.PI;

	   	gltf.scene.traverse ((object) => {
		    if (object.isMesh) {
		        object.material.roughness = 1.0;
		        object.receiveShadow = true;
		        object.castShadow = true;
		    }
		});
	    mapModel.model = gltf.scene;
	    mapModel.add(mapModel.model);
	    //console.log(mapModel);

	}, undefined, function (error){
	    console.error( error );
	});


	// Body
	scene.add(bodyModel);
	loader.load( 'models/trebuchetBody.glb', function(gltf){

	    bodyModel.name = "Body";
	    bodyModel.castShadow = true;
	    bodyModel.receiveShadow = false;
	    bodyModel.scale.x = 4;
	    bodyModel.scale.y = 4;
	    bodyModel.scale.z = 4;

	    gltf.scene.traverse ((object) => {
		    if (object.isMesh) {
		        object.material.map = trebuchetTexture;
		        object.material.bumpMap = trebuchetTexture;
		        object.material.bumpScale = 0.1;
		        object.material.roughness = 1.0;
		        object.castShadow = true;
		    }
		});

	    bodyModel.model = gltf.scene;
	    bodyModel.add(bodyModel.model);
	    //console.log(bodyModel);

	}, undefined, function(error){
	    console.error(error);
	});


	// Rotation pivot
	var geometry = new THREE.BufferGeometry().fromGeometry(
    new THREE.CylinderGeometry(0.1, 0.1, 1, 32)
  	);
  	var material = new THREE.MeshStandardMaterial({});
  	pivot = new THREE.Mesh(geometry, material);
  	pivot.position.set(0, 0, 0);
  	pivot.rotation.set(Math.PI/2, 0, 0);
  	scene.add(pivot);


	// Throwing arm
	scene.add(throwingArm);
	loader.load( 'models/trebuchetArm.glb', function(gltf){

	    throwingArm.name = "throwingArm";
	    throwingArm.castShadow = true;
	    throwingArm.receiveShadow = false;
	    throwingArm.scale.x = 4;
	    throwingArm.scale.y = 4;
	    throwingArm.scale.z = 4;
	    throwingArm.position.set(0,-10.4,0);
	    
	    gltf.scene.traverse ((object) => {
		    if (object.isMesh){
		        object.material.map = trebuchetTexture;
		        object.material.bumpMap = trebuchetTexture;
		        object.material.bumpScale = 0.1;
		        object.material.roughness = 1.0;
		        object.castShadow = true;
		    }
	    });
	    throwingArm.model = gltf.scene;
	    throwingArm.add(throwingArm.model);
	    //console.log(throwingArm);

	}, undefined, function(error){
	    console.error(error);
	});

	group = new THREE.Group(); 
  	group.add(pivot);
  	group.add(throwingArm);
  	
  	group.position.set(0, 10.3, 0);
  	group.rotation.set(0, 0, Math.PI/7);
  	scene.add(group);

	// Counter-weight
	scene.add(counterWeight);
	loader.load('models/trebuchetCW.glb', function(gltf){

	    counterWeight.name = "counterWeight";
	    counterWeight.castShadow = true;
	    counterWeight.receiveShadow = false;
	    counterWeight.scale.x = 0.7;
	    counterWeight.scale.y = 1;
	    counterWeight.scale.z = 1;
	    counterWeight.position.set(0,0,0);
	    
	    gltf.scene.traverse ((object) => {
	        if ( object.isMesh ) {
	            object.material.map = trebuchetTexture;
	            object.material.bumpMap = trebuchetTexture;
	            object.material.bumpScale = 0.1;
	            object.material.roughness = 1.0;
	            object.castShadow = true;
	        }
	    });
	    counterWeight.model = gltf.scene;
	    counterWeight.add(counterWeight.model);
	    //console.log(counterWeight);

	}, undefined, function(error){
	    console.error(error);
	});



	// Projectile
	scene.add(projectile);
	loader.load('models/projectile.glb', function(gltf){

	    projectile.name = "projectile";
	    projectile.castShadow = true;
	    projectile.receiveShadow = true;
	    projectile.scale.x = 1;
	    projectile.scale.y = 1;
	    projectile.scale.z = 1;
	    projectile.position.set(0,0,0);

	    gltf.scene.traverse ((object) => {
	        if (object.isMesh) {
	          object.material.map = stone;
	          object.castShadow = true;
	        }
	    });
	    projectile.model = gltf.scene; 
	    projectile.add(projectile.model);
	    //console.log(projectile);
	    
	}, undefined, function(error){
	    console.error(error);
	});

	//Initialize lights
	initLights();

	// Create result ring feedback
	var ringGeometry = new THREE.TorusGeometry(3, 0.1, 10, 60);
	var material = new THREE.MeshPhongMaterial({color: 0xFF4500	}); 
	var firstring = new THREE.Mesh(ringGeometry, material);

	var ringGeometry2 = new THREE.TorusGeometry(1.5, 0.1, 10, 60);
	firstring.updateMatrix();
	ringGeometry2.merge(firstring.geometry, firstring.matrix);

	secondRing = new THREE.Mesh(ringGeometry2, material);
	secondRing.castShadow = true;
	secondRing.receiveShadow = true;
}