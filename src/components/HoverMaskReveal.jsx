import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import styles from './HoverMaskReveal.module.css'
/* eslint-disable react-hooks/exhaustive-deps */

/**
 * Liquid mask hover reveal — Framer-free standalone React component.
 * Replaces the original Framer module's addPropertyControls / RenderTarget /
 * ComponentMessage usage with a vanilla Three.js implementation.
 *
 * Two textures (base + hover) are sampled by a fragment shader that blends
 * them through a soft, animated radial mask centered on the cursor. The mask
 * radius eases towards a target value driven by hover state, giving a fluid
 * reveal. Disabled on coarse-pointer devices.
 */
export default function HoverMaskReveal({
  imageBase,
  imageHover,
  alt = '',
  className = '',
  fullScreen = false,
}) {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    try {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    // Scoped per-effect-run so StrictMode double-invoke does not leave a stale flag.
    let disposed = false

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0, 1)

    const loader = new THREE.TextureLoader()

    const onTexLoad = (t, isBase) => {
      t.minFilter = THREE.LinearFilter
      t.magFilter = THREE.LinearFilter
      t.generateMipmaps = false
      if (isBase && t.image && t.image.width && t.image.height) {
        uniforms.uImageAspect.value = t.image.width / t.image.height
      }
    }
    const onTexError = (e) => console.error('[HoverMaskReveal] texture load failed', e)

    const texBase  = loader.load(imageBase,  (t) => onTexLoad(t, true),  undefined, onTexError)
    const texHover = loader.load(imageHover, (t) => onTexLoad(t, false), undefined, onTexError)

    const uniforms = {
      uTexBase: { value: texBase },
      uTexHover: { value: texHover },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uMaskRadius: { value: 0 },
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uImageAspect: { value: 1 },
    }

    const vertex = /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        // Plane is 1x1 (vertices at -0.5..0.5). Scale to fill NDC (-1..1).
        gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
      }
    `

    const fragment = /* glsl */ `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTexBase;
      uniform sampler2D uTexHover;
      uniform vec2  uMouse;
      uniform float uMaskRadius;
      uniform float uTime;
      uniform vec2  uResolution;
      uniform float uImageAspect;

      // Cover-fit UV computation: keeps aspect ratio while filling the plane.
      vec2 coverUV(vec2 uv, vec2 res, float imageAspect) {
        float planeAspect = res.x / res.y;
        vec2 scale = vec2(1.0);
        if (planeAspect > imageAspect) {
          scale.y = imageAspect / planeAspect;
        } else {
          scale.x = planeAspect / imageAspect;
        }
        return (uv - 0.5) * scale + 0.5;
      }

      // 2D simplex-ish noise for liquid edge wobble.
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p); vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 uv = coverUV(vUv, uResolution, uImageAspect);

        // Aspect-corrected distance from mouse for a circular mask.
        vec2 m = uMouse;
        vec2 d = vUv - m;
        d.x *= uResolution.x / uResolution.y;
        float dist = length(d);

        // Liquid edge: warp the mask boundary with low-frequency noise.
        float n = noise(vUv * 6.0 + uTime * 0.4) - 0.5;
        float edge = uMaskRadius + n * 0.06;
        float mask = smoothstep(edge, edge - 0.08, dist);

        vec4 base = texture2D(uTexBase, uv);
        vec4 hover = texture2D(uTexHover, uv);
        gl_FragColor = mix(base, hover, mask);
      }
    `

    const geom = new THREE.PlaneGeometry(1, 1)
    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
    })
    const mesh = new THREE.Mesh(geom, mat)
    scene.add(mesh)

    let targetRadius = 0
    let mouseTargetX = 0.5
    let mouseTargetY = 0.5

    const setSize = () => {
      const rect = wrap.getBoundingClientRect()
      renderer.setSize(rect.width, rect.height, false)
      uniforms.uResolution.value.set(rect.width, rect.height)
    }

    setSize()
    const ro = new ResizeObserver(setSize)
    ro.observe(wrap)

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect()
      mouseTargetX = (e.clientX - rect.left) / rect.width
      mouseTargetY = 1 - (e.clientY - rect.top) / rect.height
    }
    const onEnter = () => { targetRadius = 0.22 }
    const onLeave = () => { targetRadius = 0 }

    wrap.addEventListener('mousemove', onMove)
    wrap.addEventListener('mouseenter', onEnter)
    wrap.addEventListener('mouseleave', onLeave)

    const start = performance.now()
    const tick = () => {
      if (disposed) return
      const now = performance.now()
      uniforms.uTime.value = (now - start) / 1000

      uniforms.uMaskRadius.value += (targetRadius - uniforms.uMaskRadius.value) * 0.08
      uniforms.uMouse.value.x += (mouseTargetX - uniforms.uMouse.value.x) * 0.12
      uniforms.uMouse.value.y += (mouseTargetY - uniforms.uMouse.value.y) * 0.12

      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    let raf = requestAnimationFrame(tick)

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      ro.disconnect()
      wrap.removeEventListener('mousemove', onMove)
      wrap.removeEventListener('mouseenter', onEnter)
      wrap.removeEventListener('mouseleave', onLeave)
      geom.dispose()
      mat.dispose()
      texBase.dispose()
      texHover.dispose()
      renderer.dispose()
    }
    } catch (err) {
      window.__hmrError = { msg: err.message, stack: err.stack }
      console.error('[HoverMaskReveal] effect threw:', err)
    }
  }, [imageBase, imageHover])

  return (
    <div
      ref={wrapRef}
      className={`${styles.wrap} ${fullScreen ? styles.fullScreen : ''} ${className}`}
      role="img"
      aria-label={alt}
    >
      <img src={imageBase} alt={alt} className={styles.fallback} />
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  )
}
