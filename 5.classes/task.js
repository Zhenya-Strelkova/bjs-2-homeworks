class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const book = this.books.find((book) => book[type] === value);
        return book === undefined ? null : book;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex((book) => book.name === bookName);
        return bookIndex === -1 ? null : this.books.splice(bookIndex, 1)[0];
    }
}
//--------------------------------------------------------

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    setSubject(subjectName) {
        if (!this.hasOwnProperty('subjectsGrades')) this.subjectsGrades = {};
        if (!this.subjectsGrades.hasOwnProperty(subjectName)) this.subjectsGrades[subjectName] = [];
    }

    addMark(mark, subjectName) {
        if (mark > 5 || mark < 1) {
            return `Ошибка, оценка должна быть числом от 1 до 5`;
        }else if (!this.subjectsGrades?.[subjectName]) {
            this.setSubject(subjectName);
        }
        this.subjectsGrades[subjectName].push(mark);
    }

    #getSumBySubject(subjectName) {
        return this.subjectsGrades[subjectName].reduce((a, b) => a + b);
    }

    getAverageBySubject(subjectName) {
        if (this.subjectsGrades?.[subjectName]) {
            return this.#getSumBySubject(subjectName) / this.subjectsGrades[subjectName].length;
        } else {
            return `Оценок по предмету ${subjectName} нет`;
        }
    }

    getAverage() {
        let sumLength = 0;
        let sum = 0;
        if (!this.hasOwnProperty('subjectsGrades')) {
            return 0;
        } else {
            for (let subj in this.subjectsGrades) {
                sum += this.#getSumBySubject(subj);
                sumLength += this.subjectsGrades[subj].length;
            }
            return sumLength === 0 ? 0 : sum / sumLength;
        }

    }

    exclude(reason) {
        delete this.subjectsGrades;
        this.excluded = reason;
    }
}