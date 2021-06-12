function filter_array(array: object[]) {
    var length = array ? array.length : 0,
        result = [];

    for (var i = 0; i < length; i++) {
        if (array[i]) {
            result.push(array[i]);
        }
    }
    return result;
}

function findTransportationStops(arrayOfObjects: any ={}) {

    let filtered_array:any ={} = filter_array(arrayOfObjects),
        fromDestination:Array<string> = filtered_array.map((a:any) => a.from),
        toDestination:Array<string> = filtered_array.map((a:any) => a.to),

        journey:string[] = fromDestination.filter((x:string) => toDestination.indexOf(x) == -1),
        nextDest:string = journey[0],
        i:number = 0;

    while (i <= filtered_array.length) {

        if (fromDestination[i] == nextDest && journey.length <= filtered_array.length + 1) {
            nextDest = toDestination[i];
            journey.push(nextDest);
            i = 0;
            continue;
        }
        i++;
    }
    return journey;
}

console.log(findTransportationStops([
    { from: "Aleppo", to: "Montreal YUL" },
    { from: "Turkey", to: "Ibiza Airport" },
    { from: "Ibiza Airport", to: "Aleppo" },
    { from: "Beirut", to: "Turkey" }
]));

console.log(findTransportationStops([
    { from: "Kuala Lumpur Airport", to: "Kuantan" },
    { from: "Dubai Terminal 1", to: "Dubai Terminal 2" },
    { from: "Damascus Airport", to: "Dubai Terminal 1" },
    { from: "Dubai Terminal 2", to: "Kuala Lumpur Airport" },
    { from: "Hama", to: "Damascus Airport" }
]));