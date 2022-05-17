function weightConverter(valNum) {
    var valNum = valNum * 2.2046;
    var n = valNum.toFixed(0);
        document.getElementById("outputPounds").innerHTML=n;
}

function weightConverterPounds(valNumber) {
    var valNumber = valNumber / 2.2046;
    var num = valNumber.toFixed(0);
        document.getElementById("outputKg").innerHTML=num;
}