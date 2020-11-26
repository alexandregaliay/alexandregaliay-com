import * as THREE from 'three';

export default class RetroGrid {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild(this.renderer.domElement );
    this.renderer.domElement.className = "three-grid";
  
    this.camera.position.set(0, 10, 50);
    this.camera.lookAt(this.scene.position);
    this.scene.background = new THREE.Color('#000000');
  
    this.divisions = 20;
    this.limit = 100;
    this.grid = new THREE.GridHelper(this.limit * 2, this.divisions, "#570296", "#570296");
  
    this.moveable = [];
    for (let i = 0; i <= this.divisions; i++) {
      this.moveable.push(1, 1, 0, 0); // move horizontal lines only (1 - point is moveable)
    }
  
    this.grid.geometry.setAttribute(
      "moveable",
      new THREE.BufferAttribute(new Uint8Array(this.moveable), 1)
    );
  
    this.grid.material = new THREE.ShaderMaterial({
      uniforms: {
        time: {
          value: 0
        },
        limits: {
          value: new THREE.Vector2(-this.limit, this.limit)
        },
        speed: {
          value: 5
        }
      },
      vertexShader: `
        uniform float time;
        uniform vec2 limits;
        uniform float speed;
        
        attribute float moveable;
        
        varying vec3 vColor;
      
        void main() {
          vColor = color;
          float limLen = limits.y - limits.x;
          vec3 pos = position;
          if (floor(moveable + 0.5) > 0.5){ // if a point has "moveable" attribute = 1 
            float dist = speed * time;
            float currPos = mod((pos.z + dist) - limits.x, limLen) + limits.x;
            pos.z = currPos;
          } 
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
      
        void main() {
          gl_FragColor = vec4(vColor, 1.);
        }
      `,
      vertexColors: THREE.VertexColors
    });
    this.scene.add(this.grid);

    this.clock = new THREE.Clock();
    this.time = 0;
    this.render();
    window.addEventListener('resize', this.resize.bind(this));
  }

  render() {
    this.time += this.clock.getDelta();
    this.grid.material.uniforms.time.value = this.time;
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
  
  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }
}