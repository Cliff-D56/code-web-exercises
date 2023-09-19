const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let lang = users.filter((user)=>{
    return user.languages.length >=3;
})
console.log(lang);

let emails = users.map((user)=>{
    return `User: ${user.name}, email: ${user.email}`
})
console.log(emails);

// let yearsofEXP = users.reduce((total,user)=>{
//     return total += user.yearsOfExperience
// },0)

let sumofyears = users.map((user)=>user.yearsOfExperience)
console.log(sumofyears)
let yearsofEXP = sumofyears.reduce((total,years)=>total+years)
console.log(yearsofEXP/sumofyears.length);


let longemail = users.reduce((accumulator, currentValue)=>{
    if(currentValue.email.length > accumulator.length){
        accumulator = currentValue.email;
    }
    return accumulator;
},"")
console.log(longemail);

let names = users.reduce((accumulator,currentValue)=>{
   return `${accumulator + currentValue.name}, `
},"Your instructors are: ")
console.log(names)

let languagesum = users.map((user)=>{
    return user.languages
})
console.log(languagesum);
let alllang =languagesum.reduce((total,langs)=>{
    return `${total + langs},`
},"")
console.log(alllang)
// function Words(sentence){
//     let words = alllang.split(",")
//     console.log(words)
//     if (words.includes("")){
//         let hi = words.indexOf("")
//         words.splice(hi,1)
//         console.log(words)
//     }
//     const wordCountObject = words.reduce((wordCounts, word, index) => {
//         if (typeof wordCounts[word] === 'undefined') {
//             // if the word is not yet present in our object, set it's value to 1
//             wordCounts[word] = 1;
//         } else {
//             // otherwise increment the existing count
//             wordCounts[word] += 1;
//         }
//
//         console.log(wordCounts);
//         console.log(`currentValue: ${word}, index: ${index}`);
//         return wordCounts;
//     }, {}); // start with an empty object
//     return wordCountObject;
// }
// let hi = Words(alllang)
// let unique=hi.filter((uniques)=>{
//     return uniques
// })
// console.log(unique)

let unique = users.reduce((acc,user,index)=>{
   console.log(user.languages)
    for (let i = 0; i < user.languages.length; i++) {
        if (!acc.includes(user.languages[i])){
            acc.push(user.languages[i])
        }
        // console.log(acc)
    }
    return acc
},[])
   console.log(unique)
