let obj1 = {
    name: "sakshu",
    roll: 52,
    place: "kota"
}
let obj2 = {
    name: "sakshu",
    roll: 52,
    place: "kota"
}
    for (key in obj2) {
        if (obj1[key] !== obj2[key]) {
           console.log("false");
           break;
        }
    
        
            console.log("true");
    }