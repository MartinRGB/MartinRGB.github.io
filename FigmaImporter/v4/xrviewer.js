(()=>{"use strict";var e,t={2015:(e,t,n)=>{var r=n(7294),o=n(745),i=n(9477),a=n(1184),s=n(5953),l=n(8412),c=n(2788);const d=c.vJ`
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
`;var f=n(5893);const m={light:{colors:{bg:"#e7edfe",fg:"#010818",stroke:"##cfdcfc"}},dark:{colors:{bg:"#010818",fg:"#e7edfe",stroke:"#041749"}}},x=window.matchMedia("(prefers-color-scheme: dark)"),b=c.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,w=c.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% + 40px));
  z-index: 1000;
  font-size:14px;
`,v=c.ZP.strong`
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
`,S=c.ZP.g`
  stroke: ${({theme:e})=>e.colors.stroke};
  transition: stroke 0.3s;
`,k=c.F4`
  from { stroke-dashoffset: 0; }
  50% { animation-timing-function: steps(1);stroke-dashoffset: -358; }
  50.01% { animation-timing-function: linear;stroke-dashoffset: 358; }
  to { troke-dashoffset: 0; }
`,P=c.F4`
  from { stroke-dashoffset: 358; }
  50% { stroke-dashoffset: 0; }
  to { stroke-dashoffset: -358; }
`,R=c.ZP.path`
  animation: ${k} 2s linear infinite;
`,z=c.ZP.path`
  animation: ${P} 2s linear infinite;
`,C=e=>{const[t,n]=(0,r.useState)("light");return console.log("isDarkMode"+x.matches),(0,r.useEffect)((()=>{n(x.matches?"dark":"light")}),[x.matches]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(c.f6,{theme:m[t],children:(0,f.jsxs)(y,{children:[(0,f.jsx)(b,{id:"loading",children:(0,f.jsxs)(j,{viewBox:"0 0 256 128",width:"256px",height:"128px",xmlns:"http://www.w3.org/2000/svg",children:[(0,f.jsxs)("defs",{children:[(0,f.jsxs)("linearGradient",{id:"grad1",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,f.jsx)("stop",{offset:"0%",stopColor:"#5ebd3e"}),(0,f.jsx)("stop",{offset:"33%",stopColor:"#ffb900"}),(0,f.jsx)("stop",{offset:"67%",stopColor:"#f78200"}),(0,f.jsx)("stop",{offset:"100%",stopColor:"#e23838"})]}),(0,f.jsxs)("linearGradient",{id:"grad2",x1:"1",y1:"0",x2:"0",y2:"0",children:[(0,f.jsx)("stop",{offset:"0%",stopColor:"#e23838"}),(0,f.jsx)("stop",{offset:"33%",stopColor:"#973999"}),(0,f.jsx)("stop",{offset:"67%",stopColor:"#009cdf"}),(0,f.jsx)("stop",{offset:"100%",stopColor:"#5ebd3e"})]})]}),(0,f.jsxs)("g",{fill:"none",strokeLinecap:"round",strokeWidth:"16",children:[(0,f.jsxs)(S,{stroke:"#ddd",children:[(0,f.jsx)("path",{d:"M8,64s0-56,60-56,60,112,120,112,60-56,60-56"}),(0,f.jsx)("path",{d:"M248,64s0-56-60-56-60,112-120,112S8,64,8,64"})]}),(0,f.jsxs)("g",{strokeDasharray:"180 656",children:[(0,f.jsx)(R,{stroke:"url(#grad1)",strokeDashoffset:"0",d:"M8,64s0-56,60-56,60,112,120,112,60-56,60-56"}),(0,f.jsx)(z,{stroke:"url(#grad2)",strokeDashoffset:"358",d:"M248,64s0-56-60-56-60,112-120,112S8,64,8,64"})]})]})]})}),(0,f.jsx)(w,{children:(0,f.jsxs)("p",{children:[e.loadingProgress?(0,f.jsx)(v,{children:e.loadingProgress}):(0,f.jsx)(f.Fragment,{}),e.hintText?e.hintText:""]})})]})})})};var M=n(3283);const E=({orbitRef:e,cameraSheetObj:t})=>{const[n,o]=(0,r.useState)(!0);return(0,a.A)((e=>{t.current.value.control?o(!0):o(!1)})),(0,f.jsx)(f.Fragment,{children:n?(0,f.jsx)(M.z,{makeDefault:!0,ref:e}):(0,f.jsx)(f.Fragment,{})})};var L=n(7433),D=n(9040),O=n(7395),$=n(6381);function U(e,t,n){const r=e.find((({type:e})=>e===n));return r||null}function A(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}let B;const F=({cameraRef:e,cameraSheetObj:t,baseUnit:n,aspect:o})=>{const s=(0,r.useRef)(null),{invalidate:l,scene:c}=((0,r.useRef)(null),(0,r.useRef)(null),(0,a.z)()),[d,u]=(0,r.useState)(o);(0,r.useLayoutEffect)((()=>{function e(){u(window.innerWidth/window.innerHeight),window.studio.transaction((({set:e})=>{console.log("set cam"),e(t.current.props.aspect,window.innerWidth/window.innerHeight)}))}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]);const[h,p]=(0,r.useState)(!0),[g,m]=(0,r.useState)(!1),x=(0,r.useRef)(e.current);return(0,r.useEffect)((()=>{const t=U(c.children,0,"CameraHelper");null===t||c.remove(t),x.current=new i.CameraHelper(e.current),c.add(x.current),((e,t)=>{const n=document.getElementById("theatrejs-studio-root").shadowRoot.children[1].children[0].children[1].children[0].children[1],r=e.children,o=U(r,0,"CameraHelper");n.removeEventListener("click",B),B=i=>(r.includes(o)?(i.stopPropagation(),new Promise((function(e,n){console.log("remove step 1 - remove helper first"),o.removeFromParent(),t(),setTimeout((()=>e(1)),1)})).then((function(e){console.log("remove step 2 - click btn second"),n.children[1].click()}))):(console.log("remove step 3 - snapshot opened"),setTimeout((()=>{const n=document.getElementById("theatrejs-studio-root").shadowRoot.children[1].children[0].children[2].children[8].children[0].children[0],i=()=>(r.includes(o)||new Promise((function(e,t){console.log("add step 1 - close window first"),setTimeout((()=>e(1)),1)})).then((function(n){console.log("add step 2 - add cameraHelper"),e.add(o),t()})),n.removeEventListener("click",i),!0);n.addEventListener("click",i)}),1)),!0),n.addEventListener("click",B)})(c,l),x.current.visible=!!g}),[h,,g]),(0,r.useEffect)((()=>{t.current.onValuesChange((t=>{p(t.isPerspective),m(t.helper),e.current&&(e.current.position.x=t.position.x,e.current.position.y=t.position.y,e.current.position.z=t.position.z,e.current.rotation.x=t.rotation.x,e.current.rotation.y=t.rotation.y,e.current.rotation.z=t.rotation.z,e.current.scale.x=t.scale.x,e.current.scale.y=t.scale.y,e.current.scale.z=t.scale.z,e.current.near=t.near,e.current.far=t.far,e.current.fov=t.fov,e.current.zoom=t.zoom,e.current.aspect=t.aspect,e.current.matrixWorldNeedsUpdate=!0,e.current.updateProjectionMatrix(),e.current.updateMatrixWorld()),x.current&&x.current.update(),t.control||s.current&&(s.current.position.x=t.position.x,s.current.position.y=t.position.y,s.current.position.z=t.position.z,s.current.rotation.x=t.rotation.x,s.current.rotation.y=t.rotation.y,s.current.rotation.z=t.rotation.z,s.current.scale.x=t.scale.x,s.current.scale.y=t.scale.y,s.current.scale.z=t.scale.z,s.current.near=t.near,s.current.far=t.far,s.current.fov=t.fov,s.current.zoom=t.zoom,s.current.aspect=t.aspect,s.current.matrixWorldNeedsUpdate=!0,s.current.updateProjectionMatrix(),s.current.updateMatrixWorld()),l()}))}),[]),(0,f.jsxs)(f.Fragment,{children:[h?(0,f.jsx)(L.c,{ref:s,makeDefault:!0,near:.01,far:1e4,fov:60,zoom:1,aspect:d,position:[0,0,n]}):(0,f.jsx)(D.i,{ref:s,makeDefault:!0,near:.01,zoom:1,far:1e4,position:[0,0,n]}),(0,f.jsx)(O.Ah.group,{theatreKey:"- Camera Controller",objRef:t,additionalProps:{control:!0,isPerspective:h,helper:g,near:.01,far:1e4,fov:60,zoom:1,aspect:$.types.number(d,{nudgeMultiplier:.1,range:[0,100]})},position:[0,0,n],children:h?(0,f.jsx)(L.c,{ref:e}):(0,f.jsx)(D.i,{ref:e})})]})};var T=n(3086);const I=({cameraSheetObj:e,children:t})=>{const{invalidate:n,scene:o,gl:i,camera:s}=(0,a.z)(),c=()=>{const{player:t,isPresenting:i,session:a}=(0,l.nH)();return(0,r.useEffect)((()=>{const r=o.children;if(i){t.visible=!1,U(r,0,"CameraHelper").visible=!1;const o=Math.sqrt(3),i=e.current.value.position.x,a=e.current.value.position.y,s=e.current.value.position.z,l=e.current.value.rotation.x,c=e.current.value.rotation.y,d=e.current.value.rotation.z,u=e.current.value.fov,h=e.current.value.zoom;t.position.x=i,t.position.y=a-1.6,t.position.z=s*Math.tan(u/(2*h)*Math.PI/180)*o,t.rotation.x=l,t.rotation.y=c,t.rotation.z=d,t.children[0].position.y=0,setTimeout((()=>{t.visible=!0,n()}),1)}}),[i]),null};return(0,f.jsxs)(l.XR,{children:[(0,f.jsx)(T.z,{rayMaterial:{color:"blue"},hideRaysOnBlur:!1}),t,(0,f.jsx)(c,{})]})};var H=n(1217),_=n(2854),W=n(4092);console.log("process env build is:"),console.log("build"),console.log("is local environment false");const V="https://vrtest.xihongxian.cn",Z=V+"/external";var q=n(8072),N=n(6732);const K=e=>{const t=(0,r.useRef)(null),n=(0,r.useRef)(null),o=(0,r.useRef)(null),[s,l]=(0,r.useState)(1),[c,d]=(0,r.useState)(1),[u,h]=(0,r.useState)(!1),{invalidate:p,scene:g,gl:m,camera:x}=(0,a.z)(),b=e.stateData?.sheetsById?.NodeTree?.staticOverrides?.byObject[`${e.name}`],w=(0,a.D)(H.E,`${e.modelSrc}`,(t=>{var n,r;console.log("finsihed model loading from:"+e.modelSrc),n=()=>{const e="https://vrtest.xihongxian.cn/service_1/decoder",n=(new _._).setDecoderPath(`${e}/draco/gltf/`),r=(new W.a).setTranscoderPath(`${e}/basis/`);n.preload(),console.log("decoderPath is "+e),t.setDRACOLoader(n),t.setKTX2Loader(r)},r=()=>{const e=`https://unpkg.com/three@0.${i.REVISION}.x/examples/js/libs`,n=(new _._).setDecoderPath(`${e}/draco/gltf/`),r=(new W.a).setTranscoderPath(`${e}/basis/`);n.preload(),console.log("decoderPath is "+e),t.setDRACOLoader(n),t.setKTX2Loader(r)},fetch("https://vrtest.xihongxian.cn/php/isLocalServer.php",{method:"get"}).then((function(e){if(e.status>=200&&e.status<300)return e.text();throw new Error(e.statusText)})).then((function(e){console.log("success"),console.log(e),"local_server"===e&&n()})).catch((e=>{console.log("failed"),console.log(e),r()}))}));(0,r.useEffect)((()=>{w&&w.scene.traverse((function(e){e.material&&e.material.map&&(e.material.map.dispose(),e.material.dispose()),e.geometry&&e.geometry.dispose()}))}),[w]);const v=(0,r.useRef)(new i.AnimationMixer(w.scene));(0,r.useEffect)((()=>{if(e.hasData&&0!=e.index){const t=(new i.Box3).setFromObject(n.current),r=t.max.x-t.min.x;d(1/r*e.baseUnit),R(n.current),h(!0),console.log("finsihed data setting"),console.log(n.current)}w.animations.forEach((e=>v.current.clipAction(e).play()))}),[e.src,e.hasData]),(0,a.A)(((e,t)=>{v?.current?.update(t),p()})),(0,r.useEffect)((()=>{o.current.onValuesChange((e=>{L.current&&L.current.update()}))}),[t]);const[y,j]=(0,r.useState)(!1),[S,k]=r.useState([]),P=S[0],R=e=>{e.traverse((function(e){e.hasOwnProperty("material")&&(e.material.userData.hasOwnProperty("originalColor")||(e.material.userData.originalColor=e.material.color))}))};(0,r.useEffect)((()=>{null!=P&&(window.studio.setSelection([o.current]),e.selectCallback(e.index))}),[P]),(0,r.useEffect)((()=>{window.studio.onSelectionChange((n=>{0!=window.studio.selection.length&&window.studio.selection[0].address.objectKey===e.name?(console.log("selected name is "+e.name),void 0===P&&k([t.current])):k([])}))}),[]);const z=()=>{window.studio.transaction((({set:e})=>{e(o.current.props.position.x,t.current.position.x),e(o.current.props.position.y,t.current.position.y),e(o.current.props.position.z,t.current.position.z),e(o.current.props.rotation.x,t.current.rotation.x),e(o.current.props.rotation.y,t.current.rotation.y),e(o.current.props.rotation.z,t.current.rotation.z),e(o.current.props.scale.x,t.current.scale.x),e(o.current.props.scale.y,t.current.scale.y),e(o.current.props.scale.z,t.current.scale.z)}))},C=(0,r.useRef)();(0,r.useEffect)((()=>{if(C.current){const t=C.current,n=t=>{e.orbitRef.current.enabled=!t.value};return t.addEventListener("dragging-changed",n),()=>t.removeEventListener("dragging-changed",n)}}));const[M,E]=(0,r.useState)(!1),L=(0,r.useRef)(null);(0,r.useEffect)((()=>{E(!!P||!!y)}),[P,y]),(0,r.useEffect)((()=>{M?(n.current.traverse((function(e){e.hasOwnProperty("material")&&(e.material.color={isColor:!0,r:1,g:.1412632911304446,b:.45641102317066595})})),null===L.current&&(L.current=new i.BoxHelper(t.current,"hotpink"),g.add(L.current))):(n.current&&n.current.traverse((function(e){e.hasOwnProperty("material")&&(e.material.color=e.material.userData.originalColor)})),g.remove(L.current),L.current=null)}),[M]);const[D,$]=(0,r.useState)(0);return(0,f.jsxs)(f.Fragment,{children:[P&&(0,f.jsx)(q.Y,{object:P,ref:C,mode:["translate","rotate","scale"][D],onMouseUp:e=>{L.current&&L.current.update(),z()},onChange:e=>{L.current&&L.current.update(),z()}}),(0,f.jsx)(N.P,{box:!0,onChangePointerUp:e=>{0!=e.length?k([t.current]):k([])},children:(0,f.jsx)(O.Ah.group,{theatreKey:e.name,name:e.name,onPointerOver:(0,r.useCallback)((e=>{e.stopPropagation(),j(!0)}),[]),onPointerOut:(0,r.useCallback)((e=>{e.stopPropagation(),j(!1)}),[]),onContextMenu:e=>{e.stopPropagation(),(e=>{if(C.current){e.stopPropagation();let t=D+1;$(t<3?t:0)}})(e)},ref:t,objRef:o,visible:u,scale:b&&b.scale?[b.scale.x,b.scale.y,b.scale.z]:[1,1,1],position:b&&b.position?[b.position.x,b.position.y,b.position.z]:[(e.x+e.width/2-e.frameWidth/2)/e.frameWidth*e.baseUnit,(e.frameHeight/2-(e.y+e.height/2))/e.frameHeight*(e.frameHeight/e.frameWidth)*e.baseUnit,5e-4*e.index*e.baseUnit],rotation:b&&b.rotation?[b.rotation.x,b.rotation.y,b.rotation.z]:[0,0,0],children:(0,f.jsx)("primitive",{ref:n,scale:u?[c*(e.width/e.frameWidth),c*(e.width/e.frameWidth),c*(e.width/e.frameWidth)]:[1,1,1],object:w.scene})})})]})},X=e=>{const[t,n]=(0,r.useState)(!1),o=(0,r.useRef)(null),s=(0,r.useRef)(null),l=(0,r.useRef)(null),c=(0,r.useRef)(null),[d,u]=(0,r.useState)(1),[h,p]=(0,r.useState)(null),[g,m]=(0,r.useState)(!1),{invalidate:x,scene:b,gl:w,camera:v}=(0,a.z)(),y=e.stateData?.sheetsById?.NodeTree?.staticOverrides?.byObject[e.name+" / geometry"],j=(e.stateData?.sheetsById?.NodeTree?.staticOverrides?.byObject[e.name+" / material"],y&&y.curve?y.curve:0),S=(0,r.useRef)({src:"",fileName:""});(0,r.useCallback)((e=>{e.needsUpdate=!0,u(e.image.height/e.image.width),e.encoding=i.sRGBEncoding,p(e),m(!0),e.dispose(),s.current.dispose(),o.current.dispose(),x()}),[]),(0,r.useEffect)((()=>{{const t=t=>{var n=new Image;n.src=t,n.onload=function(){u(n.height/n.width),n=null},fetch(t).then((e=>e.blob())).then((t=>{var n=URL.createObjectURL(new Blob([t]));S.current={src:n,fileName:`${e.name.split("-")[1]}.png`},m(!0),x(),n=null}))};!0===e.isQuery?e.hasData&&t(e.src):e.hasData?t(e.src):new Promise((function(e,t){e(function(e,t,n,r,o,a){var s=document.createElement("canvas");s.width=t,s.height=n;const l=s.getContext("2d");var c=new i.Texture(s);c.magFilter=i.LinearFilter,c.minFilter=i.LinearMipMapLinearFilter;const d=t/r,u=n/o;l.lineWidth=a,l.strokeStyle=e,l.beginPath();for(let e=0;e<=t;e+=d)0===e?(l.moveTo(a/2,0),l.lineTo(a/2,n)):(l.moveTo(e-a/2,0),l.lineTo(e-a/2,n));for(let e=0;e<=n;e+=u)0===e?(l.moveTo(0,a/2),l.lineTo(t,a/2)):(l.moveTo(0,e-a/2),l.lineTo(t,e-a/2));return l.stroke(),c.generateMipmaps=!0,c.needsUpdate=!0,c}("white",1920,1080,9,9,4).image.toDataURL("image/png"))})).then((function(e){t(e)}))}}),[e.src,e.hasData]),(0,r.useEffect)((()=>{c.current.onValuesChange((e=>{!function(e,t){0==t&&(t=1e-5);let n=.5*e.parameters.width,r=new i.Vector2(-n,0),o=new i.Vector2(0,t),a=new i.Vector2(n,0),s=(new i.Vector2).subVectors(r,o),l=(new i.Vector2).subVectors(o,a),c=(new i.Vector2).subVectors(r,a),d=s.length()*l.length()*c.length()/(2*Math.abs(s.cross(c))),u=new i.Vector2(0,t-d),h=2*((new i.Vector2).subVectors(r,u).angle()-.5*Math.PI),p=e.attributes.uv,g=e.attributes.position,f=new i.Vector2;for(let e=0;e<p.count;e++){let t=1-p.getX(e),n=g.getY(e);f.copy(a).rotateAround(u,h*t),g.setXYZ(e,f.x,n,-f.y)}g.needsUpdate=!0}(s.current,e.curve),L.current&&L.current.update()}))}),[l]);const[k,P]=(0,r.useState)(!1),[R,z]=r.useState([]),C=R[0];(0,r.useEffect)((()=>{null!=C&&(console.log(C),window.studio.setSelection([c.current]),e.selectCallback(e.index))}),[C]),(0,r.useEffect)((()=>{window.studio.onSelectionChange((t=>{const n=e.name+" / geometry";0!=window.studio.selection.length&&window.studio.selection[0].address.objectKey===n?void 0===C&&z([l.current]):z([])}))}),[]);const M=()=>{window.studio.transaction((({set:e})=>{e(c.current.props.position.x,l.current.position.x),e(c.current.props.position.y,l.current.position.y),e(c.current.props.position.z,l.current.position.z),e(c.current.props.rotation.x,l.current.rotation.x),e(c.current.props.rotation.y,l.current.rotation.y),e(c.current.props.rotation.z,l.current.rotation.z),e(c.current.props.scale.x,l.current.scale.x),e(c.current.props.scale.y,l.current.scale.y),e(c.current.props.scale.z,l.current.scale.z)}))},E=(0,r.useRef)();(0,r.useEffect)((()=>{if(E.current){const t=E.current,n=t=>{e.orbitRef.current.enabled=!t.value};return t.addEventListener("dragging-changed",n),()=>t.removeEventListener("dragging-changed",n)}}));const L=(0,r.useRef)(null);(0,r.useEffect)((()=>{n(!!C||!!k)}),[C,k]),(0,r.useEffect)((()=>{t?null===L.current&&(L.current=new i.BoxHelper(l.current,"hotpink"),b.add(L.current)):(b.remove(L.current),L.current=null)}),[t]);const[D,U]=(0,r.useState)(0);return(0,f.jsxs)(f.Fragment,{children:[C&&(0,f.jsx)(q.Y,{object:C,name:"controls",ref:E,mode:["translate","rotate","scale"][D],onMouseUp:e=>{L.current&&L.current.update(),M()},onChange:e=>{L.current&&L.current.update(),M()}}),(0,f.jsx)(N.P,{box:!0,onChangePointerUp:e=>{0!=e.length?z([l.current]):z([])},children:(0,f.jsxs)(O.Ah.mesh,{theatreKey:e.name+" / geometry",name:e.name,onPointerOver:(0,r.useCallback)((e=>{e.stopPropagation(),P(!0)}),[]),onPointerOut:(0,r.useCallback)((e=>{e.stopPropagation(),P(!1)}),[]),onContextMenu:e=>{e.stopPropagation(),(e=>{if(E.current){let e=D+1;U(e<3?e:0)}})()},ref:l,objRef:c,additionalProps:{curve:$.types.number(j,{nudgeMultiplier:e.baseUnit/100,range:[0,e.baseUnit]})},visible:g,scale:y&&y.scale?[y.scale.x,y.scale.y,y.scale.z]:[1,1,1],position:y&&y.position?[y.position.x,y.position.y,y.position.z]:e.hasData?[(e.x+e.width/2-e.frameWidth/2)/e.frameWidth*e.baseUnit,(e.frameHeight/2-(e.y+e.height/2))/e.frameHeight*(e.frameHeight/e.frameWidth)*e.baseUnit,5e-4*e.index*e.baseUnit]:[0,0,0],rotation:y&&y.rotation?[y.rotation.x,y.rotation.y,y.rotation.z]:[0,0,0],children:[(0,f.jsx)("planeGeometry",{ref:s,args:[e.hasData?e.baseUnit*(e.width/e.frameWidth):e.baseUnit,e.hasData?e.baseUnit*d*(e.width/e.frameWidth):e.baseUnit*d,40,40]}),(0,f.jsx)(O.Ah.meshStandardMaterial,{theatreKey:e.name+" / material",ref:o,alphaTest:.1,mapSrc:S.current,toneMapped:!1,color:t?"hotpink":"white"})]})})]})},G=({figmaData:e,stateData:t,isFigma:n,isQuery:r,baseUnit:o,orbitRef:i,selectCallback:a})=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(O.yR,{sheet:(0,$.getProject)("XRViewer").sheet("NodeTree","Controller"),children:0!=e.length?(0,f.jsx)(f.Fragment,{children:e.map((({type:e,index:s,name:l,x:c,y:d,width:u,height:h,frameWidth:p,frameHeight:g,src:m,modelSrc:x})=>null!=x?(0,f.jsx)(K,{src:m,name:`#${s}-`+l.split("/")[l.split("/").length-1].substring(0,24),x:0===s?0:c,y:0===s?0:d,index:s,width:u,height:h,frameWidth:p,frameHeight:g,hasData:!0,isFigma:n,isQuery:r,stateData:t,baseUnit:o,modelSrc:x,orbitRef:i,selectCallback:e=>{a(e)}},e+"-three-"+s):(0,f.jsx)(X,{src:m,name:`#${s}-`+l.replace(/\//g,"_").replace(/\ /g,"_").substring(0,24),x:0===s?0:c,y:0===s?0:d,index:s,width:u,height:h,frameWidth:p,frameHeight:g,hasData:!0,isQuery:r,stateData:t,baseUnit:o,orbitRef:i,selectCallback:e=>{a(e)}},e+"-three-"+s)))}):(0,f.jsx)(f.Fragment,{children:!0===r?(0,f.jsx)(f.Fragment,{}):(0,f.jsx)(X,{name:"Screen",hasData:!1,baseUnit:o,orbitRef:i,selectCallback:e=>{a(e)}})})})});var Q=n(5733),Y=n.n(Q),J=n(3162);async function ee(e,t){fetch(e).then((e=>e.blob())).then((n=>{var r=new Blob([n],{type:e.includes(".gltf")?"model/gltf+json":"model/gltf-binary"});t(r)}))}const te=e=>e.sort(((e,t)=>t.index-e.index));async function ne(e,t){const n=await fetch(e),r=await n.blob(),o=new FileReader;o.readAsDataURL(r),o.onloadend=()=>{t(o.result)}}async function re(e,t,n,r,o){var i=0;const a=`https://api.figma.com/v1/files/${t}/nodes?ids=${n}`,s=await fetch(a,{headers:{Authorization:`Bearer ${e}`},method:"GET"}),l=await s.json(),c=Object.values(l.nodes)[0].document,d=await async function(e){let t=e.children;for(let n=0;n<e.children.length;n++)!1===e.children[n].visible&&delete t[n];return t=t.filter((e=>null!=e&&""!=e)),t}(c),u=d.length;var h=new Array(u+0);await(async n=>{((e,t,n,r,o)=>{for(var i=0;i<r.length;i++){let a=i;r[a],fetch(`https://api.figma.com/v1/images/${t}?ids=${r[a].id}&svg_include_id=true&format=png&scale=1`,{headers:{Authorization:`Bearer ${e}`},method:"GET"}).then((e=>e.json())).then((e=>Object.values(e.images)[0])).then((e=>{ne(e,(e=>{o({name:r[a].name,width:r[a].absoluteBoundingBox.width,height:r[a].absoluteBoundingBox.height,frameWidth:n.absoluteRenderBounds.width,frameHeight:n.absoluteRenderBounds.height,x:r[a].absoluteBoundingBox.x-n.absoluteBoundingBox.x,y:r[a].absoluteBoundingBox.y-n.absoluteBoundingBox.y,src:e,type:"image-childnode",index:a+0,id:r[a].id},a)}))}))}})(e,t,c,d,((e,t)=>{h.splice(t+0,1,e),console.log("fetched num "+i),console.log(`fetched index ${t+0}`),i++,r(`${i}/${u+0}`),i===u+0&&o(h)}))})()}async function oe(e,t,n,r){var o=0;const i=`${Z}/${e}/${t.replaceAll(":","%253A")}/data.json`,a=await fetch(i),s=(await a.json()).nodes[0].document,l=s.children,c=l.length;var d=new Array(c);await(async e=>{((e,t,n,r)=>{for(var o=0;o<n.length;o++){let e=o;const i=n[e];console.log(i),r({name:n[e].name,width:n[e].absoluteBoundingBox.width,height:n[e].absoluteBoundingBox.height,frameWidth:t.absoluteRenderBounds.width,frameHeight:t.absoluteRenderBounds.height,x:n[e].absoluteBoundingBox.x-t.absoluteBoundingBox.x,y:n[e].absoluteBoundingBox.y-t.absoluteBoundingBox.y,src:i.src,type:"image-childnode",index:e+0,id:n[e].id},e)}})(0,s,l,((e,t)=>{d.splice(t+0,1,e),console.log("fetched num "+o),console.log(`fetched index ${t}`),o++,n(`${o}/${c}`),o===c&&r(d)}))})()}const ie="figma-authorization-code-data";class ae{constructor({clientId:e,clientSecrete:t,redirectUri:n}){if(!e)throw Error("clientId is required");if(!t)throw Error("clientSecrete is required");if(!n)throw Error("redirectUri is required");this.config={clientId:e,clientSecrete:t,redirectUri:n}}async getOAuth2Token(){const e=Math.random().toString(),t=this.getAuthorizationCode(e).then((e=>this.getAccessTokenData(e))).then((e=>this.storeAccessTokenData(e))).catch((e=>console.error(e)));return window.open(`https://www.figma.com/oauth?client_id=${this.config.clientId}&redirect_uri=${this.config.redirectUri}&scope=file_read&state=${e}&response_type=code`),t}async getAuthorizationCode(e){return new Promise(((t,n)=>{let r=null;window.addEventListener("storage",r=o=>{if(o.key===ie){const{code:i,state:a}=JSON.parse(o.newValue);window.removeEventListener("storage",r),window.localStorage.removeItem(ie),a!==e?n("STATE_MISMATCH"):t(i)}})}))}async getAccessTokenData(e){return fetch(`https://www.figma.com/api/oauth/token?client_id=${this.config.clientId}&client_secret=${this.config.clientSecrete}&redirect_uri=${this.config.redirectUri}&code=${e}&grant_type=authorization_code`,{method:"POST"}).then((e=>e.json())).then((e=>{const{access_token:t,expires_in:n}=e;return{token:t,expireOnEpoch:Date.now()+1e3*n}}))}storeAccessTokenData(e){return window.localStorage.setItem("figma-access-token-data",JSON.stringify(e)),e.token}}var se=n(2654),le=n.n(se),ce=n(7225),de=n(3758),ue=n(8537);const he=c.ZP.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 12px;
  width: 12px;
  cursor: nwse-resize;
  z-index:9999;
`,pe=c.ZP.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: calc(100% - 12px);
  height: 4px;
  cursor: n-resize;
  z-index:9999;
`,ge=c.ZP.div`
  position: absolute;
  top:0px;
  right: 0px;
  height: calc(100% - 12px);
  width: 4px;
  cursor: e-resize;
  z-index:9999;
`,fe=({minWidth:e,minHeight:t})=>{const n=(0,r.useRef)(),o=(0,r.useRef)(),i=(0,r.useRef)();function a(n,r,o){const i={w:Math.max(e,Math.floor(n.clientX)),h:Math.max(t,Math.floor(n.clientY)),vertical:r,horizontal:o};parent.postMessage({pluginMessage:{type:"resize",size:i}},"*")}return(0,r.useEffect)((()=>{if(n.current){const e=n.current;e.onpointerdown=t=>{e.onpointermove=e=>{a(e,!0,!0)},e.setPointerCapture(t.pointerId)},e.onpointerup=t=>{e.onpointermove=null,e.releasePointerCapture(t.pointerId)}}if(i.current){const e=i.current;e.onpointerdown=t=>{e.onpointermove=e=>{a(e,!1,!0)},e.setPointerCapture(t.pointerId)},e.onpointerup=t=>{e.onpointermove=null,e.releasePointerCapture(t.pointerId)}}if(o.current){const e=o.current;e.onpointerdown=t=>{e.onpointermove=e=>{a(e,!0,!1)},e.setPointerCapture(t.pointerId)},e.onpointerup=t=>{e.onpointermove=null,e.releasePointerCapture(t.pointerId)}}}),[n,i,o]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(pe,{ref:o}),(0,f.jsx)(ge,{ref:i}),(0,f.jsx)(he,{ref:n})]})},me=c.ZP.div`
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
`,xe=c.ZP.img`
    transition:all 0.15s;
    scroll-snap-align: start;
    object-fit: contain;
    user-select: none;
    width: calc(100% - 40px);
    height: calc(100% - 77px);
    padding: 20px;
    z-index:9999;
    display:${({isSelect:e})=>e?"initial":"none"};
`,be=c.ZP.div`
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
`,we=c.ZP.div`
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
`,ve=c.ZP.svg`
  fill: ${({active:e,hover:t})=>e||t?"white":"rgba(255,255,255,0.5)"};
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 3px;
  right: 3px;

  &:hover {
    fill: white;
  }
`,ye=({active:e,hover:t})=>(0,f.jsx)(ve,{active:e,hover:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 460.002 460.002",children:(0,f.jsxs)("g",{xmlns:"http://www.w3.org/2000/svg",id:"XMLID_11_",children:[(0,f.jsx)("path",{id:"XMLID_12_",d:"M195,150c27.57,0,50-22.43,50-50s-22.43-50-50-50s-50,22.43-50,50S167.43,150,195,150z"}),(0,f.jsx)("path",{id:"XMLID_13_",d:"M315,0H15C6.716,0,0,6.716,0,15v239.804c0,0.01,0,0.02,0,0.03V315c0,8.284,6.716,15,15,15h300   c8.284,0,15-6.716,15-15V15C330,6.716,323.284,0,315,0z M300,209.636l-32.957-44.388c-2.829-3.811-7.296-6.058-12.043-6.058   s-9.214,2.247-12.043,6.058l-47.531,64.016l-78.093-112.802C114.531,112.415,109.922,110,105,110s-9.531,2.415-12.333,6.462   L30,206.981V30h270V209.636z"})]})}),je=({onClick:e})=>{const[t,n]=(0,r.useState)(!1),[o,i]=(0,r.useState)(!1);return(0,f.jsx)(we,{onClick:()=>{e(),n(!t)},onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},children:(0,f.jsx)(ye,{active:t,hover:o})})},Se=(0,r.forwardRef)((({figData:e,style:t},n)=>{const[o,i]=(0,r.useState)(!1),[a,s]=(0,r.useState)(-1),[l,c]=(0,r.useState)("empty"),d=(0,r.useRef)();return(0,r.useImperativeHandle)(n,(()=>({setSelect:e=>{s(e)},getImgLayout:()=>d.current}))),(0,r.useEffect)((()=>{0!=e.length&&c(-1!=a?e[e.length-1-a].name:"empty")}),[a]),(0,f.jsxs)("div",{id:"gallery-root",style:{...t},children:[(0,f.jsx)(me,{ref:d,isShow:o,children:e.map((({src:e,type:t,index:n,name:r})=>(0,f.jsx)(xe,{src:e,id:t+"-"+n,name:r,isSelect:a===n},t+"-"+n)))}),(0,f.jsx)(be,{isShow:o,children:l}),0!=e.length&&(0,f.jsx)(je,{onClick:()=>{i(!o)}})]})}));const ke=100,Pe=(0,$.getProject)("XRViewer").sheet("Light","Controller"),Re=(0,$.getProject)("XRViewer").sheet("Helper","Controller"),ze=Re.object(" - Helper Controller",{polarHelper:$.types.boolean(!0),dotHelper:$.types.boolean(!1),quality:$.types.stringLiteral(2,{1:"x1",2:"x2",3:"x3"}),dpr:$.types.number(1,{nudgeMultiplier:.5,range:[0,2]}),preset:$.types.stringLiteral("rembrandt",{rembrandt:"rembrandt",portrait:"portrait",upfront:"upfront",soft:"soft"}),environment:$.types.stringLiteral("sunset",{sunset:"sunset",dawn:"dawn",night:"night",warehouse:"warehouse",forest:"forest",apartment:"apartment",studio:"studio",city:"city",park:"park",lobby:"lobby"})}),Ce=(0,r.forwardRef)((({containerRef:e,figmaData:t,stateData:n,isQuery:o,isFigma:s,isLocalServer:l,loadingProgress:c,finishedRenderingCallback:d,selectCallback:u},h)=>{const p=(0,r.useRef)(null),g=(0,r.useRef)(null),m=(0,r.useRef)(null),x=(0,r.useRef)(ze),b=(0,r.useRef)(null),w=(0,r.useRef)(null),{invalidate:v,scene:y,gl:j,camera:S}=(0,a.z)();(0,r.useImperativeHandle)(h,(()=>({saveImage:()=>{y.background=null;const t=((e,t,n,r,o,i)=>A(void 0,void 0,void 0,(function*(){var a;try{const s=e,l=t;let c=1*s,d=1*l;return 2===n&&(c=1*s,d=1*l),3===n&&(c=2*s,d=2*l),1===n&&(c=.5*s,d=.5*l),i.aspect=c/d,i.updateProjectionMatrix(),o.setSize(c,d),o.render(r,i,null,!1),a=o.domElement.toDataURL("image/png"),i.aspect=s/l,i.updateProjectionMatrix(),o.setSize(s,l),a}catch(e){return void console.log(e)}})))(e.current.clientWidth,e.current.clientHeight,Number(ze.value.quality),y,j,S);return y.background=new i.Color("#272730"),t},getCameraSheetObj:()=>m})));const k=(0,r.useCallback)((()=>{const e=0!=t.length?t[0].frameHeight/t[0].frameWidth:.5625;console.log("the screen aspect ratio is : "+e),((e,t,n,r,o)=>{const a=new i.PolarGridHelper(4*r,8,4,64,16777215,16777215);a.position.y=-n/2*r,a.position.z=r,a.visible=t.current.value.polarHelper,e.add(a);const s=new i.PlaneGeometry(8*r,8*r,Math.min(250,Math.max(40,8*r*5)),Math.min(250,Math.max(40,8*r*5)));s.rotateX(Math.PI/2);const l=new i.PointsMaterial({transparent:!1,fog:!1});l.map=function(e,t){var n=document.createElement("canvas");n.width=n.height=t;var r=n.getContext("2d"),o=new i.Texture(n);o.magFilter=i.LinearFilter,o.minFilter=i.LinearMipMapLinearFilter;var a=t/2;return r.beginPath(),r.arc(a,a,t/2,0,2*Math.PI,!1),r.closePath(),r.fillStyle="#ffffff",r.fill(),o.generateMipmaps=!0,o.needsUpdate=!0,o}(0,8*r),l.size=.00825;const c=new i.Points(s,l);c.position.y=-n/2*r,c.position.z=r,c.visible=t.current.value.dotHelper,e.add(c),o(a,c)})(y,x,e,ke,((e,t)=>{x.current.onValuesChange((n=>{e.visible=n.polarHelper,t.visible=n.dotHelper,R(n.environment),j.setPixelRatio(n.dpr),v()}))}))}),[]);(0,r.useEffect)((()=>{if(!0===o){const e=2===c.split("/").length,t=c.split("/")[0]===c.split("/")[1];e&&t&&(k(),d())}else k(),d()}),[o,c]);const[P,R]=(0,r.useState)("sunset");return(0,f.jsxs)(f.Fragment,{children:[l?(0,f.jsx)(ce.qA,{files:`${V}/service_1/environment/${P}.hdr`}):(0,f.jsx)(f.Fragment,{}),(0,f.jsxs)(O.yR,{sheet:Pe,children:[(0,f.jsx)(O.Ah.ambientLight,{theatreKey:"Light - Ambient",intensity:1}),(0,f.jsx)(O.Ah.pointLight,{theatreKey:"Light - Point",intensity:0,position:[100,-50,0]}),(0,f.jsx)(O.Ah.spotLight,{theatreKey:"Light - Spot",castShadow:!0,intensity:0,angle:.2,penumbra:1,position:[0,0,500],"shadow-mapSize":[1024,1024],"shadow-bias":-1e-4}),(0,f.jsx)(O.Ah.directionalLight,{theatreKey:"Light - Directional",position:[0,0,100],intensity:0})]}),(0,f.jsx)(O.yR,{sheet:Re,children:(0,f.jsx)(F,{cameraRef:p,cameraSheetObj:m,baseUnit:ke,aspect:window.innerWidth/window.innerHeight})}),(0,f.jsx)(E,{orbitRef:g,cameraSheetObj:m}),!1===s?(0,f.jsx)(I,{cameraSheetObj:m,children:(0,f.jsx)(O.yR,{sheet:Re,children:(0,f.jsx)(O.Ah.group,{theatreKey:"- Main Controller",ref:b,objRef:w,children:(0,f.jsx)(G,{selectCallback:e=>{u(e)},figmaData:t,stateData:n,isFigma:s,isQuery:o,baseUnit:ke,orbitRef:g})})})}):(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(O.yR,{sheet:Re,children:(0,f.jsx)(O.Ah.group,{theatreKey:"- Main Controller",ref:b,objRef:w,children:(0,f.jsx)(G,{selectCallback:e=>{u(e)},figmaData:t,isFigma:s,isQuery:o,baseUnit:ke,orbitRef:g})})})}),(0,f.jsx)(de.S,{pixelated:!0})]})})),Me=r.memo(Ce),Ee=()=>{const e=(0,r.useRef)(null),t=(0,r.useRef)(null),n=(0,r.useRef)(),[o,a]=(0,r.useState)([]),[c,m]=(0,r.useState)(null),[x,b]=(0,r.useState)(!1),[w,v]=(0,r.useState)(!1),[y,j]=(0,r.useState)(!1),[S,k]=(0,r.useState)(!1),[P,R]=(0,r.useState)("0"),[z,M]=(0,r.useState)(!1),E=(0,r.useCallback)((({event:e,image:t,message:n,name:r})=>{(async(e,t,n,r)=>{A(void 0,void 0,void 0,(function*(){e&&e.preventDefault();const o=yield t;if(!o)return;const{width:i,height:a}=yield(s=o,new Promise((e=>{const t=new Image;t.onload=()=>e(t),t.src=s})));var s;const l=function(e){const t=e.split(",")[1],n=atob(t),r=new ArrayBuffer(n.length),o=new Uint8Array(r);for(let e=0;e<n.length;e++)o[e]=n.charCodeAt(e);return o}(o);return parent.postMessage({pluginMessage:{type:n,name:r,width:i,height:a,blob:l}},"*")}))})(e,t,n,r)}),[o]),L=(0,r.useCallback)((({event:e,isServe:t,data:n,imageLayout:r})=>{(async(e,t,n,r)=>{var o=document.documentElement.innerHTML,i=new Array(n.length);new Promise(((e,r)=>{if(!0===t)for(var a=0;a<i.length;a++){let t=a;if(i.splice(t,1,{name:n[t].name,width:n[t].width,height:n[t].height,frameWidth:n[t].frameWidth,frameHeight:n[t].frameHeight,x:n[t].x,y:n[t].y,src:null!=n[t].modelSrc?`./pngs/%23${t}-`+n[t].name.split("/")[n[t].name.split("/").length-1].substring(0,24)+".png":`./pngs/%23${t}-`+n[t].name.replaceAll(/\//g,"_").replaceAll(/\ /g,"_").substring(0,24)+".png",type:n[t].type,index:n[t].index,id:n[t].id,imageData:null,modelSrc:null!=n[t].modelSrc?`./models/%23${t}-`+n[t].modelSrc.split("/")[n[t].modelSrc.split("/").length-1]:null}),t===i.length-1){console.log(i);const t=o.replace(/savedFigData = \'\'/g,`savedFigData = ${JSON.stringify(i)}`).replaceAll('<div id="theatrejs-studio-root" style="position: fixed; inset: 0px; pointer-events: none; z-index: 100;"></div>',"");e({data:t,isServe:!0})}}else{let t=0;const r=(r,a,s)=>{if(i.splice(s,1,{name:n[s].name,width:n[s].width,height:n[s].height,frameWidth:n[s].frameWidth,frameHeight:n[s].frameHeight,x:n[s].x,y:n[s].y,src:a,type:n[s].type,index:n[s].index,id:n[s].id,imageData:null,modelSrc:r}),t++,t===i.length){const t=o.replace(/savedFigData = \'\'/g,`savedFigData = ${JSON.stringify(i)}`).replaceAll('<div id="theatrejs-studio-root" style="position: fixed; inset: 0px; pointer-events: none; z-index: 100;"></div>',"");e({data:t,isServe:!1})}};for(a=0;a<i.length;a++){let e=a;const t=new FileReader;t.readAsDataURL(new Blob([n[e].imageData],{type:"image/png"})),t.onloadend=()=>{null!=n[e].modelSrc?ee(n[e].modelSrc,(n=>{const o=new FileReader;o.readAsDataURL(n),o.onloadend=()=>{r(o.result,t.result,e)}})):r(null,t.result,e)}}}})).then((e=>{if(!0===e.isServe){var t=[],o=0;console.log("start");const c=(e,n,r)=>(console.log("added"),t.push({url:e,name:n,ext:r}),t),d=()=>{++o===i.length&&function(e,t){if(!t)return;const n=new(Y()),r=n.folder("pngs"),o=n.folder("models");t.forEach((e=>{const t=fetch(e.url).then((e=>200===e.status?e.blob():Promise.reject(new Error(e.statusText)))),i=e.name+"."+e.ext;"html"===e.ext&&n.file(i,t),"png"===e.ext&&r.file(i,t),"gltf"!==e.ext&&"glb"!==e.ext||o.file(i,t)})),n.generateAsync({type:"blob"}).then((e=>(0,J.saveAs)(e,"my_project"))).then((()=>{}))}(0,t)};var a=new Blob([e.data],{type:"text/html"}),s=window.URL.createObjectURL(a);t.push({url:s,name:"index",ext:"html"});for(var l=0;l<n.length;l++){let e=l;null!=n[e].modelSrc?ee(n[e].modelSrc,(o=>{t=c(URL.createObjectURL(o),`#${e}-`+n[e].modelSrc.split("/")[n[e].modelSrc.split("/").length-1].split(".")[0].substring(0,24),n[e].modelSrc.includes(".gltf")?"gltf":"glb"),t=c(r.children[e].src,`#${e}-`+n[e].modelSrc.split("/")[n[e].modelSrc.split("/").length-1].substring(0,24),"png"),d()})):(t=c(r.children[e].src,`#${e}-`+n[e].name.replaceAll(/\//g,"_").replaceAll(/\ /g,"_").substring(0,24),"png"),d())}}else a=new Blob([e.data],{type:"text/html"}),s=window.URL.createObjectURL(a),(l=document.createElement("a")).href=s,l.download="index_static.html",l.style="display: none",document.body.appendChild(l),l.click(),document.body.removeChild(l)}))})(0,t,n,r)}),[]),D=(0,r.useCallback)((()=>{console.log("successed - init with empty data"),k(!1)}),[]),O=(0,r.useCallback)((e=>{console.log("init with saved data"),b(!1),v(!1),a(te(e)),k(!1)}),[]),$=(0,r.useCallback)(((e,t)=>{if("selection"===e){if(!t)return console.log("failed - no figma selection"),()=>{};console.log("successed - init with figma data"),v(!1),k(!0);for(var n=0;n<t.data.length;n++){let e=n;t.data[e].src=URL.createObjectURL(new Blob([t.data[e].imageData],{type:"image/png"})),n===t.data.length-1&&(b(t.isFigma),a(te(t.data)),k(!1))}}if("failed"===e&&!t)return console.log("failed - get data failed"),()=>{}}),[]),U=(0,r.useCallback)(((e,t,n)=>{console.log("successed - init with query data"),b(!1),v(!0),k(!0);const r=e=>{for(let t=0;t<e.length;t++)(e[t].name.includes(".glb")||e[t].name.includes(".gltf"))&&(e[t].modelSrc=e[t].name,e[t].name=e[t].name.split("/")[e[t].name.split("/").length-1]),t===e.length-1&&(a(te(e)),k(!1))};if("local_server"===e){console.log("query - local server"),console.log(t),console.log(n),j(!0);const e=new URL(window.location.href),o=e.searchParams.get("query_key"),i=e.searchParams.get("query_node"),a=e.searchParams.get("query_state");a?async function(e,t,n,r){const o=`${Z}/${e}/${t.replaceAll(":","%253A")}/theatre-state-${n}.json`;console.log(o);const i=await fetch(o);r(await i.json())}(o,i,a,(e=>{m(e),oe(t,n,(e=>{R(e)}),(e=>{r(e)}))})):oe(t,n,(e=>{R(e)}),(e=>{r(e)}))}else"auth_everytime"===e?(console.log("query - need OAuth"),new ae({clientId:"2beFW69qeg7DvjBp6bKpm5",clientSecrete:"013RerD24yjKxvSIrUr4f6dESMYST8",redirectUri:"https://martinrgb.github.io/FigmaImporter/v4/callback.html"}).getOAuth2Token().then((e=>{re(e,t,n,(e=>{R(e)}),(e=>{r(e)}))}))):(console.log("query - already exist OAuth"),re(e,t,n,(e=>{R(e)}),(e=>{r(e)})))}),[]);(0,r.useEffect)((()=>{const e=new URL(window.location.href),t=e.searchParams.get("query_key"),n=e.searchParams.get("query_node"),r=e.searchParams.get("query_token");console.log("fileKey is: "+t),console.log("nodeId is: "+n),console.log("token is: "+r),""!=savedFigData?(console.log("init with saved figma data"),O(savedFigData)):null!=t&&null!=n?(console.log("init with query data"),U(r,t,n)):(console.log("init with empty data"),D()),window.onmessage=e=>{if(null!=e.data.pluginMessage){const{type:t,value:n}=e.data.pluginMessage;console.log("init with figma app data"),$(t,n)}}}),[]);const B=e=>{"Enter VR"!==e.target.innerHTML&&"Enter AR"!==e.target.innerHTML||(document.getElementById("theatrejs-studio-root").style.zIndex="99999999999",document.getElementById("gallery-root").style.zIndex="99999999999"),"Exit VR"!==e.target.innerHTML&&"Exit AR"!==e.target.innerHTML||(document.getElementById("theatrejs-studio-root").style.zIndex="100",document.getElementById("gallery-root").style.zIndex="100")};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{}),S?(0,f.jsx)(C,{loadingProgress:`${P}`,hintText:" of total nodes is loaded"}):(0,f.jsxs)(f.Fragment,{children:[z?(0,f.jsx)(f.Fragment,{}):(0,f.jsx)(C,{hintText:"init the renderer"}),(0,f.jsxs)(r.Suspense,{fallback:(0,f.jsx)(f.Fragment,{}),children:[(0,f.jsx)(u,{children:(0,f.jsxs)(g,{ref:e,children:[(0,f.jsx)(Se,{style:{display:"none"},ref:n,figData:o}),(0,f.jsx)(h,{children:x?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{onClick:e=>{E({event:e,image:t.current.saveImage(),message:"save-canvas-image",name:o[0].name})},children:"SaveToFigma"}),(0,f.jsx)(p,{onClick:e=>{L({event:e,isServe:!0,data:o,imageLayout:n.current.getImgLayout()})},children:"Download(Serve)"}),(0,f.jsx)(p,{onClick:e=>{L({event:e,isServe:!1,data:o,imageLayout:n.current.getImgLayout()})},children:"Download(Static)"})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.vZ,{className:"xr-button",onClick:e=>{B(e)},mode:"AR"}),(0,f.jsx)(l.vZ,{className:"xr-button",onClick:e=>{B(e)},mode:"VR"})]})}),(0,f.jsx)(s.Xz,{frameloop:"demand",performance:{current:1,min:.1,max:1,debounce:200},gl:{autoClear:!0,outputEncoding:i.sRGBEncoding,antialias:!0,alpha:!0,logarithmicDepthBuffer:!0},children:(0,f.jsx)(Me,{ref:t,containerRef:e,isFigma:x,isQuery:w,isLocalServer:y,loadingProgress:P,figmaData:o,stateData:c,finishedRenderingCallback:()=>{M(!0)},selectCallback:e=>{}})}),(0,f.jsx)(ue.j,{className:"stats",showPanel:2})]})}),x&&(0,f.jsx)(fe,{minWidth:512,minHeight:512})]}),y?(0,f.jsx)("button",{className:"xr-button",style:{position:"absolute",left:"100px",width:"32px",height:"32px",top:"4px",zIndex:"999",fontSize:"16px",textAlign:"center",padding:"0px",border:"none"},onClick:e=>{(e=>{const t=JSON.stringify(le().createContentOfSaveFile("XRViewer"),null,2),n=new File([t],"xrviewer.theatre-project-state.json",{type:"application/json"}),r=URL.createObjectURL(n),o=new URL(window.location.href),i=o.searchParams.get("query_key"),a=o.searchParams.get("query_node");var s=new Date,l=s.getFullYear()+"-"+s.getMonth()+"-"+s.getDate()+s.getHours()+"-"+s.getMinutes()+"-"+s.getSeconds();console.log(l),async function(e,t,n,r,o,i){r(),await fetch(e).then((e=>(console.log(e),200===e.status?e.blob():Promise.reject(new Error(e.statusText))))).then((e=>{console.log(e),o(),async function(e,t,n,r){fetch(e,{method:"POST",body:t,headers:{}}).then((e=>{if(console.log(e),"OK"===e.statusText&&(r(),console.log("finished")),e.ok)return e;throw Error(`Server returned ${e.status}: ${e.statusText}`)})).catch((e=>{alert(e)}))}(`https://vrtest.xihongxian.cn/php/upload.php?fileDir=${t}&fileName=${n}`,e,0,i)}))}(r,`/external/${i}/${a}/`,`theatre-state-${l}.json`,(()=>{}),(()=>{}),(()=>{console.log("end")}));const c=new URLSearchParams(window.location.search);c.set("query_state",l),window.location.search=c})()},children:" ⇧ "}):(0,f.jsx)(f.Fragment,{})]})]})};var Le=n(659);le().initialize({usePersistentStorage:!1}),le().extend(Le.Z),window.studio=le();const De=document.getElementById("react-page");(0,o.s)(De).render((0,f.jsx)(Ee,{}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,o,i]=e[d],s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={924:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,s,l]=n,c=0;if(a.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var d=l(r)}for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},n=self.webpackChunkXRViewer=self.webpackChunkXRViewer||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var o=r.O(void 0,[348,635,671],(()=>r(2015)));o=r.O(o)})();