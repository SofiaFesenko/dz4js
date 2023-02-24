let numb = Number(prompt("enter a number"))
if (numb > 23){
    if(numb < 50) {
        console.log("ok")
    }
    else {
        console.log("not ok")
    } 
}
else{
    console.log("not ok")
}



let lang = Number(prompt("на яку мову перекласти? 1-англійська, 2-німецька, 3-італійська"))
let word = Number(prompt("яке слово перекласти? 1-яблуко, 2-машина, 3-телефон, 4-ноутбук"))


if (lang == 1) {
    if (word == 1) {
        console.log('apple')
    }
    else if (word == 2) {
        console.log('car')
    }
    else if (word == 3) {
        console.log('phone')
    }
    else if (word == 4) {
        console.log('laptop')
    }
    else {
        console.log('error')
    }
}
else if (lang == 2) {
    if (word == 1) {
        console.log('Apfel')
    }
    else if (word == 2) {
        console.log('Auto')
    }
    else if (word == 3) {
        console.log('Telefon')
    }
    else if (word == 4) {
        console.log('Laptop')
    }
    else {
        console.log('error')
    }
}
else if (lang == 3) {
    if (word == 1) {
        console.log('mela')
    }
    else if (word == 2) {
        console.log('auto')
    }
    else if (word == 3) {
        console.log('telefono')
    }
    else if (word == 4) {
        console.log('laptop')
    }
    else {
        console.log('error')
    }
}
else {
    console.log('error')
}


// let numb = Number(prompt("write a number"));

// switch(numb) {
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three");
//         break;
//     case 4:
//         console.log("four");
//         break;
//     case 5:
//         console.log("five");
//         break;
//     default:
//         console.log("error");
//         break;
// }

// switch(numb) {
//     case 5:
//         for(let i = 1; i <= 5; i ++){
//             console.log('hi')
//         }
//         break
//     case 10:
//         for(let i = 1; i <= 10; i ++){
//             console.log('hi')
//         }
//         break
//     default:
//         console.log("hi")
//         break
// }
