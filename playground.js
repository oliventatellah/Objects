var numbers =[23,14,27,30,1,2,3,9,100,255,191];
var filteredNumbers= numbers.filter(function(num){
    return num <27;
});
console.log(filteredNumbers);

var filteredNumbers= numbers.filter(function(num){
    return num >27;
});
console.log(filteredNumbers);

var cities =["nairobi","cairo", "cape town","tunis","newyork","newark"];
const findCity= function (citiesData,query){
    return citiesData.filter (function(city){
        return city.toLowerCase().includes(query);
    });
};
console.log(findCity(cities, "n"));


const findCity1= function (citiesData,query){
    return citiesData.filter (function(city){
        return city.toLowerCase().includes(query);
    });
};
console.log(findCity1(cities, "c"));

const findCity2= function (citiesData,query){
    return citiesData.filter (function(city){
        return city.toLowerCase().includes(query);
    });
};
console.log(findCity2(cities, "q"));



