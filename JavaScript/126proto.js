// class type proto

class CBook{
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
    buy(){
        console.log(`${this.title} 책을 ${this.price} 원에 구매했다.`)
    }
}

const cbook1 = new CBook("심리학 개론", 45000);
cbook1.buy();

// CBook 을 CTextbook 에 확장하라
class CTextBook extends CBook{
    constructor(title, price, major){
        super(title, price);//super는 CBook을 의미한다.
        this.major = major;
    }
    buyTextBook(){
        console.log(`${this.title}, ${this.major}전공책을 ${this.price} 원에 구매했다.`)
    }
}
const cbook2 = new CTextBook("심리학 개론", 45000, "Psychology");
cbook2.buy();
cbook2.buyTextBook();