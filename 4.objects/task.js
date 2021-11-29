function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (!this.hasOwnProperty('marks')) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
    if (!this.hasOwnProperty('marks')) {
        this.marks = [...marks];
    } else {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if (!this.hasOwnProperty('marks')) {
        return 0;
    } else {
        return this.marks.reduce((a, b) => a + b) / this.marks.length;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}