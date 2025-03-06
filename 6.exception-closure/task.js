// Задание 1
function parseCount(productUnit) {
  const number = Number.parseFloat(productUnit);
  if(Number.isNaN(number)) {
    throw new Error("Невалидное значение");
  }
  return number;
}

function validateCount(productUnit) {
  try {
    return parseCount(productUnit);
  } catch (error) {
    return error;
  }
}

// Задание 2

class Triangle {
  constructor(a, b, c) {
    if(a+b < c || a+c < b || b+c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    let p = this.perimeter / 2;
    return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        console.log("Ошибка! Треугольник не существует");
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        console.log("Ошибка! Треугольник не существует");
        return "Ошибка! Треугольник не существует";
      }
    }
  }
}