//(function() {
//     "use strict";
//
//     /**
//      * TODO:
//      * Create an object with firstName and lastName properties that are strings
//      * with your first and last name. Store this object in a variable named
//      * `person`.
//      *
//      * Example:
//      *  > console.log(person.firstName) // "Rick"
//      *  > console.log(person.lastName) // "Sanchez"
//      */
//     let person = {
//         firstname : "Rick",
//         lastname : "Sanchez",
//         sayHello : function (){
//             return `Hello ${this.firstname} ${this.lastname}!!`
//         }
//     }
//     /**
//      * TODO:
//      * Add a sayHello method to the person object that returns a greeting using
//      * the firstName and lastName properties.
//      * console.log the returned message to check your work
//      *
//      * Example
//      * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
//      */
//
//     /** TODO:
//      * HEB has an offer for the shoppers that buy products amounting to
//      * more than $200. If a shopper spends more than $200, they get a 12%
//      * discount. Write a JS program, using conditionals, that logs to the
//      * browser, how much Ryan, Cameron and George need to pay. We know that
//      * Cameron bought $180, Ryan $250 and George $320. Your program will have to
//      * display a line with the name of the person, the amount before the
//      * discount, the discount, if any, and the amount after the discount.
//      *
//      * Uncomment the lines below to create an array of objects where each object
//      * represents one shopper. Use a foreach loop to iterate through the array,
//      * and console.log the relevant messages for each person
//      */
//
//      var shoppers = [
//     //      12% if over $200, show amount before discount, the discount, and amount after discount
//          {name: 'Cameron', amount: 180},
//          {name: 'Ryan', amount: 250},
//          {name: 'George', amount: 320}
//      ];
//      shoppers.forEach(function (element){
//          element.discount = 0;
//          console.log("The shopper: "+element.name)
//          console.log(element.amount)
//          if (element.amount > 200){
//              element.discount = .12;
//              element.amount = element.amount - (element.amount * element.discount);
//          }
//          console.log(element.discount)
//          console.log(element.amount)
//      })
//     /** TODO:
//      * Create an array of objects that represent books and store it in a
//      * variable named `books`. Each object should have a title and an author
//      * property. The author property should be an object with properties
//      * `firstName` and `lastName`. Be creative and add at least 5 books to the
//      * array
//      *
//      * Example:
//      * > console.log(books[0].title) // "The Salmon of Doubt"
//      * > console.log(books[0].author.firstName) // "Douglas"
//      * > console.log(books[0].author.lastName) // "Adams"
//      */
// /**
//  * Bonus:
//  * - Create a function named `createBook` that accepts a title and author
//  *   name and returns a book object with the properties described
//  *   previously. Refactor your code that creates the books array to instead
//  *   use your function.
//  * - Create a function named `showBookInfo` that accepts a book object and
//  *   outputs the information described above. Refactor your loop to use your
//  *   `showBookInfo` function.
//  */
//     let books =
//         [
//         {title:"The Salmon of Doubt",author:{firstname: "Douglas",lastname: "Adams"},genre:"A"},
//         {title:"Throne of Glass",author:{firstname: "Sarah",lastname: "Mass"},genre:"A"},
//         {title:"Harry Potter",author:{firstname: "J.K.",lastname: "Rowling"},genre:"A"},
//         {title:"Hidden in Black Ice",author:{firstname: "Clifford",lastname: "Gardner"},genre:"A"},
//         {title:"Pale Blue Eye",author:{firstname: "Edgar",lastname: "Poe"},genre:"A"}
//         ]
//
//     /**
//      * TODO:
//      * Loop through the books array and output the following information about
//      * each book:
//      * - the book number (use the index of the book in the array)
//      * - the book title
//      * - author's full name (first name + last name)
//      *
//      * Example Console Output:
//      *
//      *      Book # 1
//      *      Title: The Salmon of Doubt
//      *      Author: Douglas Adams
//      *      ---
//      *      Book # 2
//      *      Title: Walkaway
//      *      Author: Cory Doctorow
//      *      ---
//      *      Book # 3
//      *      Title: A Brief History of Time
//      *      Author: Stephen Hawking
//      *      ---
//      *      ...
//      */
//     let a=1;
//     books.forEach(function(book){
//         console.log("Book #: "+a)
//         console.log("Title: "+book.title)
//         console.log(`Author: ${book.author.firstname} ${book.author.lastname}`)
//         console.log("---")
//         a++;
//     })
// let createbook=(title,firstname,lastname,genre)=>{
//         return {
//             title: title,//property of books
//             author:/** its own object */ {
//                 firstname: firstname,//property of author]
//                 lastname: lastname//property of author
//             },
//             genre: genre
//         }
//
// }
// books.push(createbook("RPH","jdfijij","njalgnuan","Hello"));
let hi ={}
let createhi=function (x,y,z){
    return{
        x:x,
        y:y,
        z:z,
    }
}
hi.prop1=createhi(1,2,3);
hi.prop2=createhi(2,4,6);
//})();