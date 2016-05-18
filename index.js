window.addEventListener('load', () => {
  const d3pos = [
    [100,  50, 1000],
    [300,  50, 1000],
    [300, 250, 1000],
    [100, 250, 1000],
    [100,  50, 1500],
    [300,  50, 1500],
    [300, 250, 1500],
    [100, 250, 1500]
  ];
  const d2pos = [];
  const angle = 60;
  const w = 500;
  const h = 500;
  const size = ((w >= h) ? w : h) * 0.5;
  const fov = 1 / Math.tan(angle * 0.5 * Math.PI / 180);
  for (let i = 0; i < d3pos.length; i++) {
    d2pos[i] = [
      d3pos[i][0] / d3pos[i][2] * fov * size,
      d3pos[i][1] / d3pos[i][2] * fov * size
    ];
    d2pos[i][0] += w / 2;
    d2pos[i][1] += h / 2;
  }
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  for (let i = 0; i < d2pos.length; i++) {
    ctx.beginPath();
    const x = Math.floor(d2pos[i][0]);
    const y = Math.floor(d2pos[i][1]);
    const r = Math.floor(10 / d3pos[i][2] * fov * size);
    console.log(x, y, r);
    ctx.arc(x, y, r, 0, 360, false);
    ctx.stroke();
  }
  for (let i = 0; i < d2pos.length / 2; i++) {
    const start = d2pos[i];
    const end = i === (d2pos.length / 2 - 1) ? d2pos[0] : d2pos[i + 1];
    ctx.beginPath();
    ctx.moveTo(start[0], start[1]);
    ctx.lineTo(end[0], end[1]);
    ctx.stroke();
  }
  for (let i = 0; i < d2pos.length / 2; i++) {
    const start = d2pos[i];
    const end = d2pos[i + 4];
    ctx.beginPath();
    ctx.moveTo(start[0], start[1]);
    ctx.lineTo(end[0], end[1]);
    ctx.stroke();
  }
  for (let i = 0; i < d2pos.length / 2; i++) {
    const start = d2pos[i + 4];
    const end = i === (d2pos.length / 2 - 1) ? d2pos[4] : d2pos[i + 5];
    ctx.beginPath();
    ctx.moveTo(start[0], start[1]);
    ctx.lineTo(end[0], end[1]);
    ctx.stroke();
  }
});