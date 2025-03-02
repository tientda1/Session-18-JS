let exp = +prompt("Nhập số năm kinh nghiệm: ");
if(exp>=0){
    if(exp<=1){
        document.write(`Mới vào nghề`);
    }else if(exp>1 && exp<3){
        document.write(`Nhân viên có kinh nghiệm`);
    }else if(exp>4 && exp<6){
        document.write(`Chuyên viên`);
    }else{
        document.write(`Quản lý`);
    }
}