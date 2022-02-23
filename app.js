const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Automotive", start: 1999, end: 2007},
    {name: "Company Four", category: "Technology", start: 1989, end: 2010},
    {name: "Company Five", category: "Retail", start: 2009, end: 2014},
    {name: "Company Six", category: "Transportation", start: 1987, end: 2010},
    {name: "Company Seven", category: "Oil & Gas", start: 1986, end: 1996},
    {name: "Company Eight", category: "Retail", start: 2011, end: 2016},
    {name: "Company Nine", category: "Mass Media", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forLoop

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }




// forEach ARRAY METHOD EXAMPLES

// companies.forEach(function(company) {
//     console.log(company);
// })

// companies.forEach(function(company) {
//     console.log(company.name);
// })





// filter ARRAY METHOD EXAMPLES

// Get 21 and older

// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);


// filter retail companies

// const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies);


// get companies that started in the 1980s

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// console.log(eightiesCompanies);


// get companies that lasted at least 10 years

// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// console.log(lastedTenYears);





// map ARRAY METHOD EXAMPLES

// create array of company names

// const companyNames = companies.map(function(company) {
//     return company.name;
// });

// console.log(companyNames);


// get company start to end date

// const dateMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// console.log(dateMap)


// get company start to end date with arrow function

// const dateMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// console.log(dateMap)


// get square root of ages

// const agesSquare = ages.map(age => Math.sqrt(age));

// console.log(agesSquare)


// get age multiplied by 2

// const ageTimesTwo = ages.map(age => age * 2);

// console.log(ageTimesTwo)


// get age squared multiplied by 2

// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);

// console.log(ageMap);





// sort ARRAY METHOD EXAMPLES

// sort companies by start year

// const sortedCompanies = companies.sort(function(c1, c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// console.log(sortedCompanies);


// sort companies by start year with arrow function

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);


// sort ages (ascending order)

// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);


// sort ages (descending order)

// const sortAges = ages.sort((a, b) => b - a);

// console.log(sortAges);





// reduce ARRAY METHOD EXAMPLES

// add all ages together

// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// });

// console.log(ageSum);


// add all ages together with arrow function

// const ageSum = ages.reduce((total, age) => total + age);

// console.log(ageSum);


// get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);

// console.log(totalYears);


// get total years for all companies with arrow function

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// console.log(totalYears);




// COMBINE ARRAY METHODS

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0)

console.log(combined);