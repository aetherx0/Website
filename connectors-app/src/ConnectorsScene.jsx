// Based on https://twitter.com/lusionltd/status/1701534187545636964 (lusion.co)
// Demo by Paul Henschel / pmndrs: https://github.com/pmndrs/examples
import * as THREE from 'three'
import { useRef, useReducer, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  useGLTF,
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
} from '@react-three/drei'
import {
  CuboidCollider,
  BallCollider,
  Physics,
  RigidBody,
} from '@react-three/rapier'
import { EffectComposer, N8AO } from '@react-three/postprocessing'
import { easing } from 'maath'

const cModel = '/c-transformed.glb' // lives in /public

const accents = ['#4060ff', '#20ffa0', '#ff4060', '#ffcc00']
const shuffle = (accent = 0) => {
  const palette = [
    { color: accents[accent], roughness: 0.1, accent: true },
    { color: '#444', roughness: 0.75 },
    { color: 'white', roughness: 0.1 },
    { color: accents[accent], roughness: 0.75, accent: true },
    { color: '#444', roughness: 0.1 },
    { color: accents[accent], roughness: 0.1, accent: true },
    { color: 'white', roughness: 0.75 },
    { color: '#444', roughness: 0.75 },
    { color: accents[accent], roughness: 0.75, accent: true },
  ]

  return Array.from({ length: 27 }, (_, index) => ({
    ...palette[index % palette.length],
  }))
}

function AdaptiveFrame() {
  const { camera, size } = useThree()
  useEffect(() => {
    if (!camera.isPerspectiveCamera || size.width < 1 || size.height < 1) return
    const distance = 35
    const aspect = size.width / size.height
    const targetSpan = 12.5 // Intentionally crop a few outer connectors at the card edge.
    const verticalSpan = Math.max(targetSpan, targetSpan / aspect)
    const target = new THREE.Vector3(0, 0, 0)
    camera.position.set(target.x, target.y, distance)
    camera.lookAt(target)
    camera.fov = THREE.MathUtils.radToDeg(
      2 * Math.atan(verticalSpan / (2 * distance)),
    )
    camera.near = 1
    camera.far = 60
    camera.updateProjectionMatrix()
  }, [camera, size.width, size.height])
  return null
}

export function ConnectorsScene(props) {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0)
  const connectors = useMemo(() => shuffle(accent), [accent])
  return (
    <Canvas
      onClick={click}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 28], fov: 28, near: 1, far: 60 }}
      {...props}
    >
      <color attach="background" args={['#141622']} />
      <AdaptiveFrame />
      <ambientLight intensity={0.4 * Math.PI} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={Math.PI}
        decay={0}
        castShadow
      />
      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {connectors.map((props, i) => (
          <Connector key={i} {...props} />
        ))}
        <Connector>
          <Model>
            <MeshTransmissionMaterial
              clearcoat={1}
              thickness={0.1}
              anisotropicBlur={0.1}
              chromaticAberration={0.1}
              samples={8}
              resolution={512}
            />
          </Model>
        </Connector>
      </Physics>
      <EffectComposer multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
    </Canvas>
  )
}

function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  ...props
}) {
  const api = useRef(null)
  const pos = useMemo(
    () => position || [r(10), r(10), r(10)],
    [],
  )
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.2),
      false,
    )
  })
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <CuboidCollider args={[0.38, 1.27, 0.38]} />
      <CuboidCollider args={[1.27, 0.38, 0.38]} />
      <CuboidCollider args={[0.38, 0.38, 1.27]} />
      {children ? children : <Model {...props} />}
      {accent && (
        <pointLight
          intensity={4 * Math.PI}
          decay={0}
          distance={2.5}
          color={props.color}
        />
      )}
    </RigidBody>
  )
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef(null)
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0,
      ),
    )
  })
  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  )
}

function Model({
  children,
  color = 'white',
  roughness = 0,
  ...props
}) {
  const ref = useRef(null)
  const { nodes, materials } = useGLTF(cModel)
  useFrame((state, delta) => {
    easing.dampC(ref.current.material.color, color, 0.2, delta)
  })
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      scale={10}
      geometry={nodes.connector.geometry}
    >
      <meshStandardMaterial
        metalness={0.2}
        roughness={roughness}
        map={materials.base.map}
      />
      {children}
    </mesh>
  )
}
