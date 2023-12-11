import "./style.css";

/* abstract gör att du inte får skapa fler instanser av shape, då får man ärva. Abstract kan bara sättas framför "class" */
abstract class Shape {
  protected x: number;
  protected y: number;
  protected color: string;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  public abstract render(): void;
}

/* --------------------------- Cirklar -------------------------- */

// Shape är förälder för circle. Circle ärver nu från Shape. (protected), "Super ()" " anropar förälderns constructor i detta fall från Shape
class Circle extends Shape {
  radius: number;

  constructor(x: number, y: number, color: string, radius: number) {
    super(x, y, color);
    this.radius = radius;
  }

  /* Detta är metoder */
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter() {
    return Math.PI * this.radius * 2;
  }
  public render() {
    const div = document.createElement("div");
    div.className = "circle";
    div.style.left = this.x + "px";
    div.style.top = this.y + "px";
    div.style.background = this.color;
    div.style.width = this.radius * 2 + "px";
    div.style.height = this.radius * 2 + "px";
    document.body.append(div);
  }
}

const head = new Circle(0, 0, "red", 10);
const plate = new Circle(100, 100, "white", 12);

/* ----------------------------------- Rektanglar ---------------------------- */

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(
    x: number,
    y: number,
    color: string,
    width: number,
    height: number
  ) {
    super(x, y, color);
    this.width = width;
    this.height = height;
  }

  /* Detta är metoder */
  public calculateArea() {
    return this.height * this.width;
  }

  public calculatePerimeter() {
    return this.width * 2 + this.height * 2;
  }
  public render() {}
}

// Skapa nya object
const rect = new Rectangle(0, 0, "red", 10, 20); // Skapa en ny rektangel (ett nytt object)
const letter = new Rectangle(100, 100, "white", 12, 12); // Skapa en ny rektangel (ett  nytt object)

const rectAletterea = rect.calculateArea(); // rect är samma som this
const letterArea = letter.calculateArea(); // letter är samma som this

// ------------------------------------------------- //

// En loop som färg och storlek på cirklar.
for (let i = 0; i < 100; i++) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const radius = Math.random() * 100;
  const color = Math.random() > 0.5 ? "red" : "green"; // Ett värde mellan 0-1
  const circle = new Circle(x, y, color, radius);
  circle.render();
}
