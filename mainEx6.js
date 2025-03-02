let year = +prompt("Nhập 1 năm bất kỳ: ");
if(year>0){
    if((year%4===0 && year%100!==0)||year%400===0){
        document.write("Đây là năm nhuận");
    }else{
        document.write("Đây không phải năm nhuận")
    }
}
