m1 = 200; % counterweight mass
m2 = 2; % projectile mass
d1 = 1; % counterweight arm length
d2 = 4;  % projectile arm length 
g = 9.81; % gravitational acceleration
theta = pi/4; % release angle 
Icw = m1*d1; % Inertia CW
Ipr = m2*d2;  % Inertia Projectile
Itot = Icw + Ipr; % Moment of inertia
v0 = getInitVelocity(m1,m2,d1,d2,theta); % Get Initial velocity

%ROTATION ARM 
x = 0; % initial arm tip position x
y = 0; % initial arm tip position y
a1 = 0; % Initial angular acceleration
o1 = 0; % Initial angular velocity
t1 = -(3*pi)/4; % Initial angle position (225 degrees)

%PROJECTILE PATH WHEN RELEASED
vx = v0*cos(theta); % Velocity x
vy = v0*sin(theta); % Velocity y

Cd = 0.47; % Drag coeff of sphere
rho = 1.225; % Density of air
radius = 0.2; % Radius of projectile
A = pi*radius^2; % Cross-area of projectile 
Fdrag_x = (A*Cd*rho*vx*abs(vx))/2; % Drag force x 
Fdrag_y = (A*Cd*rho*vy*abs(vy))/2; % Drag force y

x1 = -cos(theta)*d2; % Initial position projectile x
y1 = sin(theta)*d2  ; % Initial position projectile y

b=50; % Friction of arm rotation

delta_t = 0.01; % Step size
for t=0:delta_t:2  
    %ROTATION
    %a1 = Angular acceleration 
    a1 = (((m1*d1) - (m2*d2))*sin(t1)*-g-(b*o1))/Itot; 
    %o1 = Angular velocity 
    o1 = o1+(delta_t * a1);
    %t1 = Angle position
    t1 = t1 + (delta_t * o1);
    x = sin(t1)*d2; %Convert Polar -> Cartesian
    y = cos(t1)*d2; %Convert Polar -> Cartesian
       
    %THROW EVENT
    if t1==theta 
        x1=x;
        y1=y;

    end

    
    %PROJECTILE PATH   
    %Projectile acceleration w/ air resistance
    ax = -(Fdrag_x)/m2; 
    ay = -g-(Fdrag_y)/m2; 

    %Projectile velocity
    vx = vx + delta_t * ax; 
    vy = vy + delta_t * ay; 

    %Projectile position
    x1 = x1 + delta_t * vx; 
    y1 = y1 + delta_t * vy; 
    
    xlabel('Range');
    ylabel('Height');
     
    plot(x,y,'xb',x1,y1, 'or');
    axis equal;
    hold on;
end



