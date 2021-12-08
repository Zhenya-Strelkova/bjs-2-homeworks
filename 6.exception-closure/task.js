//-----------------task №1-------------------------------
function parseCount(value) {
    const parseValue = Number.parseInt(value, 10);
    if (Number.isNaN(parseValue)) {
        throw new TypeError('Невалидное значение');
    } else {
        return parseValue;
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err;
    }
}

//-----------------task №2-------------------------------
class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }

}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },

            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}