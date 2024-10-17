// Design a ts app for library management system. 
// The system need to represent various entities book,authors and library members.

class Author{
    authorName: string;
    books: Book[];

    constructor(name: string){
        this.authorName=name;
        this.books=[];
    }

    addBook(book: Book): void{
        this.books.push(book);
    }
}

class Book{
    bookName : string;
    author : Author;
    isAvailable : boolean;

    constructor(name : string, author: Author){
        this.bookName=name;
        this.author=author;
        this.isAvailable=true;

        author.addBook(this);
    }
}

class LibraryMember {
    memberId: number;
    memberName: string;
    borrowedBooks: Book[];

    constructor(memberId: number, memberName: string) {
        this.memberId = memberId;
        this.memberName = memberName;
        this.borrowedBooks = []; 
    }

    borrowBook(book: Book): void {
        if (book.isAvailable) {
            book.isAvailable = false; 
            this.borrowedBooks.push(book); 
            console.log(`Book "${book.bookName}" is borrowed by ${this.memberName}.`);
        } else {
            console.log(`Book "${book.bookName}" is not available.`);
        }
    }

    returnBook(book: Book): void {
        //const index = this.borrowedBooks.indexOf(book);
        if (this.borrowedBooks.includes(book)) {
            book.isAvailable = true; 
            this.borrowedBooks.filter((bk)=>bk==book).pop(); 
            console.log(`Book "${book.bookName}" is returned by ${this.memberName}.`);
        } else {
            console.log(`Error: Book "${book.bookName}" was not borrowed by ${this.memberName}.`);
        }
    }
}

const author1 = new Author("George Orwell");
const book1 = new Book("1984", author1);
const book2 = new Book("Animal Farm", author1);

const member1 = new LibraryMember(1, "Alice");
const member2 = new LibraryMember(2, "Bob");


member1.borrowBook(book1); 
member2.borrowBook(book1); 
member2.borrowBook(book2); 


member1.returnBook(book1); 
member2.borrowBook(book1);