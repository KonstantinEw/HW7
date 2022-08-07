// //1

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// fibonacci.forEach ((item) => {
//     console.log(item);
// })

function printFibon() {
    fibonacci.forEach(function (item) {
        console.log(item);
    });
}

// //2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']


function userNumber() {
    let num = users.map((item, index) => {
    return 'Member '+(index+1)+':'+' '+item});
    console.log(num);
};



// let usersNumber = users.map((item, index) => {
//     return 'Member '+(index+1)+':'+' '+item;
// })

// //3

const number = [7, -4, 32, -90, 54, 32, -21]


// let positiveNum = numbers.filter(function(item){
//     return item >= 0;
// })

// let positNum = numbers.filter(item => item >=0);

function getPositiveNum() {
    return number.filter(item => item >= 0);
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





