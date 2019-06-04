function toBinary (dec){
    let binaryConv = [];
    let residuo = 0;
    let binaryOutput = "";
    while(dec>=0){
        //console.log("Decimal: " +dec);
        residuo = dec % 2;
        dec = Math.floor(dec / 2);
        //console.log("parte Entera: " + dec);
        //console.log("Residuo: " + residuo);
        //console.log("");
        binaryConv.unshift(residuo);
        if(dec === 0){
            binaryOutput = binaryConv.toString();
            for (let i = 0; i < binaryOutput.length; i++){
                binaryOutput = binaryOutput.replace(",","",);   
            }
            return binaryOutput;
        }
    }
}

module.exports = toBinary;