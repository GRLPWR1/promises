// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, 
// начиная от from и заканчивая to.

// 1. Используя setInterval.

function printNumbers(from, to){
    let num = from;
    let timerId = setInterval(()=>{
        alert(num);
        if (num == to) {
            clearInterval(timerId);
        };
        num++;
    }, 1000);
}

// 2. Используя рекурсивный setTimeout.

function printNumbers(from, to){
    let num = from;
    let timerId = setTimeout(()=>{
        alert(num);
        num++;
        if (num == to+1) {
            clearTimeout(timerId);
        } else {
            printNumbers(num, to);
        };
    }, 1000);
}