const numbers = [1,2,3,4,5,6]


const juancasanova = {}

juancasanova.each = (array,callback) => {
    for(let i=0; i<array.length; i++) {
        callback(array[i], i);
    }
}

juancasanova.filter =(array, callback) => {
    const newArrar = [];
    for(let i=0; i<array.length; i++) {
        if(callback(array[i],i)===true) {
            newArrar.push(array[i]);
        }
    }
    return newArrar;
}

juancasanova.map = (array, callback) => {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

juancasanova.find = (array, bol) => {
    for(let i=0; i<array.length; i++) {
        if(bol) {
            return array[i];
        }
    }
}

juancasanova.findIndex = (array, vari) => {
    for(let i=0; i<array.length; i++) {
        if(array.length===vari) {
            return array[i];
        }
    }
}

const found = numbers.find(element => element < 10);
console.log(found);

const found1 = juancasanova.find(numbers,10);
console.log(found1);
