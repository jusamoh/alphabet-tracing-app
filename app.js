const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

// 사용자 그리기 이벤트
canvas.addEventListener('pointerdown', startDrawing);
canvas.addEventListener('pointermove', draw);
canvas.addEventListener('pointerup', stopDrawing);

// 초기화
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 알파벳 그리기
function drawAlphabet(letter) {
  clearCanvas();
  
  ctx.font = 'bold 200px Arial';
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  
  // 알파벳 중앙에 그리기
  const textMetrics = ctx.measureText(letter);
  const x = (canvas.width - textMetrics.width) / 2;
  const y = (canvas.height + parseInt(ctx.font, 10)) / 2;

  ctx.strokeText(letter, x, y);
}

// 그리기 시작
function startDrawing(e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

// 그리는 중
function draw(e) {
  if (!isDrawing) return;

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 3;
  ctx.stroke();
}

// 그리기 종료
function stopDrawing() {
  isDrawing = false;
}