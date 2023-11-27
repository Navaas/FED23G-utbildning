window.addEventListener("DOMContentLoaded", main);

function main() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const a90 = Math.PI / 2;
  const a180 = Math.PI;
  const a360 = Math.PI * 2;

  // Ansiktet
  ctx.beginPath();
  ctx.fillStyle = "#7f513f";
  ctx.arc(100, 100, 100, 0, a360);
  ctx.fill();
  ctx.closePath();

  // Ögon
  //Höger öga
  ctx.beginPath();
  ctx.fillStyle = "#3a2a23";
  ctx.arc(65, 65, 15, 0, a360);
  ctx.fill();

  // Vänster öga
  ctx.moveTo(120, 65);
  ctx.arc(130, 65, 15, 0, a360);
  ctx.fill();

  // Mun
  ctx.beginPath();
  ctx.arc(100, 110, 50, 0, a180);
  ctx.moveTo(85, 85);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(30, 30, 30, 0, a180);
  ctx.moveTo(45, 45);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 50, 40, 0, a180);

  ctx.stroke();
  ctx.beginPath();
  ctx.arc(60, 5, 40, 0, a180);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(140, 5, 40, 0, a180);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(180, 40, 30, 0, a180);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(195, 60, 30, 0, a180);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(200, 80, 30, 0, a180);
  ctx.stroke();
}
