function toHexadecimal (dec){
    let hexaConv = [];
    let residuo = 0;
    let hexaOutput = "";
    let hexaVal = "";
    while(dec>=0){
        //console.log("Decimal: " +dec);
        residuo = dec % 16;
        dec = Math.floor(dec / 16);
        switch(residuo){
            case 10:
                hexaVal = "A";
                break;
            case 11: 
                hexaVal = "B";    
                break;
            case 12: 
                hexaVal = "C";
                break;
            case 13: 
                hexaVal = "D";    
                break;
            case 14: 
                hexaVal = "E";
                break;
            case 15:
                hexaVal = "F"; 
                break;
        }
        if(residuo<10){
            hexaConv.unshift(residuo);
        }else{
            hexaConv.unshift(hexaVal);
        }
        
        //console.log("parte Entera: " + dec);
        //console.log("Residuo: " + residuo);
        //console.log("");
        
        if(dec === 0){
            hexaOutput = hexaConv.toString();
            for (let i = 0; i < hexaOutput.length; i++){
                hexaOutput = hexaOutput.replace(",","",);   
            }
            return hexaOutput;
        }
    }
}

module.exports = toHexadecimal;