// Design a ts app for library management system. 
// The system need to represent various entities book,authors and library members.
var Author = /** @class */ (function () {
    function Author(name) {
        this.authorName = name;
        this.books = [];
    }
    Author.prototype.addBook = function (book) {
        this.books.push(book);
    };
    return Author;
}());
var Book = /** @class */ (function () {
    function Book(name, author) {
        this.bookName = name;
        this.author = author;
        this.isAvailable = true;
        author.addBook(this);
    }
    return Book;
}());
var LibraryMember = /** @class */ (function () {
    function LibraryMember(memberId, memberName) {
        this.memberId = memberId;
        this.memberName = memberName;
        this.borrowedBooks = [];
    }
    LibraryMember.prototype.borrowBook = function (book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log("Book \"".concat(book.bookName, "\" is borrowed by ").concat(this.memberName, "."));
        }
        else {
            console.log("Book \"".concat(book.bookName, "\" is not available."));
        }
    };
    LibraryMember.prototype.returnBook = function (book) {
        //const index = this.borrowedBooks.indexOf(book);
        if (this.borrowedBooks.includes(book)) {
            book.isAvailable = true;
            this.borrowedBooks.filter(function (bk) { return bk == book; }).pop();
            console.log("Book \"".concat(book.bookName, "\" is returned by ").concat(this.memberName, "."));
        }
        else {
            console.log("Error: Book \"".concat(book.bookName, "\" was not borrowed by ").concat(this.memberName, "."));
        }
    };
    return LibraryMember;
}());
var author1 = new Author("George Orwell");
var book1 = new Book("1984", author1);
var book2 = new Book("Animal Farm", author1);
var member1 = new LibraryMember(1, "Alice");
var member2 = new LibraryMember(2, "Bob");
member1.borrowBook(book1);
member2.borrowBook(book1);
member2.borrowBook(book2);
member1.returnBook(book1);
member2.borrowBook(book1);
