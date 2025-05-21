class Book {
    title: string;
    author: string;
    isAvailable: boolean;


    constructor(title: string, author: string, isAvailable: boolean) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
    Info(): void {
        console.log(`${this.title} by ${this.author} "just came in"`);
    }
}


class Member {
    name: string;
    memberId: number;
    borrowedBooks: Book[] = [];

    constructor(name: string, memberId: number) {
        this.name = name;
        this.memberId = memberId
    }

    borrowBook(book: Book): void {
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            book.isAvailable = false;
            console.log(`${this.name} borrowed "${book.title}"`);
        } else {
            console.log(`"${book.title}" is currently unavailable.`);
        }
    }

    returnBook(book: Book): void {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.isAvailable = true;
            console.log(`${this.name} returned "${book.title}"`);
        } else {
            console.log(`${this.name} did not borrow "${book.title}".`);
        }
    }

    listBorrowedBooks(): void {
        console.log(`${this.name}'s borrowed books:`);
        if (this.borrowedBooks.length === 0) {
            console.log("No books borrowed.");
        } else {
            this.borrowedBooks.forEach(book => console.log(`- ${book.title}`));
        }
    }
}


class Library {
    private books: Book[] = [];
    private members: Member[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Added "${book.title}" to the library.`);
    }

    addMember(member: Member): void {
        this.members.push(member);
        console.log(`Registered member: ${member.name}`);
    }
}




class Task {
    title: string;
    description: string;
    completed: boolean;


    constructor(title: string, description: string, completed: boolean) {
        this.title = title;
        this.description = description;
        this.completed = false;
    }
    markCompleted(): void {
        this.completed = true;
    }
}




