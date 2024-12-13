let EatException = require('./eat-exception')

const Ingestion = class{
    products = [];
    constructor(meal_type, day_of_diet){
        this.meal_type = meal_type;
        this.day_of_diet = day_of_diet;
    }

    setProduct(product){
        this.products.push(product);
    }

    getFromFridge(productName){
        let product;
        for(product of this.products){
            if(product.name === productName){
                if(product.checkKcal()){
                    throw new EatException();
                }
                break;
            }
        }
        return product;
    }

    getProductInfo(productName){
        for(const product of this.products){
            if(product.name === productName){
                return {
                    name: productName,
                    kcal: product.kcal_per_portion
                }
            }
        }
        return {};
    }
}

module.exports.Ingestion = Ingestion;