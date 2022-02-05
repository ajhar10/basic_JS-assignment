//Problem-4: oddFriend
let friendsName = [];
function oddFriend(friendsName) {
    let oddNumberName;
    //If friendsName  is not an array.
    if (typeof friendsName != "object") {
        return "Enter Valid Input.";
    }
    else if (friendsName.length > 0) {
        //Check every friend name
        for (const name of friendsName) {
            //query odd number of length name
            if (name.length % 2 != 0) {
                oddNumberName = name;
                break;  //exit from for loop
            } else {
                continue;
            }
        }
    } else {
        return "not avialable";
    }
    return oddNumberName;
}
let friend = oddFriend(friendsName);
console.log(friend);