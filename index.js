var Book = /** @class */ (function () {
    function Book(title, author, isAvailable) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
    Book.prototype.Info = function () {
        console.log("".concat(this.title, " by ").concat(this.author, " \"just came in\""));
    };
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(name, memberId) {
        this.borrowedBooks = [];
        this.name = name;
        this.memberId = memberId;
    }
    Member.prototype.borrowBook = function (book) {
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            book.isAvailable = false;
            console.log("".concat(this.name, " borrowed \"").concat(book.title, "\""));
        }
        else {
            console.log("\"".concat(book.title, "\" is currently unavailable."));
        }
    };
    Member.prototype.returnBook = function (book) {
        var index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.isAvailable = true;
            console.log("".concat(this.name, " returned \"").concat(book.title, "\""));
        }
        else {
            console.log("".concat(this.name, " did not borrow \"").concat(book.title, "\"."));
        }
    };
    Member.prototype.listBorrowedBooks = function () {
        console.log("".concat(this.name, "'s borrowed books:"));
        if (this.borrowedBooks.length === 0) {
            console.log("No books borrowed.");
        }
        else {
            this.borrowedBooks.forEach(function (book) { return console.log("- ".concat(book.title)); });
        }
    };
    return Member;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Added \"".concat(book.title, "\" to the library."));
    };
    Library.prototype.addMember = function (member) {
        this.members.push(member);
        console.log("Registered member: ".concat(member.name));
    };
    return Library;
}());
var Task = /** @class */ (function () {
    function Task(title, description, completed) {
        this.title = title;
        this.description = description;
        this.completed = false;
    }
    Task.prototype.markCompleted = function () {
        this.completed = true;
    };
    return Task;
}());
