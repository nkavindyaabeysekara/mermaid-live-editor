function k(){}const ct=t=>t;function lt(t,n){for(const e in n)t[e]=n[e];return t}function G(t){return t()}function H(){return Object.create(null)}function $(t){t.forEach(G)}function J(t){return typeof t=="function"}function Ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function ot(t){return Object.keys(t).length===0}function K(t,...n){if(t==null)return k;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function Lt(t){let n;return K(t,e=>n=e)(),n}function Tt(t,n,e){t.$$.on_destroy.push(K(n,e))}function zt(t,n,e,r){if(t){const s=Q(t,n,e,r);return t[0](s)}}function Q(t,n,e,r){return t[1]&&r?lt(e.ctx.slice(),t[1](r(n))):e.ctx}function Bt(t,n,e,r){if(t[2]&&r){const s=t[2](r(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const o=[],i=Math.max(n.dirty.length,s.length);for(let l=0;l<i;l+=1)o[l]=n.dirty[l]|s[l];return o}return n.dirty|s}return n.dirty}function qt(t,n,e,r,s,o){if(s){const i=Q(n,e,r,o);t.p(i,s)}}function Ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function Ht(t){return t==null?"":t}function It(t,n,e){return t.set(e),n}const U=typeof window!="undefined";let ut=U?()=>window.performance.now():()=>Date.now(),q=U?t=>requestAnimationFrame(t):k;const b=new Set;function V(t){b.forEach(n=>{n.c(t)||(b.delete(n),n.f())}),b.size!==0&&q(V)}function at(t){let n;return b.size===0&&q(V),{promise:new Promise(e=>{b.add(n={c:t,f:e})}),abort(){b.delete(n)}}}let R=!1;function ft(){R=!0}function _t(){R=!1}function dt(t,n,e,r){for(;t<n;){const s=t+(n-t>>1);e(s)<=r?t=s+1:n=s}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const _=n[u];_.claim_order!==void 0&&c.push(_)}n=c}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let s=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,_=(s>0&&n[e[s]].claim_order<=u?s+1:dt(1,s,a=>n[e[a]].claim_order,u))-1;r[c]=e[_]+1;const f=_+1;e[f]=c,s=Math.max(f,s)}const o=[],i=[];let l=n.length-1;for(let c=e[s]+1;c!=0;c=r[c-1]){for(o.push(n[c-1]);l>=c;l--)i.push(n[l]);l--}for(;l>=0;l--)i.push(n[l]);o.reverse(),i.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<i.length;c++){for(;u<o.length&&i[c].claim_order>=o[u].claim_order;)u++;const _=u<o.length?o[u]:null;t.insertBefore(i[c],_)}}function mt(t,n){t.appendChild(n)}function X(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function pt(t){const n=Y("style");return yt(X(t),n),n.sheet}function yt(t,n){mt(t.head||t,n)}function gt(t,n){if(R){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Wt(t,n,e){R&&!e?gt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function bt(t){t.parentNode.removeChild(t)}function Gt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Y(t){return document.createElement(t)}function $t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Jt(){return F(" ")}function Kt(){return F("")}function Qt(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function Ut(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function Vt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Xt(t){return t===""?null:+t}function xt(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,n,e,r,s=!1){wt(t);const o=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const l=t[i];if(n(l)){const c=e(l);return c===void 0?t.splice(i,1):t[i]=c,s||(t.claim_info.last_index=i),l}}for(let i=t.claim_info.last_index-1;i>=0;i--){const l=t[i];if(n(l)){const c=e(l);return c===void 0?t.splice(i,1):t[i]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,l}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function tt(t,n,e,r){return Z(t,s=>s.nodeName===n,s=>{const o=[];for(let i=0;i<s.attributes.length;i++){const l=s.attributes[i];e[l.name]||o.push(l.name)}o.forEach(i=>s.removeAttribute(i))},()=>r(n))}function Yt(t,n,e){return tt(t,n,e,Y)}function Zt(t,n,e){return tt(t,n,e,$t)}function vt(t,n){return Z(t,e=>e.nodeType===3,e=>{const r=""+n;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>F(n),!0)}function tn(t){return vt(t," ")}function nn(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function en(t,n){t.value=n==null?"":n}function rn(t,n,e,r){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,r?"important":"")}function sn(t,n,e){t.classList[e?"add":"remove"](n)}function nt(t,n,{bubbles:e=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,e,r,n),s}const S=new Map;let M=0;function Et(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}function kt(t,n){const e={stylesheet:pt(n),rules:{}};return S.set(t,e),e}function I(t,n,e,r,s,o,i,l=0){const c=16.666/r;let u=`{
`;for(let p=0;p<=1;p+=c){const g=n+(e-n)*o(p);u+=p*100+`%{${i(g,1-g)}}
`}const _=u+`100% {${i(e,1-e)}}
}`,f=`__svelte_${Et(_)}_${l}`,a=X(t),{stylesheet:d,rules:h}=S.get(a)||kt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${r}ms linear ${s}ms 1 both`,M+=1,f}function Nt(t,n){const e=(t.style.animation||"").split(", "),r=e.filter(n?o=>o.indexOf(n)<0:o=>o.indexOf("__svelte")===-1),s=e.length-r.length;s&&(t.style.animation=r.join(", "),M-=s,M||jt())}function jt(){q(()=>{M||(S.forEach(t=>{const{stylesheet:n}=t;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.rules={}}),S.clear())})}let E;function v(t){E=t}function D(){if(!E)throw new Error("Function called outside component initialization");return E}function cn(t){D().$$.on_mount.push(t)}function ln(t){D().$$.after_update.push(t)}function on(){const t=D();return(n,e,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[n];if(s){const o=nt(n,e,{cancelable:r});return s.slice().forEach(i=>{i.call(t,o)}),!o.defaultPrevented}return!0}}function un(t,n){return D().$$.context.set(t,n),n}function an(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(r=>r.call(this,n))}const w=[],W=[],A=[],z=[],et=Promise.resolve();let B=!1;function it(){B||(B=!0,et.then(rt))}function fn(){return it(),et}function P(t){A.push(t)}function _n(t){z.push(t)}const L=new Set;let j=0;function rt(){const t=E;do{for(;j<w.length;){const n=w[j];j++,v(n),At(n.$$)}for(v(null),w.length=0,j=0;W.length;)W.pop()();for(let n=0;n<A.length;n+=1){const e=A[n];L.has(e)||(L.add(e),e())}A.length=0}while(w.length);for(;z.length;)z.pop()();B=!1,L.clear(),v(t)}function At(t){if(t.fragment!==null){t.update(),$(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(P)}}let x;function Ct(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function T(t,n,e){t.dispatchEvent(nt(`${n?"intro":"outro"}${e}`))}const C=new Set;let m;function dn(){m={r:0,c:[],p:m}}function hn(){m.r||$(m.c),m=m.p}function St(t,n){t&&t.i&&(C.delete(t),t.i(n))}function mn(t,n,e,r){if(t&&t.o){if(C.has(t))return;C.add(t),m.c.push(()=>{C.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}const Mt={duration:0};function pn(t,n,e,r){let s=n(t,e),o=r?0:1,i=null,l=null,c=null;function u(){c&&Nt(t,c)}function _(a,d){const h=a.b-o;return d*=Math.abs(h),{a:o,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=ct,tick:p=k,css:g}=s||Mt,O={start:ut()+d,b:a};a||(O.group=m,m.r+=1),i||l?l=O:(g&&(u(),c=I(t,o,a,h,d,y,g)),a&&p(0,1),i=_(O,h),P(()=>T(t,a,"start")),at(N=>{if(l&&N>l.start&&(i=_(l,h),l=null,T(t,i.b,"start"),g&&(u(),c=I(t,o,i.b,i.duration,0,y,s.css))),i){if(N>=i.end)p(o=i.b,1-o),T(t,i.b,"end"),l||(i.b?u():--i.group.r||$(i.group.c)),i=null;else if(N>=i.start){const st=N-i.start;o=i.a+i.d*y(st/i.duration),p(o,1-o)}}return!!(i||l)}))}return{run(a){J(s)?Ct().then(()=>{s=s(),f(a)}):f(a)},end(){u(),i=l=null}}}function yn(t,n){const e={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],l=n[o];if(l){for(const c in i)c in l||(r[c]=1);for(const c in l)s[c]||(e[c]=l[c],s[c]=1);t[o]=l}else for(const c in i)s[c]=1}for(const i in r)i in e||(e[i]=void 0);return e}function gn(t){return typeof t=="object"&&t!==null?t:{}}function bn(t,n,e){const r=t.$$.props[n];r!==void 0&&(t.$$.bound[r]=e,e(t.$$.ctx[r]))}function $n(t){t&&t.c()}function xn(t,n){t&&t.l(n)}function Pt(t,n,e,r){const{fragment:s,on_mount:o,on_destroy:i,after_update:l}=t.$$;s&&s.m(n,e),r||P(()=>{const c=o.map(G).filter(J);i?i.push(...c):$(c),t.$$.on_mount=[]}),l.forEach(P)}function Rt(t,n){const e=t.$$;e.fragment!==null&&($(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Dt(t,n){t.$$.dirty[0]===-1&&(w.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function wn(t,n,e,r,s,o,i,l=[-1]){const c=E;v(t);const u=t.$$={fragment:null,ctx:null,props:o,update:k,not_equal:s,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:H(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};i&&i(u.root);let _=!1;if(u.ctx=e?e(t,n.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Dt(t,f)),a}):[],u.update(),_=!0,$(u.before_update),u.fragment=r?r(u.ctx):!1,n.target){if(n.hydrate){ft();const f=xt(n.target);u.fragment&&u.fragment.l(f),f.forEach(bt)}else u.fragment&&u.fragment.c();n.intro&&St(t.$$.fragment),Pt(t,n.target,n.anchor,n.customElement),_t(),rt()}v(c)}class vn{$destroy(){Rt(this,1),this.$destroy=k}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}$set(n){this.$$set&&!ot(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{pn as $,gn as A,Rt as B,lt as C,fn as D,k as E,K as F,$ as G,J as H,zt as I,gt as J,qt as K,Ft as L,Bt as M,Tt as N,Lt as O,on as P,W as Q,Qt as R,vn as S,$t as T,Zt as U,Gt as V,Ht as W,ct as X,sn as Y,Ut as Z,P as _,xt as a,bn as a0,_n as a1,an as a2,en as a3,Xt as a4,It as a5,Vt as b,Yt as c,bt as d,Y as e,rn as f,Wt as g,vt as h,wn as i,nn as j,Jt as k,Kt as l,tn as m,dn as n,mn as o,hn as p,St as q,un as r,Ot as s,F as t,ln as u,cn as v,$n as w,xn as x,Pt as y,yn as z};