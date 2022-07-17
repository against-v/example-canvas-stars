export const CanvasB = class {
  private element: HTMLCanvasElement;

  private context: CanvasRenderingContext2D;

  public setColor(color: string) {
    const { width, height } = this.element.getBoundingClientRect();
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, width, height);
  }

  public init(selector) {
    this.element = document.querySelector(selector);
    this.element.width = 600;
    this.element.height = 50;
    this.context = this.element.getContext('2d');
  }
};
