(()=>{"use strict";var e,t={4118:(e,t,r)=>{var n=r(7294),o=r(745),i=r(9477),a=r(1184),s=r(5953),l=r(8412),c=r(2788);const d=c.vJ`
    body {
        font-family: sans-serif;
        font-size: 10px;
        text-align: center;
        /* margin: 20px; */
        margin:0px !important;
        color: #ccc;
        background-color: #1d1e20;
        overflow: hidden;
        height: 100vh;
    }
    .xr-button{
       
        opacity: 1;
        user-select: auto;
        padding: 8px 12px 8px 12px;
        font-family: sans-serif;
        border-radius: 100px;
        line-height: 24px;
        font-size: 10px;
        border-radius: 12px;
        // box-shadow: 0 3px 4px -1px rgb(0 0 0 / 48%);
        border:1px solid #4b4b4b;
        //filter:invert(1) hue-rotate(180deg) brightness(1.5);
        user-select:none;
        // color: rgba(255,255,255,0.9);
        // background: rgba(29,53,59,0.7);
        // backdrop-filter: blur(14px);
        // border-bottom: 1px solid rgba(255,255,255,0.08);
        font-family: 'Inter', 'Helvetica', sans-serif;
        font-size: 12px;
        font-weight: 400;
        color:rgba(255,255,255,0.5);
        background:black;
        margin:8px 5px;
        z-index: 11;
        cursor: pointer;
    }

    .xr-button:hover{
        // background: linear-gradient(99deg, rgb(7, 136, 255) 0%, rgb(153, 0, 255) 100%);
        // border-bottom: 1px solid rgba(255,255,255,0.24);
        color:rgba(255,255,255,0.9);
        background:#40aeff;
    }

`,u=c.ZP.div`
    display: flex;
    flex-direction: row-reverse;
`,h=c.ZP.div`
    position: absolute;
    left: 50%;
    top: 0px;
    transform: translate(-50%, 0);
    margin: 0 auto;
    z-index: 10;
    display:flex;
    z-index:10000;
`,p=c.ZP.div`
    border-radius: 12px;
    opacity: 1;
    user-select: auto;
    padding: 8px 12px 8px 12px;
    // font-family: 'Inter', sans-serif;
    // border-radius: 100px;
    // line-height: 10px;
    line-height: 24px;
    font-size: 10px;

    // box-shadow: 0 3px 4px -1px rgb(0 0 0 / 48%);
    border:1px solid #4b4b4b;
    //filter:invert(1) hue-rotate(180deg) brightness(1.5);
    font-family: 'Inter', 'Helvetica', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color:rgba(255,255,255,0.5);
    background:black;
    user-select:none;
    // color: rgba(255,255,255,0.9);
    // background: rgba(29,53,59,0.7);
    // backdrop-filter: blur(14px);
    //border-bottom: 1px solid rgba(255,255,255,0.08);
    margin:8px 5px;
    z-index: 11;
    cursor: pointer;

    &:hover {
        // background: linear-gradient(99deg, rgb(7, 136, 255) 0%, rgb(153, 0, 255) 100%);
        // border-bottom: 1px solid rgba(255,255,255,0.24);
        color:rgba(255,255,255,0.9);
        background:#40aeff;
    }
`,g=c.ZP.div`
    flex: 1;
    height:100vh;
    width:100vw;
`;var f=r(5893);const m={light:{colors:{bg:"#e7edfe",fg:"#010818",stroke:"##cfdcfc"}},dark:{colors:{bg:"#010818",fg:"#e7edfe",stroke:"#041749"}}},x=window.matchMedia("(prefers-color-scheme: dark)"),b=c.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,v=c.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% + 40px));
  z-index: 1000;
  font-size:14px;
`,w=c.ZP.strong`
  font-size: 16px;
  word-break: break-all;
`,y=c.ZP.div`
  background-color: ${({theme:e})=>e.colors.bg};
  color: ${({theme:e})=>e.colors.fg};
  font: 1em/1.5 sans-serif;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 10001;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
  transition: background-color 0.3s;
  overflow: hidden;
`,j=c.ZP.svg`
  // width: 16em;
  height: 8em;
  width:78px;
`,k=c.ZP.g`
  stroke: ${({theme:e})=>e.colors.stroke};
  transition: stroke 0.3s;
`,S=c.F4`
  from { stroke-dashoffset: 0; }
  50% { animation-timing-function: steps(1);stroke-dashoffset: -358; }
  50.01% { animation-timing-function: linear;stroke-dashoffset: 358; }
  to { troke-dashoffset: 0; }
`,R=c.F4`
  from { stroke-dashoffset: 358; }
  50% { stroke-dashoffset: 0; }
  to { stroke-dashoffset: -358; }
`,P=c.ZP.path`
  animation: ${S} 2s linear infinite;
`,C=c.ZP.path`
  animation: ${R} 2s linear infinite;
`,z=e=>{const[t,r]=(0,n.useState)("light");return console.log("isDarkMode"+x.matches),(0,n.useEffect)((()=>{r(x.matches?"dark":"light")}),[x.matches]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(c.f6,{theme:m[t],children:(0,f.jsxs)(y,{children:[(0,f.jsx)(b,{id:"loading",children:(0,f.jsxs)(j,{viewBox:"0 0 256 128",width:"256px",height:"128px",xmlns:"http://www.w3.org/2000/svg",children:[(0,f.jsxs)("defs",{children:[(0,f.jsxs)("linearGradient",{id:"grad1",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,f.jsx)("stop",{offset:"0%",stopColor:"#5ebd3e"}),(0,f.jsx)("stop",{offset:"33%",stopColor:"#ffb900"}),(0,f.jsx)("stop",{offset:"67%",stopColor:"#f78200"}),(0,f.jsx)("stop",{offset:"100%",stopColor:"#e23838"})]}),(0,f.jsxs)("linearGradient",{id:"grad2",x1:"1",y1:"0",x2:"0",y2:"0",children:[(0,f.jsx)("stop",{offset:"0%",stopColor:"#e23838"}),(0,f.jsx)("stop",{offset:"33%",stopColor:"#973999"}),(0,f.jsx)("stop",{offset:"67%",stopColor:"#009cdf"}),(0,f.jsx)("stop",{offset:"100%",stopColor:"#5ebd3e"})]})]}),(0,f.jsxs)("g",{fill:"none",strokeLinecap:"round",strokeWidth:"16",children:[(0,f.jsxs)(k,{stroke:"#ddd",children:[(0,f.jsx)("path",{d:"M8,64s0-56,60-56,60,112,120,112,60-56,60-56"}),(0,f.jsx)("path",{d:"M248,64s0-56-60-56-60,112-120,112S8,64,8,64"})]}),(0,f.jsxs)("g",{strokeDasharray:"180 656",children:[(0,f.jsx)(P,{stroke:"url(#grad1)",strokeDashoffset:"0",d:"M8,64s0-56,60-56,60,112,120,112,60-56,60-56"}),(0,f.jsx)(C,{stroke:"url(#grad2)",strokeDashoffset:"358",d:"M248,64s0-56-60-56-60,112-120,112S8,64,8,64"})]})]})]})}),(0,f.jsx)(v,{children:(0,f.jsxs)("p",{children:[e.loadingProgress?(0,f.jsx)(w,{children:e.loadingProgress}):(0,f.jsx)(f.Fragment,{}),e.hintText?e.hintText:""]})})]})})})};var M=r(6037);const E=({orbitRef:e,cameraSheetObj:t})=>{const[r,o]=(0,n.useState)(!0);return(0,a.A)((e=>{t.current.value.control?o(!0):o(!1)})),(0,f.jsx)(f.Fragment,{children:r?(0,f.jsx)(M.z,{makeDefault:!0,ref:e}):(0,f.jsx)(f.Fragment,{})})};var L=r(7433),D=r(9040),B=r(7395),A=r(6381);function U(e,t,r){const n=e.find((({type:e})=>e===r));return n||null}function F(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}let O;const H=({cameraRef:e,cameraSheetObj:t,baseUnit:r,aspect:o})=>{const s=(0,n.useRef)(null),{invalidate:l,scene:c}=((0,n.useRef)(null),(0,n.useRef)(null),(0,a.z)()),[d,u]=(0,n.useState)(o);(0,n.useLayoutEffect)((()=>{function e(){u(window.innerWidth/window.innerHeight),window.studio.transaction((({set:e})=>{console.log("set cam"),e(t.current.props.aspect,window.innerWidth/window.innerHeight)}))}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]);const[h,p]=(0,n.useState)(!0),[g,m]=(0,n.useState)(!1),x=(0,n.useRef)(e.current);return(0,n.useEffect)((()=>{const t=U(c.children,0,"CameraHelper");null===t||c.remove(t),x.current=new i.CameraHelper(e.current),c.add(x.current),((e,t)=>{const r=document.getElementById("theatrejs-studio-root").shadowRoot.children[1].children[0].children[1].children[0].children[1],n=e.children,o=U(n,0,"CameraHelper");r.removeEventListener("click",O),O=i=>(n.includes(o)?(i.stopPropagation(),new Promise((function(e,r){console.log("remove step 1 - remove helper first"),o.removeFromParent(),t(),setTimeout((()=>e(1)),1)})).then((function(e){console.log("remove step 2 - click btn second"),r.children[1].click()}))):(console.log("remove step 3 - snapshot opened"),setTimeout((()=>{const r=document.getElementById("theatrejs-studio-root").shadowRoot.children[1].children[0].children[2].children[8].children[0].children[0],i=()=>(n.includes(o)||new Promise((function(e,t){console.log("add step 1 - close window first"),setTimeout((()=>e(1)),1)})).then((function(r){console.log("add step 2 - add cameraHelper"),e.add(o),t()})),r.removeEventListener("click",i),!0);r.addEventListener("click",i)}),1)),!0),r.addEventListener("click",O)})(c,l),x.current.visible=!!g}),[h,,g]),(0,n.useEffect)((()=>{t.current.onValuesChange((t=>{p(t.isPerspective),m(t.helper),e.current&&(e.current.position.x=t.position.x,e.current.position.y=t.position.y,e.current.position.z=t.position.z,e.current.rotation.x=t.rotation.x,e.current.rotation.y=t.rotation.y,e.current.rotation.z=t.rotation.z,e.current.scale.x=t.scale.x,e.current.scale.y=t.scale.y,e.current.scale.z=t.scale.z,e.current.near=t.near,e.current.far=t.far,e.current.fov=t.fov,e.current.zoom=t.zoom,e.current.aspect=t.aspect,e.current.matrixWorldNeedsUpdate=!0,e.current.updateProjectionMatrix(),e.current.updateMatrixWorld()),x.current&&x.current.update(),t.control||s.current&&(s.current.position.x=t.position.x,s.current.position.y=t.position.y,s.current.position.z=t.position.z,s.current.rotation.x=t.rotation.x,s.current.rotation.y=t.rotation.y,s.current.rotation.z=t.rotation.z,s.current.scale.x=t.scale.x,s.current.scale.y=t.scale.y,s.current.scale.z=t.scale.z,s.current.near=t.near,s.current.far=t.far,s.current.fov=t.fov,s.current.zoom=t.zoom,s.current.aspect=t.aspect,s.current.matrixWorldNeedsUpdate=!0,s.current.updateProjectionMatrix(),s.current.updateMatrixWorld()),l()}))}),[]),(0,f.jsxs)(f.Fragment,{children:[h?(0,f.jsx)(L.c,{ref:s,makeDefault:!0,near:.01,far:1e4,fov:60,zoom:1,aspect:d,position:[0,0,r]}):(0,f.jsx)(D.i,{ref:s,makeDefault:!0,near:.01,zoom:1,far:1e4,position:[0,0,r]}),(0,f.jsx)(B.Ah.group,{theatreKey:"- Camera Controller",objRef:t,additionalProps:{control:!0,isPerspective:h,helper:g,near:.01,far:1e4,fov:60,zoom:1,aspect:A.types.number(d,{nudgeMultiplier:.1,range:[0,100]})},position:[0,0,r],children:h?(0,f.jsx)(L.c,{ref:e}):(0,f.jsx)(D.i,{ref:e})})]})};var $=r(521);const T=({cameraSheetObj:e,children:t})=>{const{invalidate:r,scene:o,gl:i,camera:s}=(0,a.z)(),c=()=>{const{player:t,isPresenting:i,session:a}=(0,l.nH)();return(0,n.useEffect)((()=>{const n=o.children;if(i){t.visible=!1,U(n,0,"CameraHelper").visible=!1;const o=Math.sqrt(3),i=e.current.value.position.x,a=e.current.value.position.y,s=e.current.value.position.z,l=e.current.value.rotation.x,c=e.current.value.rotation.y,d=e.current.value.rotation.z,u=e.current.value.fov,h=e.current.value.zoom;t.position.x=i,t.position.y=a-1.6,t.position.z=s*Math.tan(u/(2*h)*Math.PI/180)*o,t.rotation.x=l,t.rotation.y=c,t.rotation.z=d,t.children[0].position.y=0,setTimeout((()=>{t.visible=!0,r()}),1)}}),[i]),null};return(0,f.jsxs)(l.XR,{children:[(0,f.jsx)($.z,{rayMaterial:{color:"blue"},hideRaysOnBlur:!1}),t,(0,f.jsx)(c,{})]})};var I=r(1217),_=r(2854),W=r(4092);console.log("process env build is:"),console.log("build"),console.log("is local environment false");var V=r(9075),Z=r(9167);const K=e=>{const t=(0,n.useRef)(null),r=(0,n.useRef)(null),o=(0,n.useRef)(null),[s,l]=(0,n.useState)(1),[c,d]=(0,n.useState)(1),[u,h]=(0,n.useState)(!1),{invalidate:p,scene:g,gl:m,camera:x}=(0,a.z)(),b=(0,a.D)(I.E,`${e.modelSrc}`,(t=>{var r,n;console.log("finsihed model loading from:"+e.modelSrc),r=()=>{const e="https://172.22.0.20:8222/service_1/decoder",r=(new _._).setDecoderPath(`${e}/draco/gltf/`),n=(new W.a).setTranscoderPath(`${e}/basis/`);r.preload(),console.log("decoderPath is "+e),t.setDRACOLoader(r),t.setKTX2Loader(n)},n=()=>{const e=`https://unpkg.com/three@0.${i.REVISION}.x/examples/js/libs`,r=(new _._).setDecoderPath(`${e}/draco/gltf/`),n=(new W.a).setTranscoderPath(`${e}/basis/`);r.preload(),console.log("decoderPath is "+e),t.setDRACOLoader(r),t.setKTX2Loader(n)},fetch("https://172.22.0.20:8222/php/isLocalServer.php",{method:"get"}).then((function(e){if(e.status>=200&&e.status<300)return e.text();throw new Error(e.statusText)})).then((function(e){console.log("success"),console.log(e),"local_server"===e&&r()})).catch((e=>{console.log("failed"),console.log(e),n()}))}));(0,n.useEffect)((()=>{b&&b.scene.traverse((function(e){e.material&&e.material.map&&(e.material.map.dispose(),e.material.dispose()),e.geometry&&e.geometry.dispose()}))}),[b]);const v=(0,n.useRef)(new i.AnimationMixer(b.scene));(0,n.useEffect)((()=>{if(e.hasData&&0!=e.index){const t=(new i.Box3).setFromObject(r.current),n=t.max.x-t.min.x;d(1/n*e.baseUnit),R(r.current),h(!0),console.log("finsihed data setting"),console.log(r.current)}b.animations.forEach((e=>v.current.clipAction(e).play()))}),[e.src,e.hasData]),(0,a.A)(((e,t)=>{v?.current?.update(t),p()})),(0,n.useEffect)((()=>{o.current.onValuesChange((e=>{E.current&&E.current.update()}))}),[t]);const[w,y]=(0,n.useState)(!1),[j,k]=n.useState([]),S=j[0],R=e=>{e.traverse((function(e){e.hasOwnProperty("material")&&(e.material.userData.hasOwnProperty("originalColor")||(e.material.userData.originalColor=e.material.color))}))};(0,n.useEffect)((()=>{null!=S&&(window.studio.setSelection([o.current]),e.selectCallback(e.index))}),[S]),(0,n.useEffect)((()=>{window.studio.onSelectionChange((r=>{0!=window.studio.selection.length&&window.studio.selection[0].address.objectKey===e.name?(console.log("selected name is "+e.name),void 0===S&&k([t.current])):k([])}))}),[]);const P=()=>{window.studio.transaction((({set:e})=>{e(o.current.props.position.x,t.current.position.x),e(o.current.props.position.y,t.current.position.y),e(o.current.props.position.z,t.current.position.z),e(o.current.props.rotation.x,t.current.rotation.x),e(o.current.props.rotation.y,t.current.rotation.y),e(o.current.props.rotation.z,t.current.rotation.z),e(o.current.props.scale.x,t.current.scale.x),e(o.current.props.scale.y,t.current.scale.y),e(o.current.props.scale.z,t.current.scale.z)}))},C=(0,n.useRef)();(0,n.useEffect)((()=>{if(C.current){const t=C.current,r=t=>{e.orbitRef.current.enabled=!t.value};return t.addEventListener("dragging-changed",r),()=>t.removeEventListener("dragging-changed",r)}}));const[z,M]=(0,n.useState)(!1),E=(0,n.useRef)(null);(0,n.useEffect)((()=>{M(!!S||!!w)}),[S,w]),(0,n.useEffect)((()=>{z?(r.current.traverse((function(e){e.hasOwnProperty("material")&&(e.material.color={isColor:!0,r:1,g:.1412632911304446,b:.45641102317066595})})),null===E.current&&(E.current=new i.BoxHelper(t.current,"hotpink"),g.add(E.current))):(r.current&&r.current.traverse((function(e){e.hasOwnProperty("material")&&(e.material.color=e.material.userData.originalColor)})),g.remove(E.current),E.current=null)}),[z]);const[L,D]=(0,n.useState)(0);return(0,f.jsxs)(f.Fragment,{children:[S&&(0,f.jsx)(V.Y,{object:S,ref:C,mode:["translate","rotate","scale"][L],onMouseUp:e=>{E.current&&E.current.update(),P()},onChange:e=>{E.current&&E.current.update(),P()}}),(0,f.jsx)(Z.P,{box:!0,onChange:e=>{0!=e.length?k([t.current]):k(e)},children:(0,f.jsx)(B.Ah.group,{theatreKey:e.name,name:e.name,onPointerOver:(0,n.useCallback)((e=>{e.stopPropagation(),y(!0)}),[]),onPointerOut:(0,n.useCallback)((e=>{e.stopPropagation(),y(!1)}),[]),onPointerDown:(0,n.useCallback)((e=>{e.stopPropagation()}),[]),onContextMenu:e=>{e.stopPropagation(),(e=>{if(C.current){e.stopPropagation();let t=L+1;D(t<3?t:0)}})(e)},ref:t,objRef:o,visible:u,scale:[1,1,1],position:[(e.x+e.width/2-e.frameWidth/2)/e.frameWidth*e.baseUnit,(e.frameHeight/2-(e.y+e.height/2))/e.frameHeight*(e.frameHeight/e.frameWidth)*e.baseUnit,5e-4*e.index*e.baseUnit],children:(0,f.jsx)("primitive",{ref:r,scale:u?[c*(e.width/e.frameWidth),c*(e.width/e.frameWidth),c*(e.width/e.frameWidth)]:[1,1,1],object:b.scene})})})]})},q=e=>{const[t,r]=(0,n.useState)(!1),o=(0,n.useRef)(null),s=(0,n.useRef)(null),l=(0,n.useRef)(null),c=(0,n.useRef)(null),[d,u]=(0,n.useState)(1),[h,p]=(0,n.useState)(null),[g,m]=(0,n.useState)(!1),{invalidate:x,scene:b,gl:v,camera:w}=(0,a.z)(),y=(0,n.useRef)({src:"",fileName:""});(0,n.useCallback)((e=>{e.needsUpdate=!0,u(e.image.height/e.image.width),e.encoding=i.sRGBEncoding,p(e),m(!0),e.dispose(),s.current.dispose(),o.current.dispose(),x()}),[]),(0,n.useEffect)((()=>{{const t=t=>{var r=new Image;r.src=t,r.onload=function(){u(r.height/r.width),r=null},fetch(t).then((e=>e.blob())).then((t=>{var r=URL.createObjectURL(new Blob([t]));y.current={src:r,fileName:`${e.name.split("-")[1]}.png`},m(!0),x(),r=null}))};!0===e.isQuery?e.hasData&&t(e.src):e.hasData?t(e.src):new Promise((function(e,t){e(function(e,t,r,n,o,a){var s=document.createElement("canvas");s.width=t,s.height=r;const l=s.getContext("2d");var c=new i.Texture(s);c.magFilter=i.LinearFilter,c.minFilter=i.LinearMipMapLinearFilter;const d=t/n,u=r/o;l.lineWidth=a,l.strokeStyle=e,l.beginPath();for(let e=0;e<=t;e+=d)0===e?(l.moveTo(a/2,0),l.lineTo(a/2,r)):(l.moveTo(e-a/2,0),l.lineTo(e-a/2,r));for(let e=0;e<=r;e+=u)0===e?(l.moveTo(0,a/2),l.lineTo(t,a/2)):(l.moveTo(0,e-a/2),l.lineTo(t,e-a/2));return l.stroke(),c.generateMipmaps=!0,c.needsUpdate=!0,c}("white",1920,1080,9,9,4).image.toDataURL("image/png"))})).then((function(e){t(e)}))}}),[e.src,e.hasData]),(0,n.useEffect)((()=>{c.current.onValuesChange((e=>{!function(e,t){0==t&&(t=1e-5);let r=.5*e.parameters.width,n=new i.Vector2(-r,0),o=new i.Vector2(0,t),a=new i.Vector2(r,0),s=(new i.Vector2).subVectors(n,o),l=(new i.Vector2).subVectors(o,a),c=(new i.Vector2).subVectors(n,a),d=s.length()*l.length()*c.length()/(2*Math.abs(s.cross(c))),u=new i.Vector2(0,t-d),h=2*((new i.Vector2).subVectors(n,u).angle()-.5*Math.PI),p=e.attributes.uv,g=e.attributes.position,f=new i.Vector2;for(let e=0;e<p.count;e++){let t=1-p.getX(e),r=g.getY(e);f.copy(a).rotateAround(u,h*t),g.setXYZ(e,f.x,r,-f.y)}g.needsUpdate=!0}(s.current,e.curve),M.current&&M.current.update()}))}),[l]);const[j,k]=(0,n.useState)(!1),[S,R]=n.useState([]),P=S[0];(0,n.useEffect)((()=>{null!=P&&(console.log(P),window.studio.setSelection([c.current]),e.selectCallback(e.index))}),[P]),(0,n.useEffect)((()=>{window.studio.onSelectionChange((t=>{const r=e.name+" / geometry";0!=window.studio.selection.length&&window.studio.selection[0].address.objectKey===r?void 0===P&&R([l.current]):R([])}))}),[]);const C=()=>{window.studio.transaction((({set:e})=>{e(c.current.props.position.x,l.current.position.x),e(c.current.props.position.y,l.current.position.y),e(c.current.props.position.z,l.current.position.z),e(c.current.props.rotation.x,l.current.rotation.x),e(c.current.props.rotation.y,l.current.rotation.y),e(c.current.props.rotation.z,l.current.rotation.z),e(c.current.props.scale.x,l.current.scale.x),e(c.current.props.scale.y,l.current.scale.y),e(c.current.props.scale.z,l.current.scale.z)}))},z=(0,n.useRef)();(0,n.useEffect)((()=>{if(z.current){const t=z.current,r=t=>{e.orbitRef.current.enabled=!t.value};return t.addEventListener("dragging-changed",r),()=>t.removeEventListener("dragging-changed",r)}}));const M=(0,n.useRef)(null);(0,n.useEffect)((()=>{r(!!P||!!j)}),[P,j]),(0,n.useEffect)((()=>{t?null===M.current&&(M.current=new i.BoxHelper(l.current,"hotpink"),b.add(M.current)):(b.remove(M.current),M.current=null)}),[t]);const[E,L]=(0,n.useState)(0);return(0,f.jsxs)(f.Fragment,{children:[P&&(0,f.jsx)(V.Y,{object:P,name:"controls",ref:z,mode:["translate","rotate","scale"][E],onMouseUp:e=>{M.current&&M.current.update(),C()},onChange:e=>{M.current&&M.current.update(),C()}}),(0,f.jsx)(Z.P,{box:!0,onChange:e=>{R(e)},children:(0,f.jsxs)(B.Ah.mesh,{theatreKey:e.name+" / geometry",name:e.name,onPointerOver:(0,n.useCallback)((e=>{e.stopPropagation(),k(!0)}),[]),onPointerOut:(0,n.useCallback)((e=>{e.stopPropagation(),k(!1)}),[]),onContextMenu:e=>{e.stopPropagation(),(e=>{if(z.current){let e=E+1;L(e<3?e:0)}})()},ref:l,objRef:c,additionalProps:{curve:A.types.number(0,{nudgeMultiplier:e.baseUnit/100,range:[0,e.baseUnit]})},visible:g,scale:[1,1,1],position:e.hasData?[(e.x+e.width/2-e.frameWidth/2)/e.frameWidth*e.baseUnit,(e.frameHeight/2-(e.y+e.height/2))/e.frameHeight*(e.frameHeight/e.frameWidth)*e.baseUnit,5e-4*e.index*e.baseUnit]:[0,0,0],children:[(0,f.jsx)("planeGeometry",{ref:s,args:[e.hasData?e.baseUnit*(e.width/e.frameWidth):e.baseUnit,e.hasData?e.baseUnit*d*(e.width/e.frameWidth):e.baseUnit*d,40,40]}),(0,f.jsx)(B.Ah.meshStandardMaterial,{theatreKey:e.name+" / material",ref:o,alphaTest:.1,mapSrc:y.current,toneMapped:!1,color:t?"hotpink":"white"})]})})]})},X=({figmaData:e,isFigma:t,isQuery:r,baseUnit:n,orbitRef:o,selectCallback:i})=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(B.yR,{sheet:(0,A.getProject)("XRViewer").sheet("NodeTree","Controller"),children:0!=e.length?(0,f.jsx)(f.Fragment,{children:e.map((({type:e,index:a,name:s,x:l,y:c,width:d,height:u,frameWidth:h,frameHeight:p,src:g,modelSrc:m})=>null!=m?(0,f.jsx)(K,{src:g,name:`#${a}-`+s.split("/")[s.split("/").length-1].substring(0,24),x:0===a?0:l,y:0===a?0:c,index:a,width:d,height:u,frameWidth:h,frameHeight:p,hasData:!0,isFigma:t,isQuery:r,baseUnit:n,modelSrc:m,orbitRef:o,selectCallback:e=>{i(e)}},e+"-three-"+a):(0,f.jsx)(q,{src:g,name:`#${a}-`+s.replace(/\//g,"_").replace(/\ /g,"_").substring(0,24),x:0===a?0:l,y:0===a?0:c,index:a,width:d,height:u,frameWidth:h,frameHeight:p,hasData:!0,isQuery:r,baseUnit:n,orbitRef:o,selectCallback:e=>{i(e)}},e+"-three-"+a)))}):(0,f.jsx)(f.Fragment,{children:!0===r?(0,f.jsx)(f.Fragment,{}):(0,f.jsx)(q,{name:"Screen",hasData:!1,baseUnit:n,orbitRef:o,selectCallback:e=>{i(e)}})})})});var N=r(5733),G=r.n(N),Q=r(3162);async function Y(e,t){fetch(e).then((e=>e.blob())).then((r=>{var n=new Blob([r],{type:e.includes(".gltf")?"model/gltf+json":"model/gltf-binary"});t(n)}))}const J=e=>e.sort(((e,t)=>t.index-e.index));async function ee(e,t){const r=await fetch(e),n=await r.blob(),o=new FileReader;o.readAsDataURL(n),o.onloadend=()=>{t(o.result)}}async function te(e,t,r,n,o){var i=0;const a=`https://api.figma.com/v1/files/${t}/nodes?ids=${r}`,s=await fetch(a,{headers:{Authorization:`Bearer ${e}`},method:"GET"}),l=await s.json(),c=Object.values(l.nodes)[0].document,d=await async function(e){let t=e.children;for(let r=0;r<e.children.length;r++)!1===e.children[r].visible&&delete t[r];return t=t.filter((e=>null!=e&&""!=e)),t}(c),u=d.length;var h=new Array(u+0);await(async r=>{((e,t,r,n,o)=>{for(var i=0;i<n.length;i++){let a=i;n[a],fetch(`https://api.figma.com/v1/images/${t}?ids=${n[a].id}&svg_include_id=true&format=png&scale=1`,{headers:{Authorization:`Bearer ${e}`},method:"GET"}).then((e=>e.json())).then((e=>Object.values(e.images)[0])).then((e=>{ee(e,(e=>{o({name:n[a].name,width:n[a].absoluteBoundingBox.width,height:n[a].absoluteBoundingBox.height,frameWidth:r.absoluteRenderBounds.width,frameHeight:r.absoluteRenderBounds.height,x:n[a].absoluteBoundingBox.x-r.absoluteBoundingBox.x,y:n[a].absoluteBoundingBox.y-r.absoluteBoundingBox.y,src:e,type:"image-childnode",index:a+0,id:n[a].id},a)}))}))}})(e,t,c,d,((e,t)=>{h.splice(t+0,1,e),console.log("fetched num "+i),console.log(`fetched index ${t+0}`),i++,n(`${i}/${u+0}`),i===u+0&&o(h)}))})()}async function re(e,t,r,n){var o=0;const i=`https://172.22.0.20:8222/external/${e}/${t.replaceAll(":","%253A")}/data.json`,a=await fetch(i),s=(await a.json()).nodes[0].document,l=s.children,c=l.length;var d=new Array(c);await(async e=>{((e,t,r,n)=>{for(var o=0;o<r.length;o++){let e=o;const i=r[e];console.log(i),n({name:r[e].name,width:r[e].absoluteBoundingBox.width,height:r[e].absoluteBoundingBox.height,frameWidth:t.absoluteRenderBounds.width,frameHeight:t.absoluteRenderBounds.height,x:r[e].absoluteBoundingBox.x-t.absoluteBoundingBox.x,y:r[e].absoluteBoundingBox.y-t.absoluteBoundingBox.y,src:i.src,type:"image-childnode",index:e+0,id:r[e].id},e)}})(0,s,l,((e,t)=>{d.splice(t+0,1,e),console.log("fetched num "+o),console.log(`fetched index ${t}`),o++,r(`${o}/${c}`),o===c&&n(d)}))})()}const ne="figma-authorization-code-data";class oe{constructor({clientId:e,clientSecrete:t,redirectUri:r}){if(!e)throw Error("clientId is required");if(!t)throw Error("clientSecrete is required");if(!r)throw Error("redirectUri is required");this.config={clientId:e,clientSecrete:t,redirectUri:r}}async getOAuth2Token(){const e=Math.random().toString(),t=this.getAuthorizationCode(e).then((e=>this.getAccessTokenData(e))).then((e=>this.storeAccessTokenData(e))).catch((e=>console.error(e)));return window.open(`https://www.figma.com/oauth?client_id=${this.config.clientId}&redirect_uri=${this.config.redirectUri}&scope=file_read&state=${e}&response_type=code`),t}async getAuthorizationCode(e){return new Promise(((t,r)=>{let n=null;window.addEventListener("storage",n=o=>{if(o.key===ne){const{code:i,state:a}=JSON.parse(o.newValue);window.removeEventListener("storage",n),window.localStorage.removeItem(ne),a!==e?r("STATE_MISMATCH"):t(i)}})}))}async getAccessTokenData(e){return fetch(`https://www.figma.com/api/oauth/token?client_id=${this.config.clientId}&client_secret=${this.config.clientSecrete}&redirect_uri=${this.config.redirectUri}&code=${e}&grant_type=authorization_code`,{method:"POST"}).then((e=>e.json())).then((e=>{const{access_token:t,expires_in:r}=e;return{token:t,expireOnEpoch:Date.now()+1e3*r}}))}storeAccessTokenData(e){return window.localStorage.setItem("figma-access-token-data",JSON.stringify(e)),e.token}}var ie=r(3593),ae=r(3758),se=r(8537);const le=c.ZP.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 12px;
  width: 12px;
  cursor: nwse-resize;
  z-index:9999;
`,ce=c.ZP.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: calc(100% - 12px);
  height: 4px;
  cursor: n-resize;
  z-index:9999;
`,de=c.ZP.div`
  position: absolute;
  top:0px;
  right: 0px;
  height: calc(100% - 12px);
  width: 4px;
  cursor: e-resize;
  z-index:9999;
`,ue=({minWidth:e,minHeight:t})=>{const r=(0,n.useRef)(),o=(0,n.useRef)(),i=(0,n.useRef)();function a(r,n,o){const i={w:Math.max(e,Math.floor(r.clientX)),h:Math.max(t,Math.floor(r.clientY)),vertical:n,horizontal:o};parent.postMessage({pluginMessage:{type:"resize",size:i}},"*")}return(0,n.useEffect)((()=>{if(r.current){const e=r.current;e.onpointerdown=t=>{e.onpointermove=e=>{a(e,!0,!0)},e.setPointerCapture(t.pointerId)},e.onpointerup=t=>{e.onpointermove=null,e.releasePointerCapture(t.pointerId)}}if(i.current){const e=i.current;e.onpointerdown=t=>{e.onpointermove=e=>{a(e,!1,!0)},e.setPointerCapture(t.pointerId)},e.onpointerup=t=>{e.onpointermove=null,e.releasePointerCapture(t.pointerId)}}if(o.current){const e=o.current;e.onpointerdown=t=>{e.onpointermove=e=>{a(e,!0,!1)},e.setPointerCapture(t.pointerId)},e.onpointerup=t=>{e.onpointermove=null,e.releasePointerCapture(t.pointerId)}}}),[r,i,o]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(ce,{ref:o}),(0,f.jsx)(de,{ref:i}),(0,f.jsx)(le,{ref:r})]})},he=c.ZP.div`
    background: black;
    z-index: 9999;
    bottom: 17px;
    right: 16px;
    border-radius: 12px;
    width: 246px;
    height: 184px;
    padding:8px;
    gap: 1rem;
    overflow-x: auto;
    position: absolute;
    flex-flow: row;
    align-items: baseline;
    border:1px solid #4b4b4b; // #cacaca
    display:${({isShow:e})=>e?"flex":"none"};

    ::before {       
        content: ''; 
        background-color: rgba(127,127,127,1.0);
        background-image: linear-gradient(45deg,#b0b0b0 25%,transparent 25%),linear-gradient(-45deg,#b0b0b0 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#b0b0b0 75%),linear-gradient(-45deg,transparent 75%,#b0b0b0 75%);
        background-size: 20px 20px;
        background-position: 0 0,0 10px,10px -10px,-10px 0px;
        border-radius: 6px;
        position: absolute;
        left: 8px;
        top: 8px;
        width: calc(100% - 16px);
        height: calc(100% - 50px);
    }
`,pe=c.ZP.img`
    transition:all 0.15s;
    scroll-snap-align: start;
    object-fit: contain;
    user-select: none;
    width: calc(100% - 40px);
    height: calc(100% - 77px);
    padding: 20px;
    z-index:9999;
    display:${({isSelect:e})=>e?"initial":"none"};
`,ge=c.ZP.div`
  position: absolute;
  bottom: 23px;
  right: 60px;
  width: 212px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
  line-height: 32px;
  font-family: 'Inter','Helvetica',sans-serif;
  font-size: 12px;
  font-weight: 600;
  z-index: 9999;
  text-align: left;
  user-select:none;
  display:${({isShow:e})=>e?"initial":"none"};
`,fe=c.ZP.div`
  position: absolute;
  right: 23px;
  width: 32px;
  height: 32px;
  bottom: 23px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor:pointer;
  // border: 1px solid hsl(0deg 0% 25%);
  &:hover{
    background: #40aeff;
  }
  z-index:9999;
`,me=c.ZP.svg`
  fill: ${({active:e,hover:t})=>e||t?"white":"rgba(255,255,255,0.5)"};
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 3px;
  right: 3px;

  &:hover {
    fill: white;
  }
`,xe=({active:e,hover:t})=>(0,f.jsx)(me,{active:e,hover:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 460.002 460.002",children:(0,f.jsxs)("g",{xmlns:"http://www.w3.org/2000/svg",id:"XMLID_11_",children:[(0,f.jsx)("path",{id:"XMLID_12_",d:"M195,150c27.57,0,50-22.43,50-50s-22.43-50-50-50s-50,22.43-50,50S167.43,150,195,150z"}),(0,f.jsx)("path",{id:"XMLID_13_",d:"M315,0H15C6.716,0,0,6.716,0,15v239.804c0,0.01,0,0.02,0,0.03V315c0,8.284,6.716,15,15,15h300   c8.284,0,15-6.716,15-15V15C330,6.716,323.284,0,315,0z M300,209.636l-32.957-44.388c-2.829-3.811-7.296-6.058-12.043-6.058   s-9.214,2.247-12.043,6.058l-47.531,64.016l-78.093-112.802C114.531,112.415,109.922,110,105,110s-9.531,2.415-12.333,6.462   L30,206.981V30h270V209.636z"})]})}),be=({onClick:e})=>{const[t,r]=(0,n.useState)(!1),[o,i]=(0,n.useState)(!1);return(0,f.jsx)(fe,{onClick:()=>{e(),r(!t)},onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},children:(0,f.jsx)(xe,{active:t,hover:o})})},ve=(0,n.forwardRef)((({figData:e,style:t},r)=>{const[o,i]=(0,n.useState)(!1),[a,s]=(0,n.useState)(-1),[l,c]=(0,n.useState)("empty"),d=(0,n.useRef)();return(0,n.useImperativeHandle)(r,(()=>({setSelect:e=>{s(e)},getImgLayout:()=>d.current}))),(0,n.useEffect)((()=>{0!=e.length&&c(-1!=a?e[e.length-1-a].name:"empty")}),[a]),(0,f.jsxs)("div",{id:"gallery-root",style:{...t},children:[(0,f.jsx)(he,{ref:d,isShow:o,children:e.map((({src:e,type:t,index:r,name:n})=>(0,f.jsx)(pe,{src:e,id:t+"-"+r,name:n,isSelect:a===r},t+"-"+r)))}),(0,f.jsx)(ge,{isShow:o,children:l}),0!=e.length&&(0,f.jsx)(be,{onClick:()=>{i(!o)}})]})})),we=100,ye=(0,A.getProject)("XRViewer").sheet("Light","Controller"),je=(0,A.getProject)("XRViewer").sheet("Helper","Controller"),ke=je.object(" - Helper Controller",{polarHelper:A.types.boolean(!0),dotHelper:A.types.boolean(!1),quality:A.types.stringLiteral(2,{1:"x1",2:"x2",3:"x3"}),dpr:A.types.number(1,{nudgeMultiplier:.5,range:[0,2]}),preset:A.types.stringLiteral("rembrandt",{rembrandt:"rembrandt",portrait:"portrait",upfront:"upfront",soft:"soft"}),environment:A.types.stringLiteral("sunset",{sunset:"sunset",dawn:"dawn",night:"night",warehouse:"warehouse",forest:"forest",apartment:"apartment",studio:"studio",city:"city",park:"park",lobby:"lobby"})}),Se=(0,n.forwardRef)((({containerRef:e,figmaData:t,isQuery:r,isFigma:o,isLocalServer:s,loadingProgress:l,finishedRenderingCallback:c,selectCallback:d},u)=>{const h=(0,n.useRef)(null),p=(0,n.useRef)(null),g=(0,n.useRef)(null),m=(0,n.useRef)(ke),x=(0,n.useRef)(null),b=(0,n.useRef)(null),{invalidate:v,scene:w,gl:y,camera:j}=(0,a.z)();(0,n.useImperativeHandle)(u,(()=>({saveImage:()=>{w.background=null;const t=((e,t,r,n,o,i)=>F(void 0,void 0,void 0,(function*(){var a;try{const s=e,l=t;let c=1*s,d=1*l;return 2===r&&(c=1*s,d=1*l),3===r&&(c=2*s,d=2*l),1===r&&(c=.5*s,d=.5*l),i.aspect=c/d,i.updateProjectionMatrix(),o.setSize(c,d),o.render(n,i,null,!1),a=o.domElement.toDataURL("image/png"),i.aspect=s/l,i.updateProjectionMatrix(),o.setSize(s,l),a}catch(e){return void console.log(e)}})))(e.current.clientWidth,e.current.clientHeight,Number(ke.value.quality),w,y,j);return w.background=new i.Color("#272730"),t},getCameraSheetObj:()=>g})));const k=(0,n.useCallback)((()=>{const e=0!=t.length?t[0].frameHeight/t[0].frameWidth:.5625;console.log("the screen aspect ratio is : "+e),((e,t,r,n,o)=>{const a=new i.PolarGridHelper(4*n,8,4,64,16777215,16777215);a.position.y=-r/2*n,a.position.z=n,a.visible=t.current.value.polarHelper,e.add(a);const s=new i.PlaneGeometry(8*n,8*n,Math.min(250,Math.max(40,8*n*5)),Math.min(250,Math.max(40,8*n*5)));s.rotateX(Math.PI/2);const l=new i.PointsMaterial({transparent:!1,fog:!1});l.map=function(e,t){var r=document.createElement("canvas");r.width=r.height=t;var n=r.getContext("2d"),o=new i.Texture(r);o.magFilter=i.LinearFilter,o.minFilter=i.LinearMipMapLinearFilter;var a=t/2;return n.beginPath(),n.arc(a,a,t/2,0,2*Math.PI,!1),n.closePath(),n.fillStyle="#ffffff",n.fill(),o.generateMipmaps=!0,o.needsUpdate=!0,o}(0,8*n),l.size=.00825;const c=new i.Points(s,l);c.position.y=-r/2*n,c.position.z=n,c.visible=t.current.value.dotHelper,e.add(c),o(a,c)})(w,m,e,we,((e,t)=>{m.current.onValuesChange((r=>{e.visible=r.polarHelper,t.visible=r.dotHelper,R(r.environment),y.setPixelRatio(r.dpr),v()}))}))}),[]);(0,n.useEffect)((()=>{if(!0===r){const e=2===l.split("/").length,t=l.split("/")[0]===l.split("/")[1];e&&t&&(k(),c())}else k(),c()}),[r,l]);const[S,R]=(0,n.useState)("sunset");return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(ie.qA,{files:s?`https://172.22.0.20:8222/service_1/environment/${S}.hdr`:`https://github.com/MartinRGB/MartinRGB.github.io/raw/master/FigmaImporter/environment/${S}.hdr`}),(0,f.jsxs)(B.yR,{sheet:ye,children:[(0,f.jsx)(B.Ah.ambientLight,{theatreKey:"Light - Ambient",intensity:1}),(0,f.jsx)(B.Ah.pointLight,{theatreKey:"Light - Point",intensity:0,position:[100,-50,0]}),(0,f.jsx)(B.Ah.spotLight,{theatreKey:"Light - Spot",castShadow:!0,intensity:0,angle:.2,penumbra:1,position:[0,0,500],"shadow-mapSize":[1024,1024],"shadow-bias":-1e-4}),(0,f.jsx)(B.Ah.directionalLight,{theatreKey:"Light - Directional",position:[0,0,100],intensity:0})]}),(0,f.jsx)(B.yR,{sheet:je,children:(0,f.jsx)(H,{cameraRef:h,cameraSheetObj:g,baseUnit:we,aspect:window.innerWidth/window.innerHeight})}),(0,f.jsx)(E,{orbitRef:p,cameraSheetObj:g}),!1===o?(0,f.jsx)(T,{cameraSheetObj:g,children:(0,f.jsx)(B.yR,{sheet:je,children:(0,f.jsx)(B.Ah.group,{theatreKey:"- Main Controller",ref:x,objRef:b,children:(0,f.jsx)(X,{selectCallback:e=>{d(e)},figmaData:t,isFigma:o,isQuery:r,baseUnit:we,orbitRef:p})})})}):(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(B.yR,{sheet:je,children:(0,f.jsx)(B.Ah.group,{theatreKey:"- Main Controller",ref:x,objRef:b,children:(0,f.jsx)(X,{selectCallback:e=>{d(e)},figmaData:t,isFigma:o,isQuery:r,baseUnit:we,orbitRef:p})})})}),(0,f.jsx)(ae.S,{pixelated:!0})]})})),Re=n.memo(Se),Pe=({platform:e})=>{const t=(0,n.useRef)(null),r=(0,n.useRef)(null),o=(0,n.useRef)(),[a,c]=(0,n.useState)([]),[m,x]=(0,n.useState)(!1),[b,v]=(0,n.useState)(!1),[w,y]=(0,n.useState)(!1),[j,k]=(0,n.useState)(!1),[S,R]=(0,n.useState)("0"),[P,C]=(0,n.useState)(!1),M=(0,n.useCallback)((({event:e,image:t,message:r,name:n})=>{(async(e,t,r,n)=>{F(void 0,void 0,void 0,(function*(){e&&e.preventDefault();const o=yield t;if(!o)return;const{width:i,height:a}=yield(s=o,new Promise((e=>{const t=new Image;t.onload=()=>e(t),t.src=s})));var s;const l=function(e){const t=e.split(",")[1],r=atob(t),n=new ArrayBuffer(r.length),o=new Uint8Array(n);for(let e=0;e<r.length;e++)o[e]=r.charCodeAt(e);return o}(o);return parent.postMessage({pluginMessage:{type:r,name:n,width:i,height:a,blob:l}},"*")}))})(e,t,r,n)}),[a]),E=(0,n.useCallback)((({event:e,isServe:t,data:r,imageLayout:n})=>{(async(e,t,r,n)=>{var o=document.documentElement.innerHTML,i=new Array(r.length);new Promise(((e,n)=>{if(!0===t)for(var a=0;a<i.length;a++){let t=a;if(i.splice(t,1,{name:r[t].name,width:r[t].width,height:r[t].height,frameWidth:r[t].frameWidth,frameHeight:r[t].frameHeight,x:r[t].x,y:r[t].y,src:null!=r[t].modelSrc?`./pngs/%23${t}-`+r[t].name.split("/")[r[t].name.split("/").length-1].substring(0,24)+".png":`./pngs/%23${t}-`+r[t].name.replaceAll(/\//g,"_").replaceAll(/\ /g,"_").substring(0,24)+".png",type:r[t].type,index:r[t].index,id:r[t].id,imageData:null,modelSrc:null!=r[t].modelSrc?`./models/%23${t}-`+r[t].modelSrc.split("/")[r[t].modelSrc.split("/").length-1]:null}),t===i.length-1){console.log(i);const t=o.replace(/savedFigData = \'\'/g,`savedFigData = ${JSON.stringify(i)}`).replaceAll('<div id="theatrejs-studio-root" style="position: fixed; inset: 0px; pointer-events: none; z-index: 100;"></div>',"");e({data:t,isServe:!0})}}else{let t=0;const n=(n,a,s)=>{if(i.splice(s,1,{name:r[s].name,width:r[s].width,height:r[s].height,frameWidth:r[s].frameWidth,frameHeight:r[s].frameHeight,x:r[s].x,y:r[s].y,src:a,type:r[s].type,index:r[s].index,id:r[s].id,imageData:null,modelSrc:n}),t++,t===i.length){const t=o.replace(/savedFigData = \'\'/g,`savedFigData = ${JSON.stringify(i)}`).replaceAll('<div id="theatrejs-studio-root" style="position: fixed; inset: 0px; pointer-events: none; z-index: 100;"></div>',"");e({data:t,isServe:!1})}};for(a=0;a<i.length;a++){let e=a;const t=new FileReader;t.readAsDataURL(new Blob([r[e].imageData],{type:"image/png"})),t.onloadend=()=>{null!=r[e].modelSrc?Y(r[e].modelSrc,(r=>{const o=new FileReader;o.readAsDataURL(r),o.onloadend=()=>{n(o.result,t.result,e)}})):n(null,t.result,e)}}}})).then((e=>{if(!0===e.isServe){var t=[],o=0;console.log("start");const c=(e,r,n)=>(console.log("added"),t.push({url:e,name:r,ext:n}),t),d=()=>{++o===i.length&&function(e,t){if(!t)return;const r=new(G()),n=r.folder("pngs"),o=r.folder("models");t.forEach((e=>{const t=fetch(e.url).then((e=>200===e.status?e.blob():Promise.reject(new Error(e.statusText)))),i=e.name+"."+e.ext;"html"===e.ext&&r.file(i,t),"png"===e.ext&&n.file(i,t),"gltf"!==e.ext&&"glb"!==e.ext||o.file(i,t)})),r.generateAsync({type:"blob"}).then((e=>(0,Q.saveAs)(e,"my_project"))).then((()=>{}))}(0,t)};var a=new Blob([e.data],{type:"text/html"}),s=window.URL.createObjectURL(a);t.push({url:s,name:"index",ext:"html"});for(var l=0;l<r.length;l++){let e=l;null!=r[e].modelSrc?Y(r[e].modelSrc,(o=>{t=c(URL.createObjectURL(o),`#${e}-`+r[e].modelSrc.split("/")[r[e].modelSrc.split("/").length-1].split(".")[0].substring(0,24),r[e].modelSrc.includes(".gltf")?"gltf":"glb"),t=c(n.children[e].src,`#${e}-`+r[e].modelSrc.split("/")[r[e].modelSrc.split("/").length-1].substring(0,24),"png"),d()})):(t=c(n.children[e].src,`#${e}-`+r[e].name.replaceAll(/\//g,"_").replaceAll(/\ /g,"_").substring(0,24),"png"),d())}}else a=new Blob([e.data],{type:"text/html"}),s=window.URL.createObjectURL(a),(l=document.createElement("a")).href=s,l.download="index_static.html",l.style="display: none",document.body.appendChild(l),l.click(),document.body.removeChild(l)}))})(0,t,r,n)}),[]),L=(0,n.useCallback)((()=>{console.log("successed - init with empty data"),y(!1)}),[]),D=(0,n.useCallback)((e=>{console.log("init with saved data"),x(!1),v(!1),c(J(e)),y(!1)}),[]),B=(0,n.useCallback)(((e,t)=>{if("selection"===e){if(!t)return console.log("failed - no figma selection"),()=>{};console.log("successed - init with figma data"),v(!1),y(!0);for(var r=0;r<t.data.length;r++){let e=r;t.data[e].src=URL.createObjectURL(new Blob([t.data[e].imageData],{type:"image/png"})),r===t.data.length-1&&(x(t.isFigma),c(J(t.data)),y(!1))}}if("failed"===e&&!t)return console.log("failed - get data failed"),()=>{}}),[]),A=(0,n.useCallback)(((e,t,r)=>{console.log("successed - init with query data"),x(!1),v(!0),y(!0);const n=e=>{for(let t=0;t<e.length;t++)(e[t].name.includes(".glb")||e[t].name.includes(".gltf"))&&(e[t].modelSrc=e[t].name,e[t].name=e[t].name.split("/")[e[t].name.split("/").length-1]),t===e.length-1&&(c(J(e)),y(!1))};"local_server"===e?(console.log("query - local server"),console.log(t),console.log(r),k(!0),re(t,r,(e=>{R(e)}),(e=>{n(e)}))):"auth_everytime"===e?(console.log("query - need OAuth"),new oe({clientId:"2beFW69qeg7DvjBp6bKpm5",clientSecrete:"013RerD24yjKxvSIrUr4f6dESMYST8",redirectUri:"https://martinrgb.github.io/FigmaImporter/v4/callback.html"}).getOAuth2Token().then((e=>{te(e,t,r,(e=>{R(e)}),(e=>{n(e)}))}))):(console.log("query - already exist OAuth"),te(e,t,r,(e=>{R(e)}),(e=>{n(e)})))}),[]);(0,n.useEffect)((()=>{const e=new URL(window.location.href),t=e.searchParams.get("query_key"),r=e.searchParams.get("query_node"),n=e.searchParams.get("query_token");console.log("fileKey is: "+t),console.log("nodeId is: "+r),console.log("token is: "+n),""!=savedFigData?(console.log("init with saved figma data"),D(savedFigData)):null!=t&&null!=r?(console.log("init with query data"),A(n,t,r)):(console.log("init with empty data"),L()),window.onmessage=e=>{if(null!=e.data.pluginMessage){const{type:t,value:r}=e.data.pluginMessage;console.log("init with figma app data"),B(t,r)}}}),[]);const U=e=>{"Enter VR"!==e.target.innerHTML&&"Enter AR"!==e.target.innerHTML||(document.getElementById("theatrejs-studio-root").style.display="none",document.getElementById("gallery-root").style.display="none"),"Exit VR"!==e.target.innerHTML&&"Exit AR"!==e.target.innerHTML||(document.getElementById("theatrejs-studio-root").style.display="initial",document.getElementById("gallery-root").style.display="initial")};return(0,n.useRef)(),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{}),w?(0,f.jsx)(z,{loadingProgress:`${S}`,hintText:" of total nodes is loaded"}):(0,f.jsxs)(f.Fragment,{children:[P?(0,f.jsx)(f.Fragment,{}):(0,f.jsx)(z,{hintText:"init the renderer"}),(0,f.jsxs)(n.Suspense,{fallback:(0,f.jsx)(f.Fragment,{}),children:[(0,f.jsx)(u,{children:(0,f.jsxs)(g,{ref:t,children:[(0,f.jsx)(ve,{style:{display:"none"},ref:o,figData:a}),(0,f.jsx)(h,{children:m?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{onClick:e=>{M({event:e,image:r.current.saveImage(),message:"save-canvas-image",name:a[0].name})},children:"SaveToFigma"}),(0,f.jsx)(p,{onClick:e=>{E({event:e,isServe:!0,data:a,imageLayout:o.current.getImgLayout()})},children:"Download(Serve)"}),(0,f.jsx)(p,{onClick:e=>{E({event:e,isServe:!1,data:a,imageLayout:o.current.getImgLayout()})},children:"Download(Static)"})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.vZ,{className:"xr-button",onClick:e=>{U(e)},mode:"AR"}),(0,f.jsx)(l.vZ,{className:"xr-button",onClick:e=>{U(e)},mode:"VR"})]})}),(0,f.jsx)(s.Xz,{frameloop:"demand",performance:{current:1,min:.1,max:1,debounce:200},gl:{autoClear:!0,outputEncoding:i.sRGBEncoding,antialias:!0,alpha:!0,logarithmicDepthBuffer:!0},children:(0,f.jsx)(Re,{ref:r,containerRef:t,isFigma:m,isQuery:b,isLocalServer:j,loadingProgress:S,figmaData:a,finishedRenderingCallback:()=>{C(!0)},selectCallback:e=>{}})}),(0,f.jsx)(se.j,{className:"stats"})]})}),m&&(0,f.jsx)(ue,{minWidth:512,minHeight:512})]})]})]})};var Ce=r(2654),ze=r.n(Ce),Me=r(659);ze().initialize({usePersistentStorage:!1}),ze().extend(Me.Z),window.studio=ze();const Ee=document.getElementById("react-page");(0,o.s)(Ee).render((0,f.jsx)(Pe,{platform:"xrviewer"}))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,o,i]=e[d],s=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={924:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,s,l]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var d=l(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self.webpackChunkXRViewer=self.webpackChunkXRViewer||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var o=n.O(void 0,[348,635,476],(()=>n(4118)));o=n.O(o)})();