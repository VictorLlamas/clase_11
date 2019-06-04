function toOctal(dec){
    let octalConv = [];
    let residuo = 0;
    let octalOutput = "";
    while(dec>=0){
        //console.log("Decimal: " +dec);
        residuo = dec % 8;
        dec = Math.floor(dec / 8);
        //console.log("parte Entera: " + dec);
        //console.log("Residuo: " + residuo);
        //console.log("");
        octalConv.unshift(residuo);
        if(dec === 0){
            octalOutput = octalConv.toString();
            for (let i = 0; i < octalOutput.length; i++){
                octalOutput = octalOutput.replace(",","",);   
            }
            return octalOutput;
        }
    }
}

module.exports = toOctal;