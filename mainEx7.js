let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
let c = prompt("Nhập các phép tính (+,-,*,/)");
let sum = a+b;
let minus = a-b;
let multi = a*b;
let division = a/b;

if(c === "+" || c === "-" || c === "*" || c=== "/"){
    if(c ==="+"){
        document.write(`Kết quả phép tính là: ${a} + ${b} = ${sum}`)
    }
    if(c ==="-"){
        document.write(`Kết quả phép tính là: ${a} - ${b} = ${minus}`)
    }
    if(c ==="*"){
        document.write(`Kết quả phép tính là: ${a} * ${b} = ${multi}`)
    }
    if(c ==="/"){
        document.write(`Kết quả phép tính là: ${a} / ${b} = ${division}`)
    }
}else{
    document.write(`Dấu không hợp lệ`);
}
