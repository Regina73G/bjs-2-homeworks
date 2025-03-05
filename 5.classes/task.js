// Задание 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(number) {
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задание 2

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
    for (const book of this.books) {
      if (book.hasOwnProperty(type) && book[type] === value) {
        return book;
      }
    }

    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const [removed] = this.books.splice(i, 1);
        return removed;
      }
    }

    return null;
  }
}

// Тестовый сценарий

const LibraryFour = new Library("Библиотека №4");

const theWitcher = new FantasticBook("Анджей Сапковский", "Ведьмак. Дорога без возврата", 2024, 352);
LibraryFour.addBook(theWitcher);
LibraryFour.addBook(new FantasticBook("Джоан Роулинг", "Гарри Поттер и Тайная комната",2013, 480));
LibraryFour.addBook(new DetectiveBook("Артур Дойл", "Приключения Шерлока Холмса", 2025, 512));
LibraryFour.addBook(new Magazine("Журнал Наука и Жизнь", 2025, 142));

console.log(LibraryFour.findBookBy("releaseDate", 1919)); // Поиск. Книги нет
const theMoonAndThePenny = new NovelBook("Моэм Сомерсет","Луна и грош", 1919, 288);
LibraryFour.addBook(theMoonAndThePenny);
console.log(LibraryFour.findBookBy("releaseDate", 1919)); // Поиск. Ок

console.log("Количество книг до выдачи: " + LibraryFour.books.length);
LibraryFour.giveBookByName("Ведьмак. Дорога без возврата"); // Выдача
console.log("Количество книг после выдачи: " + LibraryFour.books.length);
console.log(LibraryFour.findBookBy("name", "Ведьмак. Дорога без возврата")); // Поиск выданной книги. Книги нет

theWitcher.state = 15; // Повредила книгу
console.log(theWitcher.state);

theWitcher.fix();
console.log(theWitcher.state); // 22.5
LibraryFour.addBook(theWitcher); // Снова пытаюсь добавить
console.log(LibraryFour.findBookBy("name", "Ведьмак. Дорога без возврата"));
theWitcher.fix();
console.log(theWitcher.state); //  33.75
LibraryFour.addBook(theWitcher); // Снова пытаюсь добавить
console.log(LibraryFour.findBookBy("name", "Ведьмак. Дорога без возврата")); // Добавила 
console.log(LibraryFour);

// Задание 3

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subjectName) {
    if (mark < 2 || mark > 5) {
      return;
    }

    if (!this.marks.hasOwnProperty(subjectName)) {
      this.marks[subjectName] = [];
    }

    this.marks[subjectName].push(mark);
  }

  getAverageBySubject(subjectName) {
    if (!this.marks.hasOwnProperty(subjectName) || this.marks[subjectName].length === 0) {
      return 0;
    }

    return this.marks[subjectName].reduce((accumulator, currentValue) => accumulator + currentValue, 0) / this.marks[subjectName].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if(subjects.length === 0) {
      return 0;
    }

    const sum = [];
    for (let i = 0; i < subjects.length; i++) {
      sum.push(this.getAverageBySubject(subjects[i]));
    }

    return sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / sum.length;
  }
}