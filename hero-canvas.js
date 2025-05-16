function orbAnimation(canvas, orbConfig) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;

  function resizeCanvas() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function drawOrb(orb, t) {
    const cx = orb.x * width + Math.sin(t * orb.speed + orb.dx) * 40;
    const cy = orb.y * height + Math.cos(t * orb.speed + orb.dy) * 40;
    const grad = ctx.createRadialGradient(cx, cy, orb.r * 0.2, cx, cy, orb.r);
    grad.addColorStop(0, orb.color[0] + 'cc');
    grad.addColorStop(1, orb.color[1] + '00');
    ctx.save();
    ctx.globalAlpha = 0.7;
    ctx.globalCompositeOperation = 'lighter';
    ctx.beginPath();
    ctx.arc(cx, cy, orb.r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.shadowColor = orb.color[0];
    ctx.shadowBlur = 60;
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    const t = performance.now() * 0.001;
    for (const orb of orbConfig) {
      drawOrb(orb, t);
    }
    requestAnimationFrame(animate);
  }

  animate();
}

// Hero Section only
orbAnimation(
  document.getElementById('hero-canvas'),
  [
    { x: 0.3, y: 0.4, r: 110, color: ['#6366F1', '#3B82F6'], dx: 0.12, dy: 0.09, speed: 1.4 },
    { x: 0.7, y: 0.5, r: 90, color: ['#a5b4fc', '#6366F1'], dx: -0.09, dy: 0.11, speed: 1.1 },
    { x: 0.5, y: 0.7, r: 70, color: ['#3B82F6', '#a5b4fc'], dx: 0.07, dy: -0.13, speed: 1.2 },
    { x: 0.6, y: 0.3, r: 60, color: ['#6366F1', '#3B82F6'], dx: -0.11, dy: 0.08, speed: 1.6 },
  ]
);

// Skills Section
orbAnimation(
  document.getElementById('skills-canvas'),
  [
    { x: 0.2, y: 0.5, r: 80, color: ['#3B82F6', '#a5b4fc'], dx: 0.1, dy: 0.13, speed: 0.6 },
    { x: 0.8, y: 0.4, r: 60, color: ['#6366F1', '#3B82F6'], dx: -0.12, dy: 0.07, speed: 0.7 },
    { x: 0.5, y: 0.8, r: 50, color: ['#a5b4fc', '#6366F1'], dx: 0.09, dy: -0.11, speed: 0.5 },
  ]
);

// Projects Section
orbAnimation(
  document.getElementById('projects-canvas'),
  [
    { x: 0.3, y: 0.3, r: 70, color: ['#6366F1', '#3B82F6'], dx: 0.13, dy: 0.1, speed: 0.6 },
    { x: 0.7, y: 0.7, r: 60, color: ['#a5b4fc', '#6366F1'], dx: -0.1, dy: 0.12, speed: 0.7 },
    { x: 0.5, y: 0.5, r: 50, color: ['#3B82F6', '#a5b4fc'], dx: 0.08, dy: -0.09, speed: 0.5 },
  ]
);

// Contact Section
orbAnimation(
  document.getElementById('contact-canvas'),
  [
    { x: 0.2, y: 0.7, r: 60, color: ['#a5b4fc', '#6366F1'], dx: 0.11, dy: 0.08, speed: 0.7 },
    { x: 0.8, y: 0.3, r: 50, color: ['#3B82F6', '#a5b4fc'], dx: -0.09, dy: 0.1, speed: 0.6 },
    { x: 0.5, y: 0.5, r: 40, color: ['#6366F1', '#3B82F6'], dx: 0.07, dy: -0.12, speed: 0.5 },
  ]
); 