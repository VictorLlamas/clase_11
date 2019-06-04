function convert(num, base){
    let conv = [];
    let residuo = 0;
    let output = "";
    let val = "";
    while(num>=0){
        //console.log("Decimal: " +num);
        residuo = num % base;
        num = Math.floor(num / base);
        switch(residuo){
            case 10:
                val = "A";
                break;
            case 11: 
                val = "B";    
                break;
            case 12: 
                val = "C";
                break;
            case 13: 
                val = "D";    
                break;
            case 14: 
                val = "E";
                break;
            case 15:
                val = "F"; 
                break;
        }
        if(residuo<10){
            conv.unshift(residuo);
        }else{
            conv.unshift(val);
        }
        
        //console.log("parte Entera: " + num);
        //console.log("Residuo: " + residuo);
        //console.log("");
        
        if(num === 0){
            output = conv.toString();
            for (let i = 0; i < output.length; i++){
                output = output.replace(",","",);   
            }
            return output;
        }
    }
}

module.exports = convert;