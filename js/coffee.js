// TODO: Reference your past code or write fresh code to make a book object. This object should have properties to store the book's title, the book's author, and (optionally) the genre or another property that would make sense for the object to have.
let books={
        title: "Hidden In Black Ice",
        author: "Dark",
        genre: "Drama"
}
let createbook = function (title,author,genre){
        return{
                title:title,
                author:author,
                genre:genre,
        }
}
console.log(books);

//TODO: Uncomment the following variable - fill in the string interpolation expressions to access the properties of your book to finish the following card.

let myCard = `<div class="card">
    <div>Book Title: ${books.title}.</div>
    <div>Book Author: ${books.author}.</div>
    <div>Book Genre: ${books.genre}.</div>
</div>`
//TODO: Using JavaScript, add your finished HTML card to the DOM so our users will be able to see it on page load. We want target the innerHTML of #container.
let cardhead = document.getElementById("container")
console.log(cardhead);
let header = ()=>{cardhead.innerHTML=myCard};
header();
//TODO: From prior work or fresh in this file, let's make an array of book objects (at least three).

books.push(createbook("HIBC","Clifford Gardner","Romance"));
books.forEach(function (book,i){

})
//TODO: Refactor your above code - our HTML needs to build three HTML cards with the information from the objects. Hint: We would want to iterate through the array and add each fresh bit of HTML into the variable of allCards set up below.

let allCards = ""; //bucket to store the HTML you build in the loop