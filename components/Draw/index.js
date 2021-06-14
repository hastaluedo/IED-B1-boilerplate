import p5 from 'p5';
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
}

new p5(sketch, component);

export default component;
