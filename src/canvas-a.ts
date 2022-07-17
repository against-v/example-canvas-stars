const enum EColors {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
  Yellow = 'yellow',
  Black = 'black'
}

export const CanvasA = class {
  private element: HTMLCanvasElement;

  private context: CanvasRenderingContext2D;

  private drawStar(cx: number, cy: number, color: EColors) {
    const cornerCount = 5;
    const innerR = 30;
    const outerR = 80;
    let r = (Math.PI / 4) * 6;
    let x = cx;
    let y = cy;
    const step = Math.PI / cornerCount;

    this.context.beginPath();
    this.context.moveTo(cx, cy - outerR);
    for (let i = 0; i < cornerCount; i++) {
      x = cx + Math.cos(r) * outerR;
      y = cy + Math.sin(r) * outerR;
      this.context.lineTo(x, y);
      r += step;

      x = cx + Math.cos(r) * innerR;
      y = cy + Math.sin(r) * innerR;
      this.context.lineTo(x, y);
      r += step;
    }
    this.context.lineTo(cx, cy - outerR);
    this.context.closePath();
    this.context.fillStyle = color;
    this.context.fill();
  }

  private drawAll() {
    const stars = [
      {
        x: 90,
        y: 100,
        color: EColors.Red
      },
      {
        x: 510,
        y: 100,
        color: EColors.Blue
      },
      {
        x: 300,
        y: 300,
        color: EColors.Green
      },
      {
        x: 90,
        y: 510,
        color: EColors.Yellow
      },
      {
        x: 510,
        y: 510,
        color: EColors.Black
      }
    ];

    stars.forEach(item => this.drawStar(item.x, item.y, item.color));
  }

  public init(selector) {
    this.element = document.querySelector(selector);
    this.element.width = 600;
    this.element.height = 600;
    this.context = this.element.getContext('2d');
    this.drawAll();
  }
};
