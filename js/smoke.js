/**
 * CORVUS FORGE — WebGL Silk / Smoke Background Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  const canvases = document.querySelectorAll('.smoke-canvas, .smoke-bg-canvas');
  if (!canvases.length) return;

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isMotionReduced = mediaQuery.matches;
  mediaQuery.addEventListener('change', (e) => { isMotionReduced = e.matches; });

  const vsSource = `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const fsSource = `
    precision mediump float;
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform float u_variant;

    float rand(vec2 co) {
      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }

    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = rand(i);
      float b = rand(i + vec2(1.0, 0.0));
      float c = rand(i + vec2(0.0, 1.0));
      float d = rand(i + vec2(1.0, 1.0));
      vec2 u = f*f*(3.0-2.0*f);
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
      
      float speed = (u_variant > 1.5) ? 0.095 : 0.06;
      float t = u_time * speed;
      
      vec2 p_shifted = p;
      if (u_variant > 1.5) {
        p_shifted.x += 6.5;
      } else {
        p_shifted.x -= 5.0;
      }
      
      float w1 = noise(p_shifted * 0.7 + vec2(t * 0.4, t * 0.2));
      float w2 = noise(p_shifted * 1.5 - vec2(t * 0.3, -t * 0.5) + w1);
      
      float base_y = (u_variant > 1.5) ? -0.65 : 0.0;
      
      // Layer 1: Foreground Ribbon
      float y1 = base_y + sin(p_shifted.x * 1.1 + w2 * 2.0) * 0.4;
      float d1 = abs(p_shifted.y - y1);
      float thick1 = 0.16;
      float r1 = smoothstep(thick1, 0.0, d1);
      float n1 = (p_shifted.y - y1) / thick1;
      float light1 = smoothstep(-1.0, 1.0, n1); 
      float body1 = r1 * (0.05 + 1.2 * pow(light1, 4.0));
      float rim1 = smoothstep(0.018, 0.0, abs(d1 - thick1)) * (0.3 + 1.8 * pow(light1, 2.0));
      float glow1 = body1 * 0.35 + rim1 * 0.85;
      
      // Layer 2: Midground Ribbon
      float y2 = base_y + cos(p_shifted.x * 0.75 - w2 * 1.6) * 0.35;
      float d2 = abs(p_shifted.y - y2);
      float thick2 = 0.24;
      float r2 = smoothstep(thick2, 0.0, d2);
      float n2 = (p_shifted.y - y2) / thick2;
      float light2 = smoothstep(1.0, -1.0, n2); 
      float body2 = r2 * (0.08 + 1.0 * pow(light2, 4.0));
      float rim2 = smoothstep(0.022, 0.0, abs(d2 - thick2)) * (0.3 + 1.5 * pow(light2, 2.0));
      float glow2 = body2 * 0.35 + rim2 * 0.80;
      
      // Layer 3: Background Ribbon
      float y3 = base_y + sin(p_shifted.x * 0.55 + w2 * 1.2 + 5.0) * 0.55;
      float d3 = abs(p_shifted.y - y3);
      float thick3 = 0.34;
      float r3 = smoothstep(thick3, 0.0, d3);
      float n3 = (p_shifted.y - y3) / thick3;
      float light3 = smoothstep(-1.0, 1.0, n3);
      float body3 = r3 * (0.04 + 0.6 * pow(light3, 3.0));
      float rim3 = smoothstep(0.028, 0.0, abs(d3 - thick3)) * (0.2 + 0.8 * pow(light3, 2.0));
      float glow3 = body3 * 0.40 + rim3 * 0.60;
      
      float smoke = glow1 * 0.52 + glow2 * 0.32 + glow3 * 0.16;
      float vignette = smoothstep(2.2, 0.4, length(p * vec2(0.55, 0.9)));
      smoke *= vignette;
      
      vec3 color = vec3(smoke);
      float grain = (rand(gl_FragCoord.xy + u_time * 0.005) - 0.5) * 0.032;
      color += vec3(grain);
      
      gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
    }
  `;

  canvases.forEach((canvas) => {
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const variant = parseFloat(canvas.getAttribute('data-variant') || '1');

    function compileShader(source, type) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const variantLoc = gl.getUniformLocation(program, 'u_variant');

    function resize() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.01 });
    observer.observe(canvas);

    function render(time) {
      if (isVisible) {
        resize();
        const seconds = time * 0.001;
        gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
        gl.uniform1f(variantLoc, variant);
        gl.uniform1f(timeLoc, isMotionReduced ? 25.0 : seconds);
        gl.clearColor(0.02, 0.02, 0.03, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  });
});
