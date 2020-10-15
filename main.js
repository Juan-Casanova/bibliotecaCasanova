const numbers = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]


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

// encuentra el elemento que cumple la condición del callback y lo devuelve
juancasanova.find = (array, element) => {
    for(let i=0; i<array.length; i++) {
        if(element === array[i]) {
            return array[i];
        }
    }
}

juancasanova.findIndex = (array, element) => {
    for(let i=0; i<array.length; i++) {
        if(element === array[i]) {
            return i;
        }
    }
}

juancasanova.contains = (array, element) => {
    for(let i=0; i<array.length; i++) {
        if(element === array[i]) {
            return true;
        }
    }
}

juancasanova.pluck = (array, element1) => {
    let newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        if(array[i].hasOwnProperty(element1)) {
            newArray.push(array[i].element1)
        }
    }
    return newArray;
}

juancasanova.without = (array, elemet) => {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if(array[i]!==elemet)
        {
            newArray.push(array[i]);
            console.log("entrepapu")
        }
    }
    return newArray;
}