// the new array elements should be multiple of 2
// const input = [1, 2, 3, 4, 5];

// newArr = [];
// for (let i = 0; i < input.length; i++){
//     newArr.push(input[i]*2);
// };
// console.log(newArr);

//Using map function
// const input = [1, 2, 3, 4, 5];

// function transform(i){
//     return i*2
// };

// let ans = input.map(transform);

// console.log(ans);

//Filter

//Normal Method
// const input = [1, 2, 3, 4, 5];
// const newArr = [];
// for (let i = 0; i < input.length; i++){
//     if ( input[i] % 2 == 0){
//         newArr.push(input[i]);
//     }
// }
// console.log(newArr);

//using Filter method
const input = [1, 2, 3, 4, 5];

const ans = input.filter(function (n){
    if ( n%2==0){
        return true;
    }
    else {
        return false;
    }
});
console.log(ans)

