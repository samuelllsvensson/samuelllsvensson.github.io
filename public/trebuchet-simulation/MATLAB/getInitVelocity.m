function [V0] = getInitVelocity(m1,m2,d1,d2,theta) 

g = 9.81; 

V0 = d2 * sqrt(2*theta*(m1*g*d1-m2*g*d2)/(m1*d1^2+m2*d2^2));

end