// const canvas = document.querySelector('.canvas'); // Canvasの取得
// const context = canvas.getContext('2d'); // Canvasからコンテキスを取得

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();