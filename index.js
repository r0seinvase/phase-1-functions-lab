function distanceFromHqInBlocks(pickup){
    const headquarters = 42
    const distance = Math.abs(pickup - headquarters);
    return distance;
}

function distanceFromHqInFeet(pickup){
    distanceFromHqInBlocks(pickup);
    const blocks = distanceFromHqInBlocks(pickup) * 264;
    return blocks;
}
function distanceTravelledInFeet(start,destination) {
    const travel = (destination - start) * 264;
    return Math.abs(travel);
}
function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination)
    if (feet <= 400){
        return 0;
    } else if (feet > 400  && feet <=2000) {
        return (feet - 400) * .02;
    } else if (feet > 2500) {
        return "cannot travel that far";
    } else if (feet >2000) {
        return 25;
    }
}