import{c as Y,p as sn}from"./constant.6af51708.js";import{aX as en,aY as y,al as ln,aZ as z,a_ as P,a$ as F,b0 as k,b1 as an,b2 as rn,b3 as t,b4 as un,b5 as on,b6 as tn}from"./state.5fda79de.js";function fn(l){return l.innerRadius}function cn(l){return l.outerRadius}function yn(l){return l.startAngle}function gn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,x,D,q,h,v,Z,a){var s=D-l,n=q-x,m=Z-h,i=a-v,r=i*s-m*n;if(!(r*r<y))return r=(m*(x-v)-i*(l-h))/r,[l+r*s,x+r*n]}function L(l,x,D,q,h,v,Z){var a=l-D,s=x-q,n=(Z?v:-v)/F(a*a+s*s),m=n*s,i=-n*a,r=l+m,f=x+i,c=D+m,E=q+i,o=(r+c)/2,I=(f+E)/2,p=c-r,g=E-f,A=p*p+g*g,O=h-v,b=r*E-c*f,S=(g<0?-1:1)*F(tn(0,O*O*A-b*b)),X=(b*g-p*S)/A,d=(-b*p-g*S)/A,R=(b*g+p*S)/A,T=(-b*p+g*S)/A,e=X-o,u=d-I,$=R-o,j=T-I;return e*e+u*u>$*$+j*j&&(X=R,d=T),{cx:X,cy:d,x01:-m,y01:-i,x11:X*(h/O-1),y11:d*(h/O-1)}}function hn(){var l=fn,x=cn,D=Y(0),q=null,h=yn,v=gn,Z=mn,a=null;function s(){var n,m,i=+l.apply(this,arguments),r=+x.apply(this,arguments),f=h.apply(this,arguments)-en,c=v.apply(this,arguments)-en,E=an(c-f),o=c>f;if(a||(a=n=sn()),r<i&&(m=r,r=i,i=m),!(r>y))a.moveTo(0,0);else if(E>ln-y)a.moveTo(r*z(f),r*P(f)),a.arc(0,0,r,f,c,!o),i>y&&(a.moveTo(i*z(c),i*P(c)),a.arc(0,0,i,c,f,o));else{var I=f,p=c,g=f,A=c,O=E,b=E,S=Z.apply(this,arguments)/2,X=S>y&&(q?+q.apply(this,arguments):F(i*i+r*r)),d=k(an(r-i)/2,+D.apply(this,arguments)),R=d,T=d,e,u;if(X>y){var $=un(X/i*P(S)),j=un(X/r*P(S));(O-=$*2)>y?($*=o?1:-1,g+=$,A-=$):(O=0,g=A=(f+c)/2),(b-=j*2)>y?(j*=o?1:-1,I+=j,p-=j):(b=0,I=p=(f+c)/2)}var B=r*z(I),C=r*P(I),G=i*z(A),H=i*P(A);if(d>y){var J=r*z(p),K=r*P(p),M=i*z(g),N=i*P(g),w;if(E<rn&&(w=pn(B,C,M,N,J,K,G,H))){var Q=B-w[0],U=C-w[1],V=J-w[0],W=K-w[1],_=1/P(on((Q*V+U*W)/(F(Q*Q+U*U)*F(V*V+W*W)))/2),nn=F(w[0]*w[0]+w[1]*w[1]);R=k(d,(i-nn)/(_-1)),T=k(d,(r-nn)/(_+1))}}b>y?T>y?(e=L(M,N,B,C,r,T,o),u=L(J,K,G,H,r,T,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),T<d?a.arc(e.cx,e.cy,T,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,T,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,T,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(B,C),a.arc(0,0,r,I,p,!o)):a.moveTo(B,C),!(i>y)||!(O>y)?a.lineTo(G,H):R>y?(e=L(G,H,J,K,i,-R,o),u=L(B,C,M,N,i,-R,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),R<d?a.arc(e.cx,e.cy,R,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,R,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,i,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,R,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,i,A,g,o)}if(a.closePath(),n)return a=null,n+""||null}return s.centroid=function(){var n=(+l.apply(this,arguments)+ +x.apply(this,arguments))/2,m=(+h.apply(this,arguments)+ +v.apply(this,arguments))/2-rn/2;return[z(m)*n,P(m)*n]},s.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:Y(+n),s):l},s.outerRadius=function(n){return arguments.length?(x=typeof n=="function"?n:Y(+n),s):x},s.cornerRadius=function(n){return arguments.length?(D=typeof n=="function"?n:Y(+n),s):D},s.padRadius=function(n){return arguments.length?(q=n==null?null:typeof n=="function"?n:Y(+n),s):q},s.startAngle=function(n){return arguments.length?(h=typeof n=="function"?n:Y(+n),s):h},s.endAngle=function(n){return arguments.length?(v=typeof n=="function"?n:Y(+n),s):v},s.padAngle=function(n){return arguments.length?(Z=typeof n=="function"?n:Y(+n),s):Z},s.context=function(n){return arguments.length?(a=n??null,s):a},s}export{hn as a};