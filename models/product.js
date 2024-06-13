const products=[];

module.exports=class Product{

    constructor(t){
        this.title=t;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){ //we are using static becoz we want to access method with class name.
        return products;
    }

}