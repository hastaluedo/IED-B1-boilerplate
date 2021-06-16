import p5 from 'p5';
<<<<<<< HEAD
import component from './Draw.html';’

const data = [
  { id: 1, value: 60 },
  { id: 1, value: 43 },
  { id: 1, value: 46 },
  { id: 1, value: 23 },
  { id: 1, value: 93 },
  { id: 1, value: 28 }
];

const step = 20;
let divelems = [];

function drawGraph() {
  noFill();
  stroke(125, 255, 100);
  beginShape();
  for (let i = 0; i < data.length; i++) {
    const x = step * i;
    const y = data[i].value;
    vertex(x, y);
  }
  endShape();
}

function createDivs() {
  for (let i = 0; i < data.length; i++) {
    const x = step * i;
    divelems[i] = createDiv();
    divelems[i].position(x, 0);
    divelems[i].parent('grafo-uno')
    divelems[i].size(step, 600);
    divelems[i].style("border: 2px");
    divelems[i].mouseOver(function changeColor() {
      divelems[i].style("background-color: purple");
    });
    divelems[i].mouseOut(function changeColor() {
      divelems[i].style("background-color: transparent");
    });
  }
}

function changeColor(i) {
  divelems[i].style("background-color: purple");
}

function setup() {
  const canvas = createCanvas(1161, 734);
  canvas.parent('grafo-uno')
  background(125);
  createDivs();
}

function draw() {
  background(125);
  drawGraph();
=======
import component from './Draw.html';

function sketch(p) {
  p.setup = () => {
    p.createCanvas(500, 500);
    p.background(0, 0, 0);
  };

  p.draw = () => {
    p.fill(255);
    p.rect(30, 30, 30, 140);
  };
>>>>>>> parent of 29ecc82 (frame 1 test)
}

new p5(sketch, component);


export default component;
