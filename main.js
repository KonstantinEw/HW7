// //1

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// fibonacci.forEach ((item) => {
//     console.log(item);
// })

function printFibon(item) {
        console.log(item);
    };

    fibonacci.forEach(printFibon);


                         //2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']


function userNumber(item,index) {
    console.log('Member '+(index+1)+':'+' '+item);
};





// let usersNumber = users.map((item, index) => {
//     return 'Member '+(index+1)+':'+' '+item;
// })

             //3

const number = [7, -4, 32, -90, 54, 32, -21]




// let positNum = numbers.filter(item => item >=0);

function getPositiveNum(num) {
    if (num>=0) {
        console.log(num)
    }
}

                    //4

let sum = fibonacci.reduce((a,b)=> a+b);



function sumFibon() {
    return fibonacci.reduce((a, b) => a + b);
}

// fibonacci.reduce(function(a,b){
//     return a+b;
// })

                     //5


    // const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

    // let getNumber = numbers.find(item =>  item%2 == 0);


    // function getNum() {
    //     return numbers.find(item => item % 2 == 0);
    // }

    // numbers.find(function(item){
    //     return item%2==0;
    // })
    
    //7


let str = 'This website is for losers LOL!';

let secondStr = str.replace(/[aeiou]/gi, '');

let switchStr = (str) => secondStr;


//8

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


// не работает

// function capitalizeFirstLetter(s) {
//     return s.charAt(0).toUpperCase() + s.slice(1);
// }

// function accum(str) {
//     str.split('')
//     .map((word, i) => capitalizeFirstLetter(Array(i + 2).join(word).toLowerCase()))
//     .join('-');
// }


// console.log(accum('abcd'));    
// console.log(accum('RqaEzty')); 
// console.log(accum('cwAt')); 


