// let word = "Javascript is one of the most popular programming langauge";
// let split = word.split("").reverse().join("");

// console.log(split);

// function splitSentence(sentence){
//     return sentence.split("").reverse().join("");
// }
// console.log(splitSentence("Javascript is one of the most popular programming langauge"));

// function splitSentence(sentence){
//     return sentence.split("").reverse().join("");
// }

// console.log(splitSentence("Javascript is one of the most popular programming langauge"));

// let extractDomain = "Arham@shopify.com";
// let atDomain = extractDomain.indexOf("@");

// console.log(extractDomain.substring(atDomain + 1));

// function extractDomain(domain){
//     let atDomain = domain.indexOf("@");
//     return domain.substring(atDomain);
// }
// console.log(extractDomain("arham@abultabul.com"));


// let sentence = "Javascript is one of the most popular programming langauge";
// let wordExist = sentence.includes("one");

// console.log(wordExist);

// function wordExist(sentence, word){
//     let wordExist = sentence.includes(word);
//     if (wordExist){
//         return `${word} is present`;
//     } else {
//         `${word} is not found`
//     }
// }

// console.log(wordExist("Javascript is one of the most popular programming langauge", "one"));

// function শব্দটিআছেকিনা(বাক্য, শব্দ){
//     let শব্দটি = বাক্য.includes(শব্দ);
//     if (শব্দটি){
//         return `${শব্দ} শব্দটি এইখানে আছে`;
//     } else {
//         return `${শব্দ} শব্দটি এইখানে নেই`
//     }
// }

// console.log(শব্দটিআছেকিনা("Javascript এই one of the most popular programming langauge", "এই"));

// let wordLengt = "Javascript is one of the most popular programming langauge";
// let longestWord = wordLengt.split(" ").filter((word) => word.length < 3);

// console.log(longestWord);

// function wordLengt(sentence, n){
//    return sentence.split(" ").filter((word) => word.length === n);
// }
// console.log(wordLengt("Javascript is one of the most popular programming langauge", 2));

// let removeLetter = "Apple";
// let newWord = removeLetter.toLocaleLowerCase().split("a").join("");

// console.log(newWord);

// function removeLetter(word, letter){
//     return word.toLocaleLowerCase().split(letter).join("");
// }

// console.log(removeLetter("Apple", "a"));

// let fruits = ["apple", "banana", "orange", "berry", "strawberry", "orange", "banana"];
// // let removeDuplicate = fruits.filter((word, index) => fruits.indexOf(word) !== index);

// // console.log(removeDuplicate);

// function removeDuplicate(arr){
//     return [...new Set(arr)];
// }
// console.log(removeDuplicate(fruits));

