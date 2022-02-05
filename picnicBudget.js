//problem-3: picnicBudget
function picnicBudget(numberOfPerson) {
    let totalBudget;
    //If Number of Person is less than 0 OR type is not a number.
    if (numberOfPerson < 0 || typeof numberOfPerson != "number") {
        return "Enter Valid Input.";
    }
    //If Number of Person is less than 101
    else if (numberOfPerson <= 100) {
        //Total cost
        totalBudget = numberOfPerson * 5000;
    }
    //If Number of Person is greater than 100
    else if (100 < numberOfPerson) {
        //If Number of Person is less than 201 
        if (numberOfPerson <= 200) {
            let first100Person = 5000 * 100;
            let remainPerson = (numberOfPerson - 100) * 4000;
            //Total cost 
            totalBudget = first100Person + remainPerson;
        }
        //If Number of Person is greater than 200
        else {
            let first200Person = (5000 * 100) + (4000 * 100);
            let over200Person = (numberOfPerson - 200) * 3000;
            //total cost for over 200 person
            totalBudget = first200Person + over200Person;
        }
    }
    return totalBudget;
}

let result = picnicBudget(-1);
console.log(result);