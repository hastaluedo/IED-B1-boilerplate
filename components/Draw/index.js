import p5 from 'p5';
import component from './Draw.html';
import "./draw.css;"

const data = [
  { id: 1, value: 60 },
  { id: 1, value: 43 },
  { id: 1, value: 46 },
  { id: 1, value: 23 },
  { id: 1, value: 93 },
  { id: 1, value: 34 }
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
    divelems[i].size(step, 400);
    divelems[i].style("border: 2px dashed");
    divelems[i].mouseOver(function changeColor() {
      divelems[i].style("background-color: lightgreen");
    });
    divelems[i].mouseOut(function changeColor() {
      divelems[i].style("background-color: transparent");
    });
  }
}

function changeColor(i) {
  divelems[i].style("background-color: lightgreen");
}

function setup() {
  const canvas = createCanvas(600, 400);
  canvas.parent('grafo-uno')
  background(125);
  createDivs();
}

function draw() {
  background(125);
  drawGraph();
}

new p5(sketch, component);

export default component;
