//함수형 Proto type

function Book (title, price){
    this.title = title;
    this.price = price;
}

Book.prototype.buy = function(){
    console.log(`${this.title} 책을 ${this.price} 원에 구매했다.`)
}

const book1 = new Book("JS ProtoType의 이해", 30000);
book1.buy();

function TextBook(title, price, major){
    Book.call(this, title, price);
    this.major = major;
}
TextBook.prototype.buyTextBook = function(){
    console.log(`${this.title}, ${this.major}전공책을 ${this.price} 원에 구매했다.`)
}

Object.setPrototypeOf(TextBook.prototype, Book.prototype);
const book2 = new TextBook("JS ProtoType의 이해", 30000, "IT");
book2.buyTextBook();
book2.buy();
