var Ie=Object.defineProperty;var Re=(a,e,t)=>e in a?Ie(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var _=(a,e,t)=>Re(a,typeof e!="symbol"?e+"":e,t);import{a as m}from"./react-vendor-BUUxVsI6.js";import"./maath-6L8KwW5d.js";import{G as J,D as Fe,M as K,R as Oe,E as Ae,a as De}from"./three-stdlib-DrTJ-1oq.js";import{u as O,a as A,e as pe,b as ge,c as Le,d as Y}from"./fiber-BUfOT6W2.js";import{S as Z,k as ke,l as Pe,M as Be,m as ee,H as G,n as R,D as Ue,F as $,o as Ne,N as Ge,p as Q,q as He,C as je,r as F,e as ve,O as ze,s as ye,t as xe,R as W,u as V,W as $e,v as We,j as te,w as P,x as Ve,I as Xe,y as Ke,z as Qe,E as Ye,U as q,G as qe,J as Je,K as de,a as Ze,Q as z,X as et,d as L,Y as tt,Z as rt,_ as at,$ as nt,a0 as it}from"./three-core-DdFGGPRE.js";function B(){return B=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(a[r]=t[r])}return a},B.apply(null,arguments)}function st(a,e,t,r){var n;return n=class extends Z{constructor(i){super({vertexShader:e,fragmentShader:t,...i});for(const s in a)this.uniforms[s]=new ke(a[s]),Object.defineProperty(this,s,{get(){return this.uniforms[s].value},set(o){this.uniforms[s].value=o}});this.uniforms=Pe.clone(this.uniforms)}},n.key=Be.generateUUID(),n}let H=null,Me="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function we(a=!0,e=!0,t){return r=>{t&&t(r),a&&(H||(H=new Fe),H.setDecoderPath(typeof a=="string"?a:Me),r.setDRACOLoader(H)),e&&r.setMeshoptDecoder(typeof K=="function"?K():K)}}const re=(a,e,t,r)=>O(J,a,we(e,t,r));re.preload=(a,e,t,r)=>O.preload(J,a,we(e,t,r));re.clear=a=>O.clear(J,a);re.setDecoderPath=a=>{Me=a};function ue(a,e,t){const r=A(p=>p.size),n=A(p=>p.viewport),i=typeof a=="number"?a:r.width*n.dpr,s=typeof e=="number"?e:r.height*n.dpr,o=(typeof a=="number"?t:a)||{},{samples:c=0,depth:l,...u}=o,f=l??o.depthBuffer,d=m.useMemo(()=>{const p=new ee(i,s,{minFilter:R,magFilter:R,type:G,...u});return f&&(p.depthTexture=new Ue(i,s,$)),p.samples=c,p},[]);return m.useLayoutEffect(()=>{d.setSize(i,s),c&&(d.samples=c)},[c,d,i,s]),m.useEffect(()=>()=>d.dispose(),[]),d}const ot="modulepreload",lt=function(a){return"/connectors/"+a},fe={},Ht=function(e,t,r){let n=Promise.resolve();if(t&&t.length>0){let s=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=s(t.map(l=>{if(l=lt(l),l in fe)return;fe[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":ot,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((p,v)=>{d.addEventListener("load",p),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return n.then(s=>{for(const o of s||[])o.status==="rejected"&&i(o.reason);return e().catch(i)})},ct=st({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }");class dt extends He{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new je("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=r=>{var n;r.uniforms={...r.uniforms,...this.uniforms},((n=this.anisotropy)!==null&&n!==void 0?n:0)>0&&(r.defines.USE_ANISOTROPY=""),t?r.defines.USE_SAMPLER="":r.defines.USE_TRANSMISSION="",r.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <transmission_pars_fragment>",`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in vec3 modelScale ) {
            // Direction of refracted light.
            // n is normalized once when the sample normal is built.
            vec3 refractionVector = refract( - v, n, 1.0 / ior );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 position, const in vec3 modelScale, const in vec3 attenuationCoefficient, const in vec3 F,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelScale );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = transmittedLight.rgb;
            if ( !isinf( attenuationDistance ) ) {
              // Apply Beer's law.
              attenuatedColor *= exp( - attenuationCoefficient * length( transmissionRay ) );
            }
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),r.fragmentShader=r.fragmentShader.replace("#include <transmission_fragment>",`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        if (material.transmission != 0.0) {
          vec3 pos = vWorldPosition;
          float runningSeed = 0.0;
          vec3 v = normalize( cameraPosition - pos );
          vec3 n = inverseTransformDirection( normal, viewMatrix );
          vec3 transmission = vec3(0.0);
          float randomCoords = rand(runningSeed++);
          float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
          vec3 distortionNormal = vec3(0.0);
          vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;

          vec3 modelScale = vec3(
            length( vec3( modelMatrix[ 0 ].xyz ) ),
            length( vec3( modelMatrix[ 1 ].xyz ) ),
            length( vec3( modelMatrix[ 2 ].xyz ) )
          );

          // Beer's-law coefficient
          vec3 attenuationCoefficient = vec3(0.0);
          if ( !isinf( material.attenuationDistance ) ) {
            attenuationCoefficient = -log( material.attenuationColor ) / material.attenuationDistance;
          }

          if (distortion > 0.0) {
            distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
          }
          for (float i = 0.0; i < ${e}.0; i ++) {
            vec3 sampleNorm;
            if (roughnessFactor > 0.0) {
              sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
            } else {
              // Smooth surfaces skip four hashes, a pow, and a normalization per sample
              sampleNorm = normalize(n + distortionNormal);
            }
            float sampleProgress = (i + randomCoords) / float(${e});
            float sampleThickness = material.thickness + thickness_smear * sampleProgress;
            // Fresnel is identical for RGB; only the refracted IOR changes.
            vec3 F = EnvironmentBRDF( sampleNorm, v, material.specularColor, material.specularF90, material.roughness );
            if (chromaticAberration == 0.0) {
              // With one IOR, a single framebuffer sample supplies all RGB channels
              transmission += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior, sampleThickness, material.attenuationDistance
              ).rgb;
            } else {
              float aberration = chromaticAberration * sampleProgress;
              transmission.r += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior, sampleThickness, material.attenuationDistance
              ).r;
              transmission.g += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior * (1.0 + aberration), sampleThickness, material.attenuationDistance
              ).g;
              transmission.b += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * aberration), sampleThickness, material.attenuationDistance
              ).b;
            }
          }
          transmission /= ${e}.0;
          totalDiffuse = mix( totalDiffuse, transmission, material.transmission );
        }
`)},Object.keys(this.uniforms).forEach(r=>Object.defineProperty(this,r,{get:()=>this.uniforms[r].value,set:n=>this.uniforms[r].value=n}))}}const jt=m.forwardRef(({buffer:a,transmissionSampler:e=!1,backside:t=!1,side:r=Ne,transmission:n=1,thickness:i=0,backsideThickness:s=0,backsideEnvMapIntensity:o=1,samples:c=10,resolution:l,backsideResolution:u,background:f,anisotropy:d,anisotropicBlur:p,...v},C)=>{pe({MeshTransmissionMaterial:dt});const S=m.useRef(null),[E]=m.useState(()=>new ct),M=u??l,g=ue(M,M),T=ue(l,l);let y,x,I,w;return ge(h=>{const b=S.current;if(b.uniforms.time.value=h.clock.elapsedTime,b.uniforms.buffer.value===T.texture&&!e){var D;w=(D=b.__r3f)==null||(D=D.parent)==null?void 0:D.object,w&&b.visible&&b.uniforms._transmission.value!==0&&(I=h.gl.toneMapping,y=h.scene.background,x=b.envMapIntensity,h.gl.toneMapping=Ge,f&&(h.scene.background=f),w.material=E,t&&(h.gl.setRenderTarget(g),h.gl.render(h.scene,h.camera),w.material=b,b.uniforms.buffer.value=g.texture,b.uniforms.thickness.value=s,b.side=Q,r!==Q&&(b.needsUpdate=!0),b.envMapIntensity=o),h.gl.setRenderTarget(T),h.gl.render(h.scene,h.camera),w.material=b,b.uniforms.thickness.value=i,b.side=r,t&&r!==Q&&(b.needsUpdate=!0),b.uniforms.buffer.value=T.texture,b.envMapIntensity=x,h.scene.background=y,h.gl.setRenderTarget(null),h.gl.toneMapping=I)}}),m.useImperativeHandle(C,()=>S.current,[]),m.createElement("meshTransmissionMaterial",B({args:[c,e],ref:S},v,{buffer:a||T.texture,_transmission:n,anisotropicBlur:p??d,transmission:e?n:0,thickness:i,side:r}))}),_e=(a,e,t)=>{let r;switch(a){case q:r=new Uint8ClampedArray(e*t*4);break;case G:r=new Uint16Array(e*t*4);break;case Ye:r=new Uint32Array(e*t*4);break;case Qe:r=new Int8Array(e*t*4);break;case Ke:r=new Int16Array(e*t*4);break;case Xe:r=new Int32Array(e*t*4);break;case $:r=new Float32Array(e*t*4);break;default:throw new Error("Unsupported data type")}return r};let j;const ut=(a,e,t,r)=>{if(j!==void 0)return j;const n=new ee(1,1,r);e.setRenderTarget(n);const i=new ye(new xe,new Ve({color:16777215}));e.render(i,t),e.setRenderTarget(null);const s=_e(a,n.width,n.height);return e.readRenderTargetPixels(n,0,0,n.width,n.height,s),n.dispose(),i.geometry.dispose(),i.material.dispose(),j=s[0]!==0,j};class ae{constructor(e){_(this,"_renderer");_(this,"_rendererIsDisposable",!1);_(this,"_material");_(this,"_scene");_(this,"_camera");_(this,"_quad");_(this,"_renderTarget");_(this,"_width");_(this,"_height");_(this,"_type");_(this,"_colorSpace");_(this,"_supportsReadPixels",!0);_(this,"render",()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(e){throw this._renderer.setRenderTarget(null),e}this._renderer.setRenderTarget(null)});var r,n,i,s,o,c,l,u,f,d,p,v,C,S,E,M;this._width=e.width,this._height=e.height,this._type=e.type,this._colorSpace=e.colorSpace;const t={format:W,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:((r=e.renderTargetOptions)==null?void 0:r.anisotropy)!==void 0?(n=e.renderTargetOptions)==null?void 0:n.anisotropy:1,generateMipmaps:((i=e.renderTargetOptions)==null?void 0:i.generateMipmaps)!==void 0?(s=e.renderTargetOptions)==null?void 0:s.generateMipmaps:!1,magFilter:((o=e.renderTargetOptions)==null?void 0:o.magFilter)!==void 0?(c=e.renderTargetOptions)==null?void 0:c.magFilter:R,minFilter:((l=e.renderTargetOptions)==null?void 0:l.minFilter)!==void 0?(u=e.renderTargetOptions)==null?void 0:u.minFilter:R,samples:((f=e.renderTargetOptions)==null?void 0:f.samples)!==void 0?(d=e.renderTargetOptions)==null?void 0:d.samples:void 0,wrapS:((p=e.renderTargetOptions)==null?void 0:p.wrapS)!==void 0?(v=e.renderTargetOptions)==null?void 0:v.wrapS:F,wrapT:((C=e.renderTargetOptions)==null?void 0:C.wrapT)!==void 0?(S=e.renderTargetOptions)==null?void 0:S.wrapT:F};if(this._material=e.material,e.renderer?this._renderer=e.renderer:(this._renderer=ae.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new ve,this._camera=new ze,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!ut(this._type,this._renderer,this._camera,t)){let g;switch(this._type){case G:g=this._renderer.extensions.has("EXT_color_buffer_float")?$:void 0;break}g!==void 0?(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${$}`),this._type=g):(this._supportsReadPixels=!1,console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"))}this._quad=new ye(new xe,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new ee(this.width,this.height,t),this._renderTarget.texture.mapping=((E=e.renderTargetOptions)==null?void 0:E.mapping)!==void 0?(M=e.renderTargetOptions)==null?void 0:M.mapping:V}static instantiateRenderer(){const e=new $e;return e.setSize(128,128),e}toArray(){if(!this._supportsReadPixels)throw new Error("Can't read pixels in this browser");const e=_e(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,e),e}toDataTexture(e){const t=new We(this.toArray(),this.width,this.height,W,this._type,(e==null?void 0:e.mapping)||V,(e==null?void 0:e.wrapS)||F,(e==null?void 0:e.wrapT)||F,(e==null?void 0:e.magFilter)||R,(e==null?void 0:e.minFilter)||R,(e==null?void 0:e.anisotropy)||1,te);return t.generateMipmaps=(e==null?void 0:e.generateMipmaps)!==void 0?e==null?void 0:e.generateMipmaps:!1,t}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(e){this.disposeOnDemandRenderer(),e&&this.renderTarget.dispose(),this.material instanceof Z&&Object.values(this.material.uniforms).forEach(t=>{t.value instanceof P&&t.value.dispose()}),Object.values(this.material).forEach(t=>{t instanceof P&&t.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(e){this._width=e,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(e){this._height=e,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(e){this._renderTarget=e,this._width=e.width,this._height=e.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}}const ft="urn:iso:std:iso:ts:21496:-1\0",mt=128,ht=8,pt=4,gt=a=>{const e=new DataView(a.buffer,a.byteOffset,a.byteLength);let t=0;const r=()=>{const g=e.getUint16(t);return t+=2,g},n=()=>{const g=e.getUint32(t);return t+=4,g},i=()=>{const g=e.getInt32(t);return t+=4,g},s=r();if(s!==0)throw new Error(`Unsupported ISO 21496-1 minimum_version ${s}`);r();const o=e.getUint8(t++);if(o&pt)throw new Error("ISO 21496-1 metadata with HDR base image is not supported");const c=o&mt?3:1,l=o&ht?n():void 0,u=g=>{const T=g?i():n(),y=l??n();if(y===0)throw new Error("Invalid ISO 21496-1 fraction with zero denominator");return T/y},f=u(!1),d=u(!1);if(f>d)throw new Error("ISO 21496-1 metadata with HDR base image is not supported");const p=[],v=[],C=[],S=[],E=[];for(let g=0;g<c;g++)p.push(u(!0)),v.push(u(!0)),C.push(u(!1)),S.push(u(!0)),E.push(u(!0));const M=g=>c===3?g:[g[0],g[0],g[0]];return{gainMapMin:M(p),gainMapMax:M(v),gamma:M(C),offsetSdr:M(S),offsetHdr:M(E),hdrCapacityMin:f,hdrCapacityMax:d}};class be extends Error{}class Se extends Error{}const me=Array.from(ft,a=>a.charCodeAt(0)),vt=a=>{const e=new DataView(a.buffer,a.byteOffset,a.byteLength),t=4+me.length;for(let r=0;r+t<a.length;r++){if(a[r]!==255||a[r+1]!==226||!me.every((i,s)=>a[r+4+s]===i))continue;const n=Math.min(a.length,r+2+e.getUint16(r+2));if(!(n-(r+t)<=4))try{return gt(a.subarray(r+t,n))}catch{return}}},U=(a,e,t)=>{const r=new RegExp(`${e}="([^"]*)"`,"i").exec(a);if(r)return r[1];const n=new RegExp(`<${e}[^>]*>([\\s\\S]*?)</${e}>`,"i").exec(a);if(n){const i=n[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);return i&&i.length===3?i.map(s=>s.replace(/<\/?rdf:li>/g,"")):n[1].trim()}if(t!==void 0)return t;throw new Error(`Can't find ${e} in gainmap metadata`)},yt=a=>{let e;typeof TextDecoder<"u"?e=new TextDecoder().decode(a):e=a.toString();let t=e.indexOf("<x:xmpmeta");for(;t!==-1;){const r=e.indexOf("x:xmpmeta>",t),n=e.slice(t,r+10);try{const i=U(n,"hdrgm:GainMapMin","0"),s=U(n,"hdrgm:GainMapMax"),o=U(n,"hdrgm:Gamma","1"),c=U(n,"hdrgm:OffsetSDR","0.015625"),l=U(n,"hdrgm:OffsetHDR","0.015625"),u=/hdrgm:HDRCapacityMin="([^"]*)"/.exec(n),f=u?u[1]:"0",d=/hdrgm:HDRCapacityMax="([^"]*)"/.exec(n);if(!d)throw new Error("Incomplete gainmap metadata");const p=d[1];return{gainMapMin:Array.isArray(i)?i.map(v=>parseFloat(v)):[parseFloat(i),parseFloat(i),parseFloat(i)],gainMapMax:Array.isArray(s)?s.map(v=>parseFloat(v)):[parseFloat(s),parseFloat(s),parseFloat(s)],gamma:Array.isArray(o)?o.map(v=>parseFloat(v)):[parseFloat(o),parseFloat(o),parseFloat(o)],offsetSdr:Array.isArray(c)?c.map(v=>parseFloat(v)):[parseFloat(c),parseFloat(c),parseFloat(c)],offsetHdr:Array.isArray(l)?l.map(v=>parseFloat(v)):[parseFloat(l),parseFloat(l),parseFloat(l)],hdrCapacityMin:parseFloat(f),hdrCapacityMax:parseFloat(p)}}catch{}t=e.indexOf("<x:xmpmeta",r)}};class xt{constructor(e){_(this,"options");this.options={debug:e&&e.debug!==void 0?e.debug:!1,extractFII:e&&e.extractFII!==void 0?e.extractFII:!0,extractNonFII:e&&e.extractNonFII!==void 0?e.extractNonFII:!0}}extract(e){return new Promise((t,r)=>{const n=this.options.debug,i=new DataView(e.buffer);if(i.getUint16(0)!==65496){r(new Error("Not a valid jpeg"));return}const s=i.byteLength;let o=2,c=0,l;for(;o<s;){if(++c>250){r(new Error(`Found no marker after ${c} loops 😵`));return}if(i.getUint8(o)!==255){r(new Error(`Not a valid marker at offset 0x${o.toString(16)}, found: 0x${i.getUint8(o).toString(16)}`));return}if(l=i.getUint8(o+1),n&&console.log(`Marker: ${l.toString(16)}`),l===226){n&&console.log("Found APP2 marker (0xffe2)");const u=o+4;if(i.getUint32(u)===1297106432){const f=u+4;let d;if(i.getUint16(f)===18761)d=!1;else if(i.getUint16(f)===19789)d=!0;else{r(new Error("No valid endianness marker found in TIFF header"));return}if(i.getUint16(f+2,!d)!==42){r(new Error("Not valid TIFF data! (no 0x002A marker)"));return}const p=i.getUint32(f+4,!d);if(p<8){r(new Error("Not valid TIFF data! (First offset less than 8)"));return}const v=f+p,C=i.getUint16(v,!d),S=v+2;let E=0;for(let y=S;y<S+12*C;y+=12)i.getUint16(y,!d)===45057&&(E=i.getUint32(y+8,!d));const g=v+2+C*12+4,T=[];for(let y=g;y<g+E*16;y+=16){const x={MPType:i.getUint32(y,!d),size:i.getUint32(y+4,!d),dataOffset:i.getUint32(y+8,!d),dependantImages:i.getUint32(y+12,!d),start:-1,end:-1,isFII:!1};x.dataOffset?(x.start=f+x.dataOffset,x.isFII=!1):(x.start=0,x.isFII=!0),x.end=x.start+x.size,T.push(x)}if(this.options.extractNonFII&&T.length){const y=new Blob([i]),x=[];for(const I of T){if(I.isFII&&!this.options.extractFII)continue;const w=y.slice(I.start,I.end+1,"image/jpeg");x.push(w)}t(x)}}}o+=2+i.getUint16(o+2)}})}}const Mt=async a=>{const e=vt(a)??yt(a);if(!e)throw new Se("Gain map XMP metadata not found");const r=await new xt({extractFII:!0,extractNonFII:!0}).extract(a);if(r.length!==2)throw new be("Gain map recovery image not found");return{sdr:new Uint8Array(await r[0].arrayBuffer()),gainMap:new Uint8Array(await r[1].arrayBuffer()),metadata:e}},he=a=>new Promise((e,t)=>{const r=document.createElement("img");r.onload=()=>{e(r)},r.onerror=n=>{t(n)},r.src=URL.createObjectURL(a)}),wt=async(a,e,t)=>{const r=e?new Blob([e],{type:"image/jpeg"}):void 0,n=new Blob([a],{type:"image/jpeg"});let i,s,o=!1;if(typeof createImageBitmap>"u"){const c=await Promise.all([r?he(r):Promise.resolve(void 0),he(n)]);s=c[0],i=c[1],o=t==="flipY"}else{const c=await Promise.all([r?createImageBitmap(r,{imageOrientation:t||"flipY"}):Promise.resolve(void 0),createImageBitmap(n,{imageOrientation:t||"flipY"})]);s=c[0],i=c[1]}return{sdrImage:i,gainMapImage:s,needsFlip:o}},_t=(a,e,t)=>{const r=new P(e||new ImageData(2,2),V,F,F,R,de,W,q,1,te);r.flipY=t,r.needsUpdate=!0;const n=new P(a,V,F,F,R,de,W,q,1,Ze);return n.flipY=t,n.needsUpdate=!0,{gainMap:r,sdr:n}};class bt extends qe{constructor(t,r){super(r);_(this,"_renderer");_(this,"_renderTargetOptions");_(this,"_internalLoadingManager");_(this,"_config");this._config=t,t.renderer&&(this._renderer=t.renderer),this._internalLoadingManager=new Je}setRenderer(t){return this._renderer=t,this}setRenderTargetOptions(t){return this._renderTargetOptions=t,this}prepareQuadRenderer(){this._renderer||console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");const t=this._config.createMaterial({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new P,sdr:new P});return this._config.createQuadRenderer({width:16,height:16,type:G,colorSpace:te,material:t,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}processImages(t,r,n){return wt(t,r,n)}createTextures(t,r,n){return _t(t,r,n)}updateQuadRenderer(t,r,n,i,s){t.width=r.width,t.height=r.height,t.material.gainMap=n,t.material.sdr=i,t.material.gainMapMin=s.gainMapMin,t.material.gainMapMax=s.gainMapMax,t.material.offsetHdr=s.offsetHdr,t.material.offsetSdr=s.offsetSdr,t.material.gamma=s.gamma,t.material.hdrCapacityMin=s.hdrCapacityMin,t.material.hdrCapacityMax=s.hdrCapacityMax,t.material.maxDisplayBoost=Math.pow(2,s.hdrCapacityMax),t.material.needsUpdate=!0}}const St=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Tt=`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;class Et extends Z{constructor({gamma:t,offsetHdr:r,offsetSdr:n,gainMapMin:i,gainMapMax:s,maxDisplayBoost:o,hdrCapacityMin:c,hdrCapacityMax:l,sdr:u,gainMap:f}){super({name:"GainMapDecoderMaterial",vertexShader:St,fragmentShader:Tt,uniforms:{sdr:{value:u},gainMap:{value:f},gamma:{value:new L(1/t[0],1/t[1],1/t[2])},offsetHdr:{value:new L().fromArray(r)},offsetSdr:{value:new L().fromArray(n)},gainMapMin:{value:new L().fromArray(i)},gainMapMax:{value:new L().fromArray(s)},weightFactor:{value:(Math.log2(o)-c)/(l-c)}},blending:et,depthTest:!1,depthWrite:!1});_(this,"_maxDisplayBoost");_(this,"_hdrCapacityMin");_(this,"_hdrCapacityMax");this._maxDisplayBoost=o,this._hdrCapacityMin=c,this._hdrCapacityMax=l,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(t){this.uniforms.sdr.value=t}get gainMap(){return this.uniforms.gainMap.value}set gainMap(t){this.uniforms.gainMap.value=t}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(t){this.uniforms.offsetHdr.value.fromArray(t)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(t){this.uniforms.offsetSdr.value.fromArray(t)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(t){this.uniforms.gainMapMin.value.fromArray(t)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(t){this.uniforms.gainMapMax.value.fromArray(t)}get gamma(){const t=this.uniforms.gamma.value;return[1/t.x,1/t.y,1/t.z]}set gamma(t){const r=this.uniforms.gamma.value;r.x=1/t[0],r.y=1/t[1],r.z=1/t[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(t){this._hdrCapacityMin=t,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(t){this._hdrCapacityMax=t,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(t){this._maxDisplayBoost=Math.max(1,Math.min(65504,t)),this.calculateWeight()}calculateWeight(){const t=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,t))}}class Te extends bt{constructor(e,t){super({renderer:e,createMaterial:r=>new Et(r),createQuadRenderer:r=>new ae(r)},t)}async render(e,t,r,n){const{sdrImage:i,gainMapImage:s,needsFlip:o}=await this.processImages(r,n,"flipY"),{gainMap:c,sdr:l}=this.createTextures(i,s,o);this.updateQuadRenderer(e,i,c,l,t),e.render()}}class Ct extends Te{load([e,t,r],n,i,s){const o=this.prepareQuadRenderer();let c,l,u;const f=async()=>{if(c&&l&&u){try{await this.render(o,u,c,l)}catch(h){this.manager.itemError(e),this.manager.itemError(t),this.manager.itemError(r),typeof s=="function"&&s(h),o.disposeOnDemandRenderer();return}typeof n=="function"&&n(o),this.manager.itemEnd(e),this.manager.itemEnd(t),this.manager.itemEnd(r),o.disposeOnDemandRenderer()}};let d=!0,p=0,v=0,C=!0,S=0,E=0,M=!0,g=0,T=0;const y=()=>{if(typeof i=="function"){const h=p+S+g,b=v+E+T,D=d&&C&&M;i(new ProgressEvent("progress",{lengthComputable:D,loaded:b,total:h}))}};this.manager.itemStart(e),this.manager.itemStart(t),this.manager.itemStart(r);const x=new z(this._internalLoadingManager);x.setResponseType("arraybuffer"),x.setRequestHeader(this.requestHeader),x.setPath(this.path),x.setWithCredentials(this.withCredentials),x.load(e,async h=>{if(typeof h=="string")throw new Error("Invalid sdr buffer");c=h,await f()},h=>{d=h.lengthComputable,v=h.loaded,p=h.total,y()},h=>{this.manager.itemError(e),typeof s=="function"&&s(h)});const I=new z(this._internalLoadingManager);I.setResponseType("arraybuffer"),I.setRequestHeader(this.requestHeader),I.setPath(this.path),I.setWithCredentials(this.withCredentials),I.load(t,async h=>{if(typeof h=="string")throw new Error("Invalid gainmap buffer");l=h,await f()},h=>{C=h.lengthComputable,E=h.loaded,S=h.total,y()},h=>{this.manager.itemError(t),typeof s=="function"&&s(h)});const w=new z(this._internalLoadingManager);return w.setRequestHeader(this.requestHeader),w.setPath(this.path),w.setWithCredentials(this.withCredentials),w.load(r,async h=>{if(typeof h!="string")throw new Error("Invalid metadata string");u=JSON.parse(h),await f()},h=>{M=h.lengthComputable,T=h.loaded,g=h.total,y()},h=>{this.manager.itemError(r),typeof s=="function"&&s(h)}),o}}class It extends Te{load(e,t,r,n){const i=this.prepareQuadRenderer(),s=new z(this._internalLoadingManager);return s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),this.manager.itemStart(e),s.load(e,async o=>{if(typeof o=="string")throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");const c=new Uint8Array(o);let l,u,f;try{const d=await Mt(c);l=d.sdr,u=d.gainMap,f=d.metadata}catch(d){if(d instanceof Se||d instanceof be)console.warn(`Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),f={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},l=c;else throw d}try{await this.render(i,f,l.buffer,u==null?void 0:u.buffer)}catch(d){this.manager.itemError(e),typeof n=="function"&&n(d),i.disposeOnDemandRenderer();return}typeof t=="function"&&t(i),this.manager.itemEnd(e),i.disposeOnDemandRenderer()},r,o=>{this.manager.itemError(e),typeof n=="function"&&n(o)}),i}}const N={apartment:"lebombo_1k.hdr",city:"potsdamer_platz_1k.hdr",dawn:"kiara_1_dawn_1k.hdr",forest:"forest_slope_1k.hdr",lobby:"st_fagans_interior_1k.hdr",night:"dikhololo_night_1k.hdr",park:"rooitou_park_1k.hdr",studio:"studio_small_03_1k.hdr",sunset:"venice_sunset_1k.hdr",warehouse:"empty_warehouse_01_1k.hdr"},Ee="https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/",k=a=>Array.isArray(a),ne=["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"];function X({files:a=ne,path:e="",preset:t=void 0,colorSpace:r=void 0,extensions:n}={}){t&&(ie(t),a=N[t],e=Ee);const i=k(a),{extension:s,isCubemap:o}=se(a),c=oe(s);if(!c)throw new Error("useEnvironment: Unrecognized file extension: "+a);const l=A(p=>p.gl);m.useLayoutEffect(()=>{if(s!=="webp"&&s!=="jpg"&&s!=="jpeg")return;function p(){O.clear(c,i?[a]:a)}l.domElement.addEventListener("webglcontextlost",p,{once:!0})},[a,l.domElement]);const u=O(c,i?[a]:a,p=>{(s==="webp"||s==="jpg"||s==="jpeg")&&p.setRenderer(l),p.setPath==null||p.setPath(e),n&&n(p)});let f=i?u[0]:u;if(s==="jpg"||s==="jpeg"||s==="webp"){var d;f=(d=f.renderTarget)==null?void 0:d.texture}return f.mapping=o?tt:rt,f.colorSpace=r??(o?"srgb":"srgb-linear"),f}const Rt={files:ne,path:"",preset:void 0,extensions:void 0};X.preload=a=>{const e={...Rt,...a};let{files:t,path:r=""}=e;const{preset:n,extensions:i}=e;n&&(ie(n),t=N[n],r=Ee);const{extension:s}=se(t);if(s==="webp"||s==="jpg"||s==="jpeg")throw new Error("useEnvironment: Preloading gainmaps is not supported");const o=oe(s);if(!o)throw new Error("useEnvironment: Unrecognized file extension: "+t);O.preload(o,k(t)?[t]:t,c=>{c.setPath==null||c.setPath(r),i&&i(c)})};const Ft={files:ne,preset:void 0};X.clear=a=>{const e={...Ft,...a};let{files:t}=e;const{preset:r}=e;r&&(ie(r),t=N[r]);const{extension:n}=se(t),i=oe(n);if(!i)throw new Error("useEnvironment: Unrecognized file extension: "+t);O.clear(i,k(t)?[t]:t)};function ie(a){if(!(a in N))throw new Error("Preset must be one of: "+Object.keys(N).join(", "))}function se(a){var e;const t=k(a)&&a.length===6,r=k(a)&&a.length===3&&a.some(s=>s.endsWith("json")),n=k(a)?a[0]:a;return{extension:t?"cube":r?"webp":n.startsWith("data:application/exr")?"exr":n.startsWith("data:application/hdr")?"hdr":n.startsWith("data:image/jpeg")?"jpg":(e=n.split(".").pop())==null||(e=e.split("?"))==null||(e=e.shift())==null?void 0:e.toLowerCase(),isCubemap:t,isGainmap:r}}function oe(a){return a==="cube"?at:a==="hdr"?Oe:a==="exr"?Ae:a==="jpg"||a==="jpeg"?It:a==="webp"?Ct:null}const Ot=a=>a.current&&a.current.isScene,At=a=>Ot(a)?a.current:a;function le(a,e,t,r,n={}){var i,s,o,c;n={backgroundBlurriness:0,backgroundIntensity:1,backgroundRotation:[0,0,0],environmentIntensity:1,environmentRotation:[0,0,0],...n};const l=At(e||t),u=l.background,f=l.environment,d={backgroundBlurriness:l.backgroundBlurriness,backgroundIntensity:l.backgroundIntensity,backgroundRotation:(i=(s=l.backgroundRotation)==null||s.clone==null?void 0:s.clone())!==null&&i!==void 0?i:[0,0,0],environmentIntensity:l.environmentIntensity,environmentRotation:(o=(c=l.environmentRotation)==null||c.clone==null?void 0:c.clone())!==null&&o!==void 0?o:[0,0,0]};return a!=="only"&&(l.environment=r),a&&(l.background=r),Y(l,n),()=>{a!=="only"&&(l.environment=f),a&&(l.background=u),Y(l,d)}}function ce({scene:a,background:e=!1,map:t,...r}){const n=A(i=>i.scene);return m.useLayoutEffect(()=>{if(t)return le(e,a,n,t,r)}),null}function Ce({background:a=!1,scene:e,blur:t,backgroundBlurriness:r,backgroundIntensity:n,backgroundRotation:i,environmentIntensity:s,environmentRotation:o,...c}){const l=X(c),u=A(f=>f.scene);return m.useLayoutEffect(()=>le(a,e,u,l,{backgroundBlurriness:t??r,backgroundIntensity:n,backgroundRotation:i,environmentIntensity:s,environmentRotation:o})),m.useEffect(()=>()=>{l.dispose()},[l]),null}function Dt({children:a,near:e=.1,far:t=1e3,resolution:r=256,frames:n=1,map:i,background:s=!1,blur:o,backgroundBlurriness:c,backgroundIntensity:l,backgroundRotation:u,environmentIntensity:f,environmentRotation:d,scene:p,files:v,path:C,preset:S=void 0,extensions:E}){const M=A(w=>w.gl),g=A(w=>w.scene),T=m.useRef(null),[y]=m.useState(()=>new ve),x=m.useMemo(()=>{const w=new nt(r);return w.texture.type=G,w},[r]);m.useEffect(()=>()=>{x.dispose()},[x]),m.useLayoutEffect(()=>{if(n===1){const w=M.autoClear;M.autoClear=!0,T.current.update(M,y),M.autoClear=w}return le(s,p,g,x.texture,{backgroundBlurriness:o??c,backgroundIntensity:l,backgroundRotation:u,environmentIntensity:f,environmentRotation:d})},[a,y,x.texture,p,g,s,n,M]);let I=1;return ge(()=>{if(n===1/0||I<n){const w=M.autoClear;M.autoClear=!0,T.current.update(M,y),M.autoClear=w,I++}}),m.createElement(m.Fragment,null,Le(m.createElement(m.Fragment,null,a,m.createElement("cubeCamera",{ref:T,args:[e,t,x]}),v||S?m.createElement(Ce,{background:!0,files:v,preset:S,path:C,extensions:E}):i?m.createElement(ce,{background:!0,map:i,extensions:E}):null),y))}function Lt(a){var e,t,r,n;const i=X(a),s=a.map||i;m.useMemo(()=>pe({GroundProjectedEnvImpl:De}),[]),m.useEffect(()=>()=>{i.dispose()},[i]);const o=m.useMemo(()=>[s],[s]),c=(e=a.ground)==null?void 0:e.height,l=(t=a.ground)==null?void 0:t.radius,u=(r=(n=a.ground)==null?void 0:n.scale)!==null&&r!==void 0?r:1e3;return m.createElement(m.Fragment,null,m.createElement(ce,B({},a,{map:s})),m.createElement("groundProjectedEnvImpl",{args:o,scale:u,height:c,radius:l}))}function zt(a){return a.ground?m.createElement(Lt,a):a.map?m.createElement(ce,a):a.children?m.createElement(Dt,a):m.createElement(Ce,a)}const $t=m.forwardRef(({light:a,args:e,map:t,toneMapped:r=!1,color:n="white",form:i="rect",intensity:s=1,scale:o=1,target:c=[0,0,0],children:l,...u},f)=>{const d=m.useRef(null);return m.useImperativeHandle(f,()=>d.current,[]),m.useLayoutEffect(()=>{!l&&!u.material&&(Y(d.current.material,{color:n}),d.current.material.color.multiplyScalar(s))},[n,s,l,u.material]),m.useLayoutEffect(()=>{u.rotation||d.current.quaternion.identity(),c&&!u.rotation&&(typeof c=="boolean"?d.current.lookAt(0,0,0):d.current.lookAt(Array.isArray(c)?new L(...c):c))},[c,u.rotation]),o=Array.isArray(o)&&o.length===2?[o[0],o[1],1]:o,m.createElement("mesh",B({ref:d,scale:o},u),i==="circle"?m.createElement("ringGeometry",{args:e||[0,.5,64]}):i==="ring"?m.createElement("ringGeometry",{args:e||[.25,.5,64]}):i==="rect"||i==="plane"?m.createElement("planeGeometry",{args:e||[1,1]}):i==="box"?m.createElement("boxGeometry",{args:e||[1,1,1]}):m.createElement(i,{args:e}),l||m.createElement("meshBasicMaterial",{toneMapped:r,map:t,side:it}),a&&m.createElement("pointLight",B({castShadow:!0},a)))});export{zt as E,$t as L,jt as M,Ht as _,re as u};
