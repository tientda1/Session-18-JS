let math = +prompt("Nhập điểm môn toán");
let liter = +prompt("Nhập điểm môn văn");
let eng = +prompt("Nhập điểm môn anh");
let avgMark = (math+liter+eng)/3;

if(math>0 && liter>0 && eng>0){
    if(avgMark>=8.0){
        document.write(`Học lực giỏi`);
    }else if(6.5<avgMark && avgMark<7.9){
        document.write(`Học lực khá`);
    }else if(5.0<avgMark && avgMark<6.4){
        document.write(`Học lực trung bình`);
    }else{
        document.write(`Học lực yếu`);
    }
}

