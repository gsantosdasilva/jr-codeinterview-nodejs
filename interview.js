values = [4, 3, 5, 7, 1, 4];

//result = [3*5*7*1*4, 4*5*7*1*4, ..]


function arrayOfProducts(values){

    const length = values.length;
    const result = new Array(length).fill(1);
    let leftProduct = 1;
    let rightProduct = 1;
    
    // mult
    for (let i = 0; i < length; i++) {
      result[i] *= leftProduct;
      leftProduct *= values[i]
    }
    
    // mult all products
    for (let i = length - 1; i >= 0; i--) {
      result[i] *= rightProduct;
      rightProduct *= values[i];
    }
    
    return result;
      

};

console.log(arrayOfProducts(values));