const $jsCanvas = document.querySelector('#jsCanvas');
const $jsRange = document.querySelector('#jsRange');

const ctx = $jsCanvas.getContext('2d');

$jsCanvas.width = 700;
$jsCanvas.height = 700;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = $jsRange.value;

function startPainting(event) {
  painting = true;
}

function stopPainting() {
  painting = false;
}

let painting = false;

/*  아래의 모든 이밴트는 마우스가 움직일시 계속 발생한다.
    beginPath 새로운 출발점을 만든다. .
    moveTo 그 출발점을 움직인다 x,y 좌표로
    (현재 x,y는 마우스의 위치 즉 마우스의 위치로 출발점을 움직임) (그리지는 않음)
    lineTo 도착점으로 좌표를 옮김 (그리지는 않음)
    stroke 도착점을 기준으로 그린다 */

function onMouseMove(event) {
  //마우스의 x,y 좌표
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    console.log('creating path in', x,y);
    ctx.beginPath();
    ctx.moveTo(x, y);
  }else {
    /* 클릭을 하는 순간 beginPath로 만든 시작점
    그리고 moveTo로 이동한 그 시작점의 위치는 고정이 됨
		시작점을 기준으로 lineTo(도착점 = 마우스위치) 까지 storke한다 = 그린다*/
    console.log('creating line in ', x,y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  painting = true;
}

function onMouseLeave(event) {
  stopPainting();
}

if ($jsCanvas) {
  $jsCanvas.addEventListener('mousemove', onMouseMove);
  $jsCanvas.addEventListener('mousedown', startPainting);
  $jsCanvas.addEventListener('mouseup', stopPainting);
  $jsCanvas.addEventListener('mouseleave', stopPainting);
}

