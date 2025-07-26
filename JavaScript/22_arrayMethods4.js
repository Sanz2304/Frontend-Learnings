// 24. ARRAY METHODS - HIGH ORDER METHOD-2:

// R. Filter Method
// S. Find Method

// In this JS file we covered upto TO Find Method. Find remaining methods in next array method js files

// T. Some Method
// U. FindIndex Method
// V. Reduce Method
// W. ForIn Method
// X. ForOf Method
// Y. Every Method

// FILTER METHOD: This method used to filter the array based on the condition. It will return a new array. It will not change the original array.

let carCompany = [
    
    {carBrand:"Benz", carModel:"S Class" , carPrice: 900000},
    {carBrand:"BMW", carModel:"540D Class", carPrice: 700000},
    {carBrand:"Ford", carModel:"Mustang", carPrice: 400000},

];

let CarDetails = carCompany.filter(val => val.carPrice>500000)
// console.log(carCompany);

/* 

[
  { carBrand: 'Benz', carModel: 'S Class', carPrice: 900000 },
  { carBrand: 'BMW', carModel: '540D Class', carPrice: 700000 },
  { carBrand: 'Ford', carModel: 'Mustang', carPrice: 400000 }
]

*/

// console.log(CarDetails);

/* 

[
  { carBrand: 'Benz', carModel: 'S Class', carPrice: 900000 },
  { carBrand: 'BMW', carModel: '540D Class', carPrice: 700000 }
]

*/

let CarDetails1 = carCompany.filter(val => val.carPrice>500000).fill({car: 'Punto', brand: "Fiat"})
// console.log(CarDetails1); // [ { car: 'Punto', brand: 'Fiat' }, { car: 'Punto', brand: 'Fiat' } ]

let CarDetails2 = carCompany.filter((val, index, array) => { // filter method has 3 parameters like forEach method.
//   console.log(index); // 0, 1, 2
//   console.log(array); // [ { carBrand: 'Benz', carModel: 'S Class', carPrice: 900000 }, { carBrand: 'BMW', carModel: '540D Class', carPrice: 700000 }, { carBrand: 'Ford', carModel: 'Mustang', carPrice: 400000 } ]
//   console.log(val); // { carBrand: 'Benz', carModel: 'S Class', carPrice: 900000 } { carBrand: 'BMW', carModel: '540D Class', carPrice: 700000 } { carBrand: 'Ford', carModel: 'Mustang', carPrice: 400000 }
//   return val.carPrice>500000
})


// FIND METHOD: This method used to find the first element of the array based on the condition. It will return the first element of the array. It will not change the original array.


let CarDetails3 = carCompany.find(val => val.carPrice>500000)
// console.log(CarDetails3); // { carBrand: 'Benz', carModel: 'S Class', carPrice: 900000 } // it will return the first element of the array that satisfies the condition.

let CarDetails4 = carCompany.find((val, index) => {
  console.log(index);
  return val.carPrice > 500000;
});
console.log(CarDetails4);  /* 0
{ carBrand: 'Benz', carModel: 'S Class', carPrice: 900000 } */