// const inputBox = document.querySelector(".input-box");
// const characterCount = document.querySelector(".character-count");
// const wordsCount = document.querySelector(".words-count");
// const twitterCount = document.querySelector(".twitter-count");
// const linkedinCount = document.querySelector(".linkedin-count");

// const invalidWords = ["payment", "@", "call", "private"];

// const wordsCounterBox = () => {

//     // invalidWords.forEach((word) => {
//     //     if(inputBox.value.includes(word)){
//     //         alert(`You can't use any ${word} here`);
//     //         inputBox.value = inputBox.value.replace(word, "f");
//     //     }
//     // });

//     invalidWords.forEach((word) => {
//         if(inputBox.value.includes(word)){
//             alert(`You can't use ${word} at here!`);
//             inputBox.value = inputBox.value.replace(word, "");
//         }
//     })

//     // characterCount
//     let characterInput = inputBox.value.length;
//     characterCount.innerHTML = characterInput;

//     // wordsCount
//     let wordsInput = inputBox.value.split(" ").length;
//     if(inputBox.value.length === 0){
//         wordsInput = 0;
//     }
//     wordsCount.innerHTML = wordsInput;

//     // twitter
//     let twitterLeft = 10 - characterInput;
//     twitterCount.innerHTML = twitterLeft;

//     if (twitterLeft < 0 ){
//         twitterCount.innerHTML = 0;
//     }

//     // linkedin
//     let linkedinLeft = 20 - characterInput;
//     linkedinCount.innerHTML = linkedinLeft;

//     if (linkedinLeft < 0){
//         linkedinCount.innerHTML = 0;
//     }

// }

// inputBox.addEventListener("input", wordsCounterBox);



// second try
const inputBox = document.querySelector(".input-box");
const characterCount = document.querySelector(".character-count");
const wordsCount = document.querySelector(".words-count");
const twitterCount = document.querySelector(".twitter-count");
const linkedinCount = document.querySelector(".linkedin-count");

const invalidWords = ["payment", "@", "call", "private"];

const wordsCounterBox = () => {

    invalidWords.forEach((word) => {
        if(inputBox.value.includes(word)){
            alert(`You can't use thid "${word}" word here!`)
            inputBox.value = inputBox.value.replace(word, "");
        }
    })

    // characterCount
    let characterInput = inputBox.value.length;
    characterCount.innerHTML = characterInput;

    // words
    let wordsInput = inputBox.value.split(" ").length;
    if(inputBox.value.length === 0){
        wordsInput = 0;
    }
    wordsCount.innerHTML = wordsInput;

    // twitterCount
    let twitterLeft = 10 - characterInput;
    twitterCount.innerHTML = twitterLeft;
    if(twitterLeft < 0){
        twitterCount.innerHTML = 0;
    }

    // linkedinCount
    let linkedinLeft = 20 - characterInput;
    linkedinCount.innerHTML = linkedinLeft;
    if(linkedinLeft < 0){
        linkedinCount.innerHTML = 0;
    }
} 

inputBox.addEventListener("input", wordsCounterBox);