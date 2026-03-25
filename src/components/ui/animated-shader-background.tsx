import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedShaderBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });

    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(width, height) },
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;

        #define NUM_OCTAVES 4

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u * u * (3.0 - 2.0 * u);
          return mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
            u.y
          );
        }

        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.5;
          vec2 shift = vec2(100.0);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          vec2 p = (gl_FragCoord.xy - iResolution.xy * 0.5) / iResolution.y;
          p *= 5.0;

          float t = iTime * 0.18;

          // Layered aurora bands
          vec3 color = vec3(0.02, 0.02, 0.06);

          for (float i = 1.0; i <= 6.0; i++) {
            vec2 q = p + vec2(
              fbm(p + vec2(t * 0.4, i * 1.7)),
              fbm(p + vec2(i * 2.3, t * 0.3))
            ) * 1.6;

            float band = fbm(q + t * vec2(0.3, -0.2) + vec2(i));
            float stripe = smoothstep(0.3, 0.7, band);

            // Rich aurora palette: deep blues, teals, purples, greens
            vec3 c1 = vec3(0.05 + 0.1 * sin(i * 1.1), 0.4 + 0.3 * cos(i * 0.9), 0.7 + 0.2 * sin(i * 1.3));
            vec3 c2 = vec3(0.3 + 0.2 * cos(i * 1.7), 0.1 + 0.15 * sin(i * 1.2), 0.6 + 0.3 * cos(i * 0.7));
            vec3 bandColor = mix(c1, c2, stripe);

            float brightness = exp(-3.0 * abs(band - 0.5)) * 0.9;
            color += bandColor * brightness / (i * 0.4);
          }

          // Vertical fade — brighter in the center vertically
          float vignette = smoothstep(0.0, 0.5, uv.y) * smoothstep(1.0, 0.5, uv.y);
          color *= 0.6 + 0.8 * vignette;

          // Dark base overlay so text stays readable
          color = mix(vec3(0.04, 0.04, 0.10), color, 0.85);

          // Subtle tonemap
          color = color / (color + 0.6);
          color = pow(color, vec3(0.85));

          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let frameId: number;
    const clock = new THREE.Clock();
    const animate = () => {
      material.uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      material.uniforms.iResolution.value.set(w, h);
    };
    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(frameId);
      ro.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
      }}
    />
  );
};

export default AnimatedShaderBackground;
