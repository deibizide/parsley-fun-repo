//Exercice 1

function logType(arg) {
    var a = typeof arg;
    if (a === "number") {
        if (isNaN(arg)) {
            return "not a number!";
        }
        return "number!";
    } else if (typeof arg === "string") {
        return "string!";
    } else if (typeof arg === "boolean") {
        return "boolean!";
    } else if (typeof arg === "function") {
        return "function!";
    } else if (Array.isArray(arg)) {
        return "array!";
    } else if (typeof arg === "object") {
        return "object!";
    } else if (typeof arg === "null") {
        return "null!";
    } else if (typeof arg === "undefined") {
        return "undefined!";
    } else {
        return "I have no idea!";
    }
}
//Exercice 2

var a = {
    Berlin: 'Germany',
    Paris: 'France',
    'New York': 'USA'
};

var b = {}

for (var city in a) {
    var countries = a[city]
    b[countries] = city
}
console.log (b)

//Exercice 3
