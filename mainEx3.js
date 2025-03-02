let login = prompt("Nhập tên: ");
if(login==="ADMIN"){
    let pass = prompt("Nhập mật khẩu: ");
    if(pass==="TheMaster"){
        document.write(`Welcome`);
    }else if(pass===null){
        document.write(`Cancelled`);
    }else{
        document.write(`Wrong password`)
    }
}else if(login===null){
    document.write(`Cancelled`);
}else{
    document.write(`I Don't know you`)
}