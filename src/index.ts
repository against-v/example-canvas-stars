import { CanvasA } from './canvas-a';
import { CanvasB } from './canvas-b';
import { RGB } from './types';
import './style.css';

const canvasB = new CanvasB();

const handleClickOnCanvasA = (color: RGB) => {
  canvasB.setColor(color);
};

const canvasA = new CanvasA(handleClickOnCanvasA);

canvasA.init('#canvas-a');
canvasB.init('#canvas-b');
