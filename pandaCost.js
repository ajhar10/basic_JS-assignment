//Problem-2:    Panda Cost
//Function Name:  pandaCost
function pandaCost(singara, samosa, jilapi) {
    let totalCost;
    //if quantity less than 0.
    if (singara < 0 || samosa < 0 || jilapi < 0) {
        return "Enter Valid Amount.";
    }
    //If input is not a number
    else if ((typeof singara != "number") || (typeof samosa != "number") || (typeof jilapi != "number")) {
        return "Enter Valid Input."
    }
    else {
        let totalSingaraCost = singara * 7;
        let totalSamosaCost = samosa * 10;
        let totalJilapiCost = jilapi * 15;
        //Total Cost 
        totalCost = totalSingaraCost + totalSamosaCost + totalJilapiCost;
    }
    return totalCost;
}

let result = pandaCost(1, -1, 1);
console.log(result);