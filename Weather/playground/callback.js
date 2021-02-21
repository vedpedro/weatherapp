// setTimeout(() => {
//     console.log('acabaram os 2 segundos');
// }, 2000)


// const names = ['Vitor', 'Tino', 'rafael', 'joel'];
// const shortNames = names.filter((name) => {
//     return name.length <= 4;
// });

// console.log(shortNames);

// const geocode = (city, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
    
//         callback(data);
//     }, 2000)
// }

// geocode('Porto', (data) => {
//     console.log(data);
// });


// criar uma função chamada add que recebe os params corretos - done
// usar o set timeout de 2 segundos para simular delay - done
// chamem o callback após os 2 segundos

// const add = (a, b, callback) => {
//     setTimeout(() => {
//         callback(a + b);
//     }, 2000)
// }

// add(1, 4, (sum) => {
//     console.log(sum);
// })


// const str = ' Mundo ajshdgasjdg asjdgasd';

// console.log(str.trim());
// console.log(str.replaceAll('a', ' '));

// console.log(str.indexOf(','));

// console.log(str.substring(0, str.indexOf(',')));

// console.log(str.substring(0));

// console.log(str.slice(-5));
// console.log(str.substr(-5));


const concat = (a, b, callback) => {
    setTimeout(() => {
        callback(a + " " + b);
    }, 1000);
}

concat('Olá', 'Mundo', (result) => {
    console.log(result);
})

const bigger = (array, callback) => {
    setTimeout(() => {
        let maxIndex = 0;
        for(let i = 1; i < array.length; i++){
            maxIndex = array[i].length > array[maxIndex].length ? i : maxIndex;
        }
        callback(array[maxIndex]);
    }, 2000)
}

bigger(['Vitor', 'Tino', 'rafael', 'joel'], (name) => {
    console.log(name);
})