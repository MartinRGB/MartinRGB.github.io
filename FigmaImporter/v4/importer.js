(()=>{"use strict";var e,t={6523:(e,t,r)=>{var s=r(7294);const o="figma-authorization-code-data";class n{constructor({clientId:e,clientSecrete:t,redirectUri:r}){if(!e)throw Error("clientId is required");if(!t)throw Error("clientSecrete is required");if(!r)throw Error("redirectUri is required");this.config={clientId:e,clientSecrete:t,redirectUri:r}}async getOAuth2Token(){const e=Math.random().toString(),t=this.getAuthorizationCode(e).then((e=>this.getAccessTokenData(e))).then((e=>this.storeAccessTokenData(e))).catch((e=>console.error(e)));return window.open(`https://www.figma.com/oauth?client_id=${this.config.clientId}&redirect_uri=${this.config.redirectUri}&scope=file_read&state=${e}&response_type=code`),t}async getAuthorizationCode(e){return new Promise(((t,r)=>{let s=null;window.addEventListener("storage",s=n=>{if(n.key===o){const{code:i,state:a}=JSON.parse(n.newValue);window.removeEventListener("storage",s),window.localStorage.removeItem(o),a!==e?r("STATE_MISMATCH"):t(i)}})}))}async getAccessTokenData(e){return fetch(`https://www.figma.com/api/oauth/token?client_id=${this.config.clientId}&client_secret=${this.config.clientSecrete}&redirect_uri=${this.config.redirectUri}&code=${e}&grant_type=authorization_code`,{method:"POST"}).then((e=>e.json())).then((e=>{const{access_token:t,expires_in:r}=e;return{token:t,expireOnEpoch:Date.now()+1e3*r}}))}storeAccessTokenData(e){return window.localStorage.setItem("figma-access-token-data",JSON.stringify(e)),e.token}}var i=r(2788),a=r(5893);const l={light:{colors:{bg:"#e7edfe",fg:"#010818",stroke:"##cfdcfc"}},dark:{colors:{bg:"#010818",fg:"#e7edfe",stroke:"#041749"}}},c=window.matchMedia("(prefers-color-scheme: dark)"),d=i.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,h=i.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% + 40px));
  z-index: 1000;
  font-size:14px;
`,f=i.ZP.strong`
  font-size: 16px;
  word-break: break-all;
`,x=i.ZP.div`
  background-color: ${({theme:e})=>e.colors.bg};
  color: ${({theme:e})=>e.colors.fg};
  font: 1em/1.5 sans-serif;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 10000;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
  transition: background-color 0.3s;
  overflow: hidden;
`,g=i.ZP.svg`
  // width: 16em;
  height: 8em;
  width:78px;
`,u=i.ZP.g`
  stroke: ${({theme:e})=>e.colors.stroke};
  transition: stroke 0.3s;
`,p=i.F4`
  from { stroke-dashoffset: 0; }
  50% { animation-timing-function: steps(1);stroke-dashoffset: -358; }
  50.01% { animation-timing-function: linear;stroke-dashoffset: 358; }
  to { troke-dashoffset: 0; }
`,m=i.F4`
  from { stroke-dashoffset: 358; }
  50% { stroke-dashoffset: 0; }
  to { stroke-dashoffset: -358; }
`,j=i.ZP.path`
  animation: ${p} 2s linear infinite;
`,k=i.ZP.path`
  animation: ${m} 2s linear infinite;
`,b=e=>{const[t,r]=(0,s.useState)("light");return console.log("isDarkMode"+c.matches),(0,s.useEffect)((()=>{r(c.matches?"dark":"light")}),[c.matches]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.f6,{theme:l[t],children:(0,a.jsxs)(x,{children:[(0,a.jsx)(d,{id:"loading",children:(0,a.jsxs)(g,{viewBox:"0 0 256 128",width:"256px",height:"128px",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsxs)("defs",{children:[(0,a.jsxs)("linearGradient",{id:"grad1",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"#5ebd3e"}),(0,a.jsx)("stop",{offset:"33%",stopColor:"#ffb900"}),(0,a.jsx)("stop",{offset:"67%",stopColor:"#f78200"}),(0,a.jsx)("stop",{offset:"100%",stopColor:"#e23838"})]}),(0,a.jsxs)("linearGradient",{id:"grad2",x1:"1",y1:"0",x2:"0",y2:"0",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"#e23838"}),(0,a.jsx)("stop",{offset:"33%",stopColor:"#973999"}),(0,a.jsx)("stop",{offset:"67%",stopColor:"#009cdf"}),(0,a.jsx)("stop",{offset:"100%",stopColor:"#5ebd3e"})]})]}),(0,a.jsxs)("g",{fill:"none",strokeLinecap:"round",strokeWidth:"16",children:[(0,a.jsxs)(u,{stroke:"#ddd",children:[(0,a.jsx)("path",{d:"M8,64s0-56,60-56,60,112,120,112,60-56,60-56"}),(0,a.jsx)("path",{d:"M248,64s0-56-60-56-60,112-120,112S8,64,8,64"})]}),(0,a.jsxs)("g",{strokeDasharray:"180 656",children:[(0,a.jsx)(j,{stroke:"url(#grad1)",strokeDashoffset:"0",d:"M8,64s0-56,60-56,60,112,120,112,60-56,60-56"}),(0,a.jsx)(k,{stroke:"url(#grad2)",strokeDashoffset:"358",d:"M248,64s0-56-60-56-60,112-120,112S8,64,8,64"})]})]})]})}),(0,a.jsx)(h,{children:(0,a.jsxs)("p",{children:[e.loadingProgress?(0,a.jsx)(f,{children:e.loadingProgress}):(0,a.jsx)(a.Fragment,{}),e.hintText?e.hintText:""]})})]})})})},y="https://127.0.0.1:8887/",w={light:{colors:{bg:"#e7edfe",fg:"#010818"}},dark:{colors:{bg:"#010818",fg:"#e7edfe"}}},v=i.vJ`
    * {
        border: 0;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: sans-serif;
        background-color: ${({theme:e})=>e.colors.bg};
        color: ${({theme:e})=>e.colors.fg};
        font: 1em/1.5 sans-serif;
        height: 100vh;
        display: grid;
        place-items: center;
        transition: background-color 0.3s;
        overflow: hidden;
    }
`,C=i.ZP.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`,$=i.ZP.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    flex:1;
`,_=i.ZP.div`
    flex:1;
    padding:24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`,P=i.ZP.div`
    flex:1;
    padding:24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`,S=i.ZP.div`
    width: fit-content;
    margin: 0 auto;
`,O=i.ZP.div`
    margin-top: 6px;
    margin-bottom: 6px;
    * {
      margin-top: 6px;
      margin-bottom: 6px;
    }
`,q=i.ZP.p`
    font-size: 14px;
    opacity: 60%;
`,A=i.ZP.strong`
    font-size: 16px;
    word-break: break-all;
`,T=i.ZP.code`
    //cursor: pointer;
    background: #7f7f7f4f;
    padding: 2px 6px 2px 6px;
    border-radius: 4px;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
`,Z=i.ZP.button`
    font-size: 14px;
    line-height: 16px;
    padding: 4px 8px 4px 8px;
    border-radius: 6px;
    background: #10bd4e;
    color: white;
    border: 1px solid #ffffff87;
    cursor: pointer;
    margin-right:6px;
    outline: none;
`,z=i.ZP.textarea`
    width: 100%;
    height: 24px;
    line-height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    outline: none;
    font-size: 12px;
    color:${({theme:e})=>e.colors.fg};
    background: #7f7f7f4f;
    font-family: sans-serif;
    font-weight: 400;
`,F=i.ZP.textarea`
    height: 100%;
    width: 100%;
    line-height: 24px;
    padding: 24px;
    outline: none;
    font-size: 12px;
    color:${({theme:e})=>e.colors.fg};
    background: transparent;
    font-family: sans-serif;
    font-weight: 400;
`,U=i.ZP.div`
    width: 100%;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x;
    background: #5e5e5e;
    z-index: 100;
    padding: 0px;
    bottom: 0px;
    padding: 20px;
    max-height: 190px;
    height:190px;
    overflow-x: auto;
    display: flex;
    flex:1;
`,E=i.ZP.img`
    scroll-snap-align: start;
    flex: 0 0 150px;
    width: 150px;
    height: 150px;
    border-radius: 5px;
    object-fit: contain;
    background: #ffffff40;
    padding: 12px;
`,I=window.matchMedia("(prefers-color-scheme: dark)"),M=()=>{const[e,t]=(0,s.useState)("-"),[r,o]=(0,s.useState)("-"),[l,c]=(0,s.useState)("-"),[d,h]=(0,s.useState)("copy figma file url here..."),[f,x]=(0,s.useState)("-"),[g,u]=(0,s.useState)("-"),[p,m]=(0,s.useState)(""),[j,k]=(0,s.useState)(""),[M,R]=(0,s.useState)([]),[D,G]=(0,s.useState)(!0),N=new n({clientId:"6clxS2O4bl9ADNcy1wh5rk",clientSecrete:"3RtOK3Qx3lMUm3svNfZuycyNAeouxq",redirectUri:`${y}callback.html`}),[Y,J]=(0,s.useState)("light");console.log("isDarkMode"+I.matches),(0,s.useEffect)((()=>{J(I.matches?"dark":"light")}),[I.matches]),(0,s.useEffect)((()=>{const e=new URL(window.location.href);if(null!=e.searchParams.get("query_key")){if("auth_everytime"===e.searchParams.get("query_token")&&N.getOAuth2Token().then((r=>{t(r),G(!1),console.log(r);const s=e.searchParams.get("query_key"),n=e.searchParams.get("query_node"),i=`https://127.0.0.1:8887/?query_token=${r}&query_key=${s}&query_node=${n}`,a=`https://api.figma.com/v1/files/${s}/nodes?ids=${n}`;o(s),c(n),x(a),u(i),"unity"===e.searchParams.get("query_platform")&&te(r,s,n),"webxr"===e.searchParams.get("query_platform")&&(window.location.href=`${i}`)})),"local_server"===e.searchParams.get("query_token")){const r=e.searchParams.get("query_key"),s=e.searchParams.get("query_node"),n=e.searchParams.get("query_token"),i=`https://127.0.0.1:8887/?query_token=${n}&query_key=${r}&query_node=${s}`,a=`https://172.22.0.20:8222/external/${r}/${s.replaceAll(":","%253A")}/data.json`;G(!1),t(n),o(r),c(s),u(i),x(a),"local_unity"===e.searchParams.get("query_platform")&&te(n,r,s)}}else N.getOAuth2Token().then((e=>{t(e),G(!1),console.log(e)}))}),[window.location.href]);const X=(0,s.useCallback)((()=>{N.getOAuth2Token().then((e=>{t(e),G(!1)}))}),[]),W=(0,s.useCallback)((()=>{localStorage.clear(),t("-"),X()}),[]),L=(0,s.useCallback)((e=>{const t=e.target.value;h(t)}),[]),H=(0,s.useCallback)(((e,t)=>{var r,s=e.split("/"),n=s.length,i=s[n-1].includes("node-id"),a=s[n-2];console.log(a),i||(r=`https://api.figma.com/v1/files/${a}`);var l=s[n-1].split("?node-id=")[1];r=`https://api.figma.com/v1/files/${a}/nodes?ids=${l}`,console.log(t);const d=`https://127.0.0.1:8887/?query_token=${t}&query_key=${a}&query_node=${l}`;o(a),c(l),x(r),u(d)}),[]),B=(0,s.useCallback)(((e,t,r)=>`https://api.figma.com/v1/images/${e}?ids=${t}&svg_include_id=true&format=png&scale=${r}`),[]),V=(0,s.useCallback)(((e,t,r,s,o,n)=>{var i=new XMLHttpRequest;console.log(e,t,r),i.open("GET",B(e,t,r),!0),i.setRequestHeader("Authorization",`Bearer ${n}`),i.send();let a=s;i.onreadystatechange=function(){if(4==i.readyState&&200==i.status){var e=JSON.parse(i.responseText);R((t=>[...t,Object.values(e.images)[0]])),a===o-1&&G(!1)}}}),[]),K=(0,s.useCallback)((e=>{k(e.target.value)}),[]),Q=(0,s.useCallback)((e=>{(e=>{var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-99999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("Copied the string: "+e)})(e)}),[]),ee=(0,s.useCallback)(((e,t)=>{G(!0);var r=new XMLHttpRequest;r.open("GET",e,!0),r.setRequestHeader("Authorization",`Bearer ${t}`),r.send(),r.onreadystatechange=function(){if(4==r.readyState&&200==r.status){var e=JSON.parse(r.responseText);m(e),k(JSON.stringify(e,null,"\t")),G(!1)}}}),[]),te=(0,s.useCallback)(((e,t,r)=>{var s;(s=document.createElement("a")).href=`com.unity3d.kharma:custom/query_token=${e}&file_key=${t}&frame_name=figma&node_id=${r}`,document.body.appendChild(s),s.click(),document.body.removeChild(s)}),[]),re=(0,s.useCallback)((e=>{window.open(`${e}`,"_blank")}),[]),se=(0,s.useCallback)((e=>{window.location.href=`${e}importer.html`}),[]),oe=(0,s.useCallback)(((e,t,r)=>{let s=t;R((t=>[...t,e.src])),s===r-1&&G(!1)}),[]),ne=(0,s.useCallback)(((e,t,r)=>{G(!0);var s=[];R([]);const o=Object.values(e.nodes)[0],n=Object.keys(e.nodes)[0];if(s.push(n),"local_server"===t)for(var i=0;i<o.document.children.length;i++){const e=o.document.children[i];oe(e,i,o.document.children.length)}else for(i=0;i<o.document.children.length;i++)if(s.push(o.document.children[i].id),i===o.document.children.length-1){console.log(s);for(var a=0;a<s.length;a++)V(r,s[a],1,a,s.length,t)}}),[]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.f6,{theme:w[Y],children:[(0,a.jsx)(v,{}),(0,a.jsxs)(C,{children:[(0,a.jsxs)($,{children:[(0,a.jsx)(_,{children:D?(0,a.jsx)(b,{hintText:"loading"}):(0,a.jsx)(S,{children:"-"===g?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(O,{children:[(0,a.jsxs)(q,{children:["Your Figma ",(0,a.jsx)(T,{children:"Token"})," is:"]}),(0,a.jsx)(A,{children:e}),(0,a.jsxs)(O,{children:[(0,a.jsx)(Z,{onClick:()=>{Q(e)},children:"Copy"}),(0,a.jsx)(Z,{onClick:()=>{W()},children:"Regenerate"})]})]}),(0,a.jsxs)(O,{children:[(0,a.jsx)(z,{rows:1,cols:33,onChange:e=>L(e),value:d}),(0,a.jsx)(Z,{onClick:()=>{H(d,e)},children:"Get API & Renderer Url"})]})]}):(0,a.jsx)(a.Fragment,{children:"local_server"===e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(O,{children:[(0,a.jsxs)(q,{children:["Your ",(0,a.jsx)(T,{children:"Frame Url"})," is:"]}),(0,a.jsx)(A,{children:`https://www.figma.com/file/${r}/figma?node-id=${l}`}),(0,a.jsxs)(q,{children:["Your ",(0,a.jsx)(T,{children:"API Url"})," is:"]}),(0,a.jsx)(A,{children:f}),(0,a.jsxs)(q,{children:["Your ",(0,a.jsx)(T,{children:"WebXR Website Url"})," is:"]}),(0,a.jsx)(A,{children:g})]}),(0,a.jsxs)(O,{children:[(0,a.jsx)(Z,{onClick:()=>{te(e,r,l)},children:"Send To Unity"}),(0,a.jsx)("br",{}),(0,a.jsx)(Z,{onClick:()=>{re(g)},children:"Go WebXR Site"})," ",(0,a.jsx)("br",{}),(0,a.jsx)(Z,{onClick:()=>{se(y)},children:"Go Origin Site"})," ",(0,a.jsx)("br",{}),(0,a.jsx)(Z,{onClick:()=>{ee(f,e)},children:"Get JSON Data"}),(0,a.jsx)("br",{}),p?(0,a.jsx)(Z,{onClick:()=>{ne(p,e,r)},children:"Get Image"}):(0,a.jsx)(a.Fragment,{})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(O,{children:[(0,a.jsxs)(q,{children:["Your Figma ",(0,a.jsx)(T,{children:"API Url"})," is:"]}),(0,a.jsx)(A,{children:f}),(0,a.jsxs)(q,{children:["Your ",(0,a.jsx)(T,{children:"Figma Token"})," is:"]}),(0,a.jsx)(A,{children:e}),(0,a.jsxs)(q,{children:["Your ",(0,a.jsx)(T,{children:"Frame Url"})," is:"]}),(0,a.jsx)(A,{children:`https://www.figma.com/file/${r}/figma?node-id=${l}`}),(0,a.jsxs)(q,{children:["Your ",(0,a.jsx)(T,{children:"API Url"})," is:"]}),(0,a.jsx)(A,{children:f}),(0,a.jsxs)(q,{children:["Your ",(0,a.jsx)(T,{children:"WebXR Website Url"})," is:"]}),(0,a.jsx)(A,{children:g})]}),(0,a.jsxs)(O,{children:[(0,a.jsx)(Z,{onClick:()=>{te(e,r,l)},children:"Send To Unity"}),(0,a.jsx)("br",{}),(0,a.jsx)(Z,{onClick:()=>{re(g)},children:"Go WebXR Site"})," ",(0,a.jsx)("br",{}),(0,a.jsx)(Z,{onClick:()=>{se(y)},children:"Go Origin Site"})," ",(0,a.jsx)("br",{}),(0,a.jsx)(Z,{onClick:()=>{ee(f,e)},children:"Get JSON Data"}),(0,a.jsx)("br",{}),p?(0,a.jsx)(Z,{onClick:()=>{ne(p,e,r)},children:"Get Image"}):(0,a.jsx)(a.Fragment,{})]})]})})})}),p&&!D?(0,a.jsx)(P,{children:(0,a.jsx)(F,{value:j,onChange:K})}):(0,a.jsx)(a.Fragment,{})]}),0!=M.length?(0,a.jsx)(U,{children:M.map(((e,t)=>(0,a.jsx)(E,{src:e},t)))}):(0,a.jsx)(a.Fragment,{})]})]})})};var R=r(745);const D=document.getElementById("react-page");(0,R.s)(D).render((0,a.jsx)(M,{}))},7294:(e,t,r)=>{e.exports=r(2408)}},r={};function s(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,s),n.exports}s.m=t,e=[],s.O=(t,r,o,n)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,o,n]=e[d],a=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(s.O).every((e=>s.O[e](r[l])))?r.splice(l--,1):(a=!1,n<i&&(i=n));if(a){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,o,n]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={685:0};s.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[i,a,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(l)var d=l(s)}for(t&&t(r);c<i.length;c++)n=i[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},r=self.webpackChunkXRViewer=self.webpackChunkXRViewer||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),s.nc=void 0;var o=s.O(void 0,[348,635],(()=>s(6523)));o=s.O(o)})();