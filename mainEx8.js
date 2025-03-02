let a = +prompt("Nhập cạnh a");
let b = +prompt("Nhập cạnh b");
let c = +prompt("Nhập cạnh c");
if(a!== NaN && b!== NaN && c!== NaN){
    if (a+b>c || a+c>b || b+c >a){
        if(a===b && b===c && a===c){
            document.write(`Đây là tam giác đều`);
        }
        else if(a===b || b===c || a===c){
            document.write(`Đây là tam giác cân`);
        }
        else if((a*a)+(b*b)===(c*c) || ((a*a)+(c*c)===(b*b)) || ((c*c)+(b*b)===(a*a))){
            document.write(`Đây là tam giác vuông`);
        }else{
            document.write(`Đây là tam giác thường`);
        }
    }
}else{
    document.write(`Sai kiểu dữ liệu vui lòng nhập lại`);
}
