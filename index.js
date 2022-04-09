
// Code your solution here
const drivers = [`Bobby`, `Sammy`, `Sally`, `Annette`, `Sarah`, `Bobby`]
function findMatching(drivers, string){
    return drivers.filter(elem => elem.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string){
    const findMatch = drivers.filter(function(drivers){
        if(string === drivers.slice(0,2)){
            return(drivers);
        }
        else{
            return drivers === string
        }
    })
    return findMatch
}

function matchName(drivers, string){

    const objetName = drivers.filter(function(string){
        for(let object in drivers){
            if(string === drivers[0]){
                return drivers
            }
            else{
                return string === drivers[4]
            }
        }
    });
    return objetName
}
matchName(drivers, `Bobby`);


