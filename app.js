// 96.Berilgan massiv ichidagi 
// birinchi unik elementni toping.
function firstUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
            return arr[i];
        }
    }
    return 
}
console.log(firstUnique([2, 3, 4, 2, 3, 5, 6, 5])); 
// Output: 4

// 97.Berilgan satr ichidagi barcha
//  raqamlarni ajratib, tartiblang.
function extractAndSortNumbers(str) {
    let numbers = [];
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            numbers.push(Number(str[i]));
        }
    }
    return numbers.sort((a, b) => a - b);
}

// Test case
console.log(extractAndSortNumbers("a3c2d4b1")); 
// Output: [1, 2, 3, 4]

// 98.Berilgan ob'ekt ichidagi barcha 
// qiymatlar son bo'lsa, ularni ikki barobar
//  oshiring.
function doubleNumericValues(obj) {
     let nuw_obj = {};
     for (let key in obj) {
         if (typeof obj[key] == 'number') {
             nuw_obj[key] = obj[key] * 2
             ;
         } else {
             nuw_obj[key] = doubleNumericValues(obj[key])
         }
     }
     return nuw_obj
 }
 
 // Test case
 const obj = {
     a: 1,
     b: {
         c: 2,
         d: {
             e: 3,
             f: 4
         }
     }
 };
 console.log(doubleNumericValues(obj)); 
 // Output: { a: 2, b: { c: 4, d: { e: 6, f: 8 } } }


//  99.Berilgan ob'ekt ichidagi barcha kalitlarni 
//  camelCase formatida qaytaring.
function toCamelCase(obj) {
   let nuw_obj = {};
   for(let key in obj){
       let nuwkey = key.replaceAll("-","_").replaceAll("_","").toLowerCase();
       nuw_obj[nuwkey] = obj[key]
       if(typeof obj[key] === "object"){
           nuw_obj[nuwkey] = toCamelCase(obj[key])
       }
   }
   return nuw_obj

 }
 
 // Test case
 const objk = {
     'first_key': 1,
     'second-key': {
         'third_key': 2
     }
 };
 console.log(toCamelCase(objk)); 
 // Output: { firstKey: 1, secondKey: { thirdKey: 2 } }


//  100.Berilgan ob'ekt ichidagi barcha stringlarni
//   berilgan funksiya yordamida o'zgartiring.
function transformStrings(obj, transformFunc) {
      let nuw_obj = {};
      for(const key in obj) {
        if(typeof obj[key] === "string"){
            nuw_obj[key] = transformFunc(obj[key])
        }else if( typeof obj[key] === "object"){
            nuw_obj[key] = transformStrings(obj[key], transformFunc)

        }else{
            nuw_obj[key] = obj[key]
        }
        
      }
      return nuw_obj
 }
 
 // Test case
 const objs = {
     a: "hello",
     b: {
         c: "world",
         d: {
             e: "test"
         }
     }
 };
 console.log(transformStrings(objs, str => str.toUpperCase())); 
 // Output: { a: "HELLO", b: { c: "WORLD", d: { e: "TEST" } } }

// 101.Berilgan ob'ekt ichidagi barcha 
// kalitlarni sorted tartibda qaytaring.
function sortKeys(obj) {
    let keys = Object.keys(obj).sort();
    let nuw_obj = {};
    for (let i = 0; i < keys.length; i++) {
        nuw_obj[keys[i]] = obj[keys[i]];
    }
    return nuw_obj
}

// Test case
const objm = {
    b: 2,
    a: 1,
    c: 3
};
console.log(sortKeys(objm)); 
// Output: { a: 1, b: 2, c: 3 }

// 102.Berilgan massiv ichidagi elementlarni 
// qatorga birlashtiring, faqat 
// takrorlanmaydigan elementlarni saqlang.
function uniqueConcat(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index).join('');
}

// Test case
console.log(uniqueConcat(['a', 'b', 'c', 'a', 'b', 'd'])); 
// Output: "abcd"


// 103.Berilgan massiv ichidagi o'xshash elementlarni toping.
function findDuplicates(arr) {
     let nuw_arr = arr.filter((item, index) => arr.indexOf(item) !== index);
     return nuw_arr
 }
 
 // Test case
 console.log(findDuplicates([1, 2, 3, 1, 2, 4])); 
 // Output: [1, 2]