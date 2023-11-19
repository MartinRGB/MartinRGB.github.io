(()=>{"use strict";var e,t={2015:(e,t,r)=>{var n=r(7294),o=r(745),a=r(9477),i=r(1184),s=r(5953),l=r(8412),c=r(2788);const d=c.vJ`
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
`;var f=r(5893);const m={light:{colors:{bg:"#000",fg:"#eee",stroke:"#fff"}},dark:{colors:{bg:"#000",fg:"#eee",stroke:"#fff"}}},x=window.matchMedia("(prefers-color-scheme: dark)"),b=c.ZP.div`
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
`,y=c.ZP.strong`
  font-size: 16px;
  word-break: break-all;
`,v=c.ZP.div`
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
`,C=e=>{const[t,r]=(0,n.useState)("light");return console.log("isDarkMode"+x.matches),(0,n.useEffect)((()=>{r(x.matches?"dark":"light")}),[x.matches]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(c.f6,{theme:m[t],children:(0,f.jsxs)(v,{children:[(0,f.jsx)(b,{id:"loading",children:(0,f.jsxs)(j,{viewBox:"0 0 256 128",width:"256px",height:"128px",xmlns:"http://www.w3.org/2000/svg",children:[(0,f.jsxs)("defs",{children:[(0,f.jsxs)("linearGradient",{id:"grad1",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,f.jsx)("stop",{offset:"0%",stopColor:"#5ebd3e"}),(0,f.jsx)("stop",{offset:"33%",stopColor:"#ffb900"}),(0,f.jsx)("stop",{offset:"67%",stopColor:"#f78200"}),(0,f.jsx)("stop",{offset:"100%",stopColor:"#e23838"})]}),(0,f.jsxs)("linearGradient",{id:"grad2",x1:"1",y1:"0",x2:"0",y2:"0",children:[(0,f.jsx)("stop",{offset:"0%",stopColor:"#e23838"}),(0,f.jsx)("stop",{offset:"33%",stopColor:"#973999"}),(0,f.jsx)("stop",{offset:"67%",stopColor:"#009cdf"}),(0,f.jsx)("stop",{offset:"100%",stopColor:"#5ebd3e"})]})]}),(0,f.jsxs)("g",{fill:"none",strokeLinecap:"round",strokeWidth:"12",style:{transform:"scale(0.6)",transformOrigin:"center"},children:[(0,f.jsxs)(S,{stroke:"#ddd",children:[(0,f.jsx)("path",{d:"M8,64s0-56,60-56,60,112,120,112,60-56,60-56"}),(0,f.jsx)("path",{d:"M248,64s0-56-60-56-60,112-120,112S8,64,8,64"})]}),(0,f.jsxs)("g",{strokeDasharray:"180 656",children:[(0,f.jsx)(R,{stroke:"url(#grad1)",strokeDashoffset:"0",d:"M8,64s0-56,60-56,60,112,120,112,60-56,60-56"}),(0,f.jsx)(z,{stroke:"url(#grad2)",strokeDashoffset:"358",d:"M248,64s0-56-60-56-60,112-120,112S8,64,8,64"})]})]})]})}),(0,f.jsx)(w,{children:(0,f.jsxs)("p",{style:{fontWeight:"600",fontSize:"12px"},children:[e.loadingProgress?(0,f.jsx)(y,{children:e.loadingProgress}):(0,f.jsx)(f.Fragment,{}),e.hintText?e.hintText:""]})})]})})})};var D=r(3283);const L=({orbitRef:e,cameraSheetObj:t})=>{const[r,o]=(0,n.useState)(!0);return(0,i.A)((e=>{t.current.value.control?o(!0):o(!1)})),(0,f.jsx)(f.Fragment,{children:r?(0,f.jsx)(D.z,{makeDefault:!0,target:[0,0,-100],ref:e}):(0,f.jsx)(f.Fragment,{})})};var M=r(7433),$=r(9040),E=r(7395),O=r(6381);function A(e,t,r){const n=e.find((({type:e})=>e===r));return n||null}function U(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{l(n.next(e))}catch(e){a(e)}}function s(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}l((n=n.apply(e,t||[])).next())}))}const T=({cameraRef:e,cameraSheetObj:t,baseUnit:r,aspect:o})=>{const s=(0,n.useRef)(null),{invalidate:l,scene:c}=((0,n.useRef)(null),(0,n.useRef)(null),(0,i.z)()),[d,u]=(0,n.useState)(o);(0,n.useLayoutEffect)((()=>{function e(){u(window.innerWidth/window.innerHeight),window.studio.transaction((({set:e})=>{e(t.current.props.aspect,window.innerWidth/window.innerHeight)}))}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]);const[h,p]=(0,n.useState)(!0),[g,m]=(0,n.useState)(!1),x=(0,n.useRef)(e.current);return(0,n.useEffect)((()=>{const t=A(c.children,0,"CameraHelper");null===t||c.remove(t),x.current=new a.CameraHelper(e.current),c.add(x.current),x.current.visible=!!g}),[h,,g]),(0,n.useEffect)((()=>{t.current.onValuesChange((t=>{p(t.isPerspective),m(t.helper),e.current&&(e.current.position.x=t.position.x,e.current.position.y=t.position.y,e.current.position.z=t.position.z,e.current.rotation.x=t.rotation.x,e.current.rotation.y=t.rotation.y,e.current.rotation.z=t.rotation.z,e.current.scale.x=t.scale.x,e.current.scale.y=t.scale.y,e.current.scale.z=t.scale.z,e.current.near=t.near,e.current.far=t.far,e.current.fov=t.fov,e.current.zoom=t.zoom,e.current.aspect=t.aspect,e.current.matrixWorldNeedsUpdate=!0,e.current.updateProjectionMatrix(),e.current.updateMatrixWorld()),x.current&&x.current.update(),t.control||s.current&&(s.current.position.x=t.position.x,s.current.position.y=t.position.y,s.current.position.z=t.position.z,s.current.rotation.x=t.rotation.x,s.current.rotation.y=t.rotation.y,s.current.rotation.z=t.rotation.z,s.current.scale.x=t.scale.x,s.current.scale.y=t.scale.y,s.current.scale.z=t.scale.z,s.current.near=t.near,s.current.far=t.far,s.current.fov=t.fov,s.current.zoom=t.zoom,s.current.aspect=t.aspect,s.current.matrixWorldNeedsUpdate=!0,s.current.updateProjectionMatrix(),s.current.updateMatrixWorld()),l()}))}),[]),(0,f.jsxs)(f.Fragment,{children:[h?(0,f.jsx)(M.c,{ref:s,makeDefault:!0,near:.01,far:1e4,fov:60,zoom:1,aspect:d,position:[0,0,0]}):(0,f.jsx)($.i,{ref:s,makeDefault:!0,near:.01,zoom:1,far:1e4,position:[0,0,0]}),(0,f.jsx)(E.Ah.group,{theatreKey:"- Camera Controller",objRef:t,additionalProps:{control:!0,isPerspective:h,helper:g,near:.01,far:1e4,fov:60,zoom:1,aspect:O.types.number(d,{nudgeMultiplier:.1,range:[0,100]})},position:[0,0,0],children:h?(0,f.jsx)(M.c,{ref:e}):(0,f.jsx)($.i,{ref:e})})]})};var B=r(3086);const F=({cameraSheetObj:e,children:t,orbitRef:r})=>{const{invalidate:o,scene:a,gl:s,camera:c}=(0,i.z)(),d=(0,n.useRef)(!1),u=()=>{const{player:t,isPresenting:i,session:s}=(0,l.nH)();return(0,n.useEffect)((()=>{const n=a.children;if(i){d.current=!0,t.visible=!1,A(n,0,"CameraHelper").visible=!1;const r=Math.sqrt(3),a=e.current.value.position.x,i=e.current.value.position.y,s=e.current.value.position.z,l=e.current.value.rotation.x,c=e.current.value.rotation.y,u=e.current.value.rotation.z,h=e.current.value.fov,p=e.current.value.zoom;t.position.x=a,t.position.y=i-1.6,t.position.z=s*Math.tan(h/(2*p)*Math.PI/180)*r,t.rotation.x=l,t.rotation.y=c,t.rotation.z=u,t.children[0].position.y=0,console.log(t),setTimeout((()=>{t.visible=!0,o()}),1)}else r.current&&d.current&&(console.log(t.visible),t.visible=!1)}),[i]),null};return(0,f.jsxs)(l.XR,{children:[(0,f.jsx)(B.z,{rayMaterial:{color:"blue"},hideRaysOnBlur:!1}),t,(0,f.jsx)(u,{})]})};var I=r(1217),_=r(2854),H=r(4092);console.log("process env build is:"),console.log("build"),console.log("is local environment false");const W="https://172.25.96.1:8222",V=W+"/external";var Z=r(8072),q=r(6732);const N=(e,t)=>{fetch("https://172.25.96.1:8222/php/isLocalServer.php",{method:"get"}).then((function(e){if(e.status>=200&&e.status<300)return e.text();throw new Error(e.statusText)})).then((function(t){console.log("success"),console.log(t),"local_server"===t&&e()})).catch((e=>{console.log("failed"),console.log(e),t()}))},K=e=>{const t=(0,n.useRef)(null),r=(0,n.useRef)(null),o=(0,n.useRef)(null),[s,l]=(0,n.useState)(1),[c,d]=(0,n.useState)(1),[u,h]=(0,n.useState)(!1),{invalidate:p,scene:g,gl:m,camera:x}=(0,i.z)(),b=e.stateData?.sheetsById?.NodeTree?.staticOverrides?.byObject[`${e.name}`],w=(0,i.D)(I.E,`${e.modelSrc}`,(t=>{console.log("finsihed model loading from:"+e.modelSrc),N((()=>{const e="https://172.25.96.1:8222/service_1/decoder",r=(new _._).setDecoderPath(`${e}/draco/gltf/`),n=(new H.a).setTranscoderPath(`${e}/basis/`);r.preload(),console.log("decoderPath is "+e),t.setDRACOLoader(r),t.setKTX2Loader(n)}),(()=>{const e=`https://unpkg.com/three@0.${a.REVISION}.x/examples/js/libs`,r=(new _._).setDecoderPath(`${e}/draco/gltf/`),n=(new H.a).setTranscoderPath(`${e}/basis/`);r.preload(),console.log("decoderPath is "+e),t.setDRACOLoader(r),t.setKTX2Loader(n)})),N((()=>{const e=`${W}/service_1/decoder`,r=(new _._).setDecoderPath(`${decoderPath}/draco/gltf/`),n=(new H.a).setTranscoderPath(`${decoderPath}/basis/`);r.preload(),r.preload(),console.log("decoderPath is "+e),t.setDRACOLoader(r),t.setKTX2Loader(n)}),(()=>{const e=`https://unpkg.com/three@0.${a.REVISION}.x/examples/js/libs`,r=(new _._).setDecoderPath(`${e}/draco/gltf/`),n=(new H.a).setTranscoderPath(`${e}/basis/`);r.preload(),console.log("decoderPath is "+e),t.setDRACOLoader(r),t.setKTX2Loader(n)}))}));(0,n.useEffect)((()=>{w&&w.scene.traverse((function(e){e.material&&e.material.map&&(e.material.map.dispose(),e.material.dispose()),e.geometry&&e.geometry.dispose()}))}),[w]);const y=(0,n.useRef)(new a.AnimationMixer(w.scene));(0,n.useEffect)((()=>{if(e.hasData&&0!=e.index){const t=(new a.Box3).setFromObject(r.current),n=t.max.x-t.min.x;d(1/n*e.baseUnit),R(r.current),h(!0),console.log("finsihed data setting"),console.log(r.current)}w.animations.forEach((e=>y.current.clipAction(e).play()))}),[e.src,e.hasData]),(0,i.A)(((e,t)=>{y?.current?.update(t),p()})),(0,n.useEffect)((()=>{o.current.onValuesChange((e=>{M.current&&M.current.update()}))}),[t]);const[v,j]=(0,n.useState)(!1),[S,k]=n.useState([]),P=S[0],R=e=>{e.traverse((function(e){e.hasOwnProperty("material")&&(e.material.userData.hasOwnProperty("originalColor")||(e.material.userData.originalColor=e.material.color))}))};(0,n.useEffect)((()=>{null!=P&&(window.studio.setSelection([o.current]),e.selectCallback(e.index))}),[P]),(0,n.useEffect)((()=>{window.studio.onSelectionChange((r=>{0!=window.studio.selection.length&&window.studio.selection[0].address.objectKey===e.name?(console.log("selected name is "+e.name),void 0===P&&k([t.current])):k([])}))}),[]);const z=()=>{window.studio.transaction((({set:e})=>{e(o.current.props.position.x,t.current.position.x),e(o.current.props.position.y,t.current.position.y),e(o.current.props.position.z,t.current.position.z),e(o.current.props.rotation.x,t.current.rotation.x),e(o.current.props.rotation.y,t.current.rotation.y),e(o.current.props.rotation.z,t.current.rotation.z),e(o.current.props.scale.x,t.current.scale.x),e(o.current.props.scale.y,t.current.scale.y),e(o.current.props.scale.z,t.current.scale.z)}))},C=(0,n.useRef)();(0,n.useEffect)((()=>{if(C.current){const t=C.current,r=t=>{e.orbitRef.current.enabled=!t.value};return t.addEventListener("dragging-changed",r),()=>t.removeEventListener("dragging-changed",r)}}));const[D,L]=(0,n.useState)(!1),M=(0,n.useRef)(null);(0,n.useEffect)((()=>{L(!!P||!!v)}),[P,v]),(0,n.useEffect)((()=>{D?(r.current.traverse((function(e){e.hasOwnProperty("material")&&(e.material.color={isColor:!0,r:1,g:.1412632911304446,b:.45641102317066595})})),null===M.current&&(M.current=new a.BoxHelper(t.current,"hotpink"),g.add(M.current))):(r.current&&r.current.traverse((function(e){e.hasOwnProperty("material")&&(e.material.color=e.material.userData.originalColor)})),g.remove(M.current),M.current=null)}),[D]);const[$,O]=(0,n.useState)(0);return(0,f.jsxs)(f.Fragment,{children:[P&&(0,f.jsx)(Z.Y,{object:P,ref:C,mode:["translate","rotate","scale"][$],onMouseUp:e=>{M.current&&M.current.update(),z()},onChange:e=>{M.current&&M.current.update(),z()}}),(0,f.jsx)(q.P,{box:!0,onChangePointerUp:e=>{0!=e.length?k([t.current]):k([])},children:(0,f.jsx)(E.Ah.group,{theatreKey:e.name,name:e.name,onPointerOver:(0,n.useCallback)((e=>{e.stopPropagation(),j(!0)}),[]),onPointerOut:(0,n.useCallback)((e=>{e.stopPropagation(),j(!1)}),[]),onContextMenu:e=>{e.stopPropagation(),(e=>{if(C.current){e.stopPropagation();let t=$+1;O(t<3?t:0)}})(e)},ref:t,objRef:o,visible:u,scale:b&&b.scale?[b.scale.x,b.scale.y,b.scale.z]:[1,1,1],position:b&&b.position?[b.position.x,b.position.y,b.position.z]:[(e.x+e.width/2-e.frameWidth/2)/e.frameWidth*e.baseUnit,(e.frameHeight/2-(e.y+e.height/2))/e.frameHeight*(e.frameHeight/e.frameWidth)*e.baseUnit,5e-4*e.index*e.baseUnit-100],rotation:b&&b.rotation?[b.rotation.x,b.rotation.y,b.rotation.z]:[0,0,0],children:(0,f.jsx)("primitive",{ref:r,scale:u?[c*(e.width/e.frameWidth),c*(e.width/e.frameWidth),c*(e.width/e.frameWidth)]:[1,1,1],object:w.scene})})})]})},X=e=>{const[t,r]=(0,n.useState)(!1),o=(0,n.useRef)(null),s=(0,n.useRef)(null),l=(0,n.useRef)(null),c=(0,n.useRef)(null),[d,u]=(0,n.useState)(1),[h,p]=(0,n.useState)(null),[g,m]=(0,n.useState)(!1),{invalidate:x,scene:b,gl:w,camera:y}=(0,i.z)(),v=e.stateData?.sheetsById?.NodeTree?.staticOverrides?.byObject[e.name+" / geometry"],j=(e.stateData?.sheetsById?.NodeTree?.staticOverrides?.byObject[e.name+" / material"],v&&v.curve?v.curve:0),S=(0,n.useRef)({src:"",fileName:""});(0,n.useCallback)((e=>{e.needsUpdate=!0,u(e.image.height/e.image.width),e.encoding=a.sRGBEncoding,p(e),m(!0),e.dispose(),s.current.dispose(),o.current.dispose(),x()}),[]),(0,n.useEffect)((()=>{{const t=t=>{var r=new Image;r.src=t,r.onload=function(){u(r.height/r.width),r=null},fetch(t).then((e=>e.blob())).then((t=>{var r=URL.createObjectURL(new Blob([t]));S.current={src:r,fileName:`${e.name.split("-")[1]}.png`},m(!0),x(),r=null}))};!0===e.isQuery?e.hasData&&t(e.src):e.hasData?t(e.src):new Promise((function(e,t){e(function(e,t,r,n,o,i){var s=document.createElement("canvas");s.width=t,s.height=r;const l=s.getContext("2d");var c=new a.Texture(s);c.magFilter=a.LinearFilter,c.minFilter=a.LinearMipMapLinearFilter;const d=t/n,u=r/o;l.lineWidth=i,l.strokeStyle=e,l.beginPath();for(let e=0;e<=t;e+=d)0===e?(l.moveTo(i/2,0),l.lineTo(i/2,r)):(l.moveTo(e-i/2,0),l.lineTo(e-i/2,r));for(let e=0;e<=r;e+=u)0===e?(l.moveTo(0,i/2),l.lineTo(t,i/2)):(l.moveTo(0,e-i/2),l.lineTo(t,e-i/2));return l.stroke(),c.generateMipmaps=!0,c.needsUpdate=!0,c}("white",1920,1080,9,9,4).image.toDataURL("image/png"))})).then((function(e){t(e)}))}}),[e.src,e.hasData]),(0,n.useEffect)((()=>{c.current.onValuesChange((e=>{!function(e,t){0==t&&(t=1e-5);let r=.5*e.parameters.width,n=new a.Vector2(-r,0),o=new a.Vector2(0,t),i=new a.Vector2(r,0),s=(new a.Vector2).subVectors(n,o),l=(new a.Vector2).subVectors(o,i),c=(new a.Vector2).subVectors(n,i),d=s.length()*l.length()*c.length()/(2*Math.abs(s.cross(c))),u=new a.Vector2(0,t-d),h=2*((new a.Vector2).subVectors(n,u).angle()-.5*Math.PI),p=e.attributes.uv,g=e.attributes.position,f=new a.Vector2;for(let e=0;e<p.count;e++){let t=1-p.getX(e),r=g.getY(e);f.copy(i).rotateAround(u,h*t),g.setXYZ(e,f.x,r,-f.y)}g.needsUpdate=!0}(s.current,e.curve),M.current&&M.current.update()}))}),[l]);const[k,P]=(0,n.useState)(!1),[R,z]=n.useState([]),C=R[0];(0,n.useEffect)((()=>{null!=C&&(window.studio.setSelection([c.current]),e.selectCallback(e.index))}),[C]),(0,n.useEffect)((()=>{window.studio.onSelectionChange((t=>{const r=e.name+" / geometry";0!=window.studio.selection.length&&window.studio.selection[0].address.objectKey===r?void 0===C&&z([l.current]):z([])}))}),[]);const D=()=>{window.studio.transaction((({set:e})=>{e(c.current.props.position.x,l.current.position.x),e(c.current.props.position.y,l.current.position.y),e(c.current.props.position.z,l.current.position.z),e(c.current.props.rotation.x,l.current.rotation.x),e(c.current.props.rotation.y,l.current.rotation.y),e(c.current.props.rotation.z,l.current.rotation.z),e(c.current.props.scale.x,l.current.scale.x),e(c.current.props.scale.y,l.current.scale.y),e(c.current.props.scale.z,l.current.scale.z)}))},L=(0,n.useRef)();(0,n.useEffect)((()=>{if(L.current){const t=L.current,r=t=>{e.orbitRef.current.enabled=!t.value};return t.addEventListener("dragging-changed",r),()=>t.removeEventListener("dragging-changed",r)}}));const M=(0,n.useRef)(null);(0,n.useEffect)((()=>{r(!!C||!!k)}),[C,k]),(0,n.useEffect)((()=>{t?null===M.current&&(M.current=new a.BoxHelper(l.current,"hotpink"),b.add(M.current)):(b.remove(M.current),M.current=null)}),[t]);const[$,A]=(0,n.useState)(0);return(0,f.jsxs)(f.Fragment,{children:[C&&(0,f.jsx)(Z.Y,{object:C,name:"controls",ref:L,mode:["translate","rotate","scale"][$],onMouseUp:e=>{M.current&&M.current.update(),D()},onChange:e=>{M.current&&M.current.update(),D()}}),(0,f.jsx)(q.P,{box:!0,onChangePointerUp:e=>{0!=e.length?z([l.current]):z([])},children:(0,f.jsxs)(E.Ah.mesh,{theatreKey:e.name+" / geometry",name:e.name,onPointerOver:(0,n.useCallback)((e=>{e.stopPropagation(),P(!0)}),[]),onPointerOut:(0,n.useCallback)((e=>{e.stopPropagation(),P(!1)}),[]),onContextMenu:e=>{e.stopPropagation(),(e=>{if(L.current){let e=$+1;A(e<3?e:0)}})()},ref:l,objRef:c,additionalProps:{curve:O.types.number(j,{nudgeMultiplier:e.baseUnit/100,range:[0,e.baseUnit]})},visible:g,scale:v&&v.scale?[v.scale.x,v.scale.y,v.scale.z]:[1,1,1],position:v&&v.position?[v.position.x,v.position.y,v.position.z]:e.hasData?[(e.x+e.width/2-e.frameWidth/2)/e.frameWidth*e.baseUnit,(e.frameHeight/2-(e.y+e.height/2))/e.frameHeight*(e.frameHeight/e.frameWidth)*e.baseUnit,5e-4*e.index*e.baseUnit-100]:[0,0,-100],rotation:v&&v.rotation?[v.rotation.x,v.rotation.y,v.rotation.z]:[0,0,0],children:[(0,f.jsx)("planeGeometry",{ref:s,args:[e.hasData?e.baseUnit*(e.width/e.frameWidth):e.baseUnit,e.hasData?e.baseUnit*d*(e.width/e.frameWidth):e.baseUnit*d,40,40]}),(0,f.jsx)(E.Ah.meshStandardMaterial,{theatreKey:e.name+" / material",ref:o,alphaTest:.1,mapSrc:S.current,toneMapped:!1,color:t?"hotpink":"white"})]})})]})},G=({figmaData:e,stateData:t,isFigma:r,isQuery:n,baseUnit:o,orbitRef:a,selectCallback:i})=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(E.yR,{sheet:(0,O.getProject)("XRViewer").sheet("NodeTree","Controller"),children:0!=e.length?(0,f.jsx)(f.Fragment,{children:e.map((({type:e,index:s,name:l,x:c,y:d,width:u,height:h,frameWidth:p,frameHeight:g,src:m,modelSrc:x})=>null!=x?(0,f.jsx)(K,{src:m,name:`#${s}-`+l.split("/")[l.split("/").length-1].substring(0,24),x:0===s?0:c,y:0===s?0:d,index:s,width:u,height:h,frameWidth:p,frameHeight:g,hasData:!0,isFigma:r,isQuery:n,stateData:t,baseUnit:o,modelSrc:x,orbitRef:a,selectCallback:e=>{i(e)}},e+"-three-"+s):(0,f.jsx)(X,{src:m,name:`#${s}-`+l.replace(/\//g,"_").replace(/\ /g,"_").substring(0,24),x:0===s?0:c,y:0===s?0:d,index:s,width:u,height:h,frameWidth:p,frameHeight:g,hasData:!0,isQuery:n,stateData:t,baseUnit:o,orbitRef:a,selectCallback:e=>{i(e)}},e+"-three-"+s)))}):(0,f.jsx)(f.Fragment,{children:!0===n?(0,f.jsx)(f.Fragment,{}):(0,f.jsx)(X,{name:"Screen",hasData:!1,baseUnit:o,orbitRef:a,selectCallback:e=>{i(e)}})})})});var Q=r(5733),Y=r.n(Q),J=r(3162);async function ee(e,t){fetch(e).then((e=>e.blob())).then((r=>{var n=new Blob([r],{type:e.includes(".gltf")?"model/gltf+json":"model/gltf-binary"});t(n)}))}const te=e=>e.sort(((e,t)=>t.index-e.index));async function re(e,t){const r=await fetch(e),n=await r.blob(),o=new FileReader;o.readAsDataURL(n),o.onloadend=()=>{t(o.result)}}async function ne(e,t,r,n,o){var a=0;const i=`https://api.figma.com/v1/files/${t}/nodes?ids=${r}`,s=await fetch(i,{headers:{Authorization:`Bearer ${e}`},method:"GET"}),l=await s.json(),c=Object.values(l.nodes)[0].document,d=await async function(e){let t=e.children;for(let r=0;r<e.children.length;r++)!1===e.children[r].visible&&delete t[r];return t=t.filter((e=>null!=e&&""!=e)),t}(c),u=d.length;var h=new Array(u+0);await(async r=>{((e,t,r,n,o)=>{for(var a=0;a<n.length;a++){let i=a;n[i],fetch(`https://api.figma.com/v1/images/${t}?ids=${n[i].id}&svg_include_id=true&format=png&scale=1`,{headers:{Authorization:`Bearer ${e}`},method:"GET"}).then((e=>e.json())).then((e=>Object.values(e.images)[0])).then((e=>{re(e,(e=>{o({name:n[i].name,width:n[i].absoluteBoundingBox.width,height:n[i].absoluteBoundingBox.height,frameWidth:r.absoluteRenderBounds.width,frameHeight:r.absoluteRenderBounds.height,x:n[i].absoluteBoundingBox.x-r.absoluteBoundingBox.x,y:n[i].absoluteBoundingBox.y-r.absoluteBoundingBox.y,src:e,type:"image-childnode",index:i+0,id:n[i].id},i)}))}))}})(e,t,c,d,((e,t)=>{h.splice(t+0,1,e),console.log("fetched num "+a),console.log(`fetched index ${t+0}`),a++,n(`${a}/${u+0}`),a===u+0&&o(h)}))})()}async function oe(e,t,r,n){var o=0;const a=`${V}/${e}/${t.replaceAll(":","%253A")}/data.json`,i=await fetch(a),s=(await i.json()).nodes[0].document,l=s.children,c=l.length;var d=new Array(c);await(async e=>{((e,t,r,n)=>{for(var o=0;o<r.length;o++){let e=o;const a=r[e];console.log(a),n({name:r[e].name,width:r[e].absoluteBoundingBox.width,height:r[e].absoluteBoundingBox.height,frameWidth:t.absoluteRenderBounds.width,frameHeight:t.absoluteRenderBounds.height,x:r[e].absoluteBoundingBox.x-t.absoluteBoundingBox.x,y:r[e].absoluteBoundingBox.y-t.absoluteBoundingBox.y,src:a.src,type:"image-childnode",index:e+0,id:r[e].id},e)}})(0,s,l,((e,t)=>{d.splice(t+0,1,e),console.log("fetched num "+o),console.log(`fetched index ${t}`),o++,r(`${o}/${c}`),o===c&&n(d)}))})()}const ae="figma-authorization-code-data";class ie{constructor({clientId:e,clientSecrete:t,redirectUri:r}){if(!e)throw Error("clientId is required");if(!t)throw Error("clientSecrete is required");if(!r)throw Error("redirectUri is required");this.config={clientId:e,clientSecrete:t,redirectUri:r}}async getOAuth2Token(){const e=Math.random().toString(),t=this.getAuthorizationCode(e).then((e=>this.getAccessTokenData(e))).then((e=>this.storeAccessTokenData(e))).catch((e=>console.error(e)));return window.open(`https://www.figma.com/oauth?client_id=${this.config.clientId}&redirect_uri=${this.config.redirectUri}&scope=file_read&state=${e}&response_type=code`),t}async getAuthorizationCode(e){return new Promise(((t,r)=>{let n=null;window.addEventListener("storage",n=o=>{if(o.key===ae){const{code:a,state:i}=JSON.parse(o.newValue);window.removeEventListener("storage",n),window.localStorage.removeItem(ae),i!==e?r("STATE_MISMATCH"):t(a)}})}))}async getAccessTokenData(e){return fetch(`https://www.figma.com/api/oauth/token?client_id=${this.config.clientId}&client_secret=${this.config.clientSecrete}&redirect_uri=${this.config.redirectUri}&code=${e}&grant_type=authorization_code`,{method:"POST"}).then((e=>e.json())).then((e=>{const{access_token:t,expires_in:r}=e;return{token:t,expireOnEpoch:Date.now()+1e3*r}}))}storeAccessTokenData(e){return window.localStorage.setItem("figma-access-token-data",JSON.stringify(e)),e.token}}var se=r(2654),le=r.n(se),ce=r(7225),de=r(3758),ue=r(8537);const he=c.ZP.div`
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
`,fe=({minWidth:e,minHeight:t})=>{const r=(0,n.useRef)(),o=(0,n.useRef)(),a=(0,n.useRef)();function i(r,n,o){const a={w:Math.max(e,Math.floor(r.clientX)),h:Math.max(t,Math.floor(r.clientY)),vertical:n,horizontal:o};parent.postMessage({pluginMessage:{type:"resize",size:a}},"*")}return(0,n.useEffect)((()=>{if(r.current){const e=r.current;e.onpointerdown=t=>{e.onpointermove=e=>{i(e,!0,!0)},e.setPointerCapture(t.pointerId)},e.onpointerup=t=>{e.onpointermove=null,e.releasePointerCapture(t.pointerId)}}if(a.current){const e=a.current;e.onpointerdown=t=>{e.onpointermove=e=>{i(e,!1,!0)},e.setPointerCapture(t.pointerId)},e.onpointerup=t=>{e.onpointermove=null,e.releasePointerCapture(t.pointerId)}}if(o.current){const e=o.current;e.onpointerdown=t=>{e.onpointermove=e=>{i(e,!0,!1)},e.setPointerCapture(t.pointerId)},e.onpointerup=t=>{e.onpointermove=null,e.releasePointerCapture(t.pointerId)}}}),[r,a,o]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(pe,{ref:o}),(0,f.jsx)(ge,{ref:a}),(0,f.jsx)(he,{ref:r})]})},me=c.ZP.div`
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
`,ye=c.ZP.svg`
  fill: ${({active:e,hover:t})=>e||t?"white":"rgba(255,255,255,0.5)"};
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 3px;
  right: 3px;

  &:hover {
    fill: white;
  }
`,ve=({active:e,hover:t})=>(0,f.jsx)(ye,{active:e,hover:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 460.002 460.002",children:(0,f.jsxs)("g",{xmlns:"http://www.w3.org/2000/svg",id:"XMLID_11_",children:[(0,f.jsx)("path",{id:"XMLID_12_",d:"M195,150c27.57,0,50-22.43,50-50s-22.43-50-50-50s-50,22.43-50,50S167.43,150,195,150z"}),(0,f.jsx)("path",{id:"XMLID_13_",d:"M315,0H15C6.716,0,0,6.716,0,15v239.804c0,0.01,0,0.02,0,0.03V315c0,8.284,6.716,15,15,15h300   c8.284,0,15-6.716,15-15V15C330,6.716,323.284,0,315,0z M300,209.636l-32.957-44.388c-2.829-3.811-7.296-6.058-12.043-6.058   s-9.214,2.247-12.043,6.058l-47.531,64.016l-78.093-112.802C114.531,112.415,109.922,110,105,110s-9.531,2.415-12.333,6.462   L30,206.981V30h270V209.636z"})]})}),je=({onClick:e})=>{const[t,r]=(0,n.useState)(!1),[o,a]=(0,n.useState)(!1);return(0,f.jsx)(we,{onClick:()=>{e(),r(!t)},onMouseEnter:()=>{a(!0)},onMouseLeave:()=>{a(!1)},children:(0,f.jsx)(ve,{active:t,hover:o})})},Se=(0,n.forwardRef)((({figData:e,style:t},r)=>{const[o,a]=(0,n.useState)(!1),[i,s]=(0,n.useState)(-1),[l,c]=(0,n.useState)("empty"),d=(0,n.useRef)();return(0,n.useImperativeHandle)(r,(()=>({setSelect:e=>{s(e)},getImgLayout:()=>d.current}))),(0,n.useEffect)((()=>{0!=e.length&&c(-1!=i?e[e.length-1-i].name:"empty")}),[i]),(0,f.jsxs)("div",{id:"gallery-root",style:{...t},children:[(0,f.jsx)(me,{ref:d,isShow:o,children:e.map((({src:e,type:t,index:r,name:n})=>(0,f.jsx)(xe,{src:e,id:t+"-"+r,name:n,isSelect:i===r},t+"-"+r)))}),(0,f.jsx)(be,{isShow:o,children:l}),0!=e.length&&(0,f.jsx)(je,{onClick:()=>{a(!o)}})]})}));const ke=100,Pe=(0,O.getProject)("XRViewer").sheet("Light","Controller"),Re=(0,O.getProject)("XRViewer").sheet("Helper","Controller"),ze=Re.object(" - Helper Controller",{polarHelper:O.types.boolean(!0),dotHelper:O.types.boolean(!1),quality:O.types.stringLiteral(2,{1:"x1",2:"x2",3:"x3"}),dpr:O.types.number(1,{nudgeMultiplier:.5,range:[0,2]}),preset:O.types.stringLiteral("rembrandt",{rembrandt:"rembrandt",portrait:"portrait",upfront:"upfront",soft:"soft"}),environment:O.types.stringLiteral("sunset",{sunset:"sunset",dawn:"dawn",night:"night",warehouse:"warehouse",forest:"forest",apartment:"apartment",studio:"studio",city:"city",park:"park",lobby:"lobby"})}),Ce=(0,n.forwardRef)((({containerRef:e,figmaData:t,stateData:r,isQuery:o,isFigma:s,isLocalServer:l,loadingProgress:c,finishedRenderingCallback:d,selectCallback:u},h)=>{const p=(0,n.useRef)(null),g=(0,n.useRef)(null),m=(0,n.useRef)(null),x=(0,n.useRef)(null),b=(0,n.useRef)(ze),w=(0,n.useRef)(null),{invalidate:y,scene:v,gl:j,camera:S}=(0,i.z)();(0,n.useImperativeHandle)(h,(()=>({saveImage:()=>{v.background=null;const t=((e,t,r,n,o,a)=>U(void 0,void 0,void 0,(function*(){var i;try{const s=e,l=t;let c=1*s,d=1*l;return 2===r&&(c=1*s,d=1*l),3===r&&(c=2*s,d=2*l),1===r&&(c=.5*s,d=.5*l),a.aspect=c/d,a.updateProjectionMatrix(),o.setSize(c,d),o.render(n,a,null,!1),i=o.domElement.toDataURL("image/png"),a.aspect=s/l,a.updateProjectionMatrix(),o.setSize(s,l),i}catch(e){return void console.log(e)}})))(e.current.clientWidth,e.current.clientHeight,Number(ze.value.quality),v,j,S);return v.background=new a.Color("#272730"),t},getCameraSheetObj:()=>x})));const k=(0,n.useCallback)((()=>{const e=0!=t.length?t[0].frameHeight/t[0].frameWidth:.5625;console.log("the screen aspect ratio is : "+e),((e,t,r,n,o)=>{const i=new a.PolarGridHelper(4*n,8,4,64,16777215,16777215);i.position.y=-r/2*n,i.position.z=0,i.visible=t.current.value.polarHelper,e.add(i);const s=new a.PlaneGeometry(8*n,8*n,Math.min(250,Math.max(40,8*n*5)),Math.min(250,Math.max(40,8*n*5)));s.rotateX(Math.PI/2);const l=new a.PointsMaterial({transparent:!1,fog:!1});l.map=function(e,t){var r=document.createElement("canvas");r.width=r.height=t;var n=r.getContext("2d"),o=new a.Texture(r);o.magFilter=a.LinearFilter,o.minFilter=a.LinearMipMapLinearFilter;var i=t/2;return n.beginPath(),n.arc(i,i,t/2,0,2*Math.PI,!1),n.closePath(),n.fillStyle="#ffffff",n.fill(),o.generateMipmaps=!0,o.needsUpdate=!0,o}(0,8*n),l.size=.00825;const c=new a.Points(s,l);c.position.y=-r/2*n,c.position.z=0,c.visible=t.current.value.dotHelper,e.add(c),o(i,c)})(v,b,e,ke,((e,t)=>{b.current.onValuesChange((r=>{e.visible=r.polarHelper,t.visible=r.dotHelper,R(r.environment),j.setPixelRatio(r.dpr),y()}))}))}),[]);(0,n.useEffect)((()=>{if(!0===o){const e=2===c.split("/").length,t=c.split("/")[0]===c.split("/")[1];e&&t&&(k(),d())}else k(),d()}),[o,c]);const[P,R]=(0,n.useState)("sunset");return(0,f.jsxs)(f.Fragment,{children:[l?(0,f.jsx)(ce.qA,{files:`${W}/service_1/environment/${P}.hdr`}):(0,f.jsx)(f.Fragment,{}),(0,f.jsxs)(E.yR,{sheet:Pe,children:[(0,f.jsx)(E.Ah.ambientLight,{theatreKey:"Light - Ambient",intensity:1}),(0,f.jsx)(E.Ah.pointLight,{theatreKey:"Light - Point",intensity:0,position:[100,-50,0]}),(0,f.jsx)(E.Ah.spotLight,{theatreKey:"Light - Spot",castShadow:!0,intensity:0,angle:.2,penumbra:1,position:[0,0,500],"shadow-mapSize":[1024,1024],"shadow-bias":-1e-4}),(0,f.jsx)(E.Ah.directionalLight,{theatreKey:"Light - Directional",position:[0,0,100],intensity:0})]}),(0,f.jsx)(E.yR,{sheet:Re,children:(0,f.jsx)(T,{cameraRef:p,cameraSheetObj:x,baseUnit:ke,aspect:window.innerWidth/window.innerHeight})}),(0,f.jsx)(L,{orbitRef:g,cameraSheetObj:x}),!1===s?(0,f.jsx)(F,{cameraSheetObj:x,orbitRef:g,children:(0,f.jsx)(E.yR,{sheet:Re,children:(0,f.jsx)(E.Ah.group,{theatreKey:"- Main Controller",ref:m,objRef:w,children:(0,f.jsx)(G,{selectCallback:e=>{u(e)},figmaData:t,stateData:r,isFigma:s,isQuery:o,baseUnit:ke,orbitRef:g})})})}):(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(E.yR,{sheet:Re,children:(0,f.jsx)(E.Ah.group,{theatreKey:"- Main Controller",ref:m,objRef:w,children:(0,f.jsx)(G,{selectCallback:e=>{u(e)},figmaData:t,isFigma:s,isQuery:o,baseUnit:ke,orbitRef:g})})})}),(0,f.jsx)(de.S,{pixelated:!0})]})})),De=n.memo(Ce),Le=()=>{const e=(0,n.useRef)(null),t=(0,n.useRef)(null),r=(0,n.useRef)(),[o,i]=(0,n.useState)([]),[c,m]=(0,n.useState)(null),[x,b]=(0,n.useState)(!1),[w,y]=(0,n.useState)(!1),[v,j]=(0,n.useState)(!1),[S,k]=(0,n.useState)(!1),[P,R]=(0,n.useState)("0"),[z,D]=(0,n.useState)(!1),L=(0,n.useCallback)((({event:e,image:t,message:r,name:n})=>{(async(e,t,r,n)=>{U(void 0,void 0,void 0,(function*(){e&&e.preventDefault();const o=yield t;if(!o)return;const{width:a,height:i}=yield(s=o,new Promise((e=>{const t=new Image;t.onload=()=>e(t),t.src=s})));var s;const l=function(e){const t=e.split(",")[1],r=atob(t),n=new ArrayBuffer(r.length),o=new Uint8Array(n);for(let e=0;e<r.length;e++)o[e]=r.charCodeAt(e);return o}(o);return parent.postMessage({pluginMessage:{type:r,name:n,width:a,height:i,blob:l}},"*")}))})(e,t,r,n)}),[o]),M=(0,n.useCallback)((({event:e,isServe:t,data:r,imageLayout:n})=>{(async(e,t,r,n)=>{var o=document.documentElement.innerHTML,a=new Array(r.length);new Promise(((e,n)=>{if(!0===t)for(var i=0;i<a.length;i++){let t=i;if(a.splice(t,1,{name:r[t].name,width:r[t].width,height:r[t].height,frameWidth:r[t].frameWidth,frameHeight:r[t].frameHeight,x:r[t].x,y:r[t].y,src:null!=r[t].modelSrc?`./pngs/%23${t}-`+r[t].name.split("/")[r[t].name.split("/").length-1].substring(0,24)+".png":`./pngs/%23${t}-`+r[t].name.replaceAll(/\//g,"_").replaceAll(/\ /g,"_").substring(0,24)+".png",type:r[t].type,index:r[t].index,id:r[t].id,imageData:null,modelSrc:null!=r[t].modelSrc?`./models/%23${t}-`+r[t].modelSrc.split("/")[r[t].modelSrc.split("/").length-1]:null}),t===a.length-1){console.log(a);const t=o.replace(/savedFigData = \'\'/g,`savedFigData = ${JSON.stringify(a)}`).replaceAll('<div id="theatrejs-studio-root" style="position: fixed; inset: 0px; pointer-events: none; z-index: 100;"></div>',"");e({data:t,isServe:!0})}}else{let t=0;const n=(n,i,s)=>{if(a.splice(s,1,{name:r[s].name,width:r[s].width,height:r[s].height,frameWidth:r[s].frameWidth,frameHeight:r[s].frameHeight,x:r[s].x,y:r[s].y,src:i,type:r[s].type,index:r[s].index,id:r[s].id,imageData:null,modelSrc:n}),t++,t===a.length){const t=o.replace(/savedFigData = \'\'/g,`savedFigData = ${JSON.stringify(a)}`).replaceAll('<div id="theatrejs-studio-root" style="position: fixed; inset: 0px; pointer-events: none; z-index: 100;"></div>',"");e({data:t,isServe:!1})}};for(i=0;i<a.length;i++){let e=i;const t=new FileReader;t.readAsDataURL(new Blob([r[e].imageData],{type:"image/png"})),t.onloadend=()=>{null!=r[e].modelSrc?ee(r[e].modelSrc,(r=>{const o=new FileReader;o.readAsDataURL(r),o.onloadend=()=>{n(o.result,t.result,e)}})):n(null,t.result,e)}}}})).then((e=>{if(!0===e.isServe){var t=[],o=0;console.log("start");const c=(e,r,n)=>(console.log("added"),t.push({url:e,name:r,ext:n}),t),d=()=>{++o===a.length&&function(e,t){if(!t)return;const r=new(Y()),n=r.folder("pngs"),o=r.folder("models");t.forEach((e=>{const t=fetch(e.url).then((e=>200===e.status?e.blob():Promise.reject(new Error(e.statusText)))),a=e.name+"."+e.ext;"html"===e.ext&&r.file(a,t),"png"===e.ext&&n.file(a,t),"gltf"!==e.ext&&"glb"!==e.ext||o.file(a,t)})),r.generateAsync({type:"blob"}).then((e=>(0,J.saveAs)(e,"my_project"))).then((()=>{}))}(0,t)};var i=new Blob([e.data],{type:"text/html"}),s=window.URL.createObjectURL(i);t.push({url:s,name:"index",ext:"html"});for(var l=0;l<r.length;l++){let e=l;null!=r[e].modelSrc?ee(r[e].modelSrc,(o=>{t=c(URL.createObjectURL(o),`#${e}-`+r[e].modelSrc.split("/")[r[e].modelSrc.split("/").length-1].split(".")[0].substring(0,24),r[e].modelSrc.includes(".gltf")?"gltf":"glb"),t=c(n.children[e].src,`#${e}-`+r[e].modelSrc.split("/")[r[e].modelSrc.split("/").length-1].substring(0,24),"png"),d()})):(t=c(n.children[e].src,`#${e}-`+r[e].name.replaceAll(/\//g,"_").replaceAll(/\ /g,"_").substring(0,24),"png"),d())}}else i=new Blob([e.data],{type:"text/html"}),s=window.URL.createObjectURL(i),(l=document.createElement("a")).href=s,l.download="index_static.html",l.style="display: none",document.body.appendChild(l),l.click(),document.body.removeChild(l)}))})(0,t,r,n)}),[]),$=(0,n.useCallback)((()=>{console.log("successed - init with empty data"),k(!1)}),[]),E=(0,n.useCallback)((e=>{console.log("init with saved data"),b(!1),y(!1),i(te(e)),k(!1)}),[]),O=(0,n.useCallback)(((e,t)=>{if("selection"===e){if(!t)return console.log("failed - no figma selection"),()=>{};console.log("successed - init with figma data"),y(!1),k(!0);for(var r=0;r<t.data.length;r++){let e=r;t.data[e].src=URL.createObjectURL(new Blob([t.data[e].imageData],{type:"image/png"})),r===t.data.length-1&&(b(t.isFigma),i(te(t.data)),k(!1))}}if("failed"===e&&!t)return console.log("failed - get data failed"),()=>{}}),[]),A=(0,n.useCallback)(((e,t,r)=>{console.log("successed - init with query data"),b(!1),y(!0),k(!0);const n=e=>{for(let t=0;t<e.length;t++)(e[t].name.includes(".glb")||e[t].name.includes(".gltf"))&&(e[t].modelSrc=e[t].name,e[t].name=e[t].name.split("/")[e[t].name.split("/").length-1]),t===e.length-1&&(i(te(e)),k(!1))};if("local_server"===e){console.log("query - local server"),console.log(t),console.log(r),j(!0);const e=new URL(window.location.href),o=e.searchParams.get("query_key"),a=e.searchParams.get("query_node"),i=e.searchParams.get("query_state");i?async function(e,t,r,n){const o=`${V}/${e}/${t.replaceAll(":","%253A")}/theatre-state-${r}.json`;console.log(o);const a=await fetch(o);n(await a.json())}(o,a,i,(e=>{m(e),oe(t,r,(e=>{R(e)}),(e=>{n(e)}))})):oe(t,r,(e=>{R(e)}),(e=>{n(e)}))}else"auth_everytime"===e?(console.log("query - need OAuth"),new ie({clientId:"2beFW69qeg7DvjBp6bKpm5",clientSecrete:"013RerD24yjKxvSIrUr4f6dESMYST8",redirectUri:"https://martinrgb.github.io/FigmaImporter/v4/callback.html"}).getOAuth2Token().then((e=>{ne(e,t,r,(e=>{R(e)}),(e=>{n(e)}))}))):(console.log("query - already exist OAuth"),ne(e,t,r,(e=>{R(e)}),(e=>{n(e)})))}),[]);(0,n.useEffect)((()=>{const e=new URL(window.location.href),t=e.searchParams.get("query_key"),r=e.searchParams.get("query_node"),n=e.searchParams.get("query_token");console.log("fileKey is: "+t),console.log("nodeId is: "+r),console.log("token is: "+n),""!=savedFigData?(console.log("init with saved figma data"),E(savedFigData)):null!=t&&null!=r?(console.log("init with query data"),A(n,t,r)):(console.log("init with empty data"),$()),window.onmessage=e=>{if(null!=e.data.pluginMessage){const{type:t,value:r}=e.data.pluginMessage;console.log("init with figma app data"),O(t,r)}}}),[]);const T=e=>{"Enter VR"!==e.target.innerHTML&&"Enter AR"!==e.target.innerHTML||(document.getElementById("theatrejs-studio-root").style.zIndex="99999999999",document.getElementById("gallery-root").style.zIndex="99999999999"),"Exit VR"!==e.target.innerHTML&&"Exit AR"!==e.target.innerHTML||(document.getElementById("theatrejs-studio-root").style.zIndex="100",document.getElementById("gallery-root").style.zIndex="100")};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{}),S?(0,f.jsx)(C,{loadingProgress:`${P}`,hintText:" of total nodes is loaded"}):(0,f.jsxs)(f.Fragment,{children:[z?(0,f.jsx)(f.Fragment,{}):(0,f.jsx)(C,{hintText:"loading"}),(0,f.jsxs)(n.Suspense,{fallback:(0,f.jsx)(f.Fragment,{}),children:[(0,f.jsx)(u,{children:(0,f.jsxs)(g,{ref:e,children:[(0,f.jsx)(Se,{style:{display:"none"},ref:r,figData:o}),(0,f.jsx)(h,{children:x?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{onClick:e=>{L({event:e,image:t.current.saveImage(),message:"save-canvas-image",name:o[0].name})},children:"Screenshot"}),(0,f.jsx)(p,{onClick:e=>{M({event:e,isServe:!0,data:o,imageLayout:r.current.getImgLayout()})},children:"Download(Serve)"}),(0,f.jsx)(p,{onClick:e=>{M({event:e,isServe:!1,data:o,imageLayout:r.current.getImgLayout()})},children:"Download(Static)"})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.vZ,{className:"xr-button",onClick:e=>{T(e)},mode:"AR"}),(0,f.jsx)(l.vZ,{className:"xr-button",onClick:e=>{T(e)},mode:"VR"})]})}),(0,f.jsx)(s.Xz,{frameloop:"demand",performance:{current:1,min:.1,max:1,debounce:200},gl:{autoClear:!0,outputEncoding:a.sRGBEncoding,antialias:!0,alpha:!0,logarithmicDepthBuffer:!0},children:(0,f.jsx)(De,{ref:t,containerRef:e,isFigma:x,isQuery:w,isLocalServer:v,loadingProgress:P,figmaData:o,stateData:c,finishedRenderingCallback:()=>{D(!0)},selectCallback:e=>{}})}),(0,f.jsx)(ue.j,{className:"stats",showPanel:0})]})}),x&&(0,f.jsx)(fe,{minWidth:512,minHeight:512})]}),v?(0,f.jsx)("button",{className:"xr-button",style:{position:"absolute",left:"44px",width:"50px",height:"32px",top:"4px",zIndex:"999",fontSize:"12px",textAlign:"center",padding:"0px",border:"none",color:"rgba(255,255,255,0.9)"},onClick:e=>{(e=>{const t=JSON.stringify(le().createContentOfSaveFile("XRViewer"),null,2),r=new File([t],"xrviewer.theatre-project-state.json",{type:"application/json"}),n=URL.createObjectURL(r),o=new URL(window.location.href),a=o.searchParams.get("query_key"),i=o.searchParams.get("query_node");var s=new Date,l=s.getFullYear()+"-"+s.getMonth()+"-"+s.getDate()+s.getHours()+"-"+s.getMinutes()+"-"+s.getSeconds();console.log(l),async function(e,t,r,n,o,a){n(),await fetch(e).then((e=>(console.log(e),200===e.status?e.blob():Promise.reject(new Error(e.statusText))))).then((e=>{console.log(e),o(),async function(e,t,r,n){fetch(e,{method:"POST",body:t,headers:{}}).then((e=>{if(console.log(e),"OK"===e.statusText&&(n(),console.log("finished")),e.ok)return e;throw Error(`Server returned ${e.status}: ${e.statusText}`)})).catch((e=>{alert(e)}))}(`https://172.25.96.1:8222/php/upload.php?fileDir=${t}&fileName=${r}`,e,0,a)}))}(n,`/external/${a}/${i}/`,`theatre-state-${l}.json`,(()=>{}),(()=>{}),(()=>{console.log("end")}));const c=new URLSearchParams(window.location.search);c.set("query_state",l),window.location.search=c})()},children:"Save"}):(0,f.jsx)(f.Fragment,{})]})]})};var Me=r(659);le().initialize({usePersistentStorage:!1}),le().extend(Me.Z),window.studio=le();const $e=document.getElementById("react-page");(0,o.s)($e).render((0,f.jsx)(Le,{}))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,o,a]=e[d],s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={924:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,s,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var d=l(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self.webpackChunkXRViewer=self.webpackChunkXRViewer||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var o=n.O(void 0,[348,635,671],(()=>n(2015)));o=n.O(o)})();