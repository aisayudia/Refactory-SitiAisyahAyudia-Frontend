"use strict"

let arr = [{
    name: "Xiaomi Redmi 5A",
    category: "smartphone",
    price: 1199000
},{
    name: "Macbook Air",
    category: "laptop",
    price: 13775000
},{
    name: "Samsung Galaxy j7",
    category: "smartphone",
    price: "3549000"
},{
    name: "DELL XPS 13",
    category: "laptop",
    price: "26799000"
},{
    name: "LG V30 Plus",
    category: "smartphone",
    price: "10499000"
}];

arr.sort(function(a, b) {
    return a.price-b.price;
});