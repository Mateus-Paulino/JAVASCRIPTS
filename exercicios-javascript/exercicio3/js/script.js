function checkSpeed (speed) {
    const speedLimit = 60;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint)
        console.log(speed)
    else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint - 0.1);
        if (points > 5) 
            console.log("Licença suspensa")
        else 
            console.log("Points: ", points)
    }
}
checkSpeed(91);