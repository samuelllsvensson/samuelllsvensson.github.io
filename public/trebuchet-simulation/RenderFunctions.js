/**
 * Functions called from render loop
 */

var fontloader = new THREE.FontLoader();
var text = new THREE.Object3D();    
var i = 0;
function animate(){

    var result = [], x = [], y = [];
    result = getPos(x,y);

    //Catapult animation on launch
    if(i < 10){
        group.rotation.z -= Math.PI/25;
        counterWeight.position.y -= 0.35;
    }
    //Updating projectile position if still in air
    if(result.y[i] >= 0){

        console.log("x: " + projectile.position.x + " 	y: " + projectile.position.y);

        projectile.position.x = result.x[i] * 4;
        projectile.position.y = result.y[i] * 4;

        if(i < result.x.length)
            i++;

        //Visualizing rings on touch-down
        if(i == result.x.length - 1) 
        {
            projectile.position.y = 0;
            
            impactSound.play(); 

            scene.add(secondRing);
            secondRing.rotation.x = Math.PI/2;
            secondRing.position.set(projectile.position.x, projectile.position.y , 0); 
        }
    }  
}

function updateGUI(){
    throwingArm.scale.x = guiControls.throwingArmLength- 1.3;

    counterWeight.scale.set(guiControls.counterMass/60 , guiControls.counterMass/50 , guiControls.counterMass/50);
    counterWeight.position.x = throwingArm.position.x + ((2*guiControls.throwingArmLength)*Math.cos(group.rotation.z))/2 -1.2;
    counterWeight.position.y = throwingArm.position.y + ((2*guiControls.throwingArmLength)*Math.sin(group.rotation.z))/2 +18;

    projectile.scale.set(guiControls.projectileMass/8, guiControls.projectileMass/8, guiControls.projectileMass/8);
    projectile.position.x = throwingArm.position.x -((4.2*guiControls.throwingArmLength)*Math.cos(group.rotation.z)) +3.5;
    projectile.position.y = throwingArm.position.y -((4.2*guiControls.throwingArmLength )*Math.sin(group.rotation.z)) +24.1;
}

function getInitVelocity(m1,m2,d1,d2,theta){
    const g = 9.81;   
    var V0;
    V0 = d2 * ( 2 * theta * (m1 * g * d1 - m2 * g * d2)/(m1 * d1^2 + m2 * d2^2) )^(1/2);

    return V0;
}

function getPos(x,y){
    //Gravity
    const g = 9.81; 

    //Calculate init velocity
    let m1 = guiControls.counterMass,     // Counter-weight mass
        m2 = guiControls.projectileMass,  // projectile mass
        d1 = 1,                         // Distance: frame to counter weight 
        d2 = guiControls.throwingArmLength -1.2,     // Distance: projectile to pivot   
        theta = Math.PI/4,                // Degree (radians)
        Icw = m1*d1, // Inertia CW
        Ipr = m2*d2,  // Inertia Projectile
        Itot = Icw + Ipr; // Total moment of inertia
        var v0 = getInitVelocity(m1,m2,d1,d2,theta);
        var vx = v0*Math.cos(theta), vy = v0*Math.sin(theta);       

    //Air drag
    const r = 0.2,                // Radius of projectil
          A = Math.PI * r^2,      // Cross-area of projectile (disc)
          rho = 1.2;              // Air density

    var C = guiControls.airResistance;       // Air resistance 
  
    let Fdrag_x, Fdrag_y, ax, ay, i = 0;

    let delta_t = 0.01;     // Step size   
    // Initial values    
    x[0] = -Math.cos(theta)*d2;                                
    y[0] = Math.sin(theta)*d2;
    
    //rotation
    var aa = 0, // Initial angular acceleration
    ov = 0, //Initial angular velocity
    tp = -(3*Math.PI/4);

    let b = 50;

    //Do simulation loop while projectile is above ground (ground: y = 0)
    while (y[i] >= 0)
    {
        //Rotation
        // Torque / Moment of inertia = Angular acceleration
        aa = (((m1*d1) - (m2*d2))*Math.sin(tp)*-g-(b*ov))/Itot; 
        // Euler (angular acc -> angular velocity)
        ov = ov + (delta_t * aa);
        // Euler (angular velocity -> angular position)
        tp = tp + (delta_t * ov);
        xR = Math.sin(tp)*d2; // Convert Polar -> Cartesian
        yR = Math.cos(tp)*d2; // Convert Polar -> Cartesian

        if (tp==theta){
            x=xR;
            y=yR;
        }
        // Drag force
        Fdrag_x = (rho * C * A * vx^2)/2;  
        Fdrag_y = (rho * C * A * vy^2)/2;
        
        // Trajectory 
        // Acceleration with air drag
        ax = - Fdrag_x * vx;
        ay = - g - Fdrag_y * vy;
        
        // Euler (acc -> velocity)
        vx = vx + delta_t * ax;
        vy = vy + delta_t * ay;
    
        // Euler (velocity -> position)
        x[i+1] = x[i] + delta_t * vx;
        y[i+1] = y[i] + delta_t * vy;
            
        i++; 
    }
    return {x:x, y:y}
}