//Problem-1:Ana To Vori
//Function Name:  anaToVori

function anaToVori(ana) {
    let totalVori;
    if (ana < 0 || typeof ana != "number") {
        return "Enter Valid Input";
    } else {
        totalVori = ana / 16;
    }
    return totalVori;
}
let result = anaToVori(.5);
console.log(result);